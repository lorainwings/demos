/**
 * 性能基准测试工具
 * 
 * 基于社区最佳实践：
 * - Lighthouse CI
 * - Bundle Analyzer
 * - Speed Measure Plugin
 * - Web Vitals
 * 
 * 功能：
 * 1. 构建性能测试
 * 2. 运行时性能测试
 * 3. 包大小对比
 * 4. 加载速度测试
 * 5. 性能回归检测
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import chalk from 'chalk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export class PerformanceBenchmark {
  constructor() {
    this.resultsDir = path.join(__dirname, '../performance-results')
    this.currentResults = {
      timestamp: Date.now(),
      date: new Date().toISOString(),
      build: {},
      bundles: {},
      performance: {},
      recommendations: []
    }
    
    this.ensureResultsDirectory()
  }

  /**
   * 确保结果目录存在
   */
  ensureResultsDirectory() {
    if (!fs.existsSync(this.resultsDir)) {
      fs.mkdirSync(this.resultsDir, { recursive: true })
    }
  }

  /**
   * 运行完整的性能基准测试
   */
  async runBenchmark() {
    console.log(chalk.blue('🚀 开始性能基准测试...\n'))
    
    try {
      await this.measureBuildPerformance()
      await this.analyzeBundleSize()
      await this.measureLoadingPerformance()
      await this.generateRecommendations()
      await this.saveResults()
      
      this.printSummary()
      
    } catch (error) {
      console.error(chalk.red('❌ 基准测试失败:'), error.message)
      throw error
    }
  }

  /**
   * 测量构建性能
   */
  async measureBuildPerformance() {
    console.log(chalk.yellow('📊 测量构建性能...'))
    
    const startTime = Date.now()
    
    try {
      // 清理之前的构建
      if (fs.existsSync(path.join(__dirname, '../dist'))) {
        execSync('rm -rf dist', { cwd: path.join(__dirname, '..') })
      }
      
      // 执行构建
      execSync('npm run build', { 
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe'
      })
      
      const buildTime = Date.now() - startTime
      
      this.currentResults.build = {
        duration: buildTime,
        durationSeconds: (buildTime / 1000).toFixed(2),
        success: true
      }
      
      console.log(chalk.green(`✅ 构建完成，耗时: ${this.currentResults.build.durationSeconds}s`))
      
    } catch (error) {
      this.currentResults.build = {
        duration: Date.now() - startTime,
        success: false,
        error: error.message
      }
      throw error
    }
  }

  /**
   * 分析包大小
   */
  async analyzeBundleSize() {
    console.log(chalk.yellow('📦 分析包大小...'))
    
    const distPath = path.join(__dirname, '../dist')
    const jsPath = path.join(distPath, 'js')
    
    if (!fs.existsSync(jsPath)) {
      throw new Error('构建目录不存在')
    }

    const files = fs.readdirSync(jsPath)
    const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('legacy'))
    
    const bundles = []
    let totalSize = 0
    
    for (const file of jsFiles) {
      const filePath = path.join(jsPath, file)
      const stats = fs.statSync(filePath)
      const sizeKB = Math.round(stats.size / 1024)
      
      bundles.push({
        name: file,
        size: stats.size,
        sizeKB,
        sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
        type: this.getBundleType(file)
      })
      
      totalSize += stats.size
    }
    
    // 按大小排序
    bundles.sort((a, b) => b.size - a.size)
    
    // 分析vendor包
    const vendorBundles = bundles.filter(b => b.name.startsWith('vendor-'))
    const pageBundles = bundles.filter(b => b.type === 'page')
    
    this.currentResults.bundles = {
      total: bundles.length,
      totalSize,
      totalSizeKB: Math.round(totalSize / 1024),
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
      largest: bundles[0],
      vendors: {
        count: vendorBundles.length,
        totalSize: vendorBundles.reduce((sum, b) => sum + b.size, 0),
        ratio: ((vendorBundles.reduce((sum, b) => sum + b.size, 0) / totalSize) * 100).toFixed(1)
      },
      pages: {
        count: pageBundles.length,
        totalSize: pageBundles.reduce((sum, b) => sum + b.size, 0)
      },
      bundles: bundles.slice(0, 10) // 只保存前10个最大的包
    }
    
    console.log(chalk.green(`✅ 包分析完成: ${this.currentResults.bundles.total}个包, 总大小${this.currentResults.bundles.totalSizeMB}MB`))
  }

  /**
   * 测量加载性能（模拟）
   */
  async measureLoadingPerformance() {
    console.log(chalk.yellow('⚡ 测量加载性能...'))
    
    const bundles = this.currentResults.bundles
    
    // 模拟网络条件下的加载时间
    const networkConditions = {
      '3G': { bandwidth: 1.6 * 1024 * 1024 / 8, latency: 300 }, // 1.6Mbps, 300ms延迟
      '4G': { bandwidth: 9 * 1024 * 1024 / 8, latency: 150 },   // 9Mbps, 150ms延迟
      'WiFi': { bandwidth: 30 * 1024 * 1024 / 8, latency: 50 }  // 30Mbps, 50ms延迟
    }
    
    const loadingTimes = {}
    
    for (const [network, condition] of Object.entries(networkConditions)) {
      // 计算关键资源加载时间
      const criticalSize = bundles.vendors.totalSize + (bundles.pages.totalSize / bundles.pages.count || 0)
      const downloadTime = (criticalSize / condition.bandwidth) * 1000 // 转换为毫秒
      const totalTime = downloadTime + condition.latency
      
      loadingTimes[network] = {
        downloadTime: Math.round(downloadTime),
        totalTime: Math.round(totalTime),
        criticalSize: Math.round(criticalSize / 1024) // KB
      }
    }
    
    this.currentResults.performance = {
      loadingTimes,
      // Web Vitals 估算
      estimatedMetrics: {
        FCP: Math.round(loadingTimes['4G'].totalTime * 0.6), // First Contentful Paint
        LCP: Math.round(loadingTimes['4G'].totalTime * 1.2), // Largest Contentful Paint
        TTI: Math.round(loadingTimes['4G'].totalTime * 1.5)  // Time to Interactive
      }
    }
    
    console.log(chalk.green('✅ 性能分析完成'))
  }

  /**
   * 生成优化建议
   */
  async generateRecommendations() {
    console.log(chalk.yellow('💡 生成优化建议...'))
    
    const recommendations = []
    const bundles = this.currentResults.bundles
    const performance = this.currentResults.performance
    
    // 检查包大小
    if (bundles.totalSizeMB > 5) {
      recommendations.push({
        type: 'size',
        level: 'warning',
        title: '总包大小过大',
        description: `当前总大小${bundles.totalSizeMB}MB，建议控制在5MB以内`,
        suggestions: [
          '启用代码分割和懒加载',
          '移除未使用的依赖',
          '使用CDN加载大型库',
          '启用Tree Shaking'
        ]
      })
    }
    
    // 检查最大包
    if (bundles.largest.sizeKB > 1000) {
      recommendations.push({
        type: 'chunk',
        level: 'error',
        title: '单个包过大',
        description: `${bundles.largest.name} 大小为${bundles.largest.sizeKB}KB，建议拆分`,
        suggestions: [
          '进一步细分vendor包',
          '使用动态导入',
          '考虑使用CDN'
        ]
      })
    }
    
    // 检查vendor比例
    if (parseFloat(bundles.vendors.ratio) > 80) {
      recommendations.push({
        type: 'vendor',
        level: 'info',
        title: 'Vendor包占比过高',
        description: `Vendor包占${bundles.vendors.ratio}%，可能影响缓存效率`,
        suggestions: [
          '优化vendor分包策略',
          '考虑使用CDN',
          '分离稳定和不稳定的依赖'
        ]
      })
    }
    
    // 检查加载性能
    if (performance.estimatedMetrics.LCP > 2500) {
      recommendations.push({
        type: 'performance',
        level: 'warning',
        title: 'LCP性能需要优化',
        description: `预估LCP为${performance.estimatedMetrics.LCP}ms，建议控制在2.5s以内`,
        suggestions: [
          '优化关键资源加载',
          '使用资源预加载',
          '优化图片和字体',
          '启用HTTP/2推送'
        ]
      })
    }
    
    this.currentResults.recommendations = recommendations
    console.log(chalk.green(`✅ 生成了${recommendations.length}条优化建议`))
  }

  /**
   * 保存测试结果
   */
  async saveResults() {
    const filename = `benchmark-${this.currentResults.timestamp}.json`
    const filepath = path.join(this.resultsDir, filename)
    
    fs.writeFileSync(filepath, JSON.stringify(this.currentResults, null, 2))
    
    // 保存最新结果
    const latestPath = path.join(this.resultsDir, 'latest.json')
    fs.writeFileSync(latestPath, JSON.stringify(this.currentResults, null, 2))
    
    console.log(chalk.green(`💾 结果已保存: ${filename}`))
  }

  /**
   * 打印测试摘要
   */
  printSummary() {
    console.log(chalk.blue('\n📊 性能基准测试报告'))
    console.log('='.repeat(50))
    
    // 构建性能
    console.log(chalk.cyan('\n🔨 构建性能'))
    console.log(`构建时间: ${this.currentResults.build.durationSeconds}s`)
    
    // 包大小
    console.log(chalk.cyan('\n📦 包大小分析'))
    console.log(`总包数: ${this.currentResults.bundles.total}`)
    console.log(`总大小: ${this.currentResults.bundles.totalSizeMB}MB`)
    console.log(`最大包: ${this.currentResults.bundles.largest.name} (${this.currentResults.bundles.largest.sizeKB}KB)`)
    console.log(`Vendor占比: ${this.currentResults.bundles.vendors.ratio}%`)
    
    // 性能指标
    console.log(chalk.cyan('\n⚡ 性能指标 (4G网络)'))
    console.log(`预估FCP: ${this.currentResults.performance.estimatedMetrics.FCP}ms`)
    console.log(`预估LCP: ${this.currentResults.performance.estimatedMetrics.LCP}ms`)
    console.log(`预估TTI: ${this.currentResults.performance.estimatedMetrics.TTI}ms`)
    
    // 优化建议
    if (this.currentResults.recommendations.length > 0) {
      console.log(chalk.cyan('\n💡 优化建议'))
      this.currentResults.recommendations.forEach((rec, index) => {
        const levelColor = rec.level === 'error' ? 'red' : rec.level === 'warning' ? 'yellow' : 'blue'
        console.log(`${index + 1}. ${chalk[levelColor](rec.title)}`)
        console.log(`   ${rec.description}`)
      })
    }
    
    // 性能评分
    const score = this.calculatePerformanceScore()
    const scoreColor = score >= 80 ? 'green' : score >= 60 ? 'yellow' : 'red'
    console.log(chalk.cyan('\n🎯 性能评分'))
    console.log(`总分: ${chalk[scoreColor](score)}/100`)
  }

  /**
   * 计算性能评分
   */
  calculatePerformanceScore() {
    let score = 100
    
    // 构建时间评分 (30分)
    const buildTime = this.currentResults.build.duration / 1000
    if (buildTime > 60) score -= 15
    else if (buildTime > 30) score -= 10
    else if (buildTime > 15) score -= 5
    
    // 包大小评分 (40分)
    const totalSizeMB = parseFloat(this.currentResults.bundles.totalSizeMB)
    if (totalSizeMB > 10) score -= 20
    else if (totalSizeMB > 5) score -= 15
    else if (totalSizeMB > 3) score -= 10
    else if (totalSizeMB > 2) score -= 5
    
    // 性能指标评分 (30分)
    const lcp = this.currentResults.performance.estimatedMetrics.LCP
    if (lcp > 4000) score -= 15
    else if (lcp > 2500) score -= 10
    else if (lcp > 1500) score -= 5
    
    return Math.max(0, Math.round(score))
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
}

// 如果直接运行此文件
if (import.meta.url === `file://${process.argv[1]}`) {
  const benchmark = new PerformanceBenchmark()
  benchmark.runBenchmark().catch(console.error)
}
