import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __DEV__ = process.env.NODE_ENV === 'development'

export default {
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
      '@': resolve('./src')
    },
    extensions: ['.ts', '.js', '.tsx', 'jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.[jt]s[x]?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(c|le|s[ac])ss$/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: 'css/[name].[contenthash:16].css',
      chunkFilename: 'css/[name].[contenthash:16].css'
    })
  ]
}

