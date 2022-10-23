/* koa的洋葱模型模拟实现 */

function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!')
  }
  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

const KoaOnion = class {
  constructor() {
    // 中间件列表
    this.middlewares = []
  }

  use(fn) {
    this.middlewares.push(fn)
    return this
  }

  listen() {
    const fnMiddleware = compose(this.middlewares)
    const onerror = (err) => console.log('onerror')
    const handleResponse = () => console.log('respond')
    fnMiddleware({}).then(handleResponse).catch(onerror)
  }
}

const app = new KoaOnion()
app.use(async (ctx, next) => {
  console.log('第一个开始')
  next()
  console.log('第一个结束')
})
app.use(async (ctx, next) => {
  console.log('第二个开始')
  await next()
  console.log('第二个结束')
})
app.use(async (ctx, next) => {
  console.log('第三个开始')
  next()
  console.log('第三个结束')
})

app.listen()

