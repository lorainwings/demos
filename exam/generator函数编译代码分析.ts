/**
 * 编译前代码
 */
/* function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next()); // {value: "hello", done: false}
console.log(hw.next()); // {value: "world", done: false}
console.log(hw.next()); // {value: "ending", done: true}
console.log(hw.next()); // {value: undefined, done: true} */


/**
 * 编译后代码
 */

// runtime.mark = function (genFun) {
//   genFun.__proto__ = GeneratorFunctionPrototype;
//   genFun.prototype = Object.create(Gp);
//   return genFun;
// };


// var _marked = /*#__PURE__*/ regeneratorRuntime.mark(helloWorldGenerator);

// function helloWorldGenerator() {
//   return regeneratorRuntime.wrap(
//     function helloWorldGenerator$(_context) {
//       while (1) {
//         switch ((_context.prev = _context.next)) {
//           case 0:
//             _context.next = 2;
//             return "hello";

//           case 2:
//             _context.next = 4;
//             return "world";

//           case 4:
//             return _context.abrupt("return", "ending");

//           case 5:
//           case "end":
//             return _context.stop();
//         }
//       }
//     },
//     _marked,
//     this
//   );
// }

declare global {
  type Func = (...args: any[]) => any;

  interface Window {
    regeneratorRuntime: {
      wrap: (fn: Func, outerFn: Func, self: any) => any;
      mark: (fn: Func) => Func;
    }
  }
}



/**
 * 最小实现代码
 */

(function () {
  var ContinueSentinel = {};

  function makeInvokeMethod(innerFn, context) {
    var state = "start";

    return function invoke(method, arg) {
      if (state === "completed") {
        return { value: undefined, done: true };
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        state = "executing";

        var record = {
          type: "normal",
          arg: innerFn.call(self, context)
        };

        if (record.type === "normal") {
          state = context.done ? "completed" : "yield";

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        }
      }
    };
  }

  function wrap(innerFn, outerFn, self) {
    var generator = Object.create(outerFn.prototype);

    var context: any = {
      done: false,
      method: "next",
      next: 0,
      prev: 0,
      abrupt: function (type, arg) {
        var record: any = {};
        record.type = type;
        record.arg = arg;

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        }

        return ContinueSentinel;
      },
      stop: function () {
        this.done = true;
        return this.rval;
      }
    };

    generator._invoke = makeInvokeMethod(innerFn, context);

    return generator;
  }

  // 在原型添加next方法, 并返回原函数
  var mark = function (genFun) {
    var generator = Object.create({
      next: function (arg: any) {
        return (this as any)._invoke("next", arg);
      }
    });
    genFun.prototype = generator;
    return genFun;
  };

  window.regeneratorRuntime = {} as any;
  window.regeneratorRuntime.wrap = wrap;
  window.regeneratorRuntime.mark = mark;
})();

function helloWorldGenerator() {
  return window.regeneratorRuntime.wrap(
    function helloWorldGenerator$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return "hello";

          case 2:
            _context.next = 4;
            return "world";

          case 4:
            return _context.abrupt("return", "ending");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked,
    // @ts-ignore
    this
  );
}


var _marked = window.regeneratorRuntime.mark(helloWorldGenerator);


var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());


export {}
