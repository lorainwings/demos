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
/* app.use(async (ctx, next) => {
  console.log('第一个开始')
  next()
  console.log('第一个结束')
})
app.use(async function (ctx, next) {
  console.log('next前，打印时间戳:', new Date().getTime())
  await next()
  console.log('next后，打印时间戳:', new Date().getTime())
})
app.use(async function (ctx, next) {
  console.log('next前，打印url:', ctx.url)
  await next()
  console.log('next后，打印url:', ctx.url)
}) */

// 异步中间件, 结果依旧是洋葱模型的执行流程
/* app.use(async (ctx, next) => {
  console.log('第一个中间件开始')
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`第一个中间件结束, X-Response-Time: ${ms}`)
})

app.use(async (ctx, next) => {
  console.log('第二个中间件开始')
  const start = Date.now()
  let pro = {}
  await next()
  const ms = Date.now() - start
  await new Promise((rs) => {
    setTimeout(() => {
      console.log(`第二个中间件结束, X-Response-Time: ${ms}`)
      rs()
    }, 4000)
  })
})

app.use(() => {
  return new Promise((rs) => {
    console.log('第三个中间件开始')
    setTimeout(() => {
      console.log('第三个中间件结束, Hello World')
      rs()
    }, 3000)
  })
})
*/

app.use(async (ctx, next) => {
  this.res = 'aaa'
  await next()
  console.log('res', this.res)
})
app.use(async (ctx, next) => {
  this.res += 'bbb'
  await next()
})
app.use(async (ctx, next) => {
  // next()
  await new Promise((rs) => {
    setTimeout(() => {
      this.res += 'ccc'
      rs()
    }, 2000)
  })
})

app.listen()

/**
 * flow1的执行流程
 * begin->r1->end
 */
const flow1 = async () => {
  console.log('begin')
  await new Promise((r) => {
    setTimeout(() => r(1000), 1000)
  }).then((v) => {
    console.log('r1', v)
  })
  console.log('end')
}

/**
 * flow2的执行流程
 * begin->r2->end
 */
const flow2 = async () => {
  console.log('begin')
  await Promise.resolve(1000).then((v) => {
    return new Promise((rs) => {
      setTimeout(() => {
        console.log('r2', v)
        rs()
      }, v)
    })
  })
  console.log('end')
}

