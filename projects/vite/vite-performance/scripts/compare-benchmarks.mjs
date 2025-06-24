/**
 * 基准测试对比工具
 * 
 * 功能：
 * 1. 对比优化前后的性能数据
 * 2. 生成详细的对比报告
 * 3. 识别性能回归和改进
 * 4. 提供可视化的对比图表
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export class BenchmarkComparator {
  constructor() {
    this.resultsDir = path.join(__dirname, '../performance-results')
    this.comparisonResults = {
      timestamp: Date.now(),
      date: new Date().toISOString(),
      baseline: null,
      current: null,
      comparison: {},
      improvements: [],
      regressions: []
    }
  }

  /**
   * 运行对比分析
   */
  async compare(baselineFile = null, currentFile = null) {
    console.log(chalk.blue('📊 开始基准测试对比分析...\n'))

    try {
      // 加载数据
      this.loadBenchmarkData(baselineFile, currentFile)
      
      // 执行对比
      this.performComparison()
      
      // 生成报告
      this.generateReport()
      
      // 保存结果
      this.saveComparison()
      
    } catch (error) {
      console.error(chalk.red('❌ 对比分析失败:'), error.message)
      throw error
    }
  }

  /**
   * 加载基准测试数据
   */
  loadBenchmarkData(baselineFile, currentFile) {
    // 获取所有基准测试文件
    const files = fs.readdirSync(this.resultsDir)
      .filter(f => f.startsWith('benchmark-') && f.endsWith('.json'))
      .sort((a, b) => {
        const timeA = parseInt(a.replace('benchmark-', '').replace('.json', ''))
        const timeB = parseInt(b.replace('benchmark-', '').replace('.json', ''))
        return timeB - timeA // 降序
      })

    if (files.length < 2) {
      throw new Error('需要至少2个基准测试文件进行对比')
    }

    // 加载当前数据（最新的）
    const currentPath = currentFile || path.join(this.resultsDir, files[0])
    this.comparisonResults.current = JSON.parse(fs.readFileSync(currentPath, 'utf8'))

    // 加载基线数据（第二新的或指定的）
    const baselinePath = baselineFile || path.join(this.resultsDir, files[1])
    this.comparisonResults.baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'))

    console.log(chalk.green(`✅ 已加载对比数据:`))
    console.log(`   基线: ${new Date(this.comparisonResults.baseline.timestamp).toLocaleString()}`)
    console.log(`   当前: ${new Date(this.comparisonResults.current.timestamp).toLocaleString()}`)
  }

  /**
   * 执行详细对比
   */
  performComparison() {
    const baseline = this.comparisonResults.baseline
    const current = this.comparisonResults.current

    // 构建性能对比
    this.comparisonResults.comparison.build = {
      duration: {
        baseline: baseline.build.duration,
        current: current.build.duration,
        change: current.build.duration - baseline.build.duration,
        changePercent: ((current.build.duration - baseline.build.duration) / baseline.build.duration * 100).toFixed(1)
      }
    }

    // 包大小对比
    this.comparisonResults.comparison.bundles = {
      totalSize: {
        baseline: baseline.bundles.totalSize,
        current: current.bundles.totalSize,
        change: current.bundles.totalSize - baseline.bundles.totalSize,
        changePercent: ((current.bundles.totalSize - baseline.bundles.totalSize) / baseline.bundles.totalSize * 100).toFixed(1)
      },
      totalCount: {
        baseline: baseline.bundles.total,
        current: current.bundles.total,
        change: current.bundles.total - baseline.bundles.total
      },
      vendorRatio: {
        baseline: parseFloat(baseline.bundles.vendors.ratio),
        current: parseFloat(current.bundles.vendors.ratio),
        change: (parseFloat(current.bundles.vendors.ratio) - parseFloat(baseline.bundles.vendors.ratio)).toFixed(1)
      },
      largestBundle: {
        baseline: baseline.bundles.largest,
        current: current.bundles.largest,
        sizeChange: current.bundles.largest.sizeKB - baseline.bundles.largest.sizeKB
      }
    }

    // 性能指标对比
    this.comparisonResults.comparison.performance = {
      fcp: {
        baseline: baseline.performance.estimatedMetrics.FCP,
        current: current.performance.estimatedMetrics.FCP,
        change: current.performance.estimatedMetrics.FCP - baseline.performance.estimatedMetrics.FCP,
        changePercent: ((current.performance.estimatedMetrics.FCP - baseline.performance.estimatedMetrics.FCP) / baseline.performance.estimatedMetrics.FCP * 100).toFixed(1)
      },
      lcp: {
        baseline: baseline.performance.estimatedMetrics.LCP,
        current: current.performance.estimatedMetrics.LCP,
        change: current.performance.estimatedMetrics.LCP - baseline.performance.estimatedMetrics.LCP,
        changePercent: ((current.performance.estimatedMetrics.LCP - baseline.performance.estimatedMetrics.LCP) / baseline.performance.estimatedMetrics.LCP * 100).toFixed(1)
      },
      tti: {
        baseline: baseline.performance.estimatedMetrics.TTI,
        current: current.performance.estimatedMetrics.TTI,
        change: current.performance.estimatedMetrics.TTI - baseline.performance.estimatedMetrics.TTI,
        changePercent: ((current.performance.estimatedMetrics.TTI - baseline.performance.estimatedMetrics.TTI) / baseline.performance.estimatedMetrics.TTI * 100).toFixed(1)
      }
    }

    // 识别改进和回归
    this.identifyChanges()
  }

  /**
   * 识别改进和回归
   */
  identifyChanges() {
    const comp = this.comparisonResults.comparison

    // 构建时间
    if (comp.build.duration.change < -5000) { // 改进超过5秒
      this.comparisonResults.improvements.push({
        type: 'build',
        metric: '构建时间',
        improvement: `减少了${Math.abs(comp.build.duration.change / 1000).toFixed(1)}秒 (${Math.abs(comp.build.duration.changePercent)}%)`
      })
    } else if (comp.build.duration.change > 5000) { // 回归超过5秒
      this.comparisonResults.regressions.push({
        type: 'build',
        metric: '构建时间',
        regression: `增加了${(comp.build.duration.change / 1000).toFixed(1)}秒 (${comp.build.duration.changePercent}%)`
      })
    }

    // 包大小
    if (parseFloat(comp.bundles.totalSize.changePercent) < -10) { // 减少超过10%
      this.comparisonResults.improvements.push({
        type: 'size',
        metric: '总包大小',
        improvement: `减少了${Math.abs(parseFloat(comp.bundles.totalSize.changePercent))}% (${Math.abs(comp.bundles.totalSize.change / (1024 * 1024)).toFixed(2)}MB)`
      })
    } else if (parseFloat(comp.bundles.totalSize.changePercent) > 10) { // 增加超过10%
      this.comparisonResults.regressions.push({
        type: 'size',
        metric: '总包大小',
        regression: `增加了${comp.bundles.totalSize.changePercent}% (${(comp.bundles.totalSize.change / (1024 * 1024)).toFixed(2)}MB)`
      })
    }

    // LCP性能
    if (parseFloat(comp.performance.lcp.changePercent) < -15) { // 改进超过15%
      this.comparisonResults.improvements.push({
        type: 'performance',
        metric: 'LCP性能',
        improvement: `改进了${Math.abs(parseFloat(comp.performance.lcp.changePercent))}% (${Math.abs(comp.performance.lcp.change)}ms)`
      })
    } else if (parseFloat(comp.performance.lcp.changePercent) > 15) { // 回归超过15%
      this.comparisonResults.regressions.push({
        type: 'performance',
        metric: 'LCP性能',
        regression: `下降了${comp.performance.lcp.changePercent}% (${comp.performance.lcp.change}ms)`
      })
    }
  }

  /**
   * 生成对比报告
   */
  generateReport() {
    console.log(chalk.blue('\n📊 基准测试对比报告'))
    console.log('='.repeat(60))

    const comp = this.comparisonResults.comparison

    // 构建性能对比
    console.log(chalk.cyan('\n🔨 构建性能对比'))
    const buildColor = comp.build.duration.change > 0 ? 'red' : 'green'
    console.log(`构建时间: ${comp.build.duration.current / 1000}s → ${comp.build.duration.baseline / 1000}s`)
    console.log(`变化: ${chalk[buildColor](comp.build.duration.changePercent + '%')} (${comp.build.duration.change > 0 ? '+' : ''}${(comp.build.duration.change / 1000).toFixed(1)}s)`)

    // 包大小对比
    console.log(chalk.cyan('\n📦 包大小对比'))
    const sizeColor = parseFloat(comp.bundles.totalSize.changePercent) > 0 ? 'red' : 'green'
    console.log(`总大小: ${(comp.bundles.totalSize.current / (1024 * 1024)).toFixed(2)}MB → ${(comp.bundles.totalSize.baseline / (1024 * 1024)).toFixed(2)}MB`)
    console.log(`变化: ${chalk[sizeColor](comp.bundles.totalSize.changePercent + '%')} (${comp.bundles.totalSize.change > 0 ? '+' : ''}${(comp.bundles.totalSize.change / (1024 * 1024)).toFixed(2)}MB)`)
    
    console.log(`包数量: ${comp.bundles.totalCount.current} → ${comp.bundles.totalCount.baseline}`)
    console.log(`变化: ${comp.bundles.totalCount.change > 0 ? '+' : ''}${comp.bundles.totalCount.change}个包`)

    // 性能指标对比
    console.log(chalk.cyan('\n⚡ 性能指标对比'))
    const lcpColor = parseFloat(comp.performance.lcp.changePercent) > 0 ? 'red' : 'green'
    console.log(`LCP: ${comp.performance.lcp.current}ms → ${comp.performance.lcp.baseline}ms`)
    console.log(`变化: ${chalk[lcpColor](comp.performance.lcp.changePercent + '%')} (${comp.performance.lcp.change > 0 ? '+' : ''}${comp.performance.lcp.change}ms)`)

    // 改进项
    if (this.comparisonResults.improvements.length > 0) {
      console.log(chalk.cyan('\n✅ 性能改进'))
      this.comparisonResults.improvements.forEach((improvement, index) => {
        console.log(`${index + 1}. ${chalk.green(improvement.metric)}: ${improvement.improvement}`)
      })
    }

    // 回归项
    if (this.comparisonResults.regressions.length > 0) {
      console.log(chalk.cyan('\n⚠️  性能回归'))
      this.comparisonResults.regressions.forEach((regression, index) => {
        console.log(`${index + 1}. ${chalk.red(regression.metric)}: ${regression.regression}`)
      })
    }

    // 总体评估
    console.log(chalk.cyan('\n🎯 总体评估'))
    const improvementCount = this.comparisonResults.improvements.length
    const regressionCount = this.comparisonResults.regressions.length
    
    if (improvementCount > regressionCount) {
      console.log(chalk.green('✅ 整体性能有所改进'))
    } else if (regressionCount > improvementCount) {
      console.log(chalk.red('⚠️  检测到性能回归，需要关注'))
    } else {
      console.log(chalk.yellow('➖ 性能基本持平'))
    }
  }

  /**
   * 保存对比结果
   */
  saveComparison() {
    const filename = `comparison-${this.comparisonResults.timestamp}.json`
    const filepath = path.join(this.resultsDir, filename)
    
    fs.writeFileSync(filepath, JSON.stringify(this.comparisonResults, null, 2))
    
    // 保存最新对比
    const latestPath = path.join(this.resultsDir, 'latest-comparison.json')
    fs.writeFileSync(latestPath, JSON.stringify(this.comparisonResults, null, 2))
    
    console.log(chalk.green(`\n💾 对比结果已保存: ${filename}`))
  }
}

// 如果直接运行此文件
if (import.meta.url === `file://${process.argv[1]}`) {
  const comparator = new BenchmarkComparator()
  comparator.compare().catch(console.error)
}
