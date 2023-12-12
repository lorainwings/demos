/* 用户信息的路由 */
/**
 * 请求所有用户信息 get /users
 * 请求某个用户信息 get /users/:id
 * 创建某个用户信息 post /users  body: { username: xxx }
 * 请求某个用户信息 delete /users/:id
 * 修改某个用户信息 patch /users body: { username: xxx }
 */
const express = require('express')

const router = express.Router()

router.get('/lists', (req, res, next) => {
  res.json(['zds', 'tom', 'jim'])
})

router.post('/lists/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`)
})

router.post('/lists', (req, res, next) => {
  res.json(`user has been created!`)
})

module.exports = router
