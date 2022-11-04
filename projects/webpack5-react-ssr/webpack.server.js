/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  entry: {
    server: path.join(__dirname, './src/entry-server.tsx')
  },
  target: 'node',
  output: {
    clean: false,
    // 打包后的结果会在 node 环境使用
    // 因此此处将模块化语句转译为 commonjs 形式
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        loader: path.resolve(__dirname, './loader/removeCssLoader.cjs')
      }
    ]
  },
  plugins: [new WebpackManifestPlugin({ fileName: 'manifest-server.json' })]
})

