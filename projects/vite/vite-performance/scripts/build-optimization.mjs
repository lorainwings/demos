/**
 * 企业级构建优化配置
 * 
 * 基于大型开源项目最佳实践：
 * - Vue 3 官方项目
 * - Vite 官方项目  
 * - Element Plus
 * - Ant Design Vue
 * - Nuxt.js
 * 
 * 优化策略：
 * 1. 智能代码分割
 * 2. Tree Shaking 优化
 * 3. 压缩和混淆
 * 4. 资源优化
 * 5. 缓存策略
 */

import { defineConfig } from 'vite'
import { resolve } from 'path'

/**
 * 获取优化的构建配置
 */
export function getOptimizedBuildConfig(baseConfig) {
  return {
    ...baseConfig,
    build: {
      ...baseConfig.build,
      
      // 构建目标 - 支持现代浏览器
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      
      // 启用 CSS 代码分割
      cssCodeSplit: true,
      
      // 资源内联阈值 - 4KB以下内联为base64
      assetsInlineLimit: 4096,
      
      // 启用源码映射 - 生产环境使用hidden-source-map
      sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
      
      // 压缩配置
      minify: 'terser',
      terserOptions: {
        compress: {
          // 移除console和debugger
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
          // 移除无用代码
          dead_code: true,
          // 优化条件表达式
          conditionals: true,
          // 优化布尔值
          booleans: true,
          // 移除未使用的变量
          unused: true,
          // 内联函数
          inline: 2,
          // 优化循环
          loops: true,
          // 移除重复代码
          reduce_vars: true
        },
        mangle: {
          // 混淆变量名
          toplevel: true,
          // 保留函数名（用于调试）
          keep_fnames: process.env.NODE_ENV !== 'production'
        },
        format: {
          // 移除注释
          comments: false
        }
      },
      
      // Rollup 配置
      rollupOptions: {
        ...baseConfig.build?.rollupOptions,
        
        // 外部依赖 - 可选择使用CDN
        external: getExternalDependencies(),
        
        // 输出配置
        output: {
          ...baseConfig.build?.rollupOptions?.output,
          
          // 文件命名策略
          entryFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId
            if (facadeModuleId) {
              // 页面入口文件
              if (facadeModuleId.includes('/pages/')) {
                const pageName = facadeModuleId.match(/\/pages\/([^\/]+)\//)?.[1]
                return `js/pages/${pageName}-[hash].js`
              }
            }
            return 'js/[name]-[hash].js'
          },
          
          chunkFileNames: (chunkInfo) => {
            // Vendor chunks
            if (chunkInfo.name.startsWith('vendor-')) {
              return `js/vendors/${chunkInfo.name}-[hash].js`
            }
            // 异步chunks
            return 'js/chunks/[name]-[hash].js'
          },
          
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            
            // 根据文件类型分目录
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              return `media/[name]-[hash][extname]`
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
              return `images/[name]-[hash][extname]`
            }
            if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              return `fonts/[name]-[hash][extname]`
            }
            if (ext === 'css') {
              return `css/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          },
          
          // 手动分包策略
          manualChunks: getAdvancedChunkStrategy(),
          
          // 全局变量
          globals: getGlobalVariables()
        },
        
        // 优化配置
        treeshake: {
          // 启用更激进的tree shaking
          moduleSideEffects: false,
          // 移除未使用的导入
          pureExternalModules: true
        }
      },
      
      // 报告压缩后的文件大小
      reportCompressedSize: true,
      
      // 文件大小警告阈值
      chunkSizeWarningLimit: 1000
    },
    
    // 优化依赖预构建
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        'vant',
        'lodash-es',
        'dayjs',
        'axios'
      ],
      exclude: [
        // 排除大型库，使用动态导入
        'echarts',
        'video.js',
        'xgplayer'
      ]
    }
  }
}

/**
 * 获取外部依赖配置（CDN）
 */
function getExternalDependencies() {
  // 生产环境可以考虑使用CDN
  if (process.env.USE_CDN === 'true') {
    return [
      'vue',
      'vue-router',
      'pinia',
      'axios',
      'lodash'
    ]
  }
  return []
}

/**
 * 获取全局变量映射（CDN使用）
 */
function getGlobalVariables() {
  if (process.env.USE_CDN === 'true') {
    return {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'pinia': 'Pinia',
      'axios': 'axios',
      'lodash': '_'
    }
  }
  return {}
}

/**
 * 高级分包策略
 */
function getAdvancedChunkStrategy() {
  return (id) => {
    // 不处理非node_modules的文件
    if (!id.includes('node_modules')) {
      return null
    }
    
    // 提取包名
    const chunks = id.split('node_modules/')[1]
    const packageName = chunks.split('/')[0]
    
    // 核心框架 - 最高优先级缓存
    if (['vue', 'vue-router', 'pinia', '@vue'].some(pkg => packageName.includes(pkg))) {
      return 'vendor-vue-core'
    }
    
    // UI组件库
    if (['vant', '@vant'].some(pkg => packageName.includes(pkg))) {
      return 'vendor-ui'
    }
    
    // 工具库 - 按大小分组
    if (['lodash', 'lodash-es'].includes(packageName)) {
      return 'vendor-lodash'
    }
    
    if (['dayjs', 'date-fns', 'moment'].includes(packageName)) {
      return 'vendor-date'
    }
    
    if (['axios', '@microsoft/fetch-event-source'].includes(packageName)) {
      return 'vendor-http'
    }
    
    // 大型可视化库 - 单独分包
    if (packageName === 'echarts') {
      return 'vendor-echarts'
    }
    
    if (['video.js', 'xgplayer'].includes(packageName)) {
      return 'vendor-video'
    }
    
    if (['swiper'].includes(packageName)) {
      return 'vendor-swiper'
    }
    
    // 图像处理
    if (['html2canvas', 'qrcode', 'image-compressor.js'].includes(packageName)) {
      return 'vendor-image'
    }
    
    // 文档处理
    if (['@vue-office/docx', 'pdf-vue3', 'markdown-it', 'marked'].includes(packageName)) {
      return 'vendor-docs'
    }
    
    // 加密和安全
    if (['crypto-js', 'dompurify'].includes(packageName)) {
      return 'vendor-security'
    }
    
    // 业务SDK
    if (packageName.startsWith('@hhorg/')) {
      return 'vendor-business'
    }
    
    // Polyfills
    if (['amfe-flexible', 'array.prototype.at', 'resize-observer-polyfill'].includes(packageName)) {
      return 'vendor-polyfills'
    }
    
    // 开发工具
    if (['vconsole', 'mitt'].includes(packageName)) {
      return 'vendor-dev-tools'
    }
    
    // 其他小型库
    return 'vendor-misc'
  }
}

/**
 * 获取性能优化配置
 */
export function getPerformanceConfig() {
  return {
    // 预加载策略
    preload: {
      // 预加载关键资源
      critical: ['vendor-vue-core', 'vendor-ui'],
      // 预获取次要资源
      prefetch: ['vendor-lodash', 'vendor-date']
    },
    
    // 压缩配置
    compression: {
      gzip: true,
      brotli: true,
      threshold: 1024 // 1KB以上才压缩
    },
    
    // 缓存策略
    cache: {
      // 长期缓存的文件
      longTerm: ['vendor-vue-core', 'vendor-ui', 'vendor-lodash'],
      // 中期缓存的文件
      mediumTerm: ['vendor-date', 'vendor-http', 'vendor-misc'],
      // 短期缓存的文件
      shortTerm: ['pages', 'chunks']
    }
  }
}

/**
 * 获取开发环境优化配置
 */
export function getDevOptimizationConfig() {
  return {
    // 开发服务器优化
    server: {
      // 预热常用文件
      warmup: {
        clientFiles: [
          './src/pages/*/main.ts',
          './src/components/**/*.vue',
          './src/utils/**/*.ts'
        ]
      }
    },
    
    // HMR优化
    hmr: {
      // 排除大型库的HMR
      exclude: ['echarts', 'video.js', 'xgplayer']
    }
  }
}
