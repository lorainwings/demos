import { defineConfig } from 'vite'
import vue2 from "@vitejs/plugin-vue2"
import vueJsx from '@vitejs/plugin-vue2-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2(), vueJsx()],
  assetsInclude: [/\.(jpg|png|svg|ttf)/],
})
