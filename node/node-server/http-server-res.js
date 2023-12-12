/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-19 19:53:59
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-20 00:52:07
 * @FilePath: /demos/node/node-server/http-server-res.js
 * @Description: 查看http响应消息
 */

const http = require('http')

/* req请求是可读流  res是可写流 */
const server = http.createServer((req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'application/json;charset=utf-8')

  // 设置响应状态码
  res.statusCode = 200

  // 设置响应体
  res.end(
    JSON.stringify({
      data: [
        {
          name: 'lizhenzhong',
          age: 32
        },
        {
          name: 'dengchao',
          age: 29
        }
      ]
    })
  )
})

server.listen(1234, () => {
  console.log('服务已经开启, 端口1234')
})
