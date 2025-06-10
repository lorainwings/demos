import fs from 'fs'
import path from 'path'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export const __dirname = dirname(fileURLToPath(import.meta.url))

// 多页应用列表
export const PAGES_DIR = join(__dirname, '../src/pages')

// 获取目标文件夹下的所有文件夹
export const getSubfolders = async (targetDir) => {
  try {
    const items = await fs.promises.readdir(targetDir, { withFileTypes: true })
    const subfolders = items.filter((item) => item.isDirectory()).map((item) => item.name)
    return subfolders
  } catch (err) {
    console.error('读取文件夹时出错:', err)
    return [] // 返回空数组表示错误
  }
}

export const getPages = async () => {
  return await getSubfolders(PAGES_DIR)
}

export const getEnterPages = async () => {
  const config = {}
  await getPages().then((pages) => {
    pages = ['xh-h5']
    pages.forEach((item) => {
      config[item] = path.join(__dirname, `../src/pages/${item}/index.html`)
    })
  })
  return config
}

/**
 * 企业级智能分包策略 - 符合大型开源项目最佳实践
 *
 * 设计原则：
 * 1. 按功能域分包，提高缓存命中率
 * 2. 控制包大小，避免单包过大影响加载性能
 * 3. 分离稳定依赖和频繁更新依赖
 * 4. 支持按需加载和代码分割
 *
 * 参考项目：Vue 3、Vite、Element Plus、Ant Design Vue
 */
export const createVendorChunksStrategy = () => {
  // 核心框架包 - 最稳定，缓存时间最长
  const coreFramework = {
    'vendor-vue-core': ['vue', 'vue-router', 'pinia', '@vue/runtime-core', '@vue/shared', 'vue-demi'],
    'vendor-vue-ecosystem': ['@vueuse/core', 'vue-i18n', 'vue-clipboard3', 'vue3-scroll-seamless', 'vue3-touch-events']
  }

  // UI组件库 - 按组件库分包
  const uiLibraries = {
    'vendor-vant': ['vant', '@vant/area-data', '@vant/touch-emulator'],
    'vendor-ui-misc': ['animate.css', 'normalize.css']
  }

  // 工具库 - 按功能分类
  const utilities = {
    'vendor-lodash': ['lodash', 'lodash-es'],
    'vendor-date': ['dayjs', 'date-fns', 'moment'],
    'vendor-http': ['axios', 'axios-adapter-uniapp', '@microsoft/fetch-event-source'],
    'vendor-crypto': ['crypto-js', 'lz-string', 'uuid'],
    'vendor-dom': ['dompurify', 'html2canvas', 'resize-observer-polyfill']
  }

  // 图表和可视化 - 大型库单独分包
  const visualization = {
    'vendor-echarts': ['echarts'],
    'vendor-charts-utils': ['echarts/core', 'echarts/charts', 'echarts/components', 'echarts/renderers']
  }

  // 媒体处理 - 大型库分包
  const media = {
    'vendor-video': ['video.js', 'xgplayer'],
    'vendor-image': ['image-compressor.js', '@ericblade/quagga2', 'qrcode', 'qrcode-vue3'],
    'vendor-swiper': ['swiper']
  }

  // 文档处理
  const documents = {
    'vendor-office': ['@vue-office/docx', 'pdf-vue3'],
    'vendor-markdown': ['markdown-it', 'marked']
  }

  // 业务相关 - 内部包
  const business = {
    'vendor-hh-sdk': ['@hhorg/analytics', '@hhorg/axios', '@hhorg/hh-sdk', '@hhorg/icon', '@hhorg/utils']
  }

  // 开发工具和polyfills
  const development = {
    'vendor-polyfills': ['amfe-flexible', 'array.prototype.at', 'text-encoding-shim'],
    'vendor-dev-tools': ['vconsole', 'mitt']
  }

  // 合并所有分组
  const allVendorGroups = {
    ...coreFramework,
    ...uiLibraries,
    ...utilities,
    ...visualization,
    ...media,
    ...documents,
    ...business,
    ...development
  }

  // 包大小限制配置 (KB)
  const sizeThresholds = {
    small: 50,    // 小包：< 50KB
    medium: 200,  // 中包：50KB - 200KB
    large: 500,   // 大包：200KB - 500KB
    xlarge: 1000  // 超大包：500KB - 1MB，超过需要拆分
  }

  const extractPackageName = (id) => {
    if (!id.includes('node_modules')) return null

    // 处理 pnpm 的包路径
    if (id.includes('.pnpm')) {
      const matches = id.match(/\.pnpm\/((?:@[^/]+\/)?[^@/]+)@/)
      return matches?.[1] || ''
    }

    // 处理 npm/yarn 的包路径
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

  const getVendorGroup = (pkgName) => {
    if (!pkgName) return 'vendor-misc'

    // 精确匹配
    for (const [groupName, packages] of Object.entries(allVendorGroups)) {
      if (packages.includes(pkgName)) {
        return groupName
      }
    }

    // 模糊匹配 - 处理子包
    for (const [groupName, packages] of Object.entries(allVendorGroups)) {
      if (packages.some(lib => pkgName.startsWith(lib) || pkgName.includes(lib))) {
        return groupName
      }
    }

    // 特殊规则：按包名前缀分类
    if (pkgName.startsWith('@types/')) return 'vendor-types'
    if (pkgName.startsWith('@babel/')) return 'vendor-babel'
    if (pkgName.startsWith('@vue/')) return 'vendor-vue-core'
    if (pkgName.startsWith('@vueuse/')) return 'vendor-vue-ecosystem'
    if (pkgName.startsWith('@hhorg/')) return 'vendor-hh-sdk'

    return 'vendor-misc'
  }

  return (id) => {
    const pkgName = extractPackageName(id)

    if (!pkgName) return null

    const group = getVendorGroup(pkgName)

    // 开发环境输出详细信息
    if (process.env.NODE_ENV === 'development') {
      console.log(`📦 [Chunk Strategy] ${pkgName} → ${group}`)
    }

    return group
  }
}
