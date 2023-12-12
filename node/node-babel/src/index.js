//这里我们通过require方式导入了Koa
// const Koa = require('koa')
// 为node配置好babel后, 再次使用import方式导入Koa
import Koa from 'koa'

const app = new Koa()
// 端口
const PORT = 3000

app.use(async (ctx, next) => {
  ctx.body = {
    code: 0,
    message: 'success',
    data: {}
  }
  next()
})

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}，http://localhost:${PORT}`)
})
