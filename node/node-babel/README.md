# 使用 Babel 支持 Node 项目

你是否曾经打开过使用 Node.js/Express 构建的后端仓库——你首先看到的是 ES6 导入和导出语句以及其他一些很酷的 ES6 语法特性？

Babel 让这一切成为可能。请记住，Babel 是一种流行的工具，可让你使用 JavaScript 的最新功能。现在许多框架都在底层使用 Babel 来编译它们的代码。

例如，如果没有像 Babel 这样的编译器的帮助，Node 就不能使用 ES6 导入和导出语句以及 ES6 语法的其他一些很酷的特性。

因此，在本教程中，我将向你展示如何快速配置你的 Node 应用程序以兼容大多数 ES6 语法。

## 安装依赖

```sh
pnpm add --save-dev  @babel/core @babel/preset-env @babel/node

```

## 配置 Babel

根目录新增配置文件 babel.config.js

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
}
```

## 愉快开发

此时可以使用 ES 的高级语法
