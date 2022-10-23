const Router = require('@koa/router')

const router = new Router({ prefix: '/products' })

router.get('/', (ctx, next) => {
  ctx.response.body = 'get koa products router'
})

router.put('/', (ctx, next) => {
  ctx.response.body = 'put koa products router'
})

module.exports = router

