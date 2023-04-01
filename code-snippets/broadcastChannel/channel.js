const getId = (name) => {
  const key = `channel-${name}`
  let id = +localStorage.getItem(key)
  if (id === undefined) id = 0
  id++
  localStorage.setItem(key, id)
  return id
}

const send = (channel, msg) => {
  channel.postMessage({
    id: channel.id,
    msg
  })
}

/*
    主机: ready发出
    监听机: 收到消息ready-call

    主机: 卸载
*/

export default function Channel(name) {
  const channel = new BroadcastChannel(name)
  channel.id = getId(name)
  channel.listeners = new Set()
  send(channel, 'scan')

  window.addEventListener('unload', () => {
    send(channel, 'unload')
  })

  channel.addEventListener('message', (e) => {
    if (e.data.msg === 'scan') {
      send(channel, 'done')
      channel.listeners.add(e.data.id)
    } else if (e.data.msg === 'done') {
      channel.listeners.add(e.data.id)
    } else if (e.data.msg === 'destroyed') {
      channel.listeners.delete(e.data.id)
    }
    console.log('bus', channel)
  })

  return channel
}

