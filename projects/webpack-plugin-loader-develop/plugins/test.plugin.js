const { sources } = require('webpack')

module.exports = class TestPlugin {
  constructor(options) {
    // 获取传入的参数
  }

  apply(compiler) {
    // - compiler:
    // 可以理解为webpack实例, 里面存放了webpack的配置信息 和 一些webpack的api,
    // 更多complier的api可以查看webpack官网https://webpack.docschina.org/api/compiler-hooks/#hooks

    // console.log('compiler', compiler)
    compiler.hooks.thisCompilation.tap('TestPlugin', (compilation) => {
      // - compilation:
      // 可以理解为本次编译的上下文, 里面存放了本次编译的所有信息
      compilation.hooks.additionalAssets.tapAsync('TestPlugin', (cb) => {
        // 添加资源的三种方式
        // 第一种
        const content = 'Hello, Lorain!'
        const copyRight = 'DESIGN BY LORAIN~'
        const banner = '====================='
        compilation.assets['description.txt'] = {
          source: () => content,
          size: () => content.length
        }

        // 第二种
        compilation.assets['banner.txt'] = new sources.RawSource(banner)

        // 第三种
        compilation.emitAsset('CopyRight.txt', new sources.RawSource(copyRight))
        cb()
      })
    })
  }
}

