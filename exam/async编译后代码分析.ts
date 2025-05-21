/**
 * 编译前代码
 * @returns
 */
/* async function asyncFunction() {
  const result = await fetch('https://api.example.com/data');
  return result.json();
} */


"use strict";
/**
 * 编译后代码
 * @returns
 */

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return  () => {
    // @ts-ignore
    var self = this, args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}



function asyncFunction() {
  var _ref = _asyncToGenerator(function* () {
    const result = yield fetch('https://api.github.com/users/koreyzhao');
    return result.json();
  });

  return () => {
      // @ts-ignore
    return _ref.apply(this, arguments as any);
  };
}

asyncFunction()()


