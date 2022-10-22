#! /usr/bin/env node

/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-24 20:30:52
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-25 10:44:59
 * @FilePath: /demos/node/node-pdf/bin/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { program } = require('commander')
const { version } = require('../package.json')
const Server = require('../main.js')

const options = {
  '-l, --link [link]': {
    description: 'resource download link',
    example:
      'pdf-do -l https://juejin.cn/book/7086408430491172901/section/7086440845053788196'
  },
  '-r, --range <page>': {
    description: 'resource download page range',
    example: 'pdf-do -r 5-10'
  },
  '-c, --config [config]': {
    description: 'customize the configuration file',
    example: 'pdf-do -c pdf.config.js'
  },
  '-d, --openDebug [openDebug]': {
    description: 'whether to turn on browser debugging',
    example: 'pdf-do -d'
  }
}

const formatConf = (conf, cb) => {
  Object.entries(conf).forEach(([key, val]) => {
    cb(key, val)
  })
}

formatConf(options, (cmd, val) => {
  program.option(cmd, val.description)
})

program.on('--help', () => {
  console.log('\nExample:')
  formatConf(options, (_, val) => {
    console.log(`\xa0\xa0${val.example}`)
  })
})

/* 启动解析 */
program.name('pdf-do').version(version)
if (!process.argv.slice(2).length) program.help()
program.parse()

/* 开启服务 */
new Server(program.opts()).start()
