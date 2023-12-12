const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h2>Express Server Get<h2>')
})

app.post('/', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h2>Express Server Get<h2>')
})

app.get('/login', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
  res.end(
    `<form action="/submit" method="post" class="form-example">
      <div class="form-example">
        <label for="username">Enter your username: </label>
        <input type="text" name="username" id="username" required>
      </div>
      <div class="form-example">
        <label for="password">Enter your password: </label>
        <input type="password" name="password" id="password" required>
      </div>
      <div class="form-example">
        <input type="submit" value="Submit!">
      </div>
    </form>`
  )
})
/**
 *
 *
 *
 */
app.post('/submit', (req, res, next) => {
  /**
   * 如果不使用express.urlencoded, 就需要读取流后再解析参数
   * 如下面的代码:
   */
  /* const buf = []
  req.on('data', (c) => buf.push(c))
  req.on('end', () => {
    const r = Buffer.concat(buf)
    console.log(r.toString());
  }) */
  console.log(req.body)
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
  res.end('登录成功!!')
})

app.listen(8088, () => {
  console.log('express服务已开启, 端口8088')
})
