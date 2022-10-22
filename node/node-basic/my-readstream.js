const fs = require('fs')
const EventEmitter = require('events')

class CustomReadStream extends EventEmitter {
  constructor(
    path,
    {
      flags = 'r',
      mode = 0o666, // 八进制:0O666  十进制:438  十六进制:0x1B6
      autoClose = true,
      start = 0,
      end = 0,
      encoding = null,
      highWaterMark = 64 * 1024 // 默认64KB
    } = {}
  ) {
    super()
    this.path = path
    this.flags = flags
    this.mode = mode
    this.autoClose = autoClose
    this.start = start
    this.end = end
    this.encoding = encoding
    this.highWaterMark = highWaterMark

    this.fd = null
    this.readOffset = this.start // 写入偏移量

    this.open()

    // 监听注册的事件,监听data事件时, 开始读取数据
    this.on('newListener', (type) => {
      if (type === 'data') this.read()
    })
  }

  close() {
    fs.close(this.fd, () => {
      this.emit('close')
    })
  }

  read() {
    const buf = Buffer.alloc(this.highWaterMark)
    if (typeof this.fd !== 'number') {
      return this.once('open', this.read)
    }

    const needReadLens = this.end
      ? Math.min(this.end - this.readOffset + 1, this.highWaterMark)
      : this.highWaterMark

    fs.read(
      this.fd,
      buf,
      0,
      needReadLens,
      this.readOffset,
      (err, readBytes) => {
        if (readBytes) {
          this.readOffset += readBytes
          this.emit('data', buf.slice(0, readBytes))
          this.read()
        } else {
          this.emit('end')
          this.close()
        }
      }
    )
  }

  open() {
    fs.open(this.path, this.flags, (err, fd) => {
      if (err) return this.emit('error', err)
      this.fd = fd
      this.emit('open', fd)
    })
  }

  pause() {}

  resume() {}

  pipe(ws) {
    this.on('data', (chunk) => {
      const flag = ws.write(chunk)
      if (!flag) this.pause()
    })
    ws.on('drain', this.resume)
  }
}

/* let rs = new CustomReadStream('test.txt', { highWaterMark: 3, end: 7 }) // end可以读到, 总共8个值

rs.on('data', chunk => {
  console.log(chunk);
})

rs.on('close', () => {
  console.log('文件已关闭');
}) */

module.exports = CustomReadStream
