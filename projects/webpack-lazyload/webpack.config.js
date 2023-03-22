module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    main: './main.js'
  },
  output: {
    filename: 'main.js', //定义打包后的文件名称
    filename: '[name].[chunkhash:6].js',
    chunkFilename: '[name].[chunkhash:6].js'
  }
}

