import { MongoClient, ObjectId } from "mongodb"
// Connection URI
const uri = "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server 10
    await client.connect();
    // Establish and verify connection
    const db = client.db("hello");
    const inventoryCollection = db.collection('inventory')
    const res = await inventoryCollection.find().toArray()
    // console.log("Connected successfully to server", res);

    /*
    // 创建文档
    // 插入单个
    const doc = {
      name: "Neapolitan pizza",
      shape: "round",
      toppings: ["San Marzano tomatoes", "mozzarella di bufala cheese"],
    }
    const iRes = await inventoryCollection.insertOne(doc)
    console.log("Document inserted:", iRes, iRes.insertedId)

    // 插入多个
    const mdoc = Array.from({ length: 6 }, (_, idx) => ({ name: `${Math.random().toString(36).slice(8)}`, shape: "round", toppings: [`${Math.random().toString(36).slice(8)}`] }))
    const imRes = await inventoryCollection.insertMany(mdoc)
    console.log("Document inserted Many:", imRes, imRes.insertedCount, imRes.insertedIds)
    */

    /*
    // 删除文档
    const deId = { _id: new ObjectId('6656db02ad94f607a50a192e') }
    const dRes = await inventoryCollection.deleteOne(deId)
    console.log("Document deleted:", dRes, dRes.deletedCount)
     */

    // 更新文档
    const upFit = { "instock.qty": { $gt: 6 } }
    const upDoc = { $set: { name: "Neapolitan pizza", shape: "round", toppings: ["San Marzano tomatoes", "mozzarella di bufala cheese"] } }
    // const uRes = await inventoryCollection.updateOne(upFit, upDoc)
    const uRes = await inventoryCollection.updateMany(upFit, upDoc)
    console.log("Document updated:", uRes, uRes.matchedCount, uRes.modifiedCount)

  } catch {
    console.log('Connect failed')
  } finally {
    // Ensures that the client will close when you finish/error 18
    await client.close();
  }
}

run()
