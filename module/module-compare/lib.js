// lib.js
var counter = 3
function incCounter() {
  counter++
}

class Foo {
  name = '张三'
  getName() {
    return this.name
  }
}

module.exports = {
  counter: counter,
  incCounter: incCounter,
  getFoo: new Foo()
}
