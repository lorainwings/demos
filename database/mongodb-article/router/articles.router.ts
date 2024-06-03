import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'
import { uri } from '../config'

const client = new MongoClient(uri)
const router = express.Router()

// POST /articles 创建文章
/*
  1.获取客户端表单数据
  2.数据验证
  3.把验证通过的数据插入数据库中
    成功 → 发送成功响应
    失败 → 发送失败响应
*/
router.post('/', async (req, res, next) => {
  try {
    const { articles } = req.body
    if (!articles || !articles.title || !articles.description || !articles.body) {
      return res.status(422).json({
        code: 422,
        error: '文章数据参数不符合规则要求 '
      })
    }

    await client.connect()
    const collection = client.db('blog').collection('articles')
    articles.createdAt = articles.updatedAt = new Date()
    const ret = await collection.insertOne(articles)
    articles._id = ret.insertedId
    if (ret.insertedId) {
      res.status(201).json({
        code: 201,
        articles,
        message: '文章创建成功'
      })
    }
  } catch (err) {
    // 由错误处理中间件处理
    next(err)
  }

})

// GET /articles 按页查询文章
router.get('/', async (req, res, next) => {
  try {
    const { _page = 1, _size = 10 } = req.query
    const page = parseInt(_page)
    const size = parseInt(_size)
    await client.connect()
    const collection = client.db('blog').collection('articles')
    // 分页查询
    const ret = await collection
      .find() // 查询数据
      .skip((page - 1) * size) // 跳过多少条
      .limit(size) // 从跳过处开始取多少条
    const articles = await ret.toArray()
    const count = articles.length
    res.json({ code: 200, articles, count })
  } catch (e) {
    next(e)
  }
})


// GET /articles/:id 查询单个文章
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    await client.connect()
    const collection = client.db('blog').collection('articles')
    const article = await collection.findOne({ _id: ObjectId.createFromHexString(id) })
    res.json({ code: 200, article })
  } catch (e) {
    next(e)
  }
})


// PATCH /articles/:id  更新单个文章
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    await client.connect()
    const collection = client.db('blog').collection('articles')
    const ret = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: { ...req.body, updateAt: new Date() } }
    )
    const article = await collection.findOne({ _id: ObjectId.createFromHexString(id) })
    if (ret.modifiedCount) {
      res.json({ code: 200, article, message: '文章更新成功' })
    }
  } catch (e) { next(e) }
})



export default router
