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

## 中间件应用

主要两种应用方式:

- (app | router).use
- (app | router).methods

其中 methods 指 get、post 等等实例中的 api:

- all
- get
- post
- put
- delete
- patch
- options
- head
