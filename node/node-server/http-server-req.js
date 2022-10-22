/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-19 19:53:59
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-20 00:51:57
 * @FilePath: /demos/node/node-server/http-server-req.js
 * @Description:  查看http请求消息
 */

const http = require('http')

// http协议的请求体包含 请求行 + 请求头 + 空行 + 请求体 组成

/* req请求是可读流  res是可写流 */
const server = http.createServer((req, res) => {
  // 请求路径
  console.log(req.path)

  // 请求方式
  console.log(req.method)

  // http版本
  console.log(req.httpVersion)

  // 请求头
  console.log(req.headers)

  // 请求体
  const bufArr = []
  req.on('data', (chunk) => {
    buf.push(chunk)
  })

  req.on('end', () => {
    console.log(Buffer.concat(bufArr).toString())
  })
})

server.listen(1234, () => {
  console.log('http服务已开启')
})
