# Express-Mock

配合`Webpack-dev-server`使用的 mock 中间件

## 使用方式

```js
const mockMiddware = require('./mock')
const MOCK = process.env.MOCK

// webpack.config.js
// vue.config.js
module.exports = {
  // ... 省略其他
  devServer: {
    // 如果配置有proxy, 一般可以关闭, proxy用于跟后台的测试环境或者本地环境来代理
    proxy: MOCK ? null : proxy
    // mock用于自己本地
    before: MOCK && mockMiddware
  }
}
```

## 目录结构

`mock`目录下配置为服务器的路径, 例如接口路径为 `http://www.xxx.com/api/user/add`, 则我们的目录配置为`mock/user/add.js`

```js
// add.js
module.exports = (req, res) => {
  // 这里可以根据 params 动态返回数据
  const { url, method, params } = req
  return {
    code: '0',
    action: '',
    message: '__________________请求成功了!@##@',
    url: '',
    data: { url: 'https://passport.xx.com/i/mobile/login?redirect=xxx' }
  }
}
```

