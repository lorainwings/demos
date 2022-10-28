const path = require('path')
const Koa = require('koa')
const Router = require('@koa/router')
const multer = require('@koa/multer')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')

const app = new Koa()
const userRouter = new Router({ prefix: '/users' })
const { USERNAME_IS_EXIST, ACCOUNT_INFO_ERROR } = require('./const')

/**
 * 静态文件服务
 */
app.use(static('./static'))

/**
 * 解析form参数中间件
 * application/x-www-form-urlencoded
 * application/json
 */
app.use(bodyParser())

/**
 * 解析文件中间件
 * multipart/form-data, 也包括当中的文本字段
 * { file: '二进制文件xxx' }
 */
const storage = multer.diskStorage({
  destination: (ctx, file, cb) => cb(null, './upload-files'),
  filename: (ctx, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`)
  }
})
const upload = multer({ storage })

/**
 * 路由处理中间件
 */
app.use(userRouter.routes())
/* 用于响应OPTIONS请求(带有Allow methods标头的请求)，以及在适当时使用405 Method Not Allowed和响应。501 Not Implemented */
app.use(userRouter.allowedMethods())

/**
 * 直接解析query及params, 不需要借助第三方中间件
 * GET /users/abc?name=zhangdan&age=18
 * 可以使用ctx.query 和 ctx.params来取参数
 */
userRouter.get('/query/:id', (ctx, next) => {
  console.log(
    '%c------>[LOG:params]',
    'color: fuchsia',
    ctx.request.params,
    ctx.params
  )
  console.log(
    '%c------>[LOG:query]',
    'color: fuchsia',
    ctx.request.query,
    ctx.query
  )
  ctx.response.body = {
    code: 200,
    data: {
      params: ctx.request.params,
      query: ctx.request.query
    },
    cotent: '成功解析params和query'
  }
})

/**
 * 可以解析json以及x-www-form-urlencoded数据
 */
userRouter.post('/', (ctx, next) => {
  console.log('%c------>[LOG:form-data]', 'color: fuchsia', ctx.request.body)
  ctx.response.body = {
    code: 200,
    data: ctx.request.body,
    content: '已成功解析参数'
  }
})

/**
 * 单个解析上传文件, 图片的字段名photos
 * req.body will hold the text fields, if there were any
 */
userRouter.post('/upload', upload.single(`photos`), (ctx, next) => {
  const { response: res, request: req } = ctx
  /* 上传成功后的文件信息 */
  console.log(ctx.file)
  console.log(req.file)
  console.log(req.body)
  res.body = { code: 200, data: '文件已上传成功!' }
})

/**
 * 批量解析上传图片
 * 也可以使用 uploadBatch.array("photos", 12)最多上传12张图, 图片的字段名photos
 * req.body will contain the text fields, if there were any
 */
userRouter.post('/upload-batch', upload.any(), (ctx, next) => {
  const { response: res, request: req } = ctx
  /* 上传成功后的文件信息 */
  console.log(ctx.files)
  console.log(req.files)
  console.log(req.body)
  res.body = { code: 200, data: '文件已批量上传成功!' }
})

/**
 * 设置客户端响应数据
 * 当不设置状态码时, 且body = null, 则状态码默认为204
 * 当不设置状态码时, 且body有值, 则状态码默认为200
 */
userRouter.get('/response', (ctx, next) => {
  /* string */
  // ctx.response.body = 'string'
  /* Object */
  // ctx.response.body = { name: 'lzd', age: 18 }
  /* Array */
  // ctx.response.body = ['Jim', 'Lucy', 'Lily', 'Han Meimei']
  /* null */
  // ctx.response.body = null
  /* ******************************************************** */
  /* 状态码, 重定向 */
  ctx.status = 301
  ctx.set({ Location: 'http://www.baidu.com' })
})

/**
 * 抛出错误
 */
userRouter.post('/login', (ctx, next) => {
  const isLogin = false
  if (!isLogin) return ctx.app.emit('error', new Error(ACCOUNT_INFO_ERROR), ctx)
})

/**
 * 全局统一处理错误信息
 */
app.on('error', (err, ctx) => {
  switch (err.message) {
    case ACCOUNT_INFO_ERROR:
      ctx.status = 401
      ctx.body = '账户或密码错误'
      break
    default:
      ctx.status = 400
      ctx.body = '发生错误'
  }
})

app.listen(8089, (ctx, next) => {
  console.log('%c=====[LOG:Koa]服务已开启, 端口8089', 'color: fuchsia')
})

