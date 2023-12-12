const path = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'none',
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
    entry3: './src/entry3.js'
    // index: './src/maia.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: path.resolve('src'), // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 默认值async,
      maxInitialRequests: 3,
      maxAsyncRequests: 5,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
    // 默认配置
    /* splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    } */
  },
  plugins: [new BundleAnalyzerPlugin()]
}
