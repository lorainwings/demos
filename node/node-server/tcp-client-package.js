// 解决粘包版
const net = require('net')
const Transform = require('./data-transform')

let overageBuf = null
const ts = new Transform()
const client = net.createConnection({
  port: 1234,
  host: `localhost`
})

const datas = [
  `2. hello, i am client!`,
  `3. hello, i am client!`,
  `4. hello, i am client!`
]

/* 解决方案: 数据通过封包来解决粘包*/
client.on('data', (chunk) => {
  if (overageBuf) {
    chunk = Buffer.concat([overageBuf, chunk])
  }
  let packageLen = 0
  while ((packageLen = ts.getPackageLen(chunk))) {
    const packageData = chunk.slice(0, packageLen)
    chunk = chunk.slice(packageLen)

    const ret = ts.decode(packageData)
    console.log(ret)
  }

  overageBuf = chunk
})

client.write(ts.encode('测试文本11'))
client.write(ts.encode('测试文本22'))
client.write(ts.encode('测试文本33'))
client.write(ts.encode('测试文本44'))
client.write(ts.encode('测试文本55'))
client.write(ts.encode('测试文本66'))
client.write(ts.encode('测试文本77'))

client.on('error', console.log)

client.on('close', () => {
  console.log('客户端断开连接')
})
