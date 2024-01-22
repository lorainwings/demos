import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import virtualCalc from "./plugins/virtual-plugin-calc"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), virtualCalc()],
  resolve: {
    alias: {
      '@styles': '/src/assets/styles',
      '@': '/src'
    }
  },
  server: {
    host: '::',
    port: 3000
  }
})
