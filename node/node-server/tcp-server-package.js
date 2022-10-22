// 解决粘包版
const net = require('net')
const Transform = require('./data-transform')

const PORT = 1234
const HOST = `localhost`

// 创建服务实例
const server = net.createServer()
let overageBuf = null
const ts = new Transform()

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log(`当前服务已开启, ${HOST}:${PORT}`)
})

// socket是net的一个实例
server.on('connection', (socket) => {
  // 收消息
  socket.on('data', (chunk) => {
    console.log(chunk.toString())

    // 将收到的数据全部缓存起来
    if (overageBuf) {
      chunk = Buffer.concat([overageBuf, chunk])
    }
    let packageLen = 0
    while ((packageLen = ts.getPackageLen(chunk))) {
      // 第一个包的数据
      const packageData = chunk.slice(0, packageLen)
      // 剩余其他包的数据
      chunk = chunk.slice(packageLen)

      const ret = ts.decode(packageData)
      console.log(ret)

      // 解码后的数据回传到客户端
      socket.write(ts.encode(ret.body, ret.serialNo))
    }

    overageBuf = chunk
  })
})

server.on('close', () => {
  console.log('服务端已关闭')
})

server.on('error', () => {
  if (err.code === 'EADDRINUSE') console.log('地址已被占用')
  else console.log(err)
})
