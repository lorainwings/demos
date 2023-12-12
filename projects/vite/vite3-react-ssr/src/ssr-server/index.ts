// src/ssr-server/index.ts
// 后端服务
import express from 'express'
import createSsrMiddleware from './ssr-middleware'

async function createServer() {
  const app = express()
  // 加入 Vite SSR 中间件
  app.use(await createSsrMiddleware(app))

  app.listen(3000, () => {
    console.log('Node 服务器已启动~')
    console.log('http://localhost:3000')
  })
}

createServer()
