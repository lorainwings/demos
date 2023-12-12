const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 9229

app.get('/stream-dmg', (req, res) => {
  const fileName = 'youku.dmg'
  const dmgPath = path.join(__dirname, 'upload-files', fileName) // 替换为你的文件路径

  // 检查文件是否存在
  fs.access(dmgPath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('文件未找到')
      return
    }

    // 设置响应头
    res.setHeader('Content-Type', '	application/octet-stream')
    res.setHeader('Content-Length', fs.statSync(dmgPath).size)
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`)

    // 创建可读流并将其管道连接到响应
    const dmgStream = fs.createReadStream(dmgPath)
    dmgStream.pipe(res)

    // 处理错误
    dmgStream.on('error', (err) => {
      console.error('流错误:', err)
      res.status(500).send('流错误')
    })

    // 响应完成后关闭文件流
    // end 事件是通用的可写流事件，表示数据的写入和流的关闭。
    // finish 事件是 Express 特定的事件，表示响应的成功发送到客户端。
    res.on('finish', () => {
      dmgStream.close()
    })
  })
})

app.listen(port, () => {
  console.log(`服务器已启动，监听端口 ${port}`)
})
