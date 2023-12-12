const express = require('express')

const app = express()

// 通用中间件
// 回调函数作为中间件
// res.end不影响执行下一个中间件, 仅代表结束请求-响应的周期
app.use((req, res, next) => {
  // res.end("第一个中间件结束")
  // 解析参数中间件
  console.log('第一个回调中间件开始')
  if (req.headers['content-type'] === 'application/json') {
    const buf = []
    req.on('data', (c) => buf.push(c))
    req.on('end', () => {
      const datas = Buffer.concat(buf)
      req.body = JSON.parse(datas.toString())
      // next传递参数表示错误, 后续中间件将无法调用
      next()
    })
  } else {
    next()
  }
  console.log('第一个回调中间件结束')
})

// 不能再次res.end, res是一个可写流, 已经结束了
app.use((req, res, next) => {
  console.log('第二个回调中间件开始')
  next()
  console.log('第二个回调中间件结束')
})

// 路径匹配中间件
// app.use(path, callback)
app.use('/home', (req, res, next) => {
  console.log('第三个路径匹配中间件开始')
  console.log('获取到参数', req.body)
  res.end('home middware')
  console.log('第三个路径匹配中间件结束')
})

/* 路径和方法都需要匹配的中间件 */
app.get('/login', (req, res, next) => {
  console.log('路径和方法都需要匹配的中间件')
  next()
})

/* 连续注册中间件 */
app.post(
  '/delete',
  (req, res, next) => {
    console.log('连续中间件1开始')
    next()
    console.log('连续中间件1结束')
  },
  (req, res, next) => {
    console.log('连续中间件2开始')
    next()
    console.log('连续中间件2结束')
  },
  (req, res, next) => {
    console.log('连续中间件3开始')
    res.end('删除成功!')
    console.log('连续中间件3结束')
  }
)

app.listen(8088, () => {
  console.log('express服务已开启, 端口8088')
})

/**
 * 中间件知识点:
 * 先注册先执行
 * 前面的中间件不调用next, 后续将无法调用
 */
