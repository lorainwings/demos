const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    // html-webpack-plugin
    // https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({
      title: 'Test Configuration',
      template: path.resolve(__dirname, './index.html'),
      chunks: ['main']
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8081,
    proxy: {
      '/mock': 'http://localhost:8080'
    }
  }
}
