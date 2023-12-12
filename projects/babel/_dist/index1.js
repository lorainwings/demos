import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator'
import 'core-js/modules/es.object.to-string.js'
import 'core-js/modules/es.promise.js'
import 'core-js/modules/es.promise.finally.js'
import 'core-js/modules/es.array.includes.js'
import 'regenerator-runtime/runtime.js'

var func = /*#__PURE__*/ (function () {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              console.log(12123)

            case 1:
            case 'end':
              return _context.stop()
          }
        }
      }, _callee)
    })
  )

  return function func() {
    return _ref.apply(this, arguments)
  }
})()

Promise.resolve().finally()
;[1, 2, 3, 4, 5, 6, 7, 8].includes(3)
