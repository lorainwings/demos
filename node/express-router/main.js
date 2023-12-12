/* express路由的使用 */
const express = require('express')
const usersRouter = require('./routers/users.router')
const productsRouter = require('./routers/products.router')

const app = express()

/**
 * 会跟内部路由一起拼接成最后的url
 * /users/lists
 * /products/lists/:id
 */
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(8088, () => {
  console.log('express server is running')
})
