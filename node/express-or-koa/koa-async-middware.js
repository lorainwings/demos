const Koa = require('koa')

const app = new Koa()

/**
 * 需求: 在第一个中间件返回响应aaabbbccc
 * 全是同步中间件时候, 正常返回aaabbbccc
 * 异步中间件时, 使用await next 也能正常返回aaabbbccc
 *
 */

app.use(async (ctx, next) => {
  ctx.message = 'aaa'
  await next()
  ctx.body = `koa-async-middware: ${ctx.message}`
})

app.use(async (ctx, next) => {
  ctx.message += 'bbb'
  await next()
})

app.use(async (ctx, next) => {
  /* ctx.message += 'ccc' // 同步正常返回 */
  await new Promise((rs) => {
    setTimeout(() => {
      ctx.message += 'ccc'
      rs()
    }, 2000)
  })
})

app.listen(8088, () => {
  console.log(
    '%c------>[LOG:Koa async middware server is running]',
    'color: fuchsia'
  )
})
