// 中间代理服务端
// 浏览器 --> 作为代理请求端(client)-->真正的服务端
const http = require('http')

// 真是服务器的相关信息
const options = {
  host: 'localhost',
  port: 1234,
  path: '/?a=1',
  method: 'POST',
  headers: {
    // 'Content-Type': 'text/html', // XML
    // 'Content-Type': 'text/plain', // 纯文本
    // 'Content-Type': 'multipart/form-data', // 上传文件
    // 'Content-Type': 'application/json', // json文件
    'Content-Type': 'application/x-www-form-urlencoded' // 表单请求
  }
}

// json处理
/* req.end(`{
  "name": "客户端",
  "function": "proxy"
}`) */

// 表单数据处理
/* client.end("name=客户端&function=proxy") */


const cserver = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
  })

  // 获取浏览器请求体
  const serverData = []
  req.on('data', (c) => serverData.push(c))
  req.on('end', () => {
    const body = Buffer.concat(serverData)

    // 请求真实服务逻辑
    const client = http.request(options, cres => {
      const data = []
      cres.on('data', (chunk) => {
        data.push(chunk)
      })
      cres.on('end', () => {
        const ret = Buffer.concat(data)
        console.log('响应数据:', ret.toString());
        res.end(ret)
      })
    })

    // 请求体
    client.end(body)
  })
})

cserver.listen(1000, () => {
  console.log("代理客户端已开启");
})
