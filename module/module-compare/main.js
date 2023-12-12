// main.js
// const a = require('./a').a;

// console.log(a);

// 引入模块后, 它的内部变化就影响不了外部。这是因为a.js的a是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
setTimeout(() => {
  const b = require('./a').a
  console.log(b)
}, 100)
