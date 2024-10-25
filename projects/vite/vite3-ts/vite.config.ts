import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'"
  },
  server: {
    // https 选项需要开启
    https: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  plugins: [react(), mkcert()]
})
