/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-20 11:41:21
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-22 01:44:57
 * @FilePath: /demos/node/node-fsever/mian.js
 * @Description: node 实现的静态文件服务器
 */
const http = require('http')
const url = require('url')
const path = require('path')
const mime = require('mime-types')
const { promises: fs } = require('fs') // 获取promise版本fs
const { createReadStream } = require('fs')
const { promisify } = require('util')
const ejs = require('ejs')

module.exports = class Server {
  constructor(config) {
    this.config = {
      port: 1234,
      directory: process.cwd(),
      ...config
    }
  }

  async fileHandle(req, res, absPath) {
    res.statusCode = 200
    res.setHeader('Content-Type', `${mime.lookup(absPath)};charset=utf-8`)
    createReadStream(absPath).pipe(res)
  }

  async directoryHandle(req, res, absPath, decPath) {
    const info = await fs.readdir(absPath)
    const dirs = info.map((item) => {
      const tp = path.join(decPath, item)
      return {
        isFile: Boolean(~path.extname(tp).indexOf('.')),
        path: tp,
        name: item
      }
    })

    const renderFile = promisify(ejs.renderFile)
    const template = path.resolve(__dirname, 'template.ejs')
    /* 当前目录的父目录获取方式 */
    /* path.dirname(decPath) */
    /* path.join(decPath,'../') */
    const ret = await renderFile(template, {
      dirs,
      isRoot: decPath === '/',
      title: path.basename(absPath),
      prev: path.dirname(decPath)
    })
    res.end(ret)
  }

  errorHandle(req, res, err) {
    console.log('err:', err)
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('Oops! </br> Not Fount~')
  }

  async serverHandle(req, res) {
    const { pathname } = url.parse(req.url)
    const decPath = decodeURIComponent(pathname)
    const absPath = path.join(this.config.directory, decPath)
    console.log(absPath)
    try {
      const info = await fs.stat(absPath)
      if (info.isFile()) {
        this.fileHandle(req, res, absPath)
      } else {
        this.directoryHandle(req, res, absPath, decPath)
      }
    } catch (err) {
      this.errorHandle(req, res, err)
    }
  }

  start() {
    const server = http.createServer((...args) => this.serverHandle(...args))
    server.listen(this.config.port, () => console.log('静态服务已开启'))
  }
}
