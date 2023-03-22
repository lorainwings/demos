import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      // 导出模块声明
      exposes: {
        "./Button": "./src/components/Button.vue",
        "./App": "./src/App.vue",
        "./utils": "./src/utils.js",
      },
      // 共享依赖声明
      shared: ["vue"],
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true
  }
})
