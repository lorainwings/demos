import { preview } from 'vite'
import { getEnterPages } from './utils.mjs'
import { getDefineConfig } from './config.mjs'

const input = await getEnterPages()
const config = await getDefineConfig(input)
const previewServer = await preview({
  ...config,
  preview: {
    port: 4173,
    open: true
  }
})
previewServer.printUrls()
