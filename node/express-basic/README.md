# Express-basic

Express 是一个路由和中间件的 Web 框架, 它本身的功能非常少

- 本质上是一系列中间件函数的调用

## 中间件

中间件本质是传递给 express 的一个回调函数

该函数接受三个参数:

- 请求对象(request)
- 响应对象(response)
- next 函数(在 express 中定义的用于执行下一个中间件的函数)

## 中间件作用

- 执行任何代码
- 更改请求(request)和响应(response)对象
- 结束请求-响应周期(返回数据)
- 调用栈中的下一个中间件

如果当前中间件功能没有结束请求-响应周期, 必须调用 next()将控制权传递给下一个中间件功能, 否则, 请求将被挂起

## 中间件注册

主要两种注册方式:

- (app | router).use([middware])
- (app | router).methods([args],middware)

其中 methods 指 get、post 等等实例中的 api:

- all
- get
- post
- put
- delete
- patch
- options
- head

## 源码流程整理

源码大致流程梳理, 主要搞清楚以下几个问题:

### 1. 调用 express()创建了什么

当使用 `const = express()`, 源码调用了`createApplication`, 创建了一个函数, 混入了该函数对象上面的方法和属性, 最后返回

```js
// express/lib/express.js
function createApplication() {
  var app = function (req, res, next) {
    app.handle(req, res, next)
  }

  mixin(app, EventEmitter.prototype, false)
  mixin(app, proto, false)

  // expose the prototype that will get set on requests
  app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  // expose the prototype that will get set on responses
  app.response = Object.create(res, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  app.init()
  return app
}
```

### 2. app.use(middware) 内部执行流程

先附上`app.use`源码, 源码中先解析参数, 分离 `path` 和多个回调, 然后通过`this.lazyrouter`实例化了全局路由, 全局路由属性保存在`app.__router`中

```js
app.use = function use(fn) {
  var offset = 0
  var path = '/'

  // default path to '/'
  // disambiguate app.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0]
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1
      path = fn
    }
  }

  var fns = flatten(slice.call(arguments, offset))

  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }

  // setup router
  this.lazyrouter()
  var router = this._router

  fns.forEach(function (fn) {
    // non-express app
    if (!fn || !fn.handle || !fn.set) {
      return router.use(path, fn)
    }

    debug('.use app under %s', path)
    fn.mountpath = path
    fn.parent = this

    // restore .app property on req and res
    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app
      fn.handle(req, res, function (err) {
        setPrototypeOf(req, orig.request)
        setPrototypeOf(res, orig.response)
        next(err)
      })
    })

    // mounted an app
    fn.emit('mount', this)
  }, this)

  return this
}
```

再来看看`this.lazyrouter()`的逻辑, 实例化 Router

```js
// express/lib/application.js
app.lazyrouter = function lazyrouter() {
  if (!this._router) {
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('strict routing')
    })

    this._router.use(query(this.get('query parser fn')))
    this._router.use(middleware.init(this))
  }
}
```

```js
// express/lib/router/index.js
var proto = (module.exports = function (options) {
  var opts = options || {}

  function router(req, res, next) {
    router.handle(req, res, next)
  }

  // mixin Router class functions
  setPrototypeOf(router, proto)

  router.params = {}
  router._params = []
  router.caseSensitive = opts.caseSensitive
  router.mergeParams = opts.mergeParams
  router.strict = opts.strict
  router.stack = []

  return router
})
```

`new Router()`使用工厂模式返回了函数`router`, 且定义了`router`函数和原型, `setPrototypeOf(router, proto)`将原型指向了父 app 函数

`new Router()`返回的`router`函数对象, 既可以调用, 又可以通过 `router.xxx` 来调用 `app` 的原型方法

注意`router`上面定义了一个`stack`数组, 当`app.use(fn1,fn2,fn3)`定义了多个中间件回调函数的话, 就会依次 push 到该 stack 中

### 3. app.listen() 启动服务器流程

`app.listen`是在 app 函数的原型里面定义的方法, 内部实际调用的还是`node`内置模块`http`的 api, 将第一步创建的函数作为了 createServer 的参数

```js
// express/lib/application.js
app.listen = function listen() {
  var server = http.createServer(this)
  return server.listen.apply(server, arguments)
}
```

该部分流程是`express -> http.createServer.listen`, 最后通过 `server.listen.apply(server, arguments)`开启了服务

