const http = require("http")
const url = require('url')
const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')

// const server = http.createServer((req, res) => {})
/**
 * @param {Buffer} data
 */
const fileHandle = (data) => {
  return new Promise((resolve, reject) => {
    const bufStr = data.toString('binary')
    /* 注意这里的坑: 转字符串必须设置编码, 否则默认utf8 */
    const res = /filename="([\w\W]+?)"[^]+(?=Content-Type: [^\r\n]+[\r\n]+([^]+)(?=[\r\n]+----))/gi.exec(bufStr)
    const [, filename, content] = res
    const ws = fs.createWriteStream(path.join(__dirname, `/assets/${ filename }`), { encoding: 'binary' })
    const rs = Readable.from(content)
    rs.pipe(ws)
    rs.on('end', resolve)
  })
}

const server = new http.Server((req, res) => {
  const { pathname, query } = url.parse(req.url)
  // console.log(pathname, req.method);
  const data = []
  if (pathname === '/upload' && req.method === 'POST') {
    req.on('data', (chunk) => {
      data.push(chunk)
    })

    req.on('end', async () => {
      const ret = Buffer.concat(data)
      await fileHandle(ret)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        code: 200,
        data: "文件上传成功!"
      }))
    })
  } else {
    res.end(`
      < div > 欢迎访问我的上传服务...</div >
    <div>服务正在运行中...</div>`
    )
  }
})

server.listen(8088, () => {
  console.log("服务已开启");
})
