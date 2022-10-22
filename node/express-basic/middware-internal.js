/* 内置及三方中间件使用-参数解析 */
const path = require('path')
const express = require('express')
const multer = require('multer')
const morgan = require('morgan')
const fs = require('fs')
const { USERNAME_ALREADY_EXIST } = require('./const')

const app = express()
const ws = fs.createWriteStream('./logs/access.log', { flags: 'a+' })

/**
 * 日志存储中间件
 * 此方式是全局中间件
 * 局部中间件, 放在第二个参数, 如下面/upload例子
 */
app.use(morgan('combined', { stream: ws }))

/**
 * 静态文件服务中间件
 */
app.use(express.static('./upload-files'))

/**
 * 解析form参数中间件
 * application/x-www-form-urlencoded
 * key=value&key=value
 * body-parse中间件: 早期3.x-4.x内置又拆分出去, 现最新express4.16.x+内置为回调函数
 * { @param } true: 使用第三方qs库  false: 使用Node内置querystring库
 * 参数解析后设置到req.body
 */
app.use(express.urlencoded({ extended: true }))

/**
 * 解析json参数的中间件
 * application/json
 * { name: 'zda', age: 30 }
 * 参数解析后设置到req.body
 */
app.use(express.json())

/**
 * 解析文件中间件
 * multipart/form-data
 * { file: '二进制文件xxx' }
 * 单个解析上传文件, 图片的字段名photos
 * req.body will hold the text fields, if there were any
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './upload-files'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`)
  }
})
const upload = multer({ /* dest: './upload-files' */ storage })
app.post('/upload', upload.single(`photos`), (req, res, next) => {
  /* 上传成功后的文件信息 */
  console.log(req.file)
  console.log(req.body)
  res.json({ code: 200, data: '文件已上传成功!' })
})

/**
 * 解析form-data参数的中间件
 * multipart/form-data
 * 批量解析上传图片
 * uploadBatch.array("photos", 12)最多上传12张图, 图片的字段名photos
 * req.body will contain the text fields, if there were any
 */
const uploadBatch = multer({ storage })
app.post(
  '/upload-batch',
  uploadBatch.any(),
  /* uploadBatch.array("photos", 12) */
  (req, res, next) => {
    /* 上传成功后的文件信息 */
    console.log(req.files)
    console.log(req.body)
    res.json({ code: 200, data: '文件已批量上传成功!' })
  }
)

/**
 * 解析Get请求中的params参数
 * 如: /users/:id
 */
app.get('/users/:id/:sex', (req, res, next) => {
  console.log(req.params)
  res.json({
    code: 200,
    data: { id: req.params.id, sex: req.params.sex, name: '张三', age: 30 }
  })
})

/**
 * 解析Get请求中的query参数
 * 如: /users?id=24&sex=female
 */
app.get('/users', (req, res, next) => {
  console.log(req.query)
  res.type('application/json')
  res.end(
    JSON.stringify({
      code: 200,
      data: { id: req.query.id, sex: req.query.sex, name: '张三', age: 30 }
    })
  )
})

/**
 * 响应数据的设置
 * res.end无法设置json, 需要使用res.json
 * res.status设置响应状态
 */
app.get('/test', (req, res, next) => {
  console.log(req.body)
  res.status(201)
  res.json({ code: 201, data: 'test数据已响应' })
})

/**
 * 错误处理方式
 * 通过next抛出错误, 后由错误处理中间件统一处理
 */
app.post('/register', (req, res, next) => {
  // 查询数据库, 用户是否存在....
  const isExist = req.body.isExist === '2'
  if (!isExist) res.json('注册成功!')
  else next(new Error(USERNAME_ALREADY_EXIST))
})

/**
 * 统一错误处理中间件
 * 第一个参数是错误对象
 */
app.use((err, req, res, next) => {
  const respon = { code: 400, message: '' }
  switch (err.message) {
    case USERNAME_ALREADY_EXIST:
      respon.message = '用户名已存在'
      break
    default:
      respon.message = 'NOT FOUND'
  }
  res.status(respon.code)
  res.json(respon)
})

app.listen(8088, () => {
  console.log('express服务已开启, 端口8088')
})
