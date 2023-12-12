const expressOnion = () => ({
  stack: [],
  use(cb) {
    if (cb) this.stack.push(cb)
  },
  handle_request(req, res, next) {},
  listen() {
    let idx = 0
    const next = () => {
      while (idx < this.stack.length) {
        const fn = this.stack[idx++]
        return fn({ req: 'request' }, { res: 'response' }, next)
      }
    }
    next()
  }
})

const app = expressOnion()

/**
 * 最后要实现在第一个中间件中设置最后的响应值 aaabbbccc
 * 只有将异步的中间件作为普通函数调用才可以满足
 */
app.use(async (req, res, next) => {
  this.res = 'aaa'
  await next()
  console.log('res', this.res)
})
app.use(async (req, res, next) => {
  this.res += 'bbb'
  await next()
})
app.use(async (req, res, next) => {
  // next()
  return new Promise((rs) => {
    setTimeout(() => {
      this.res += 'ccc'
      rs()
    }, 2000)
  })
})

app.listen()
