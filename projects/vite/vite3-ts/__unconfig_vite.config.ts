let __unconfig_data
const __unconfig_stub = function (data = {}) {
  __unconfig_data = data
}
__unconfig_stub.default = (data = {}) => {
  __unconfig_data = data
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
const __unconfig_default = defineConfig({
  server: {
    // https 选项需要开启
    https: true
  },
  plugins: [react(), mkcert()]
})

if (typeof __unconfig_default === 'function')
  __unconfig_default(...[{ command: 'serve', mode: 'development' }])
export default __unconfig_data
