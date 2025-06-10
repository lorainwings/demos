import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite' //组件自动按需引入
import { VantResolver } from 'unplugin-vue-components/resolvers'
import autoImport from 'unplugin-auto-import/vite' //自动导入 Composition API
import path from 'path'

import mkcert from 'vite-plugin-mkcert'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { analyticsResolver } from '@hhorg/analytics/resolver'
import { createChunkStrategy } from './chunk-strategy.mjs'
// 构建分析工具
import { visualizer } from 'rollup-plugin-visualizer'

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

// 是否启用分析模式
const isAnalyze = process.env.ANALYZE === 'true'

/**
 * @type { import('vite').UserConfig }
 * */
export const getDefineConfig = (input) => ({
  root: path.resolve(__dirname, '../src/pages'),
  publicDir: path.resolve(__dirname, '../public'),
  base: './',
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('wx-open-launch')
        }
      }
    }),
    vueJsx(),
    mkcert(),
    Components({
      resolvers: [VantResolver()]
    }),
    autoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: false,
        filepath: path.resolve(__dirname, '../.eslintrc-auto-import.json'),
        globalsPropValue: true
      },
      dts: true,
      resolvers: [analyticsResolver('vue')]
    }),
    legacy({
      targets: ['Chrome >= 70', 'iOS >= 9', 'Android >= 4.4', 'last 2 versions', '> 0.2%', 'not dead'],
      modernPolyfills: true
    }),
    // 开发工具 (暂时移除VueDevTools以避免版本冲突)
    // 构建分析工具
    isAnalyze &&
      visualizer({
        filename: 'dist/bundle-analysis.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
        template: 'treemap' // sunburst, treemap, network
      })
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
      '@pages': path.join(__dirname, '../src/pages'),
      '@pink': path.join(__dirname, '../src/pages/pink-ribbon'),
      '@xh': path.join(__dirname, '../src/pages/xh-h5'),
      '@JSBridge': path.resolve(__dirname, '../src/JSBridge')
    }
  },
  css: {
    preprocessorOptions: {
      scss: { silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'legacy-js-api'] }
    }
  },
  build: {
    outDir: path.resolve(__dirname, `../dist`), // 指定输出路径
    assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
    emptyOutDir: true, //Vite 会在构建时清空该目录
    rollupOptions: {
      input,
      output: {
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        compact: true,
        manualChunks: createChunkStrategy()
      }
    }
  },
  server: {
    host: true,
    hmr: true,
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false, // 是否开启 https
    proxy: {
      '/api': {
        // target: 'https://test-v2.huihaohealth.com/ha/wfw30/server',
        // target: 'https://ha-xiaohui-xcx.huihaohealth.com/ha/lyxh/server',
        // target: 'https://ha-dev.huihaohealth.com', // 开发环境
        // target: 'http://57e0283e.r31.cpolar.top', // 刘沅良 本地环境
        // target: 'http://dev-xiaohui.huihaohealth.com', // 惠元项目开发环境
        // target: 'https://test-v2.huihaohealth.com/ha/wfw3/server', // 惠元项目测试环境
        target: 'https://test-v2.huihaohealth.com/ha/wfwth/server', // 惠元项目测试环境
        // target: 'http://172.20.150.227:8081', // 惠元项目测试环境
        // target: 'https://test.huihaohealth.com/ha/wfw1/server',
        // target: 'https://ha-dev.huihaohealth.com',
        changeOrigin: true,
        secure: false // 是否开启安全模式
      }
    }
  }
})
