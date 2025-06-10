/**
 * 企业级分包策略 - 简洁优雅版本
 *
 * 设计原则：
 * 1. 配置驱动，易于维护
 * 2. 策略分离，职责单一
 * 3. 规则简洁，逻辑清晰
 * 4. 符合开源社区最佳实践
 *
 * 参考项目：Vue 3、Vite、Element Plus、Ant Design Vue
 */

/**
 * 分包配置 - 集中管理所有分包规则
 *
 * 优势：
 * - 配置集中，易于维护
 * - 规则清晰，一目了然
 * - 扩展简单，只需修改配置
 */
const CHUNK_RULES = {
  // 第三方库分包规则 - 按稳定性和功能分组
  vendors: new Map([
    ['vendor-vue', ['vue', 'vue-router', 'pinia', '@vue']],
    ['vendor-ui', ['vant', '@vant']],
    ['vendor-utils', ['lodash', 'lodash-es', 'dayjs', 'axios']],
    ['vendor-media', ['echarts', 'video.js', 'xgplayer', 'swiper']],
    ['vendor-tools', ['html2canvas', 'qrcode', 'crypto-js', 'dompurify']],
    ['vendor-docs', ['@vue-office/docx', 'pdf-vue3', 'markdown-it']],
    ['vendor-business', ['@hhorg/']],
    ['vendor-dev', ['vconsole', 'mitt', 'amfe-flexible']]
  ]),

  // 应用代码分包规则 - 按业务模块分组
  apps: new Map([
    ['app-xh-h5', ['/pages/xh-h5/']],
    ['app-pink-ribbon', ['/pages/pink-ribbon/']],
    ['shared-components', ['/components/']],
    ['shared-utils', ['/utils/']],
    ['shared-business', ['/store/', '/services/']]
  ])
}

/**
 * 创建分包策略函数
 *
 * @returns {Function} 分包策略函数
 */
export function createChunkStrategy() {
  return (id) => {
    // 处理第三方依赖
    if (id.includes('node_modules')) {
      return resolveVendorChunk(id)
    }

    // 处理应用代码
    return resolveAppChunk(id)
  }
}

/**
 * 解析第三方库分包
 *
 * @param {string} id - 模块ID
 * @returns {string|null} 分包名称
 */
function resolveVendorChunk(id) {
  const packageName = extractPackageName(id)
  if (!packageName) return 'vendor-misc'

  // 使用 Map 提高查找效率
  for (const [chunkName, patterns] of CHUNK_RULES.vendors) {
    if (patterns.some((pattern) => packageName.includes(pattern))) {
      return chunkName
    }
  }

  return 'vendor-misc'
}

/**
 * 解析应用代码分包
 *
 * @param {string} id - 模块ID
 * @returns {string|null} 分包名称
 */
function resolveAppChunk(id) {
  // 使用 Map 提高查找效率
  for (const [chunkName, patterns] of CHUNK_RULES.apps) {
    if (patterns.some((pattern) => id.includes(pattern))) {
      return chunkName
    }
  }

  return null // 使用默认分包
}

/**
 * 提取包名工具函数
 *
 * @param {string} id - 模块ID
 * @returns {string|null} 包名
 */
function extractPackageName(id) {
  // 处理 pnpm 路径
  if (id.includes('.pnpm')) {
    const matches = id.match(/\.pnpm\/((?:@[^/]+\/)?[^@/]+)@/)
    return matches?.[1] || ''
  }

  // 处理标准 node_modules 路径
  const parts = id.split('node_modules/')
  if (parts.length < 2) return null

  const packagePath = parts[1]

  // 处理 scoped packages (@scope/package)
  if (packagePath.startsWith('@')) {
    const scopedParts = packagePath.split('/')
    return scopedParts.length >= 2 ? `${scopedParts[0]}/${scopedParts[1]}` : packagePath
  }

  return packagePath.split('/')[0]
}

/**
 * 获取分包配置信息 - 用于调试和监控
 *
 * @returns {Object} 分包配置信息
 */
export function getChunkInfo() {
  return {
    vendorRules: Object.fromEntries(CHUNK_RULES.vendors),
    appRules: Object.fromEntries(CHUNK_RULES.apps),
    totalRules: CHUNK_RULES.vendors.size + CHUNK_RULES.apps.size
  }
}

/**
 * 验证分包配置 - 确保配置正确性
 *
 * @returns {Object} 验证结果
 */
export function validateChunkConfig() {
  const errors = []
  const warnings = []

  // 检查是否有重复的包名
  const allPackages = new Set()
  for (const patterns of CHUNK_RULES.vendors.values()) {
    for (const pattern of patterns) {
      if (allPackages.has(pattern)) {
        errors.push(`重复的包名配置: ${pattern}`)
      }
      allPackages.add(pattern)
    }
  }

  // 检查是否有重复的路径模式
  const allPaths = new Set()
  for (const patterns of CHUNK_RULES.apps.values()) {
    for (const pattern of patterns) {
      if (allPaths.has(pattern)) {
        warnings.push(`重复的路径模式: ${pattern}`)
      }
      allPaths.add(pattern)
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    summary: {
      vendorRules: CHUNK_RULES.vendors.size,
      appRules: CHUNK_RULES.apps.size,
      totalPackages: allPackages.size,
      totalPaths: allPaths.size
    }
  }
}

// 开发环境下输出配置信息
if (process.env.NODE_ENV === 'development') {
  const validation = validateChunkConfig()
  if (!validation.isValid) {
    console.warn('⚠️ 分包配置验证失败:', validation.errors)
  }
  if (validation.warnings.length > 0) {
    console.warn('⚠️ 分包配置警告:', validation.warnings)
  }
}

// 默认导出 - 兼容现有代码
export default createChunkStrategy
