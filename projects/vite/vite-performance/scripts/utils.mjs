/**
 * 构建工具函数
 *
 * 简洁优雅的工具函数集合，符合开源社区最佳实践
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * 获取项目根目录
 */
export const getProjectRoot = () => path.resolve(__dirname, '..')

/**
 * 获取构建输入配置
 */
export const getBuildInputs = () => {
  const pagesDir = path.resolve(__dirname, '../src/pages')
  const inputs = {}

  // 自动扫描页面目录
  if (fs.existsSync(pagesDir)) {
    const apps = fs.readdirSync(pagesDir)

    apps.forEach((app) => {
      const appDir = path.join(pagesDir, app)
      if (fs.statSync(appDir).isDirectory()) {
        const mainFile = path.join(appDir, 'main.ts')
        if (fs.existsSync(mainFile)) {
          inputs[app] = mainFile
        }
      }
    })
  }

  return inputs
}

/**
 * 获取入口页面配置 - 兼容旧版本
 */
export const getEnterPages = getBuildInputs

/**
 * @deprecated 使用 chunk-strategy.mjs 中的新分包策略
 */
export const createVendorChunksStrategy = () => {
  console.warn('⚠️ createVendorChunksStrategy 已废弃，请使用 chunk-strategy.mjs')

  return (id) => {
    if (!id.includes('node_modules')) return null

    const packageName = id.split('node_modules/')[1]?.split('/')[0]
    if (!packageName) return 'vendor-misc'

    if (['vue', 'vue-router', 'pinia'].some((pkg) => packageName.includes(pkg))) {
      return 'vendor-vue'
    }
    if (['vant'].includes(packageName)) {
      return 'vendor-ui'
    }
    if (['lodash', 'dayjs', 'axios'].some((pkg) => packageName.includes(pkg))) {
      return 'vendor-utils'
    }
    if (['echarts', 'video.js', 'swiper'].some((pkg) => packageName.includes(pkg))) {
      return 'vendor-media'
    }
    if (packageName.startsWith('@hhorg/')) {
      return 'vendor-business'
    }

    return 'vendor-misc'
  }
}
