// src/mock/index.js
const path = require('path')
const fs = require('fs')
const url = require('url')

// 设置 mock api 的根目录
const rootDir = path.resolve(__dirname, 'apis')

// 获取所有需要 mock 的 api 列表，比如 ['/rest/a', '/rest/path/b']
const getApiList = (dir) => {
  let apiPaths = []
  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
    const filePath = path.join(dir, dirent.name)
    if (dirent.isFile()) {
      if (filePath.endsWith('.js')) {
        const api = filePath.replace(__dirname, '').replace('.js', '')
        apiPaths.push(api)
      }
    } else if (dirent.isDirectory()) {
      const subApiPaths = getApiList(filePath)
      apiPaths = apiPaths.concat(subApiPaths)
    }
  })
  return apiPaths
}

const apiList = getApiList(rootDir)

console.log('%c------>[LOG:]', 'color: fuchsia', apiList)

module.exports = (app) => {
  apiList.forEach((api) => {
    app.use(async (req, res, next) => {
      const { pathname } = url.parse(req.url)
      const reg = new RegExp(api.slice(5).replace(/[\\\][/]/g, '\\$&'), 'gi')
      if (!reg.test(pathname)) return next()
      const fileName = path.resolve(__dirname, `${api.slice(1)}.js`)
      const { default: fn } = await import(fileName)
      // 返回函数执行结果
      return res.json(fn(req, res))
    })
    /* ['get', 'post'].forEach(method => {
      app[method](api, async (req, res) => {
        const fileName = path.resolve(__dirname, `${api.slice(1)}.js`);
        const { default: fn } = await import(fileName);
        // 返回函数执行结果
        return res.json(fn(req, res));
      });
    }); */
  })
}
