class CustomDataTransform {
  constructor() {
    // header总长度
    this.packageHeaderLen = 4
    // 序列号
    this.serialNo = 0
    // 序列号长度
    this.serialNoLen = 2
  }

  // 编码
  encode(data, serialNo) {
    const body = Buffer.from(data)

    // 先按照指定长度申请内存作为header
    const headerBuf = Buffer.alloc(this.packageHeaderLen)

    // 消息头->序列号部分, 固定长度
    headerBuf.writeInt16BE(serialNo || this.serialNo)

    // 消息头->消息体长度部分, 非固定长度
    headerBuf.writeInt16BE(body.length, this.serialNoLen)

    if (serialNo === undefined) this.serialNo++

    return Buffer.concat([headerBuf, body])
  }

  // 解码
  decode(buffer) {
    const headerBuf = buffer.slice(0, this.packageHeaderLen)
    const bodyBuf = buffer.slice(this.packageHeaderLen)

    return {
      //读2个字节
      serialNo: headerBuf.readInt16BE(), // 序列号
      bodyLen: headerBuf.readInt16BE(this.serialNoLen), // 消息体长度
      body: bodyBuf.toString() // 消息体
    }
  }

  // 获取数据包长度
  getPackageLen(buffer) {
    if (buffer.length < this.packageHeaderLen) return 0 // 包不完整或者数据还未传输完毕
    // buffer.readInt16BE(this.serialNoLen)刚好读出消息体长度, 上面headerBuf.writeInt16BE(body.length, this.serialNoLen)是匹配的
    return this.packageHeaderLen + buffer.readInt16BE(this.serialNoLen)
  }
}

// 测试代码
/* const trans = new CustomDataTransform()
const str = '这是一段测试文本'

const enRes = trans.encode(str, 1)
console.log('编码后的数据包', enRes)

const deRes = trans.decode(enRes)
console.log('解码后的数据包', deRes)

const lens = trans.getPackageLen(enRes)
console.log('数据包长度', lens) */

module.exports = CustomDataTransform
