// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.counter = 5;  //改变当前模块的内部值
mod.incCounter(); //改变原始模块的内部值
console.log(mod.counter); // 3


console.log(mod.getFoo); //张三
mod.getFoo.name = '李四';
console.log(mod.getFoo); //李四

