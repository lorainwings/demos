// http真实服务器

const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)

  const arr = []
  req.on('data', (chunk) => {
    arr.push(chunk)
  })

  req.on('end', () => {
    const data = Buffer.concat(arr).toString()

    if (req.headers['content-type'] === 'application/json') {
      const ret = JSON.parse(data)
      res.end(
        JSON.stringify({
          code: 200,
          data: ret
        })
      )
    } else if (
      req.headers['content-type'] === 'application/x-www-form-urlencoded'
    ) {
      const ret = {}
      const search = new URLSearchParams(data)
      Array.from(search.entries()).forEach((k, v) => {
        console.log(k, v)
        ret[k] = v
      })
      res.end(JSON.stringify(ret))
    }
  })
})

server.listen(1234, () => {
  console.log('真实服务已开启')
})
