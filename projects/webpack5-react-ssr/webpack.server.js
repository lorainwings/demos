import { merge } from 'webpack-merge'
import path from 'path'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import { fileURLToPath } from 'url'
import base from './webpack.base.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default merge(base, {
  entry: {
    server: path.join(__dirname, './src/entry-server.tsx')
  },
  target: 'node',
  output: {
    // 打包后的结果会在 node 环境使用
    // 因此此处将模块化语句转译为 commonjs 形式
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        loader: './loader/removeCssLoader'
      }
    ]
  },
  plugins: [new WebpackManifestPlugin({ fileName: 'manifest-server.json' })]
})

