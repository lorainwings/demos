/* 商品信息的路由 */
/**
 * 请求所有商品信息 get /products
 * 请求某个商品信息 get /products/:id
 * 创建某个商品信息 post /products  body: { prodname: xxx }
 * 请求某个商品信息 delete /products/:id
 * 修改某个商品信息 patch /products body: { prodname: xxx }
 */
const express = require('express')

const router = express.Router()

router.get('/lists', (req, res, next) => {
  res.json(['iphone', 'pixel6pro', 'oneplus9pro'])
})

router.post('/lists/:id', (req, res, next) => {
  res.json(`${req.params.id}商品的信息`)
})

router.post('/lists', (req, res, next) => {
  res.json(`products has been created!`)
})

module.exports = router
