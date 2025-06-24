/**
 * 性能监控和对比工具
 * 
 * 功能：
 * 1. 构建时间监控
 * 2. 包大小对比
 * 3. 加载性能测试
 * 4. 历史数据追踪
 * 5. 性能回归检测
 * 
 * 参考：Lighthouse CI, Bundle Analyzer, Speed Measure Plugin
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export class PerformanceMonitor {
  constructor() {
    this.dataPath = path.join(__dirname, '../performance-data')
    this.currentBuild = {
      timestamp: Date.now(),
      date: new Date().toISOString(),
      bundles: [],
      metrics: {},
      buildTime: 0
    }
    
    this.ensureDataDirectory()
  }

  /**
   * 确保数据目录存在
   */
  ensureDataDirectory() {
    if (!fs.existsSync(this.dataPath)) {
      fs.mkdirSync(this.dataPath, { recursive: true })
    }
  }

  /**
   * 开始监控构建
   */
  startBuildMonitoring() {
    this.buildStartTime = Date.now()
    console.log(chalk.blue('⏱️  开始监控构建性能...'))
  }

  /**
   * 结束构建监控
   */
  endBuildMonitoring() {
    this.currentBuild.buildTime = Date.now() - this.buildStartTime
    console.log(chalk.green(`✅ 构建完成，耗时: ${this.currentBuild.buildTime}ms`))
  }

  /**
   * 收集构建数据
   */
  async collectBuildData(distPath = path.join(__dirname, '../dist')) {
    const jsPath = path.join(distPath, 'js')
    
    if (!fs.existsSync(jsPath)) {
      console.warn('构建目录不存在，跳过数据收集')
      return
    }

    const files = fs.readdirSync(jsPath)
    const jsFiles = files.filter(f => f.endsWith('.js'))

    for (const file of jsFiles) {
      const filePath = path.join(jsPath, file)
      const stats = fs.statSync(filePath)
      
      this.currentBuild.bundles.push({
        name: file,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024),
        type: this.getBundleType(file),
        isLegacy: file.includes('legacy')
      })
    }

    // 计算关键指标
    this.calculateMetrics()
  }

  /**
   * 计算性能指标
   */
  calculateMetrics() {
    const bundles = this.currentBuild.bundles
    const modernBundles = bundles.filter(b => !b.isLegacy)
    const vendorBundles = bundles.filter(b => b.name.startsWith('vendor-'))
    
    this.currentBuild.metrics = {
      totalBundles: bundles.length,
      modernBundles: modernBundles.length,
      legacyBundles: bundles.length - modernBundles.length,
      
      totalSize: bundles.reduce((sum, b) => sum + b.size, 0),
      modernSize: modernBundles.reduce((sum, b) => sum + b.size, 0),
      vendorSize: vendorBundles.reduce((sum, b) => sum + b.size, 0),
      
      averageBundleSize: Math.round(bundles.reduce((sum, b) => sum + b.size, 0) / bundles.length),
      largestBundle: bundles.reduce((max, b) => b.size > max.size ? b : max, bundles[0]),
      
      vendorRatio: (vendorBundles.reduce((sum, b) => sum + b.size, 0) / 
                   bundles.reduce((sum, b) => sum + b.size, 0) * 100).toFixed(1),
      
      compressionRatio: this.estimateCompressionRatio(),
      
      // 性能评分 (0-100)
      performanceScore: this.calculatePerformanceScore()
    }
  }

  /**
   * 估算压缩比
   */
  estimateCompressionRatio() {
    // 基于经验值估算gzip压缩比
    return 0.3 // 通常JS文件gzip后约为原大小的30%
  }

  /**
   * 计算性能评分
   */
  calculatePerformanceScore() {
    const metrics = this.currentBuild.metrics
    let score = 100
    
    // 总大小惩罚 (超过5MB开始扣分)
    const totalSizeMB = metrics.totalSize / (1024 * 1024)
    if (totalSizeMB > 5) {
      score -= Math.min(30, (totalSizeMB - 5) * 5)
    }
    
    // 最大包大小惩罚 (超过500KB开始扣分)
    const largestSizeKB = metrics.largestBundle?.sizeKB || 0
    if (largestSizeKB > 500) {
      score -= Math.min(20, (largestSizeKB - 500) / 50)
    }
    
    // 包数量惩罚 (超过50个包开始扣分)
    if (metrics.totalBundles > 50) {
      score -= Math.min(15, (metrics.totalBundles - 50) * 0.5)
    }
    
    // Vendor比例惩罚 (超过80%开始扣分)
    const vendorRatio = parseFloat(metrics.vendorRatio)
    if (vendorRatio > 80) {
      score -= Math.min(10, (vendorRatio - 80) * 0.5)
    }
    
    return Math.max(0, Math.round(score))
  }

  /**
   * 保存当前构建数据
   */
  async saveBuildData() {
    const filename = `build-${this.currentBuild.timestamp}.json`
    const filepath = path.join(this.dataPath, filename)
    
    fs.writeFileSync(filepath, JSON.stringify(this.currentBuild, null, 2))
    
    // 更新最新数据
    const latestPath = path.join(this.dataPath, 'latest.json')
    fs.writeFileSync(latestPath, JSON.stringify(this.currentBuild, null, 2))
    
    console.log(chalk.green(`💾 性能数据已保存: ${filename}`))
  }

  /**
   * 加载历史数据
   */
  loadHistoryData(limit = 10) {
    const files = fs.readdirSync(this.dataPath)
    const buildFiles = files
      .filter(f => f.startsWith('build-') && f.endsWith('.json'))
      .sort((a, b) => {
        const timeA = parseInt(a.replace('build-', '').replace('.json', ''))
        const timeB = parseInt(b.replace('build-', '').replace('.json', ''))
        return timeB - timeA // 降序
      })
      .slice(0, limit)

    return buildFiles.map(file => {
      const filepath = path.join(this.dataPath, file)
      return JSON.parse(fs.readFileSync(filepath, 'utf8'))
    })
  }

  /**
   * 对比分析
   */
  compareWithPrevious() {
    const history = this.loadHistoryData(2)
    if (history.length < 2) {
      console.log(chalk.yellow('📊 历史数据不足，无法进行对比'))
      return null
    }

    const current = history[0]
    const previous = history[1]
    
    const comparison = {
      buildTime: {
        current: current.buildTime,
        previous: previous.buildTime,
        change: current.buildTime - previous.buildTime,
        changePercent: ((current.buildTime - previous.buildTime) / previous.buildTime * 100).toFixed(1)
      },
      totalSize: {
        current: current.metrics.totalSize,
        previous: previous.metrics.totalSize,
        change: current.metrics.totalSize - previous.metrics.totalSize,
        changePercent: ((current.metrics.totalSize - previous.metrics.totalSize) / previous.metrics.totalSize * 100).toFixed(1)
      },
      bundleCount: {
        current: current.metrics.totalBundles,
        previous: previous.metrics.totalBundles,
        change: current.metrics.totalBundles - previous.metrics.totalBundles
      },
      performanceScore: {
        current: current.metrics.performanceScore,
        previous: previous.metrics.performanceScore,
        change: current.metrics.performanceScore - previous.metrics.performanceScore
      }
    }

    return comparison
  }

  /**
   * 打印对比报告
   */
  printComparisonReport() {
    const comparison = this.compareWithPrevious()
    if (!comparison) return

    console.log(chalk.blue('\n📊 性能对比报告'))
    console.log('=' * 50)

    // 构建时间对比
    const buildTimeColor = comparison.buildTime.change > 0 ? 'red' : 'green'
    console.log(`构建时间: ${comparison.buildTime.current}ms (${chalk[buildTimeColor](comparison.buildTime.changePercent + '%')})`)

    // 包大小对比
    const sizeColor = comparison.totalSize.change > 0 ? 'red' : 'green'
    const sizeMB = (comparison.totalSize.current / (1024 * 1024)).toFixed(2)
    console.log(`总大小: ${sizeMB}MB (${chalk[sizeColor](comparison.totalSize.changePercent + '%')})`)

    // 包数量对比
    const countColor = comparison.bundleCount.change > 0 ? 'yellow' : 'green'
    console.log(`包数量: ${comparison.bundleCount.current} (${chalk[countColor](comparison.bundleCount.change >= 0 ? '+' : '')}${comparison.bundleCount.change})`)

    // 性能评分对比
    const scoreColor = comparison.performanceScore.change >= 0 ? 'green' : 'red'
    console.log(`性能评分: ${comparison.performanceScore.current}/100 (${chalk[scoreColor](comparison.performanceScore.change >= 0 ? '+' : '')}${comparison.performanceScore.change})`)

    // 回归检测
    this.detectRegression(comparison)
  }

  /**
   * 检测性能回归
   */
  detectRegression(comparison) {
    const regressions = []

    if (comparison.buildTime.change > 5000) { // 构建时间增加超过5秒
      regressions.push('构建时间显著增加')
    }

    if (parseFloat(comparison.totalSize.changePercent) > 10) { // 包大小增加超过10%
      regressions.push('包大小显著增加')
    }

    if (comparison.performanceScore.change < -10) { // 性能评分下降超过10分
      regressions.push('性能评分显著下降')
    }

    if (regressions.length > 0) {
      console.log(chalk.red('\n⚠️  检测到性能回归:'))
      regressions.forEach(regression => {
        console.log(chalk.red(`   • ${regression}`))
      })
    } else {
      console.log(chalk.green('\n✅ 未检测到性能回归'))
    }
  }

  /**
   * 获取包类型
   */
  getBundleType(filename) {
    if (filename.startsWith('vendor-')) return 'vendor'
    if (filename.includes('xh-h5') || filename.includes('pink-ribbon')) return 'page'
    if (filename.startsWith('index-')) return 'page'
    if (filename.includes('polyfills')) return 'polyfill'
    return 'chunk'
  }

  /**
   * 生成性能趋势报告
   */
  generateTrendReport() {
    const history = this.loadHistoryData(10)
    if (history.length < 3) {
      console.log(chalk.yellow('历史数据不足，无法生成趋势报告'))
      return
    }

    console.log(chalk.blue('\n📈 性能趋势报告 (最近10次构建)'))
    console.log('=' * 60)

    history.reverse().forEach((build, index) => {
      const date = new Date(build.timestamp).toLocaleDateString()
      const sizeMB = (build.metrics.totalSize / (1024 * 1024)).toFixed(2)
      const score = build.metrics.performanceScore
      const scoreColor = score >= 80 ? 'green' : score >= 60 ? 'yellow' : 'red'
      
      console.log(`${index + 1}. ${date} - ${sizeMB}MB - 评分: ${chalk[scoreColor](score)}/100`)
    })
  }
}

// 如果直接运行此文件
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new PerformanceMonitor()
  monitor.collectBuildData().then(() => {
    monitor.saveBuildData()
    monitor.printComparisonReport()
    monitor.generateTrendReport()
  })
}