```js
// this就是app实例, 等同于如下代码
var server = http.createServer(function (req, res, next) {
  app.handle(req, res, next)
})
```

### 4. 用户发送请求, 中间件是如何被回调

该部分流程: `app.handle`->`router.handle`-> `next`

```js
// express/lib/application.js
app.handle = function handle(req, res, callback) {
  var router = this._router

  // final handler
  var done =
    callback ||
    finalhandler(req, res, {
      env: this.get('env'),
      onerror: logerror.bind(this)
    })

  // no routes
  if (!router) {
    debug('no routes defined on app')
    done()
    return
  }

  router.handle(req, res, done)
}
```

```js
// express/lib/application.js
proto.handle = function handle(req, res, out) {
  var self = this

  debug('dispatching %s %s', req.method, req.url)

  var idx = 0
  var protohost = getProtohost(req.url) || ''
  var removed = ''
  var slashAdded = false
  var sync = 0
  var paramcalled = {}

  // store options for OPTIONS request
  // only used if OPTIONS request
  var options = []

  // middleware and routes
  var stack = self.stack

  // manage inter-router variables
  var parentParams = req.params
  var parentUrl = req.baseUrl || ''
  var done = restore(out, req, 'baseUrl', 'next', 'params')

  // setup next layer
  req.next = next

  // for options requests, respond with a default if nothing else responds
  if (req.method === 'OPTIONS') {
    done = wrap(done, function (old, err) {
      if (err || options.length === 0) return old(err)
      sendOptionsResponse(res, options, old)
    })
  }

  // setup basic req values
  req.baseUrl = parentUrl
  req.originalUrl = req.originalUrl || req.url

  next()

  function next(err) {
    var layerError = err === 'route' ? null : err

    // remove added slash
    if (slashAdded) {
      req.url = req.url.slice(1)
      slashAdded = false
    }

    // restore altered req.url
    if (removed.length !== 0) {
      req.baseUrl = parentUrl
      req.url = protohost + removed + req.url.slice(protohost.length)
      removed = ''
    }

    // signal to exit router
    if (layerError === 'router') {
      setImmediate(done, null)
      return
    }

    // no more matching layers
    if (idx >= stack.length) {
      setImmediate(done, layerError)
      return
    }

    // max sync stack
    if (++sync > 100) {
      return setImmediate(next, err)
    }

    // get pathname of request
    var path = getPathname(req)

    if (path == null) {
      return done(layerError)
    }

    // find next matching layer
    var layer
    var match
    var route

    while (match !== true && idx < stack.length) {
      layer = stack[idx++]
      match = matchLayer(layer, path)
      route = layer.route

      if (typeof match !== 'boolean') {
        // hold on to layerError
        layerError = layerError || match
      }

      if (match !== true) {
        continue
      }

      if (!route) {
        // process non-route handlers normally
        continue
      }

      if (layerError) {
        // routes do not match with a pending error
        match = false
        continue
      }

      var method = req.method
      var has_method = route._handles_method(method)

      // build up automatic options response
      if (!has_method && method === 'OPTIONS') {
        appendMethods(options, route._options())
      }

      // don't even bother matching route
      if (!has_method && method !== 'HEAD') {
        match = false
      }
    }

    // no match
    if (match !== true) {
      return done(layerError)
    }

    // store route for dispatch on change
    if (route) {
      req.route = route
    }

    // Capture one-time layer values
    req.params = self.mergeParams
      ? mergeParams(layer.params, parentParams)
      : layer.params
    var layerPath = layer.path

    // this should be done for the layer
    self.process_params(layer, paramcalled, req, res, function (err) {
      if (err) {
        next(layerError || err)
      } else if (route) {
        layer.handle_request(req, res, next)
      } else {
        trim_prefix(layer, layerError, layerPath, path)
      }

      sync = 0
    })
  }
}
```

### 5. next 后为何会执行下一个中间件

`proto.handle`遍历 stack 数组, 逐个执行, 遇到 `next`递归执行`next`, 执行下一个中间件, 当所有中间件执行完成后, 递归的代码再一个一个出栈, 就实现了同步的洋葱模型

在异步执行中间件时，`Express` 并非严格按照洋葱模型执行中间件，而 `KOA` 则是严格遵循的（体现再两者在中间件为异步函数的时候处理会有不同)

Express 使用了递归下钻来执行`next`方法

