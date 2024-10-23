class PersonClass {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

// 将上面的类转化成ES5的构造函数形式

/*--------------------------------------------------------------------------------------*/

'use strict;' // 1. class处于严格模式

interface PersonInstance {
  name: string;
  age: number;
}

interface PersonConstructor {
  new(name: string, age: number): PersonInstance;
}

const PersonFuc = function (this: PersonInstance, name: string, age: number) {
  // 2. 无法直接调用该函数, 必须使用new关键字
  if (!new.target) throw new TypeError('This function must be called with the new keyword. ');
  this.name = name
  this.age = age
}


PersonFuc.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}

Object.defineProperty(PersonFuc.prototype, 'sayHello', {
  // 3. 原型上函数无法使用new调用
  value: function () {
    if (new.target) {
      throw new TypeError('This function must be called without the new keyword. ');
    }
    console.log(this.name)
  },
  // 4. 原型上函数不可枚举/可配置/可写
  enumerable: false,
  configurable: true,
  writable: true
})
