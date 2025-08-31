#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import postcss from 'postcss'
import postcssScss from 'postcss-scss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 配置
const CONFIG = {
  // 需要处理的文件扩展名
  extensions: ['.vue', '.scss', '.css'],
  // 需要排除的目录
  excludeDirs: ['node_modules', 'dist', '.git', '.cursor'],
  // 需要排除的 mixin 名称
  excludeMixins: ['text-base'],
  // 需要调整的属性
  targetProps: ['font-size', 'line-height'],
  // 调整倍数（750px 设计稿需要 2 倍大小）
  multiplier: 2,
  // 最小像素值（小于此值的不调整）
  minPixelValue: 2
}

// 日志记录
const log = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  warn: (msg) => console.warn(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`)
}

// 检查是否为数字 + px 格式
function isPxValue(value) {
  return /^\d+(\.\d+)?px$/.test(value.trim())
}

// 将 px 值乘以倍数
function multiplyPxValue(value, multiplier) {
  const match = value.match(/^(\d+(?:\.\d+)?)px$/)
  if (!match) return value

  const numValue = parseFloat(match[1])
  if (numValue < CONFIG.minPixelValue) return value

  const newValue = numValue * multiplier
  return `${newValue}px`
}

// 检查是否在排除的 mixin 中
function isInExcludedMixin(node) {
  let parent = node.parent
  while (parent) {
    if (parent.type === 'atrule' && parent.name === 'mixin') {
      const mixinName = parent.params.match(/^(\w+)/)?.[1]
      if (mixinName && CONFIG.excludeMixins.includes(mixinName)) {
        return true
      }
    }
    parent = parent.parent
  }
  return false
}

// 处理 CSS 声明
function processDeclarations(css, filePath) {
  const adjustments = []

  css.walkDecls((decl) => {
    // 检查是否为需要调整的属性
    if (!CONFIG.targetProps.includes(decl.prop)) return

    // 检查是否在排除的 mixin 中
    if (isInExcludedMixin(decl)) return

    // 检查值是否为 px 格式
    if (!isPxValue(decl.value)) return

    const oldValue = decl.value
    const newValue = multiplyPxValue(decl.value, CONFIG.multiplier)

    if (oldValue !== newValue) {
      adjustments.push({
        property: decl.prop,
        oldValue,
        newValue,
        line: decl.source?.start?.line || 'unknown'
      })

      // 更新声明值
      decl.value = newValue
    }
  })

  return adjustments
}

// 处理单个文件
async function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const ext = path.extname(filePath)

    // 根据文件类型选择 PostCSS 解析器
    const parser = ext === '.scss' ? postcssScss : undefined

    const result = await postcss([
      {
        postcssPlugin: 'font-adjustment',
        Declaration: (decl) => {
          // 这里会在 processDeclarations 中处理
        }
      }
    ]).process(content, {
      from: filePath,
      parser
    })

    // 处理声明
    const adjustments = processDeclarations(result.root, filePath)

    if (adjustments.length > 0) {
      // 写回文件
      fs.writeFileSync(filePath, result.css)
      return {
        filePath,
        adjustments,
        success: true
      }
    }

    return {
      filePath,
      adjustments: [],
      success: true
    }
  } catch (error) {
    log.error(`处理文件失败: ${filePath} - ${error.message}`)
    return {
      filePath,
      adjustments: [],
      success: false,
      error: error.message
    }
  }
}

// 递归遍历目录
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      if (!CONFIG.excludeDirs.includes(file)) {
        walkDir(filePath, callback)
      }
    } else if (stat.isFile()) {
      const ext = path.extname(file)
      if (CONFIG.extensions.includes(ext)) {
        callback(filePath)
      }
    }
  }
}

// 生成调整报告
function generateReport(results) {
  const totalFiles = results.length
  const successFiles = results.filter((r) => r.success).length
  const failedFiles = totalFiles - successFiles
  const totalAdjustments = results.reduce((sum, r) => sum + r.adjustments.length, 0)

  let report = `# 字体调整报告\n\n`
  report += `## 统计信息\n`
  report += `- 总文件数: ${totalFiles}\n`
  report += `- 成功处理: ${successFiles}\n`
  report += `- 处理失败: ${failedFiles}\n`
  report += `- 总调整数: ${totalAdjustments}\n\n`

  if (totalAdjustments > 0) {
    report += `## 调整详情\n\n`

    results.forEach((result) => {
      if (result.adjustments.length > 0) {
        report += `### ${result.filePath}\n`
        result.adjustments.forEach((adj) => {
          report += `- ${adj.property}: ${adj.oldValue} → ${adj.newValue} (第${adj.line}行)\n`
        })
        report += `\n`
      }
    })
  }

  if (failedFiles > 0) {
    report += `## 失败文件\n\n`
    results
      .filter((r) => !r.success)
      .forEach((result) => {
        report += `- ${result.filePath}: ${result.error}\n`
      })
  }

  return report
}

// 主函数
async function main() {
  const projectRoot = path.resolve(__dirname, '..')
  const srcDir = path.join(projectRoot, 'src')

  log.info('开始字体调整处理...')
  log.info(`项目根目录: ${projectRoot}`)
  log.info(`源码目录: ${srcDir}`)
  log.info(`调整倍数: ${CONFIG.multiplier}x`)
  log.info(`目标属性: ${CONFIG.targetProps.join(', ')}`)
  log.info(`排除 mixin: ${CONFIG.excludeMixins.join(', ')}`)

  const files = []
  walkDir(srcDir, (filePath) => {
    files.push(filePath)
  })

  log.info(`找到 ${files.length} 个文件需要处理`)

  const results = []
  for (const filePath of files) {
    log.info(`处理文件: ${filePath}`)
    const result = await processFile(filePath)
    results.push(result)

    if (result.adjustments.length > 0) {
      log.success(`${filePath}: 调整了 ${result.adjustments.length} 个属性`)
    }
  }

  // 生成报告
  const report = generateReport(results)
  const reportPath = path.join(projectRoot, 'font-adjustment-report.md')
  fs.writeFileSync(reportPath, report)

  log.success(`字体调整完成！`)
  log.info(`调整报告已保存到: ${reportPath}`)

  // 输出摘要
  const totalAdjustments = results.reduce((sum, r) => sum + r.adjustments.length, 0)
  if (totalAdjustments > 0) {
    log.success(`总共调整了 ${totalAdjustments} 个字体属性`)
  } else {
    log.warn('没有找到需要调整的字体属性')
  }
}

// 运行脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    log.error(`脚本执行失败: ${error.message}`)
    process.exit(1)
  })
}

export { processFile, processDeclarations, multiplyPxValue }
