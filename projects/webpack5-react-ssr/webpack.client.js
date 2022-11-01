import path from 'path'
import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import base from './webpack.base.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 继承自 `webpack.base.js`
export default merge(base, {
  entry: {
    // 入口指向 `entry-client.js` 文件
    client: path.join(__dirname, './src/entry-client.tsx')
  },
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  },
  plugins: [
    // 这里使用 webpack-manifest-plugin 记录产物分布情况
    // 方面后续在 `server.js` 中使用
    new WebpackManifestPlugin({ fileName: 'manifest-client.json' }),
    // 自动生成 HTML 文件内容
    new MiniCssExtractPlugin({
      filename: 'index.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Webpack App</title>
      </head>
      <body>
        <div id="app" />
      </body>
      </html>
        `
    })
  ]
})

