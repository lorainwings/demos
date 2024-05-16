const path = require('path')
const TestPlugin = require('./plugins/test.plugin')
const CopyWebpackPlugin = require('./plugins/copy.plugin')
const testLoader = path.resolve(__dirname, 'loaders/test.loader')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: testLoader,
          options: {
            name: 'DEMO'
          }
        }
      }
    ]
  },
  plugins: [
    new TestPlugin({
      author: 'Lorain'
    }),
    new CopyWebpackPlugin({
      from: 'public',
      to: 'css',
      ignore: ['**/index.html']
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`
  }
}

