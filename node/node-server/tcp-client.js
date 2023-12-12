const net = require('net')

const client = net.createConnection({
  port: 1234,
  host: `localhost`
})

const datas = [
  `2. hello, i am client!`,
  `3. hello, i am client!`,
  `4. hello, i am client!`
]

client.on('connect', (rs) => {
  /*  多条数据一起发送会出现粘包问题 */
  /*  client.write('hello, i am client!')
   client.write('hello, i am client!')
   client.write('hello, i am client!')
   client.write('hello, i am client!') */

  /* 解决方案: 每条数据发送之间增加延时 */
  client.write('1. hello, i am client!')
  for (let i = 0; i < datas.length; i++) {
    // ((v, i) => {
    setTimeout(() => {
      client.write(datas[i])
    }, 1000 * (i + 1))
    // })(datas[i], i)
  }
})

client.on('data', (chunk) => {
  console.log(`客户端: 数据已收到, 内容是->${chunk.toString()}`)
})

client.on('error', console.log)

client.on('close', () => {
  console.log('客户端断开连接')
})
