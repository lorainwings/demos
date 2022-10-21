/* 内置中间件使用 */

const express = require('express')

const app = express()

/**
 * 解析form参数中间件
 * application/x-www-form-urlencoded
 * key=value&key=value
 * body-parse中间件: 早期3.x-4.x内置又拆分出去, 现最新express4.16.x+内置为回调函数
 * { @param } true: 使用第三方qs库  false: 使用Node内置querystring库
 */
app.use(express.urlencoded({ extended: true }))
/**
 * 解析json参数的中间件
 * application/json
 * { name: 'zda', age: 30 }
 */
app.use(express.json())

app.get('/test', (req, res, next) => {
  console.log(req.body);
})

app.listen(8088, () => {
  console.log("express服务已开启, 端口8088");
})
