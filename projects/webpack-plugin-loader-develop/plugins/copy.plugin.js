const { validate } = require('schema-utils')
const schema = require('./schema.json')
const globbyModule = import('globby')
const path = require('path')
const { createReadStream } = require('fs')
const { sources } = require('webpack')
const { finished } = require('stream/promises')

class CopyWebpackPlugin {
  constructor(options = {}) {
    // 验证是否符合约定
    validate(schema, options, {
      name: 'CopyWebpackPlugin'
    })
    this.options = options
  }

  apply(compiler) {
    // 初始化compilation
    compiler.hooks.thisCompilation.tap('CopyWebpackPlugin', (compilation) => {
      // 添加资源的hooks
      compilation.hooks.additionalAssets.tapAsync(
        'CopyWebpackPlugin',
        async (cb) => {
          // 将from中的资源复制到to中, 输出出去
          const { from, to = '.', ignore } = this.options
          // 1. 过滤掉ignore的文件
          const context = compiler.options.context // 默认为process.cwd()
          const absoluteFromPath = path.isAbsolute(from)
            ? from
            : path.resolve(context, from)
          const { globby } = await globbyModule
          const paths = await globby(absoluteFromPath, { ignore })

          // 2. 读取paths中的所有资源
          const resources = paths.map((p) => {
            return new Promise(async (resolve) => {
              const buf = []
              // basename获取文件名
              const relativePath = path.basename(p)
              // 得到最终的输出路径
              const filename = path.join(to, relativePath)

              const rs = createReadStream(p)
              rs.on('data', (chunk) => buf.push(chunk))
              // rs.on('end', () => {
              //   resolve({
              //     data: Buffer.concat(buf),
              //     filename: path.basename(p)
              //   })
              // })
              await finished(rs)
              resolve({
                filename,
                data: Buffer.concat(buf)
              })
            })
          })

          // 3. 添加compilation中, 输出出去
          const files = await Promise.all(resources)

          files.map((item) => {
            compilation.emitAsset(
              item.filename,
              // 生成webpack格式的资源
              new sources.RawSource(item.data)
            )
          })
          cb()
        }
      )
    })
  }
}

module.exports = CopyWebpackPlugin

