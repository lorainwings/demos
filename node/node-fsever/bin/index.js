#! /usr/bin/env node

const { program } = require('commander')
const { version } = require('../package.json')
const Server = require('../main.js')

const options = {
  '-p, --port <num>': {
    'description': 'init server port',
    'example': 'fsever -p 3306'
  },
  '-d, --directory <dir>': {
    'description': 'init server directory',
    'example': 'fsever -d ~/example'
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
  console.log("\nExample:");
  formatConf(options, (_, val) => {
    console.log(`\xa0\xa0${val.example}`);
  })
})


/* 启动解析 */
program
  .name('fsever')
  .version(version)
if (!process.argv.slice(2).length) program.help();
program.parse()

/* 开启服务 */
new Server(program.opts()).start()
