const fs = require('fs')
const EventEmitter = require('events')
const Queue = require('./queue')

class CustomWriteStream extends EventEmitter {
  constructor(
    path,
    {
      flags = 'w',
      mode = 0o666,
      autoClose = true,
      start = 0,
      encoding = 'utf8',
      highWaterMark = 16 * 1024
    } = {}
  ) {
    super()
    this.path = path
    this.flags = flags
    this.mode = mode
    this.autoClose = autoClose
    this.start = start
    this.encoding = encoding
    this.highWaterMark = highWaterMark

    this.fd = null
    this.writeOffset = this.start // 写入偏移量
    this.writing = false
    this.writeLen = 0
    this.needDrain = false
    this.cache = new Queue()

    this.open()
  }

  open() {
    console.log('open')
    fs.open(this.path, this.flags, (err, fd) => {
      if (err) return this.emit('error', err)
      this.fd = fd
      this.emit('open', fd)
    })
  }

  // 真正的写操作函数
  _write(chunk, encoding, cb) {
    // 写入操作放入异步, 导致fd是undefined
    if (typeof this.fd !== 'number') {
      return this.once('open', () => this._write(chunk, encoding, cb))
    }
    fs.write(
      this.fd,
      chunk,
      this.start,
      chunk.length,
      this.writeOffset,
      (err, writtenBytes) => {
        this.writeOffset += writtenBytes // 偏移量移动
        this.writeLen -= writtenBytes

        cb && cb()
      }
    )
  }

  _clearBuffer() {
    let data = this.cache.deQueue()
    if (data) {
      this._write(data.element.chunk, data.element.encoding, () => {
        data.element.cb && data.element.cb()
        this._clearBuffer()
      })
    } else {
      if (this.needDrain) {
        this.needDrain = false
        this.emit('drain')
      }
    }
  }

  write(chunk, encoding, cb = () => {}) {
    chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    // 调用多次write会积压writeLen, 生产速度远大于消费速度
    this.writeLen += chunk.length
    let flag = this.writeLen < this.highWaterMark
    this.needDrain = !flag

    if (this.writing) {
      // 当前正在执行写入, 所以内容应该排队
      this.cache.enQueue({ chunk, encoding, cb })
    } else {
      this.writing = true
      // 当前不是正在写入, 那么执行写入
      this._write(chunk, encoding, () => {
        cb()
        // 清空排队缓存区
        this._clearBuffer()
      })
    }
    return flag
  }
}

/* const ws = new CustomWriteStream('./test.txt', { highWaterMark: 3 })

ws.on('open', (fd) => {
  console.log(fd);
})

let flag = ws.write('1', 'utf8', () => {
  console.log('ok1');
})

console.log(flag);

flag = ws.write('10', 'utf8', () => {
  console.log('ok2');
})
flag = ws.write('asdg', 'utf8', () => {
  console.log('ok2');
})
flag = ws.write('11111', 'utf8', () => {
  console.log('ok2');
}) */

/* flag = ws.write('3', 'utf8', () => {
  console.log('ok3');
})

console.log(flag); */

/* ws.on('error', (e) => {
  console.log('---', e);
})
 */

module.exports = CustomWriteStream
