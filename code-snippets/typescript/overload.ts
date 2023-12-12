/* typescript函数重载 */

enum MessageType {
  'Image' = 'Image',
  'Audio' = 'Audio'
}

type Message = {
  id: number
  type: MessageType
  sendMessage: string
}

let messages: Message[] = [
  {
    id: 1,
    type: MessageType.Image,
    sendMessage: '你好!'
  },
  {
    id: 2,
    type: MessageType.Audio,
    sendMessage: '你好2!'
  },
  {
    id: 3,
    type: MessageType.Audio,
    sendMessage: '你好3!'
  }
]

/* 2个重载签名 */
function searchMsg(condition: MessageType): Message[]
function searchMsg(condition: number): Message | undefined

/* 实现签名 */
function searchMsg(condition: MessageType | number) {
  if (typeof condition === 'number') {
    return messages.find((item) => condition === item.id)
  }
  return messages.filter((item) => condition === item.type)
}
