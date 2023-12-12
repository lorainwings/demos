const express = require('express')
const path = require('path')
const { renderToString } = require('@vue/server-renderer')

// 通过 manifest 文件，找到正确的产物路径
const clientManifest = require('./dist/manifest-client.json')
const serverManifest = require('./dist/manifest-server.json')
const serverBundle = path.join(__dirname, './dist', serverManifest['server.js'])
// 这里就对标到 `entry-server.js` 导出的工厂函数
const createApp = require(serverBundle).default

const server = express()

server.get('/', async (req, res) => {
  const app = createApp()

  const html = await renderToString(app)
  const clientBundle = clientManifest['client.js']
  /* 一套代码, 返回浏览器后, 浏览器再执行一次, 叫做同构 */
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
          <title>Vue SSR Example</title>
        </head>
        <body>
          <!-- 注入组件运行结果 -->
          <div id="app">${html}</div>
          <!-- 注入客户端代码产物路径 -->
          <!-- 实现 Hydrate 效果 -->
          <script src="${clientBundle}"></script>
        </body>
    </html>
    `)
})

server.use(express.static('./dist'))

server.listen(3000, () => {
  console.log(
    '%c------>[LOG:]Webpack ssr server is running on http://localhost:3000',
    'color: fuchsia'
  )
})
