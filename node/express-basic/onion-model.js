const stack = []

const onion = {
  use(cb) {
    if (cb) stack.push(cb)
  },
  listen() {
    let idx = 0
    const next = () => {
      while (idx < stack.length) {
        const fn = stack[idx++]
        fn(next)
      }
    }
    next()
  }
}

onion.use((next) => {
  console.log('=====[LOG:1start]')
  next()
  console.log('=====[LOG:1end]')
})
onion.use((next) => {
  console.log('=====[LOG:2start]')
  next()
  console.log('=====[LOG:2end]')
})
onion.use((next) => {
  console.log('=====[LOG:3start]')
  next()
  console.log('=====[LOG:3end]')
})

onion.listen()

