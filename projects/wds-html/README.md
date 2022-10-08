# 异步模块加载流程分析

Webpack打包之后就是一个IIFE, 参数是模块字面量对象, key是moduleId, value是包装后的模块函数

## 初始化

首先会定义`window["webpackJsonp"]`来存储异步的模块

改写`window["webpackJsonp"]`的`push`方法, 使其指向`webpackJsonpCallback`

```js
/******/  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/  jsonpArray.push = webpackJsonpCallback;
/******/  jsonpArray = jsonpArray.slice();
/******/  for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/  var parentJsonpFunction = oldJsonpFunction;
```

## 插入脚本

代码`import('./async.module.import.js')`会被`Webpack`转化为如下代码

```js
__webpack_require__
  .e( /*! import() | async.module.import*/ 'async.module.import')
  .then(__webpack_require__.bind(null, /*! ./async.module.import.js*/ "./src/async.module.import.js"))
  .then(m => { console.log(m); })
```

首先执行__webpack_require__.e, 会实例化一个`promise`对象, 并将该`promise`和它对应的`resolve`/`reject`存储到`installedChunkData`和`installedChunks`对象中

接着, 创建一个动态script脚本, 通过`jsonpScriptSrc(chunkId)`来获取`script`脚本的`src`地址

`src`地址由publicPath`__webpack_require__.p`及模块的名称组成

再将该脚本插入到文档中, `document.head.appendChild(script)`

与此同时, 设置一个脚本加载超时时间2分钟

```js
// script path function
/******/  function jsonpScriptSrc(chunkId) {
/******/   return __webpack_require__.p + "" + ({"async.module.import":"async.module.import"}[chunkId]||chunkId) + "-" + "d40f" + ".js"
/******/  }

__webpack_require__.e = function requireEnsure(chunkId) {
/******/   var promises = [];
/******/
/******/
/******/   // JSONP chunk loading for javascript
/******/
/******/   var installedChunkData = installedChunks[chunkId];
/******/   if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/    // a Promise means "currently loading".
/******/    if(installedChunkData) {
/******/     promises.push(installedChunkData[2]);
/******/    } else {
/******/     // setup Promise in chunk cache
/******/     var promise = new Promise(function(resolve, reject) {
/******/      installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/     });
/******/     promises.push(installedChunkData[2] = promise);
/******/
/******/     // start chunk loading
/******/     var script = document.createElement('script');
/******/     var onScriptComplete;
/******/
/******/     script.charset = 'utf-8';
/******/     script.timeout = 120;
/******/     if (__webpack_require__.nc) {
/******/      script.setAttribute("nonce", __webpack_require__.nc);
/******/     }
/******/     script.src = jsonpScriptSrc(chunkId);
/******/
/******/     // create error before stack unwound to get useful stacktrace later
/******/     var error = new Error();
/******/     onScriptComplete = function (event) {
/******/      // avoid mem leaks in IE.
/******/      script.onerror = script.onload = null;
/******/      clearTimeout(timeout);
/******/      var chunk = installedChunks[chunkId];
/******/      if(chunk !== 0) {
/******/       if(chunk) {
/******/        var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/        var realSrc = event && event.target && event.target.src;
/******/        error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/        error.name = 'ChunkLoadError';
/******/        error.type = errorType;
/******/        error.request = realSrc;
/******/        chunk[1](error);
/******/       }
/******/       installedChunks[chunkId] = undefined;
/******/      }
/******/     };
/******/     var timeout = setTimeout(function(){
/******/      onScriptComplete({ type: 'timeout', target: script });
/******/     }, 120000);
/******/     script.onerror = script.onload = onScriptComplete;
/******/     document.head.appendChild(script);
/******/    }
/******/   }
/******/   return Promise.all(promises);
/******/  };
```

## 脚本加载完成

当异步模块加载完成后, 会自动执行里面的代码`window["webpackJsonp"].push`

也就是执行上面绑定的`webpackJsonpCallback`

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["async.module.import"],{

/***/ "./src/async.module.import.js":
/*!************************************!*\
  !*** ./src/async.module.import.js ***!
  \************************************/
/*! exports provided: a, add, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nconst a = 'this is async'\n\nconst add = () => {\n  console.log('this is add');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  subtract() {\n    console.log('this is reduce');\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMubW9kdWxlLmltcG9ydC5qcz9lMzFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPOztBQUVBO0FBQ1A7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9zcmMvYXN5bmMubW9kdWxlLmltcG9ydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhID0gJ3RoaXMgaXMgYXN5bmMnXG5cbmV4cG9ydCBjb25zdCBhZGQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd0aGlzIGlzIGFkZCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN1YnRyYWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHJlZHVjZScpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/async.module.import.js\n");

/***/ })

}]);
```

我们来看看这个`webpackJsonpCallback`的逻辑如何定义的:

```js
/******/  function webpackJsonpCallback(data) {
/******/   var chunkIds = data[0];
/******/   var moreModules = data[1];
/******/
/******/
/******/   // add "moreModules" to the modules object,
/******/   // then flag all "chunkIds" as loaded and fire callback
/******/   var moduleId, chunkId, i = 0, resolves = [];
/******/   for(;i < chunkIds.length; i++) {
/******/    chunkId = chunkIds[i];
/******/    if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/     resolves.push(installedChunks[chunkId][0]);
/******/    }
/******/    installedChunks[chunkId] = 0;
/******/   }
/******/   for(moduleId in moreModules) {
/******/    if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/     modules[moduleId] = moreModules[moduleId];
/******/    }
/******/   }
/******/   if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/   while(resolves.length) {
/******/    resolves.shift()();
/******/   }
/******/
/******/  };
```

在这个函数中, 首先取出`chunkId`和`moduleId`

读取后,在`installedChunks`对象中标注该chunk已经被读取

同时, 将该模块存入全局模块`modules`中

由于执行了该`promise`的`resolve`方法

所以, `promise`的后续代码将被执行`then(__webpack_require__.bind(null, /*! ./async.module.import.js*/ "./src/async.module.import.js"))`

这块代码也就是正常同步模块的加载流程了
