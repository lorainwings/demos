define((require, module, exports) => {
  console.log('这是test模块')
  exports.a = 12
  exports.b = 5

  module.exports = { a: 12, b: 5 }

  require('./test1.js.js')
})
