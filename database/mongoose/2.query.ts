import { MongoClient } from "mongodb"

const url = `mongodb://localhost:27017/`
const client = new MongoClient(url)

async function run() {
  try {
    await client.connect()
    const db = client.db("hello")

    // 测试数据库连接
    const res = await db.command({ ping: 1 })
    console.log('connect', res);
    const userCollection = db.collection('user')

    // 条件查询
    // 比较操作符
    const result = await userCollection.find({ age: { $lt: 28 } }).toArray()
    // console.log('result', result);

    // 逻辑与操作符
    const result1 = await userCollection.find({ $and: [{ age: { $lt: 28 } }, { name: 'Jane' }] }).toArray()
    // console.log('result1', result1);

    // 逻辑或操作
    const result2 = await userCollection.find({ $or: [{ age: { $gte: 28 } }, { name: 'Lily' }] }).toArray()
    // console.log('result2', result2);

    // 元素操作符
    const result3 = await userCollection.find({ hobby: { $exists: true } }).toArray()
    // console.log('result3', result3);
    const result4 = await userCollection.find({ age: { $type: 'string' } }).toArray()
    console.log('result4', result4);



  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

run()
