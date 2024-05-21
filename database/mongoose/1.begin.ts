import { MongoClient } from "mongodb"

const url = `mongodb://localhost:27017/`
const client = new MongoClient(url)

const records = [{ name: 'Lucy', age: 28 }, { name: 'Jane', age: 26 }, { name: 'Lily', age: 26 }]

async function run() {
  try {
    await client.connect()
    const db = client.db("hello")

    // 测试数据库连接
    const res = await db.command({ ping: 1 })
    console.log('connect', res);
    const userCollection = db.collection('user')


    /* // 数据的插入
    // 插入一条
    const result = await userCollection.insertOne({ name: 'John Doe', age: 28 })
    console.log('Add One', result);
    // 插入多条
    const result1 = await userCollection.insertMany(records)
    console.log('Add Many', result1); */


    // 数据的查询
    // 查询一条
    const resFind = await userCollection.findOne({ name: 'John Doe' })
    console.log('Find One-----', resFind);
    // 查询多条, 返回的是指针类
    const cursor = userCollection.find({ name: 'John Doe' })
    // 使用遍历
    for await (const doc of cursor) {
      console.log('Find of-----', doc);
    }
    // 直接转化为数组(不建议, 会导致内存爆掉)
    const resFindMany = await userCollection.find({ name: 'John Doe' }).toArray()
    console.log('Find Array', resFindMany);

  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

run()
