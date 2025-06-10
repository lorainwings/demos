/**
 * 企业级构建分析工具
 * 
 * 功能：
 * 1. Bundle 大小分析
 * 2. 依赖关系分析  
 * 3. 重复依赖检测
 * 4. 性能建议
 * 5. 分包效果评估
 * 
 * 参考：webpack-bundle-analyzer, rollup-plugin-visualizer
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export class BuildAnalyzer {
  constructor(distPath = path.resolve(__dirname, '../dist')) {
    this.distPath = distPath
    this.jsPath = path.join(distPath, 'js')
    this.cssPath = path.join(distPath, 'css')
    this.results = {
      bundles: [],
      vendors: [],
      pages: [],
      assets: [],
      summary: {},
      recommendations: []
    }
  }

  /**
   * 分析构建结果
   */
  async analyze() {
    console.log(chalk.blue('🔍 开始分析构建结果...\n'))
    
    await this.analyzeBundles()
    await this.analyzeVendors()
    await this.analyzePages()
    await this.analyzeAssets()
    await this.generateSummary()
    await this.generateRecommendations()
    
    return this.results
  }

  /**
   * 分析所有JS包
   */
  async analyzeBundles() {
    if (!fs.existsSync(this.jsPath)) return
    
    const files = fs.readdirSync(this.jsPath)
    const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('legacy'))
    
    for (const file of jsFiles) {
      const filePath = path.join(this.jsPath, file)
      const stats = fs.statSync(filePath)
      const sizeKB = Math.round(stats.size / 1024)
      
      this.results.bundles.push({
        name: file,
        size: stats.size,
        sizeKB,
        sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
        type: this.getBundleType(file),
        isLegacy: file.includes('legacy')
      })
    }
    
    // 按大小排序
    this.results.bundles.sort((a, b) => b.size - a.size)
  }

  /**
   * 分析vendor包
   */
  async analyzeVendors() {
    const vendors = this.results.bundles.filter(b => b.name.startsWith('vendor-'))
    
    this.results.vendors = vendors.map(vendor => ({
      ...vendor,
      category: vendor.name.replace('vendor-', '').split('-')[0],
      efficiency: this.calculateEfficiency(vendor.sizeKB)
    }))
  }

  /**
   * 分析页面包
   */
  async analyzePages() {
    const pages = this.results.bundles.filter(b => 
      b.type === 'page' || b.name.includes('xh-h5') || b.name.includes('pink-ribbon')
    )
    
    this.results.pages = pages
  }

  /**
   * 分析静态资源
   */
  async analyzeAssets() {
    const assetDirs = ['css', 'png', 'jpg', 'svg', 'ttf']
    
    for (const dir of assetDirs) {
      const dirPath = path.join(this.distPath, dir)
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath)
        const totalSize = files.reduce((sum, file) => {
          const filePath = path.join(dirPath, file)
          return sum + fs.statSync(filePath).size
        }, 0)
        
        this.results.assets.push({
          type: dir,
          count: files.length,
          totalSize,
          totalSizeKB: Math.round(totalSize / 1024),
          avgSizeKB: Math.round(totalSize / 1024 / files.length)
        })
      }
    }
  }

  /**
   * 生成汇总信息
   */
  async generateSummary() {
    const totalJS = this.results.bundles.reduce((sum, b) => sum + b.size, 0)
    const totalCSS = this.results.assets.find(a => a.type === 'css')?.totalSize || 0
    const totalAssets = this.results.assets.reduce((sum, a) => sum + a.totalSize, 0)
    
    this.results.summary = {
      totalBundles: this.results.bundles.length,
      totalVendors: this.results.vendors.length,
      totalPages: this.results.pages.length,
      totalJS: {
        size: totalJS,
        sizeKB: Math.round(totalJS / 1024),
        sizeMB: (totalJS / (1024 * 1024)).toFixed(2)
      },
      totalCSS: {
        size: totalCSS,
        sizeKB: Math.round(totalCSS / 1024),
        sizeMB: (totalCSS / (1024 * 1024)).toFixed(2)
      },
      totalAssets: {
        size: totalAssets,
        sizeKB: Math.round(totalAssets / 1024),
        sizeMB: (totalAssets / (1024 * 1024)).toFixed(2)
      },
      largestBundle: this.results.bundles[0],
      vendorRatio: ((this.results.vendors.reduce((sum, v) => sum + v.size, 0) / totalJS) * 100).toFixed(1)
    }
  }

  /**
   * 生成优化建议
   */
  async generateRecommendations() {
    const recommendations = []
    
    // 检查过大的包
    const largeBundles = this.results.bundles.filter(b => b.sizeKB > 500)
    if (largeBundles.length > 0) {
      recommendations.push({
        type: 'size',
        level: 'warning',
        title: '发现过大的包',
        description: `以下包超过500KB，建议进一步拆分：${largeBundles.map(b => b.name).join(', ')}`,
        impact: 'high'
      })
    }
    
    // 检查vendor包分布
    const vendorTotal = this.results.vendors.reduce((sum, v) => sum + v.size, 0)
    const jsTotal = this.results.bundles.reduce((sum, b) => sum + b.size, 0)
    const vendorRatio = (vendorTotal / jsTotal) * 100
    
    if (vendorRatio > 70) {
      recommendations.push({
        type: 'vendor',
        level: 'info',
        title: 'Vendor包占比较高',
        description: `Vendor包占总JS大小的${vendorRatio.toFixed(1)}%，考虑使用CDN或进一步优化`,
        impact: 'medium'
      })
    }
    
    // 检查重复依赖
    const duplicates = this.findDuplicateDependencies()
    if (duplicates.length > 0) {
      recommendations.push({
        type: 'duplicate',
        level: 'warning',
        title: '发现重复依赖',
        description: `检测到可能的重复依赖：${duplicates.join(', ')}`,
        impact: 'medium'
      })
    }
    
    this.results.recommendations = recommendations
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
   * 计算包效率
   */
  calculateEfficiency(sizeKB) {
    if (sizeKB < 50) return 'excellent'
    if (sizeKB < 200) return 'good'
    if (sizeKB < 500) return 'fair'
    return 'poor'
  }

  /**
   * 查找重复依赖
   */
  findDuplicateDependencies() {
    const duplicates = []
    const bundleNames = this.results.bundles.map(b => b.name)
    
    // 简单的重复检测逻辑
    const patterns = ['lodash', 'axios', 'dayjs', 'vue']
    patterns.forEach(pattern => {
      const matches = bundleNames.filter(name => name.includes(pattern))
      if (matches.length > 1) {
        duplicates.push(pattern)
      }
    })
    
    return duplicates
  }

  /**
   * 输出分析报告
   */
  printReport() {
    console.log(chalk.green('📊 构建分析报告\n'))
    
    // 汇总信息
    console.log(chalk.blue('📈 汇总信息'))
    console.log(`总包数量: ${this.results.summary.totalBundles}`)
    console.log(`Vendor包数量: ${this.results.summary.totalVendors}`)
    console.log(`页面包数量: ${this.results.summary.totalPages}`)
    console.log(`总JS大小: ${this.results.summary.totalJS.sizeMB}MB`)
    console.log(`总CSS大小: ${this.results.summary.totalCSS.sizeMB}MB`)
    console.log(`Vendor占比: ${this.results.summary.vendorRatio}%`)
    console.log()
    
    // 最大的包
    console.log(chalk.blue('📦 最大的10个包'))
    this.results.bundles.slice(0, 10).forEach((bundle, index) => {
      const color = bundle.sizeKB > 500 ? 'red' : bundle.sizeKB > 200 ? 'yellow' : 'green'
      console.log(`${index + 1}. ${chalk[color](bundle.name)} - ${bundle.sizeKB}KB`)
    })
    console.log()
    
    // Vendor包分析
    console.log(chalk.blue('🏪 Vendor包分析'))
    this.results.vendors.forEach(vendor => {
      const color = vendor.efficiency === 'poor' ? 'red' : 
                   vendor.efficiency === 'fair' ? 'yellow' : 'green'
      console.log(`${chalk[color](vendor.name)} - ${vendor.sizeKB}KB (${vendor.efficiency})`)
    })
    console.log()
    
    // 优化建议
    if (this.results.recommendations.length > 0) {
      console.log(chalk.blue('💡 优化建议'))
      this.results.recommendations.forEach(rec => {
        const color = rec.level === 'warning' ? 'yellow' : 'cyan'
        console.log(`${chalk[color]('●')} ${rec.title}`)
        console.log(`   ${rec.description}`)
        console.log(`   影响程度: ${rec.impact}`)
        console.log()
      })
    }
  }

  /**
   * 保存分析结果到文件
   */
  async saveReport(outputPath = path.join(this.distPath, 'build-analysis.json')) {
    fs.writeFileSync(outputPath, JSON.stringify(this.results, null, 2))
    console.log(chalk.green(`📄 分析报告已保存到: ${outputPath}`))
  }
}

// 如果直接运行此文件
if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new BuildAnalyzer()
  analyzer.analyze().then(() => {
    analyzer.printReport()
    analyzer.saveReport()
  })
}
