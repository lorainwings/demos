// moduleA.js
let moduleB

// exports.foo = () => {
//   console.log('foo')
//   moduleB.bar()
// }

module.exports = {
  obj: {
    name: 'this is a'
  }
}

setTimeout(() => {
  moduleB = require('./b')
}, 0)

