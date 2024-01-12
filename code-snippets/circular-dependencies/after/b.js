// moduleB.js
let moduleA

// exports.bar = () => {
//   console.log('bar')
//   moduleA.foo()
// }

module.exports = 'this is b'

setTimeout(() => {
  moduleA = require('./a')
  console.log(moduleA.obj.name)
}, 0)

