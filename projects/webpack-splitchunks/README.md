# Webpack-SplitChunks 分包策略

## 问题清单

- chunks 从哪里来?
- 分包后的 chunks 怎么理解?
- splitchunks 默认配置是什么?
- cacheGroups 多条规则怎么拆分?
- splitchunks 通用规则?
- maxInitialRequests 怎么理解?
- 其余要点

### chunks 从哪里来

chunks 都是由文件拆分而来, 在 webpack 中主要是三类 chunks

- 配置入口 entry
- 异步引入 import()
- splitchunks 中分出来的

> 一个文件就是一个 `module`
>
> 一个`chunk`包含一个或多个`module`
>
> 一个`bundle`一般包含一个`chunk`, `bundle`就是对`chunk`进行编译压缩打包等处理之后的产出

### 分包后的 chunks 怎么理解

webpack 的分包主要的目的是用于拆分出相同的代码;

在配置入口的文件和异步引入的文件中, 如果 import 了第三方模块, 但是并没有被拆分出去, 那么将和文件打包成一个 chunk;

拆包后默认的名称为 `vendors~entry1~entry2`, 表示 entry1 和 entry2 中的拆出来的第三方模块代码 `vendors`

### splitchunks 默认配置是什么

这里直接粘贴配置项

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // 超过30k将拆包
      minChunks: 1, // 最小引用次数
      maxAsyncRequests: 5, // 允许异步并行加载的最大请求数
      maxInitialRequests: 3, // 允许入口并行加载的最大请求数
      automaticNameDelimiter: '~', // chunk之间的分隔符
      name: true,
      // 上面的几条规则是通用规则, 下面的cacheGroups可以重写
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 重用模块
        }
      }
    }
  }
}
```

### cacheGroups 多条规则怎么拆分

当一个文件命中多条规则时候, 将会按照优先级来进行拆包, 其他的规则跳过;

### splitchunks 通用规则

`minSize: 30000`

`minChunks: 1`

`maxAsyncRequests: 5`

`maxInitialRequests: 3`

以上几条都属于通用规则, 下面的规则组都必须满足这几个规则, 同时规则组可以自定义这几个字段重新覆盖原有值

### maxInitialRequests 怎么理解

maxInitialRequests 它表示允许入口并行加载的最大请求数，之所以有这个配置也是为了对拆分数量进行限制，不至于拆分出太多模块导致请求数量过多而得不偿失。

这里需要注意几点：

1. 入口文件本身算一个请求
2. 如果入口里面有动态加载得模块这个不算在内
3. 通过 runtimeChunk 拆分出的 runtime 不算在内
4. 只算 js 文件的请求，css 不算在内
5. 如果同时又两个模块满足 cacheGroup 的规则要进行拆分，但是 maxInitialRequests 的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来

### 其余要点

splitChunks 除了之前文章提到的规则外，还有一些要点或是叫疑惑因为没有找到官方文档的明确说明，所以是通过我自己测试总结出来的，只代表我自己的测试结果，不一定正确。

splitChunks.cacheGroup 必须同时满足各个条件才能生效，这个之前我理解错误，我以为比如 minSize 或是 minChunks 等条件只要满足一条就可以拆分，但是实际上必须同时满足才行

- splitChunks 的配置项都是作用于 cacheGroup 上的，如果将 cacheGroup 的默认两个分组 vendor 和 default 设置为 false，则 splitChunks 就不会起作用
- minChunks、maxAsyncRequests、maxInitialRequests 的值必须设置为大于等于 1 的数
- 当 chunk 没有名字时，通过 splitChunks 分出的模块的名字用 id 替代，当然你也可以通过 name 属性自定义
- 当父 chunk 和子 chunk 同时引入相同的 module 时，并不会将其分割出来而是删除掉子 chunk 里面共同的 module，保留父 chunk 的 module，这个是因为
- optimization.removeAvaliableModules 默认是 true
- 当两个 cacheGroup.priority 相同时，先定义的会先命中
- 除了 js，splitChunks 也适用于 css

### 补充

当一个入口模块中, 已经将第三方模块打进去后(例如 `react`), 后续异步加载的模块再次依赖这个模块(`react`), 将不会被打进去, 而是通过引入的方式

下面这个例子, 将`splitchunks.chunks`设置为`async`, 即只从异步加载的模块中执行抽取规则, 进行分包

#### 征对单入口

首次加载到入口模块`entry`, 因为没有分包规则, 所以将其中的内容打包到一起

`entry` 下面包含的内容:

- react
- react-dom
- jquery
- orgchart
- 本身业务代码

后续, 加载到动态模块, 匹配到分包规则, 则执行分包, 之前已经加载过的模块不抽取出来, 直接引用

`page`下面包含的模块内容:

- lodash
- 本身业务代码

```js
// 入口模块entry
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'
import OrgChart from './assets/orgchart'

import(/* webpackChunkName: "page1" */ './routes/page1').then((comp) => {
  Page1 = comp
})
```

```js
// page
import { useEffect } from 'react'
import _ from 'lodash'
```

#### 征对多入口

```js
// 入口模块 entry1.js
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'
import OrgChart from './assets/orgchart'
```

```js
// webpack.config.js
module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js'
  }
}
```

征对这种多入口的情况, 他们的相同依赖会重复打, 也就是`entry1`和`entry2`都包含`react`和`react-dom`

