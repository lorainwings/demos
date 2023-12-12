const net = require('net')

const PORT = 1234
const HOST = `localhost`

// 创建服务实例
const server = net.createServer()

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log(`当前服务已开启, ${HOST}:${PORT}`)
})

// socket是net的一个实例
server.on('connection', (socket) => {
  // 收消息
  socket.on('data', (data) => {
    const str = data.toString()
    console.log(`服务端: 数据已收到, 内容是 -> ${str}`)

    // 回数据
    socket.write(Buffer.from(`i am server`))
  })
})

server.on('close', () => {
  console.log('服务端已关闭')
})

server.on('error', () => {
  if (err.code === 'EADDRINUSE') console.log('地址已被占用')
  else console.log(err)
})
