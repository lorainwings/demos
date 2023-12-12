/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-09-09 15:41:41
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-09-09 16:31:58
 * @FilePath: /demos/code-snippets/typescript/project.ts
 * @Description: Webpack异步模块加载流程分析
 * Webpack打包之后就是一个IIFE, 参数是模块字面量对象, key是moduleId, value是包装后的模块函数
 * 1.
 */

console.log('不需要入口啦')

import(
  './async.module.import.js' /* webpackChunkName: 'async.module.import'*/
).then((m) => {
  console.log(m)
})
