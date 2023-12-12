const Router = require('@koa/router')

const router = new Router({ prefix: '/users' })

// get /users/abc?name=zhangdan&age=18
router.get('/:id', (ctx, next) => {
  console.log('%c------>[LOG:params]', 'color: fuchsia', ctx.request.params)
  console.log('%c------>[LOG:query]', 'color: fuchsia', ctx.request.query)
  ctx.response.body = '成功解析params和query'
})

router.post('/', (ctx, next) => {
  console.log('%c------>[LOG:form-data]', 'color: fuchsia', ctx.request.body)
  ctx.response.body = '成功解析form-data参数'
})

module.exports = router
