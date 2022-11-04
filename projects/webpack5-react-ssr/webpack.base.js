/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  mode: __DEV__ ? 'development' : 'production',
  output: {
    clean: true,
    publicPath: '/',
    path: path.join(__dirname, './dist'),
    assetModuleFilename: '[name].[contenthash:4][ext]',
    filename: 'js/[name].[chunkhash:16].js',
    chunkFilename: 'js/[name].[chunkhash:16].js'
  },
  resolve: {
    alias: {
      '@': path.resolve('./src')
    },
    extensions: ['.ts', '.js', '.tsx', 'jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx$/,
        loader: 'babel-loader'
      }
    ]
  }
}

