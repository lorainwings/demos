const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: "none",
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
    entry3: './src/entry3.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: path.resolve('src'), // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 默认值async,
      maxInitialRequests: 3,
      maxAsyncRequests: 5,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins:[
    new BundleAnalyzerPlugin()
  ]
};