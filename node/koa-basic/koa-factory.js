const Koa = require('koa')

const app = new Koa()

/**
 * Koa允许再次设置返回内容res.body
 */
app.use((ctx, next) => {
  const req = ctx.request
  const res = ctx.response
  if (req.url === '/login') {
    if (req.method === 'GET') {
      res.body = '登陆成功'
    }
  } else res.body = 'Hello Koa~'
})

/**
 * Koa所有中间件执行完成之后, 如果都没有返回内容, 那么将由系统返回Not Found
 */
app.listen(8089, (ctx, next) => {
  console.log('%c=====[LOG:Koa]服务已开启, 端口8089', 'color: fuchsia')
})

