const express = require('express')

const app = express()

/**
 * 需求: 在第一个中间件返回响应aaabbbccc
 * 全是同步中间件时候, 很容易实现aaabbbccc
 * 只要有异步中间件就会出现问题, 下面代码只能返回aaabbb
 *
 * 征对异步中间件出现的问题:
 * - 只能将异步的中间件拆分成普通函数, 通过await asyncFn来执行
 * - 如果不强制要求在第一个中间件返回, 可以在最后的异步中间件返回结果
 */
app.use(async (req, res, next) => {
  req.message = 'aaa'
  await next()
  /* 解决异步中间件问题 */
  // await asyncFn(req, res)
  console.log('第一个中间件', req.message)
  res.end(`express-async-middware: ${req.message}`)
})

app.use(async (req, res, next) => {
  req.message += 'bbb'
  // 最后一个中间件调用next, 会默认抛出错误给客户端
  await next()
  console.log('第二个中间件', res.message)
})

/* 异步中间件会出现执行顺序的问题 */
app.use(async (req, res, next) => {
  // res.message += 'ccc' // 同步正常返回
  await new Promise((rs) => {
    setTimeout(() => {
      req.message += 'ccc'
      rs()
    }, 2000)
  })
  console.log('第三个中间件', req.message)
})

/* express中将异步中间件提取出来, 作为普通异步函数执行来解决 */
/* const asyncFn = (req, res) => {
  return new Promise((rs) => {
    setTimeout(() => {
      req.message += 'ccc'
      rs()
    }, 2000)
  })
} */

app.listen(8088, () => {
  console.log(
    '%c------>[LOG:Express async middware server is running]',
    'color: fuchsia'
  )
})

