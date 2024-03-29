/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const base = require('./webpack.base.js')

// 继承自 `webpack.base.js`
module.exports = merge(base, {
  entry: {
    // 入口指向 `entry-client.js` 文件
    client: path.join(__dirname, './src/entry-client.tsx')
  },
  output: {
    clean: false,
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
