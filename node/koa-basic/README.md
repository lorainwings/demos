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

