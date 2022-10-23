const Koa = require('koa')

const productsRouter = require('./router/products')
const app = new Koa()

app.use(productsRouter.routes())
/**
 * 路由方法统一处理中间件
 * allowedMethods判断某一个method是否支持
 * - 如果已注册, 正常返回
 * - 未注册, 自动报错返回Method Not Allowed, 状态码405
 * 如果请求不支持的方法link、copy、lock, 自动报错返回Not Implemented, 状态码501
 */
app.use(productsRouter.allowedMethods())

app.listen(8089, () => {
  console.log('%c------>[LOG:Koa路由服务正在运行中...]', 'color: fuchsia')
})

