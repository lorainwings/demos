# Koa-basic

`Koa` 是 `express` 同一个团队开发的, 具有更强的异步处理能力

## 中间件

`koa` 注册中间件, **只能通过 `Koa` 实例 `app` 的 `use` 方法来完成**

它并没有提供`methods`的方法来注册中间件, 也没有提供`path`中间件来匹配路径

- app.use([middware])

以下注册方式不存在:

- ~~app.methods([middware]): 如 app.get / app.post~~
- ~~app.use([path],[middware])~~
- ~~app.use([middware1],[middware2],...)~~

## 路由系统

Koa 中没有内置 Router 系统,需要借助第三方中间件完成`@koa/router`

```js
const Router = require('@koa/router')
const userRouter = new Router({ prefix: '/users' })

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

userRouter.post('/', (ctx, next) => {
  console.log('%c------>[LOG:form-data]', 'color: fuchsia', ctx.request.body)
  ctx.response.body = '成功解析form-data参数'
})
```

## 解析请求参数

解析请求参数, 主要分为以下几类

- query | params

该种类型的参数, `Koa`中已经做了支持, 不需要中间件支持

- application/json | application/x-www-form-urlencoded

该种类型参数需要第三方中间件支持: `koa-bodyparser`

- multipart/form-data

该种类型参数需要第三方文件解析中间件: `@koa/multer`

## 返回响应数据

Koa 中, 通过`ctx.response.body`来设置响应给客户端的数据, `ctx.response.status`来设置响应状态码

状态码不自定义时将采用默认值(**200** 或者 **204**), 具体如下:

- 当`ctx.respose.body = null`, 状态码默认被设置为 204
- 当`ctx.respose.body`有值时, 状态码默认被设置为 200

body 可以设置以下类型的值:

- string 字符串数据
- Buffer Buffer 数据
- Stream 流数据
- Object 对象
- Array 数组
- null 不输出内容(此时默认状态码为 204)

其实可以直接使用`ctx.body`来完成相应数据设置, 因为`ctx` 对 `body` 做了代理, 而且**ctx.query 和 ctx.params 也类似**

源码中, 以下对象的属性做了代理:

```js
/**
 * Response delegation.
 */
delegate(proto, 'response')
  .method('attachment')
  .method('redirect')
  .method('remove')
  .method('vary')
  .method('has')
  .method('set')
  .method('append')
  .method('flushHeaders')
  .access('status')
  .access('message')
  .access('body')
  .access('length')
  .access('type')
  .access('lastModified')
  .access('etag')
  .getter('headerSent')
  .getter('writable')

/**
 * Request delegation.
 */

delegate(proto, 'request')
  .method('acceptsLanguages')
  .method('acceptsEncodings')
  .method('acceptsCharsets')
  .method('accepts')
  .method('get')
  .method('is')
  .access('querystring')
  .access('idempotent')
  .access('socket')
  .access('search')
  .access('method')
  .access('query')
  .access('path')
  .access('url')
  .access('accept')
  .getter('origin')
  .getter('href')
  .getter('subdomains')
  .getter('protocol')
  .getter('host')
  .getter('hostname')
  .getter('URL')
  .getter('header')
  .getter('headers')
  .getter('secure')
  .getter('stale')
  .getter('fresh')
  .getter('ips')
  .getter('ip')
```

## 洋葱模型源码流程

Koa 使用洋葱模型的原因:

> 假如不是洋葱模型，我们中间件依赖于其他中间件的逻辑的话，我们要怎么处理？
>
> 比如，我们需要知道一个请求或者操作 db 的耗时是多少，而且想获取其他中间件的信息。在 koa 中，我们可以使用 async await 的方式结合洋葱模型做到。

在执行`new koa()`生成的实例对象中, 有一个实例属性`this.middware`, 用于保存中间件列表

```js
module.exports = class Application extends Emitter {
  constructor(options) {
    super()
    options = options || {}
    this.proxy = options.proxy || false
    this.subdomainOffset = options.subdomainOffset || 2
    this.proxyIpHeader = options.proxyIpHeader || 'X-Forwarded-For'
    this.maxIpsCount = options.maxIpsCount || 0
    this.env = options.env || process.env.NODE_ENV || 'development'
    if (options.keys) this.keys = options.keys
    this.middleware = []
    this.context = Object.create(context)
    this.request = Object.create(request)
    this.response = Object.create(response)
    // util.inspect.custom support for node 6+
    /* istanbul ignore else */
    if (util.inspect.custom) {
      this[util.inspect.custom] = this.inspect
    }
  }
  use(fn) {
    if (typeof fn !== 'function')
      throw new TypeError('middleware must be a function!')
    if (isGeneratorFunction(fn)) {
      deprecate(
        'Support for generators will be removed in v3. ' +
          'See the documentation for examples of how to convert old middleware ' +
          'https://github.com/koajs/koa/blob/master/docs/migration.md'
      )
      fn = convert(fn)
    }
    debug('use %s', fn._name || fn.name || '-')
    this.middleware.push(fn)
    return this
  }
}
```

调用`Koa`实例的`use`方法后, 会将传入的中间件函数进行包装转换后, 推入中间件数组中

当客户端发起请求时, 会触发服务端的处理函数, `Koa`底层是使用 Node 内置`http`模块来完成;

源码如下:

```js
module.exports = class Application extends Emitter {
  // ...其他代码省略
  callback() {
    const fn = compose(this.middleware)
    if (!this.listenerCount('error')) this.on('error', this.onerror)
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res)
      return this.handleRequest(ctx, fn)
    }
    return handleRequest
  }

  handleRequest(ctx, fnMiddleware) {
    const res = ctx.res
    res.statusCode = 404
    const onerror = (err) => ctx.onerror(err)
    const handleResponse = () => respond(ctx)
    onFinished(res, onerror)
    return fnMiddleware(ctx).then(handleResponse).catch(onerror)
  }

  listen(...args) {
    debug('listen')
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }
}
```

请求来临时, 即进入了`http.createServer(fn)`中的回调函数, 也就是执行了`this.callback()`返回的函数`handleRequest`

`handleRequest`中调用`this.createContext`对`req`和`res`进行统一包装和处理

最后再执行`this.handleRequest(ctx, fn)`, 返回`fnMiddleware(ctx).then(handleResponse).catch(onerror)`作为中间件的返回值

注意上面的`fnMiddleware`函数, 是经过`compose(this.middleware)`得到的一个函数

`compose`是第三方库`koa-compose`实现的, 它的内部实现如下:

```js
function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!')
  }
  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
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
```

1:52

