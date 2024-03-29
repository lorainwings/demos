/******/ ;(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  }
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  }
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  }
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  }
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = ''
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 0))
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var _longfor_maia_h5__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1)
      /* harmony import */ var _longfor_maia_h5__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _longfor_maia_h5__WEBPACK_IMPORTED_MODULE_0__
        )

      window.maiaH5 = _longfor_maia_h5__WEBPACK_IMPORTED_MODULE_0___default.a

      /***/
    },
    /* 1 */
    /***/ function (module, exports, __webpack_require__) {
      /*! version: 2.2.0-beta.1 */
      !(function (a, e) {
        true ? (module.exports = e()) : undefined
      })('undefined' != typeof self ? self : this, function () {
        return (function (a) {
          var e = {}
          function t(o) {
            if (e[o]) return e[o].exports
            var n = (e[o] = { i: o, l: !1, exports: {} })
            return a[o].call(n.exports, n, n.exports, t), (n.l = !0), n.exports
          }
          return (
            (t.m = a),
            (t.c = e),
            (t.d = function (a, e, o) {
              t.o(a, e) ||
                Object.defineProperty(a, e, {
                  configurable: !1,
                  enumerable: !0,
                  get: o
                })
            }),
            (t.n = function (a) {
              var e =
                a && a.__esModule
                  ? function () {
                      return a.default
                    }
                  : function () {
                      return a
                    }
              return t.d(e, 'a', e), e
            }),
            (t.o = function (a, e) {
              return Object.prototype.hasOwnProperty.call(a, e)
            }),
            (t.p = ''),
            t((t.s = 74))
          )
        })([
          function (a, e, t) {
            'use strict'
            var o = d(t(26)),
              n = d(t(67)),
              i = d(t(47)),
              r = d(t(48)),
              c = d(t(7)),
              l = d(t(5)),
              s = d(t(46)),
              u = d(t(68)),
              _ = d(t(52))
            function d(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var f = t(8),
              p = f.prefixUrls,
              m = f.schemeUrl
            ;(window.appflag = !1),
              (window.deviceflag = !1),
              (window.data = null)
            var b = Object.prototype.toString
            function h(a) {
              console.log(':::api::::', decodeURIComponent(a))
              var e = document.createElement('iframe')
              ;(e.style.display = 'none'),
                (e.src = a),
                document.body.appendChild(e),
                setTimeout(function () {
                  document.body.removeChild(e)
                }, 20)
            }
            function v() {}
            function w(a) {
              var e = document.createElement('iframe')
              return (
                (e.style.display = 'none'),
                (e.src = a),
                document.body.appendChild(e),
                setTimeout(function () {
                  document.body.removeChild(e)
                }, 20),
                new u.default(function (a, e) {
                  var t = setInterval(function () {
                    ;(window.appflag || window.deviceflag) &&
                      ((window.appflag = !1),
                      (window.deviceflag = !1),
                      clearInterval(t),
                      a(window.data))
                  }, 20)
                  setTimeout(function () {
                    clearInterval(t), e({ error: 'timeout' })
                  }, 1e4)
                })
              )
            }
            function k(a) {
              return p[a] ? m + p[a] : ''
            }
            function g() {
              for (
                var a = {}, e = [].slice.call(arguments, 0), t = e.length - 1;
                t >= 0 && '[object Object]' === b.call(e[t]);
                t--
              )
                for (var o in e[t]) {
                  var n = '[object Function]' === b.call(e[t][o]),
                    i = '[object AsyncFunction]' === b.call(e[t][o])
                  ;(n || i) && (a[o] = e[t][o])
                }
              return a
            }
            function E(a) {
              return null !== a && '[object Object]' === b.call(a)
            }
            function A(a) {
              return !!E(a) && !((0, s.default)(a).length <= 0)
            }
            function N(a) {
              return '[object Array]' === b.call(a)
            }
            ;(window.__maia_get_device_info__ =
              window.__maia_get_device_info__ ||
              function (a) {
                ;(window.data = JSON.parse(a)), (window.deviceflag = !0)
              }),
              (window.__maia_get_app_info__ =
                window.__maia_get_app_info__ ||
                function (a) {
                  ;(window.data = JSON.parse(a)), (window.appflag = !0)
                })
            var I = '__maiaH5_custom_function__'
            function y(a, e, t) {
              var o = ''
              for (var n in e) {
                var i = n + a
                ;(window[i] = t ? e[n].method : window[i] || e[n].method),
                  (o += e[n].appCallbackName + '=' + i + '&')
              }
              return (o = o.substr(0, o.length - 1))
            }
            function C(a) {
              if (N(a)) {
                for (var e = a.length, t = [], o = 0; o < e; o++) t[o] = C(a[o])
                return t
              }
              if (E(a)) {
                var n = {}
                for (var i in a) n[i] = C(a[i])
                return n
              }
              return a
            }
            function T(a) {
              var e = navigator.userAgent,
                t = {
                  cameraStartRecord: 'chooseVideo',
                  downloadStart: 'download',
                  getToken_YTS: 'getToken',
                  getTencentMapLocation: 'getLocationByTencentMap',
                  redirectLogin_YTS: 'redirectLogin',
                  saveToAlbum: 'saveImageToAlbum',
                  setNavigationCenterBar: 'setNavigationBar',
                  showFloatBall: 'show',
                  switchWebViewScroll: 'enableWebViewScroll',
                  switchWebViewSwipe: 'enableWebViewSwipe',
                  upload: 'uploadFile',
                  download: 'downloadFile',
                  setStorageApp: 'setStorage',
                  getStorageApp: 'getStorage',
                  removeStorageApp: 'removeStorage',
                  getStorageInfoApp: 'getStorageInfo'
                },
                o = t[a] ? t[a] : a
              return (
                console.log(
                  e.indexOf('MAIAWebKit'),
                  '--UA--',
                  e.indexOf('Electron')
                ),
                -1 !== e.indexOf('MAIAWebKit') ||
                  -1 !== e.indexOf('Electron') ||
                  (console.warn('此环境不支持 ' + o + ' 方法'), !1)
              )
            }
            a.exports = {
              joinParamToUrl: function (a) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  t = ''
                if (A(a)) {
                  for (var o in a) {
                    var n = a[o]
                    e.indexOf(o) > -1 ||
                      (N(n) || E(n)
                        ? (t +=
                            o +
                            '=' +
                            encodeURIComponent((0, l.default)(n)) +
                            '&')
                        : (t += o + '=' + encodeURIComponent(n) + '&'))
                  }
                  t = t.substr(0, t.length - 1)
                }
                return t
              },
              isRequired: function (a, e) {
                return '' === a || null === a || void 0 === a
                  ? (console.error('参数' + e + '是必填参数，但是当前是' + a),
                    0)
                  : 1
              },
              getAppSDKVersionByUA: function () {
                var a = 0,
                  e = navigator.userAgent,
                  t = /&MAIAWebKit\S+/gim.exec(e)
                if (t) {
                  var o = t[0].split('_'),
                    n = void 0
                  if (!(o.length >= 7)) return a
                  ;(n = o[6]),
                    /^([1-9]\.)(\d\.)*\d$/gim.test(n) &&
                      (a = 1 * n.split('.').join(''))
                }
                return a
              },
              deepCopy: C,
              formatCallbackByParam: function (a) {
                return '[object Function]' === b.call(a)
                  ? a
                  : ('string' == typeof a && window[a]) || v
              },
              setMethodAttr: function (a, e) {
                ;(a.MAIA_IFRAME_ID = e.data.el.substr(1) || ''),
                  (a.MAIA_SUPPORT_IFRAMES =
                    window.__maia_glob_var.MAIA_SUPPORT_IFRAMES)
              },
              mountCallback: function (a) {
                var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  t = a.apiName,
                  o = a.callbacks,
                  n = this[t].MAIA_SUPPORT_IFRAMES,
                  i = this[t].MAIA_IFRAME_ID
                return n ? y(i, o, e) : y('', o)
              },
              paserObj: function (a) {
                var e = a
                if (
                  'object' !==
                    (void 0 === a ? 'undefined' : (0, _.default)(a)) &&
                  a
                )
                  try {
                    e = JSON.parse(a)
                  } catch (t) {
                    e = a
                  }
                return e
              },
              getFunctionName: function () {
                for (
                  var a = '',
                    e = [].concat(Array.prototype.slice.call(arguments)),
                    t = 0;
                  t < e.length;
                  t++
                )
                  a += I + e[t]
                return a
              },
              FUNCTION_SEPARATOR: I,
              mergeModule: g,
              mergeModuleTo: function (a) {
                var e = C(a),
                  t = g([].slice.call(arguments, 1))
                for (var o in t) {
                  var n = '[object Function]' === b.call(t[o]),
                    i = '[object AsyncFunction]' === b.call(t[o])
                  ;(n || i) && (e[o] = t[o])
                }
                return e
              },
              isSupportMaiaH5ByUa: T,
              createIframe: h,
              command: function (a, e, t) {
                if (!((t && t.ignoreMaiaH5Ua) || T(a))) return ''
                var o = k(a) + e,
                  n = {
                    supportMiniApp: !1,
                    isIframe: window.self !== window.top,
                    callbacks: []
                  },
                  i = E(t) ? (0, c.default)(n, t) : n
                return (
                  i.supportMiniApp && i.isIframe
                    ? window.top.postMessage(
                        { type: 'miniappSend', schemaUrl: o },
                        '*'
                      )
                    : h(o),
                  null
                )
              },
              commandAsync: (function () {
                var a = (0, r.default)(
                  i.default.mark(function a(e, t) {
                    var o
                    return i.default.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (T(e)) {
                                a.next = 2
                                break
                              }
                              return a.abrupt('return', '')
                            case 2:
                              return (a.next = 4), w(k(e) + t)
                            case 4:
                              return (o = a.sent), a.abrupt('return', o)
                            case 6:
                            case 'end':
                              return a.stop()
                          }
                      },
                      a,
                      this
                    )
                  })
                )
                return function (e, t) {
                  return a.apply(this, arguments)
                }
              })(),
              isArray: N,
              isString: function (a) {
                return 'string' == typeof a
              },
              isNotEmptyString: function (a) {
                return 'string' == typeof a && '' !== a
              },
              isNumber: function (a) {
                return 'number' == typeof a
              },
              isStringNumberOrNumber: function (a) {
                return /^\d+(\.\d+)?$/.test(a)
              },
              isValidNumber: function (a) {
                return 'number' == typeof a && !isNaN(a)
              },
              isUndefined: function (a) {
                return void 0 === a
              },
              isNull: function (a) {
                return '[object Null]' === b.call(a)
              },
              isBoolean: function (a) {
                return 'boolean' == typeof a
              },
              isObject: E,
              isNotEmptyObject: A,
              isFunction: function (a) {
                return '[object Function]' === b.call(a)
              },
              isAsyncFunction: function (a) {
                return '[object AsyncFunction]' === b.call(a)
              },
              trim: function (a) {
                return a.replace(/^\s*/, '').replace(/\s*$/, '')
              },
              emptyFun: v,
              pureFun: function (a) {
                return a
              },
              getURLParams: function (a) {
                var e = {}
                return (
                  a.search
                    .substr(1)
                    .split('&')
                    .map(function (a) {
                      var t = a.split('='),
                        o = (0, n.default)(t, 2),
                        i = o[0],
                        r = o[1]
                      e[i] = r
                    }),
                  e
                )
              },
              isFormData: function (a) {
                return '[object FormData]' === b.call(a)
              },
              formData2Object: function (a) {
                if (E(a)) return a
                try {
                  var e = {},
                    t = !0,
                    n = !1,
                    i = void 0
                  try {
                    for (
                      var r, c = (0, o.default)(a);
                      !(t = (r = c.next()).done);
                      t = !0
                    ) {
                      var l = r.value
                      '[object File]' !== b.call(l[1]) && (e[l[0]] = l[1])
                    }
                  } catch (a) {
                    ;(n = !0), (i = a)
                  } finally {
                    try {
                      !t && c.return && c.return()
                    } finally {
                      if (n) throw i
                    }
                  }
                  return e
                } catch (a) {
                  throw new Error('当前系统版本过低不支持FormData')
                }
              }
            }
          },
          function (a, e) {
            var t = (a.exports = { version: '2.6.12' })
            'number' == typeof __e && (__e = t)
          },
          function (a, e, t) {
            'use strict'
            a.exports = {
              ADDCURRENTTAB: 'ADDCURRENTTAB',
              GETAPPINFO: 'GETAPPINFO',
              GETAPPINFOIFRAME: 'GETAPPINFOIFRAME',
              GETDEVICEINFO: 'GETDEVICEINFO',
              GETDEVICEINFOIFRAME: 'GETDEVICEINFOIFRAME',
              GETLOCATION: 'GETLOCATION',
              GETTENCENTMAPLOCATION: 'GETTENCENTMAPLOCATION',
              GETTOKEN: 'GETTOKEN',
              GETNETWORK: 'GETNETWORK',
              CLOSEPAGE: 'CLOSEPAGE',
              CREATEPAGE: 'CREATEPAGE',
              CREATEEXTENSION: 'CREATEEXTENSION',
              CHOOSEIMAGE: 'CHOOSEIMAGE',
              CHOOSEVIDEO: 'CHOOSEVIDEO',
              COMPRESS: 'COMPRESS',
              TAKEPHOTO: 'TAKEPHOTO',
              TAKEPHOTOS: 'TAKEPHOTOS',
              DOWNLOADFILE: 'DOWNLOADFILE',
              DOWNLOADFILESUCCESS: 'DOWNLOADFILESUCCESS',
              DOWNLOADFILEFAIL: 'DOWNLOADFILEFAIL',
              DOWNLOADFILECOMPLETE: 'DOWNLOADFILECOMPLETE',
              DOWNLOADFILEPROGRESS: 'DOWNLOADFILEPROGRESS',
              DISABLEWEBVIEWSWIPE: 'DISABLEWEBVIEWSWIPE',
              UPLOADFILE: 'UPLOADFILE',
              UPLOADFILESUCCESS: 'UPLOADFILESUCCESS',
              UPLOADFILEFAIL: 'UPLOADFILEFAIL',
              UPLOADFILECOMPLETE: 'UPLOADFILECOMPLETE',
              UPLOADFILEPROGRESS: 'UPLOADFILEPROGRESS',
              USENATIVE: 'USENATIVE',
              REQUEST: 'REQUEST',
              REQUESTSUCCESS: 'REQUESTSUCCESS',
              REQUESTFAIL: 'REQUESTFAIL',
              REQUESTCOMPLETE: 'REQUESTCOMPLETE',
              DELETEFILE: 'DELETEFILE',
              SETBUTTONS: 'SETBUTTONS',
              SETNAVIGATIONBARTITLE: 'SETNAVIGATIONBARTITLE',
              SETNAVIGATIONBAR: 'SETNAVIGATIONBAR',
              SETNAVIGATIONCENTERBAR: 'SETNAVIGATIONCENTERBAR',
              SHOW: 'SHOW',
              GETWEBVIEWDISPLAYMODE: 'GETWEBVIEWDISPLAYMODE',
              GETRECORDER: 'GETRECORDER',
              GETRECORDERTEXT: 'GETRECORDERTEXT',
              GETXFRECORDERTEXT: 'GETXFRECORDERTEXT',
              GETFACIAL: 'GETFACIAL',
              PLAY: 'PLAY',
              PREVIEWIMAGE: 'PREVIEWIMAGE',
              PAYAUTH: 'PAYAUTH'
            }
          },
          function (a, e) {
            var t = (a.exports =
              'undefined' != typeof window && window.Math == Math
                ? window
                : 'undefined' != typeof self && self.Math == Math
                ? self
                : Function('return this')())
            'number' == typeof __g && (__g = t)
          },
          function (a, e, t) {
            var o = t(38)('wks'),
              n = t(29),
              i = t(3).Symbol,
              r = 'function' == typeof i
            ;(a.exports = function (a) {
              return o[a] || (o[a] = (r && i[a]) || (r ? i : n)('Symbol.' + a))
            }).store = o
          },
          function (a, e, t) {
            a.exports = { default: t(98), __esModule: !0 }
          },
          function (a, e, t) {
            var o = t(3),
              n = t(1),
              i = t(21),
              r = t(14),
              c = t(16),
              l = function (a, e, t) {
                var s,
                  u,
                  _,
                  d = a & l.F,
                  f = a & l.G,
                  p = a & l.S,
                  m = a & l.P,
                  b = a & l.B,
                  h = a & l.W,
                  v = f ? n : n[e] || (n[e] = {}),
                  w = v.prototype,
                  k = f ? o : p ? o[e] : (o[e] || {}).prototype
                for (s in (f && (t = e), t))
                  ((u = !d && k && void 0 !== k[s]) && c(v, s)) ||
                    ((_ = u ? k[s] : t[s]),
                    (v[s] =
                      f && 'function' != typeof k[s]
                        ? t[s]
                        : b && u
                        ? i(_, o)
                        : h && k[s] == _
                        ? (function (a) {
                            var e = function (e, t, o) {
                              if (this instanceof a) {
                                switch (arguments.length) {
                                  case 0:
                                    return new a()
                                  case 1:
                                    return new a(e)
                                  case 2:
                                    return new a(e, t)
                                }
                                return new a(e, t, o)
                              }
                              return a.apply(this, arguments)
                            }
                            return (e.prototype = a.prototype), e
                          })(_)
                        : m && 'function' == typeof _
                        ? i(Function.call, _)
                        : _),
                    m &&
                      (((v.virtual || (v.virtual = {}))[s] = _),
                      a & l.R && w && !w[s] && r(w, s, _)))
              }
            ;(l.F = 1),
              (l.G = 2),
              (l.S = 4),
              (l.P = 8),
              (l.B = 16),
              (l.W = 32),
              (l.U = 64),
              (l.R = 128),
              (a.exports = l)
          },
          function (a, e, t) {
            a.exports = { default: t(95), __esModule: !0 }
          },
          function (a, e, t) {
            'use strict'
            var o,
              n = t(123),
              i = (o = n) && o.__esModule ? o : { default: o }
            var r = (0, i.default)({
                PORTRAIT: 1,
                REVERSE_PORTRAIT: 2,
                LANDSCAPE: 4,
                REVERSE_LANDSCAPE: 8,
                SENSOR_PORTRAIT: 16,
                SENSOR_LANDSCAPE: 32,
                FULL_SENSOR: 64
              }),
              c = (0, i.default)({
                NORMAL: 0,
                NONAVIGATIONBAR: 1,
                FULLSCREEN: 2,
                STATUS_BAR_FULLSCREEN: 3
              }),
              l = (0, i.default)({ NORMAL: 0, DROPDOWN_ARROW: 1 }),
              s = (0, i.default)({ CAMERA: 'camera', ALBUM: 'album' }),
              u = (0, i.default)({ YTS: 'YTS' })
            ;(e.prefixUrls = {
              addCurrentTab: 'floatWindow/addFloatWindow?',
              setButtons: 'floatWindow/config?',
              backPage: 'navigation/back?',
              setNavigationBarMoreButtons: 'miniApp/config?',
              cameraStartRecord: 'video/recording?',
              canIUse: 'browser/canIUse?',
              closeScanCode: 'bundle/scanCodeClose?',
              chooseImage: 'photo/album?',
              chooseVideo: 'photo/video?',
              chooseInvoice: 'wechat/invoice?',
              choosePhotoOrVideo: 'media/choosePhotoOrVideo?',
              closeNFC: 'nfc/disable?',
              closePage: 'navigation/close?',
              copyToClipboard: 'bundle/copy?',
              compress: 'video/compress?',
              createExtension: '',
              createPage: 'navigation/web?',
              deleteFile: 'resource/delete?',
              deleteAlias: 'fastApp/deleteAlias?',
              deleteAliasAndAllGroups: 'fastApp/deleteAliasAndAllGroups?',
              deleteAliasAndGroups: 'fastApp/deleteAliasAndGroups?',
              deleteAllGroups: 'fastApp/deleteAllGroups?',
              deleteGroups: 'fastApp/deleteGroups?',
              download: 'network/download?',
              downloadStart: 'download/start?',
              downloadQuery: 'download/query?',
              downloadPause: 'download/suspend?',
              downloadResume: 'download/resume?',
              downloadDelete: 'download/delete?',
              emitPageFinished: 'notification/pageFinished',
              emitLoginIAMFinished: 'IAMSSO/login?',
              getAppInfo: 'bundle/app?',
              getAppInfoAsync: 'bundle/app?',
              getClipboardData: 'bundle/getClipboardData?',
              getDeviceInfo: 'bundle/device?',
              getDeviceInfoAsync: 'bundle/device?',
              getFacial: 'face/livingdetect?',
              getFastAppVersion: 'fastApp/versionCode?',
              getLocation: 'bundle/gps?',
              getNetwork: 'network/getNetworkInfo?',
              getRecorder: 'audio/record?',
              getXFRecorderText: 'XFAudio/recordToText?',
              getToken_YTS: 'login/getToken?',
              getTencentMapLocation: 'map/gps?',
              getWebviewDisplayMode: 'navBar/getMode?',
              hideFloatBall: '',
              hideToast: 'interaction/hideToast?',
              hideLoading: 'interaction/hideLoading?',
              lock: 'navigation/lock?',
              makePhoneCall: 'message/tel?',
              play: 'video/playback?',
              popWebViewStack: 'navigation/pop?',
              previewImage: 'photo/preview?',
              previewFile: 'file/open?',
              readNFC: 'nfc/read?',
              redirectToApp: 'navigation/jumpOut?',
              redirectLogin_YTS: 'login/openLogin?',
              redirectLoginConfirm: 'maia_auth/page/login_confirm?',
              reloadPage: 'navigation/reload?',
              request: 'network/api?',
              registerAlias: 'fastApp/registerAlias?',
              registerGroups: 'fastApp/registerGroups?',
              saveToAlbum: 'photo/saveImageToAlbum?',
              scanCode: 'bundle/scanCode?',
              setScreenBrightness: 'bundle/setScreenBrightness?',
              sendEmail: 'message/email?',
              sendPhoneMessage: 'message/sms?',
              setNavigationBar: 'navBar/buttons?',
              setNavigationCenterBar: 'navBar/centerButtons?buttons=',
              setNavigationBarColor: 'browser/setTheme?',
              setNavigationBarTitle: 'navBar/title?',
              setPageOrientation: 'navigation/rotate?',
              setWebviewDisplayMode: 'navBar/setMode?',
              showFloatBall: 'floatWindow/showAction?',
              sign: 'signature/sign?',
              showToast: 'interaction/showToast?',
              showLoading: 'interaction/showLoading?',
              showModal: 'interaction/showModal?',
              showActionSheet: 'interaction/showActionSheet?',
              stopBluetoothDevicesDiscovery: 'iotbeacon/stop?',
              switchNavigationBar: 'navBar/visible?show=',
              switchWebViewScroll: 'browser/enableScroll?',
              switchWebViewSwipe: 'browser/enableSwipeGesture?',
              takePhoto: 'photo/camera?',
              takePhotos: 'photo/cameraContinuously?',
              upload: 'network/upload?',
              writeNFC: 'nfc/write?',
              setStorage: 'storage/setStorageSync?',
              getStorage: 'storage/getStorageSync?',
              removeStorage: 'storage/removeStorageSync?',
              getStorageInfo: 'storage/getStorageInfoSync?',
              clearStorage: 'storage/clearStorageSync?',
              setStorageApp: 'storage/saveForAppSync?',
              getStorageApp: 'storage/getForAppSync?',
              removeStorageApp: 'storage/removeForAppSync?',
              getStorageInfoApp: 'storage/getForAppInfoSync?',
              navigateTo: 'router/navigateTo?',
              redirectTo: 'router/redirectTo?',
              navigateBack: 'router/navigateBack?',
              switchTab: 'router/switchTab?',
              reLaunch: 'router/reLaunch?',
              onBluetoothDeviceFound: 'iotbeacon/start?',
              payAuth: 'pay/payauth?'
            }),
              (e.callbackNames = {
                CHOOSE_INVOICE: '__maia_choose_invoice_callback__',
                SELECT_INVOICE: '__maia_select_invoice_callback__',
                GET_TOKEN: '__maia_get_token_callback__',
                REDIRECT_LOGIN: '__maia_redirect_login_callback__',
                TAKE_PHOTOS: '__maia_take_photos_callback__',
                REDIRECT_LOGIN_CONFIRM:
                  '__maia_redirect_login_confirm_callback__',
                SET_STORAGE: '__maia_set_storage_callback__',
                GET_STORAGE: '__maia_get_storage_callback__',
                REMOVE_STORAGE: '__maia_remove_storage_callback__',
                GET_STORAGE_INFO: '__maia_get_storage_info_callback__',
                CLEAR_STORAGE: '__maia_clear_storage_callback__',
                SET_STORAGE_APP: '__maia_set_storage_app_callback__',
                GET_STORAGE_APP: '__maia_get_storage_app_callback__',
                REMOVE_STORAGE_APP: '__maia_remove_storage_app_callback__',
                GET_STORAGE_INFO_APP: '__maia_get_storage_info_app_callback__'
              }),
              (e.schemeUrl = 'longfor://'),
              (e.mediaParams = {
                count: { max: 9, min: 1, default: 1 },
                quality: { max: 1, min: 0, default: 1 },
                edit: { default: 0 },
                details: { default: 0 },
                advanced: { default: 0 },
                thumb: { create: 0, width: 60, height: 60 },
                duration: 15,
                compressedSize: 30
              }),
              (e.validOrientations = [1, 2, 4, 8, 16, 32, 64]),
              (e.screenOrientation = r),
              (e.webviewDisplayMode = c),
              (e.validWebviewDisplayMode = [0, 1, 2, 3]),
              (e.navigationBarTitleMode = l),
              (e.validNavigationBarTitleMode = [0, 1]),
              (e.videoSourceType = s),
              (e.validVideoSourceType = ['camera', 'album']),
              (e.validAppName = ['YTS']),
              (e.supportAppName = u)
          },
          function (a, e, t) {
            var o = t(10),
              n = t(54),
              i = t(35),
              r = Object.defineProperty
            e.f = t(11)
              ? Object.defineProperty
              : function (a, e, t) {
                  if ((o(a), (e = i(e, !0)), o(t), n))
                    try {
                      return r(a, e, t)
                    } catch (a) {}
                  if ('get' in t || 'set' in t)
                    throw TypeError('Accessors not supported!')
                  return 'value' in t && (a[e] = t.value), a
                }
          },
          function (a, e, t) {
            var o = t(13)
            a.exports = function (a) {
              if (!o(a)) throw TypeError(a + ' is not an object!')
              return a
            }
          },
          function (a, e, t) {
            a.exports = !t(15)(function () {
              return (
                7 !=
                Object.defineProperty({}, 'a', {
                  get: function () {
                    return 7
                  }
                }).a
              )
            })
          },
          function (a, e, t) {
            'use strict'
            var o = c(t(5)),
              n = c(t(43)),
              i = c(t(7)),
              r = c(t(46))
            function c(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var l = t(0).mergeModule,
              s = t(126),
              u = t(127),
              _ = t(128),
              d = t(139),
              f = t(141),
              p = t(142),
              m = t(143),
              b = t(144),
              h = t(145),
              v = t(146),
              w = t(147),
              k = t(0),
              g = k.isArray,
              E = k.isNotEmptyObject,
              A = k.isFunction,
              N = k.deepCopy,
              I = l(s, u, _, d, f, p, m, b, h, v, w),
              y = [
                'downloadFile',
                'uploadFile',
                'request',
                'deleteFile',
                'getLocation',
                'getNetwork',
                'getLocationByTencentMap',
                'createExtension',
                'getToken',
                'useNative',
                'takePhoto',
                'takePhotos',
                'chooseImage',
                'getRecorder',
                'getRecorderText',
                'getXFRecorderText',
                'chooseVideo',
                'compress',
                'getFacial',
                'setNavigationBarTitle',
                'getWebviewDisplayMode',
                'setNavigationBar',
                'disableWebViewSwipe',
                'closePage',
                'createPage',
                'createCameraContext',
                'createVideoContext',
                'createFloatBallContext',
                'play',
                'getAppInfoAsync',
                'getDeviceInfoAsync',
                'getDeviceInfoOnlyIframe',
                'getAppInfoOnlyIframe',
                'setWebviewDisplayModeSeparated'
              ],
              C = (0, r.default)(I),
              T = (0, i.default)({}, I)
            C.forEach(function (a) {
              ;-1 === y.indexOf(a) &&
                (T[a] = function () {
                  var e = [].concat(Array.prototype.slice.call(arguments))
                  if (this.IFRAME_ENV)
                    (e = (function a() {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'fun',
                        t = arguments[1],
                        o =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : '',
                        i = N(t),
                        r = [].concat((0, n.default)(i))
                      return (
                        i.forEach(function (t, n) {
                          if (E(t)) {
                            for (var i in t)
                              if (A(t[i])) {
                                var c =
                                  '__maia_custom_' +
                                  e +
                                  '_' +
                                  i +
                                  '_callback' +
                                  o
                                window.iframeCallbackList[c] = t[i]
                                var l =
                                  '__maiaH5_custom_function__' +
                                  i +
                                  '__maiaH5_custom_function__' +
                                  c
                                r[n][l] = l
                              }
                          } else if (A(t)) {
                            var s = '__maia_custom_' + e + '_callback' + o
                            window.iframeCallbackList[s] = t
                            var u = '__maiaH5_custom_function__' + s
                            r[n] = u
                          } else g(t) && (r[n] = a(e, t))
                        }),
                        r
                      )
                    })(a, e, this.MAIA_IFRAME_ID)),
                      window.top.postMessage(
                        {
                          actionName: a,
                          data: (0, o.default)(e),
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var t = [].concat(Array.prototype.slice.call(arguments))
                    ;(I[a].MAIA_IFRAME_ID = T[a].MAIA_IFRAME_ID || ''),
                      (I[a].MAIA_SUPPORT_IFRAMES =
                        T[a].MAIA_SUPPORT_IFRAMES || !1),
                      I[a].apply(I, (0, n.default)(t))
                  }
                })
            }),
              (a.exports = { maApi: T, api: I })
          },
          function (a, e) {
            a.exports = function (a) {
              return 'object' == typeof a ? null !== a : 'function' == typeof a
            }
          },
          function (a, e, t) {
            var o = t(9),
              n = t(22)
            a.exports = t(11)
              ? function (a, e, t) {
                  return o.f(a, e, n(1, t))
                }
              : function (a, e, t) {
                  return (a[e] = t), a
                }
          },
          function (a, e) {
            a.exports = function (a) {
              try {
                return !!a()
              } catch (a) {
                return !0
              }
            }
          },
          function (a, e) {
            var t = {}.hasOwnProperty
            a.exports = function (a, e) {
              return t.call(a, e)
            }
          },
          function (a, e) {
            a.exports = {}
          },
          function (a, e, t) {
            var o = t(58),
              n = t(27)
            a.exports = function (a) {
              return o(n(a))
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(77)(!0)
            t(53)(
              String,
              'String',
              function (a) {
                ;(this._t = String(a)), (this._i = 0)
              },
              function () {
                var a,
                  e = this._t,
                  t = this._i
                return t >= e.length
                  ? { value: void 0, done: !0 }
                  : ((a = o(e, t)),
                    (this._i += a.length),
                    { value: a, done: !1 })
              }
            )
          },
          function (a, e) {
            a.exports = !0
          },
          function (a, e, t) {
            var o = t(28)
            a.exports = function (a, e, t) {
              if ((o(a), void 0 === e)) return a
              switch (t) {
                case 1:
                  return function (t) {
                    return a.call(e, t)
                  }
                case 2:
                  return function (t, o) {
                    return a.call(e, t, o)
                  }
                case 3:
                  return function (t, o, n) {
                    return a.call(e, t, o, n)
                  }
              }
              return function () {
                return a.apply(e, arguments)
              }
            }
          },
          function (a, e) {
            a.exports = function (a, e) {
              return {
                enumerable: !(1 & a),
                configurable: !(2 & a),
                writable: !(4 & a),
                value: e
              }
            }
          },
          function (a, e, t) {
            var o = t(57),
              n = t(39)
            a.exports =
              Object.keys ||
              function (a) {
                return o(a, n)
              }
          },
          function (a, e) {
            var t = {}.toString
            a.exports = function (a) {
              return t.call(a).slice(8, -1)
            }
          },
          function (a, e, t) {
            var o = t(27)
            a.exports = function (a) {
              return Object(o(a))
            }
          },
          function (a, e, t) {
            a.exports = { default: t(105), __esModule: !0 }
          },
          function (a, e) {
            a.exports = function (a) {
              if (void 0 == a) throw TypeError("Can't call method on  " + a)
              return a
            }
          },
          function (a, e) {
            a.exports = function (a) {
              if ('function' != typeof a)
                throw TypeError(a + ' is not a function!')
              return a
            }
          },
          function (a, e) {
            var t = 0,
              o = Math.random()
            a.exports = function (a) {
              return 'Symbol('.concat(
                void 0 === a ? '' : a,
                ')_',
                (++t + o).toString(36)
              )
            }
          },
          function (a, e, t) {
            var o = t(9).f,
              n = t(16),
              i = t(4)('toStringTag')
            a.exports = function (a, e, t) {
              a &&
                !n((a = t ? a : a.prototype), i) &&
                o(a, i, { configurable: !0, value: e })
            }
          },
          function (a, e, t) {
            t(83)
            for (
              var o = t(3),
                n = t(14),
                i = t(17),
                r = t(4)('toStringTag'),
                c =
                  'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
                    ','
                  ),
                l = 0;
              l < c.length;
              l++
            ) {
              var s = c[l],
                u = o[s],
                _ = u && u.prototype
              _ && !_[r] && n(_, r, s), (i[s] = i.Array)
            }
          },
          function (a, e) {
            e.f = {}.propertyIsEnumerable
          },
          function (a, e) {
            var t = Math.ceil,
              o = Math.floor
            a.exports = function (a) {
              return isNaN((a = +a)) ? 0 : (a > 0 ? o : t)(a)
            }
          },
          function (a, e, t) {
            var o = t(13),
              n = t(3).document,
              i = o(n) && o(n.createElement)
            a.exports = function (a) {
              return i ? n.createElement(a) : {}
            }
          },
          function (a, e, t) {
            var o = t(13)
            a.exports = function (a, e) {
              if (!o(a)) return a
              var t, n
              if (
                e &&
                'function' == typeof (t = a.toString) &&
                !o((n = t.call(a)))
              )
                return n
              if ('function' == typeof (t = a.valueOf) && !o((n = t.call(a))))
                return n
              if (
                !e &&
                'function' == typeof (t = a.toString) &&
                !o((n = t.call(a)))
              )
                return n
              throw TypeError("Can't convert object to primitive value")
            }
          },
          function (a, e, t) {
            var o = t(33),
              n = Math.min
            a.exports = function (a) {
              return a > 0 ? n(o(a), 9007199254740991) : 0
            }
          },
          function (a, e, t) {
            var o = t(38)('keys'),
              n = t(29)
            a.exports = function (a) {
              return o[a] || (o[a] = n(a))
            }
          },
          function (a, e, t) {
            var o = t(1),
              n = t(3),
              i = n['__core-js_shared__'] || (n['__core-js_shared__'] = {})
            ;(a.exports = function (a, e) {
              return i[a] || (i[a] = void 0 !== e ? e : {})
            })('versions', []).push({
              version: o.version,
              mode: t(20) ? 'pure' : 'global',
              copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
            })
          },
          function (a, e) {
            a.exports =
              'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
                ','
              )
          },
          function (a, e, t) {
            e.f = t(4)
          },
          function (a, e, t) {
            var o = t(3),
              n = t(1),
              i = t(20),
              r = t(40),
              c = t(9).f
            a.exports = function (a) {
              var e = n.Symbol || (n.Symbol = i ? {} : o.Symbol || {})
              '_' == a.charAt(0) || a in e || c(e, a, { value: r.f(a) })
            }
          },
          function (a, e) {
            e.f = Object.getOwnPropertySymbols
          },
          function (a, e, t) {
            'use strict'
            e.__esModule = !0
            var o,
              n = t(99),
              i = (o = n) && o.__esModule ? o : { default: o }
            e.default = function (a) {
              if (Array.isArray(a)) {
                for (var e = 0, t = Array(a.length); e < a.length; e++)
                  t[e] = a[e]
                return t
              }
              return (0, i.default)(a)
            }
          },
          function (a, e, t) {
            var o = t(45),
              n = t(4)('iterator'),
              i = t(17)
            a.exports = t(1).getIteratorMethod = function (a) {
              if (void 0 != a) return a[n] || a['@@iterator'] || i[o(a)]
            }
          },
          function (a, e, t) {
            var o = t(24),
              n = t(4)('toStringTag'),
              i =
                'Arguments' ==
                o(
                  (function () {
                    return arguments
                  })()
                )
            a.exports = function (a) {
              var e, t, r
              return void 0 === a
                ? 'Undefined'
                : null === a
                ? 'Null'
                : 'string' ==
                  typeof (t = (function (a, e) {
                    try {
                      return a[e]
                    } catch (a) {}
                  })((e = Object(a)), n))
                ? t
                : i
                ? o(e)
                : 'Object' == (r = o(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : r
            }
          },
          function (a, e, t) {
            a.exports = { default: t(103), __esModule: !0 }
          },
          function (a, e, t) {
            a.exports = t(110)
          },
          function (a, e, t) {
            'use strict'
            e.__esModule = !0
            var o,
              n = t(68),
              i = (o = n) && o.__esModule ? o : { default: o }
            e.default = function (a) {
              return function () {
                var e = a.apply(this, arguments)
                return new i.default(function (a, t) {
                  return (function o(n, r) {
                    try {
                      var c = e[n](r),
                        l = c.value
                    } catch (a) {
                      return void t(a)
                    }
                    if (!c.done)
                      return i.default.resolve(l).then(
                        function (a) {
                          o('next', a)
                        },
                        function (a) {
                          o('throw', a)
                        }
                      )
                    a(l)
                  })('next')
                })
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(28)
            a.exports.f = function (a) {
              return new (function (a) {
                var e, t
                ;(this.promise = new a(function (a, o) {
                  if (void 0 !== e || void 0 !== t)
                    throw TypeError('Bad Promise constructor')
                  ;(e = a), (t = o)
                })),
                  (this.resolve = o(e)),
                  (this.reject = o(t))
              })(a)
            }
          },
          function (a, e, t) {
            'use strict'
            ;(e.__esModule = !0),
              (e.default = function (a, e) {
                if (!(a instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })
          },
          function (a, e, t) {
            'use strict'
            e.__esModule = !0
            var o,
              n = t(135),
              i = (o = n) && o.__esModule ? o : { default: o }
            e.default = (function () {
              function a(a, e) {
                for (var t = 0; t < e.length; t++) {
                  var o = e[t]
                  ;(o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    (0, i.default)(a, o.key, o)
                }
              }
              return function (e, t, o) {
                return t && a(e.prototype, t), o && a(e, o), e
              }
            })()
          },
          function (a, e, t) {
            'use strict'
            e.__esModule = !0
            var o = r(t(75)),
              n = r(t(86)),
              i =
                'function' == typeof n.default && 'symbol' == typeof o.default
                  ? function (a) {
                      return typeof a
                    }
                  : function (a) {
                      return a &&
                        'function' == typeof n.default &&
                        a.constructor === n.default &&
                        a !== n.default.prototype
                        ? 'symbol'
                        : typeof a
                    }
            function r(a) {
              return a && a.__esModule ? a : { default: a }
            }
            e.default =
              'function' == typeof n.default && 'symbol' === i(o.default)
                ? function (a) {
                    return void 0 === a ? 'undefined' : i(a)
                  }
                : function (a) {
                    return a &&
                      'function' == typeof n.default &&
                      a.constructor === n.default &&
                      a !== n.default.prototype
                      ? 'symbol'
                      : void 0 === a
                      ? 'undefined'
                      : i(a)
                  }
          },
          function (a, e, t) {
            'use strict'
            var o = t(20),
              n = t(6),
              i = t(55),
              r = t(14),
              c = t(17),
              l = t(78),
              s = t(30),
              u = t(82),
              _ = t(4)('iterator'),
              d = !([].keys && 'next' in [].keys()),
              f = function () {
                return this
              }
            a.exports = function (a, e, t, p, m, b, h) {
              l(t, e, p)
              var v,
                w,
                k,
                g = function (a) {
                  if (!d && a in I) return I[a]
                  switch (a) {
                    case 'keys':
                    case 'values':
                      return function () {
                        return new t(this, a)
                      }
                  }
                  return function () {
                    return new t(this, a)
                  }
                },
                E = e + ' Iterator',
                A = 'values' == m,
                N = !1,
                I = a.prototype,
                y = I[_] || I['@@iterator'] || (m && I[m]),
                C = y || g(m),
                T = m ? (A ? g('entries') : C) : void 0,
                O = ('Array' == e && I.entries) || y
              if (
                (O &&
                  (k = u(O.call(new a()))) !== Object.prototype &&
                  k.next &&
                  (s(k, E, !0), o || 'function' == typeof k[_] || r(k, _, f)),
                A &&
                  y &&
                  'values' !== y.name &&
                  ((N = !0),
                  (C = function () {
                    return y.call(this)
                  })),
                (o && !h) || (!d && !N && I[_]) || r(I, _, C),
                (c[e] = C),
                (c[E] = f),
                m)
              )
                if (
                  ((v = {
                    values: A ? C : g('values'),
                    keys: b ? C : g('keys'),
                    entries: T
                  }),
                  h)
                )
                  for (w in v) w in I || i(I, w, v[w])
                else n(n.P + n.F * (d || N), e, v)
              return v
            }
          },
          function (a, e, t) {
            a.exports =
              !t(11) &&
              !t(15)(function () {
                return (
                  7 !=
                  Object.defineProperty(t(34)('div'), 'a', {
                    get: function () {
                      return 7
                    }
                  }).a
                )
              })
          },
          function (a, e, t) {
            a.exports = t(14)
          },
          function (a, e, t) {
            var o = t(10),
              n = t(79),
              i = t(39),
              r = t(37)('IE_PROTO'),
              c = function () {},
              l = function () {
                var a,
                  e = t(34)('iframe'),
                  o = i.length
                for (
                  e.style.display = 'none',
                    t(59).appendChild(e),
                    e.src = 'javascript:',
                    (a = e.contentWindow.document).open(),
                    a.write('<script>document.F=Object</script>'),
                    a.close(),
                    l = a.F;
                  o--;

                )
                  delete l.prototype[i[o]]
                return l()
              }
            a.exports =
              Object.create ||
              function (a, e) {
                var t
                return (
                  null !== a
                    ? ((c.prototype = o(a)),
                      (t = new c()),
                      (c.prototype = null),
                      (t[r] = a))
                    : (t = l()),
                  void 0 === e ? t : n(t, e)
                )
              }
          },
          function (a, e, t) {
            var o = t(16),
              n = t(18),
              i = t(80)(!1),
              r = t(37)('IE_PROTO')
            a.exports = function (a, e) {
              var t,
                c = n(a),
                l = 0,
                s = []
              for (t in c) t != r && o(c, t) && s.push(t)
              for (; e.length > l; )
                o(c, (t = e[l++])) && (~i(s, t) || s.push(t))
              return s
            }
          },
          function (a, e, t) {
            var o = t(24)
            a.exports = Object('z').propertyIsEnumerable(0)
              ? Object
              : function (a) {
                  return 'String' == o(a) ? a.split('') : Object(a)
                }
          },
          function (a, e, t) {
            var o = t(3).document
            a.exports = o && o.documentElement
          },
          function (a, e, t) {
            var o = t(29)('meta'),
              n = t(13),
              i = t(16),
              r = t(9).f,
              c = 0,
              l =
                Object.isExtensible ||
                function () {
                  return !0
                },
              s = !t(15)(function () {
                return l(Object.preventExtensions({}))
              }),
              u = function (a) {
                r(a, o, { value: { i: 'O' + ++c, w: {} } })
              },
              _ = (a.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function (a, e) {
                  if (!n(a))
                    return 'symbol' == typeof a
                      ? a
                      : ('string' == typeof a ? 'S' : 'P') + a
                  if (!i(a, o)) {
                    if (!l(a)) return 'F'
                    if (!e) return 'E'
                    u(a)
                  }
                  return a[o].i
                },
                getWeak: function (a, e) {
                  if (!i(a, o)) {
                    if (!l(a)) return !0
                    if (!e) return !1
                    u(a)
                  }
                  return a[o].w
                },
                onFreeze: function (a) {
                  return s && _.NEED && l(a) && !i(a, o) && u(a), a
                }
              })
          },
          function (a, e, t) {
            var o = t(57),
              n = t(39).concat('length', 'prototype')
            e.f =
              Object.getOwnPropertyNames ||
              function (a) {
                return o(a, n)
              }
          },
          function (a, e) {},
          function (a, e, t) {
            var o = t(10)
            a.exports = function (a, e, t, n) {
              try {
                return n ? e(o(t)[0], t[1]) : e(t)
              } catch (e) {
                var i = a.return
                throw (void 0 !== i && o(i.call(a)), e)
              }
            }
          },
          function (a, e, t) {
            var o = t(17),
              n = t(4)('iterator'),
              i = Array.prototype
            a.exports = function (a) {
              return void 0 !== a && (o.Array === a || i[n] === a)
            }
          },
          function (a, e, t) {
            var o = t(4)('iterator'),
              n = !1
            try {
              var i = [7][o]()
              ;(i.return = function () {
                n = !0
              }),
                Array.from(i, function () {
                  throw 2
                })
            } catch (a) {}
            a.exports = function (a, e) {
              if (!e && !n) return !1
              var t = !1
              try {
                var i = [7],
                  r = i[o]()
                ;(r.next = function () {
                  return { done: (t = !0) }
                }),
                  (i[o] = function () {
                    return r
                  }),
                  a(i)
              } catch (a) {}
              return t
            }
          },
          function (a, e, t) {
            var o = t(6),
              n = t(1),
              i = t(15)
            a.exports = function (a, e) {
              var t = (n.Object || {})[a] || Object[a],
                r = {}
              ;(r[a] = e(t)),
                o(
                  o.S +
                    o.F *
                      i(function () {
                        t(1)
                      }),
                  'Object',
                  r
                )
            }
          },
          function (a, e, t) {
            'use strict'
            e.__esModule = !0
            var o = i(t(107)),
              n = i(t(26))
            function i(a) {
              return a && a.__esModule ? a : { default: a }
            }
            e.default = (function () {
              return function (a, e) {
                if (Array.isArray(a)) return a
                if ((0, o.default)(Object(a)))
                  return (function (a, e) {
                    var t = [],
                      o = !0,
                      i = !1,
                      r = void 0
                    try {
                      for (
                        var c, l = (0, n.default)(a);
                        !(o = (c = l.next()).done) &&
                        (t.push(c.value), !e || t.length !== e);
                        o = !0
                      );
                    } catch (a) {
                      ;(i = !0), (r = a)
                    } finally {
                      try {
                        !o && l.return && l.return()
                      } finally {
                        if (i) throw r
                      }
                    }
                    return t
                  })(a, e)
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance'
                )
              }
            })()
          },
          function (a, e, t) {
            a.exports = { default: t(112), __esModule: !0 }
          },
          function (a, e, t) {
            var o = t(10),
              n = t(28),
              i = t(4)('species')
            a.exports = function (a, e) {
              var t,
                r = o(a).constructor
              return void 0 === r || void 0 == (t = o(r)[i]) ? e : n(t)
            }
          },
          function (a, e, t) {
            var o,
              n,
              i,
              r = t(21),
              c = t(116),
              l = t(59),
              s = t(34),
              u = t(3),
              _ = u.process,
              d = u.setImmediate,
              f = u.clearImmediate,
              p = u.MessageChannel,
              m = u.Dispatch,
              b = 0,
              h = {},
              v = function () {
                var a = +this
                if (h.hasOwnProperty(a)) {
                  var e = h[a]
                  delete h[a], e()
                }
              },
              w = function (a) {
                v.call(a.data)
              }
            ;(d && f) ||
              ((d = function (a) {
                for (var e = [], t = 1; arguments.length > t; )
                  e.push(arguments[t++])
                return (
                  (h[++b] = function () {
                    c('function' == typeof a ? a : Function(a), e)
                  }),
                  o(b),
                  b
                )
              }),
              (f = function (a) {
                delete h[a]
              }),
              'process' == t(24)(_)
                ? (o = function (a) {
                    _.nextTick(r(v, a, 1))
                  })
                : m && m.now
                ? (o = function (a) {
                    m.now(r(v, a, 1))
                  })
                : p
                ? ((i = (n = new p()).port2),
                  (n.port1.onmessage = w),
                  (o = r(i.postMessage, i, 1)))
                : u.addEventListener &&
                  'function' == typeof postMessage &&
                  !u.importScripts
                ? ((o = function (a) {
                    u.postMessage(a + '', '*')
                  }),
                  u.addEventListener('message', w, !1))
                : (o =
                    'onreadystatechange' in s('script')
                      ? function (a) {
                          l.appendChild(s('script')).onreadystatechange =
                            function () {
                              l.removeChild(this), v.call(a)
                            }
                        }
                      : function (a) {
                          setTimeout(r(v, a, 1), 0)
                        })),
              (a.exports = { set: d, clear: f })
          },
          function (a, e) {
            a.exports = function (a) {
              try {
                return { e: !1, v: a() }
              } catch (a) {
                return { e: !0, v: a }
              }
            }
          },
          function (a, e, t) {
            var o = t(10),
              n = t(13),
              i = t(49)
            a.exports = function (a, e) {
              if ((o(a), n(e) && e.constructor === a)) return e
              var t = i.f(a)
              return (0, t.resolve)(e), t.promise
            }
          },
          function (a, e) {
            a.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff'
          },
          function (a, e, t) {
            'use strict'
            var o = i(t(52)),
              n = i(t(7))
            function i(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var r = t(12).maApi,
              c = t(148).receiveIframeMessage,
              l = t(8),
              s = l.screenOrientation,
              u = l.webviewDisplayMode,
              _ = l.navigationBarTitleMode,
              d = l.videoSourceType,
              f = t(156),
              p = f.addSupport,
              m = f.removeSupport,
              b = t(0),
              h = b.isArray,
              v = b.isObject,
              w = b.paserObj
            function k(a) {
              var e = '',
                t = null
              'string' == typeof a
                ? ((e = a), (t = document.querySelector(e)))
                : h(a)
                ? ((k.iframeElList = k.iframeElList ? k.iframeElList : []),
                  (k.MAIA_SUPPORT_IFRAMES = !0),
                  a.forEach(function (a) {
                    var e = {},
                      t = document.querySelector(a)
                    ;(e.el = t), (e.id = a), (e[a] = t), k.iframeElList.push(e)
                  }),
                  (t = k.iframeElList))
                : v(a) &&
                  'string' == typeof a.querySelector &&
                  '' !== a.querySelector &&
                  (t = document.querySelector(a.querySelector)),
                (c.iframe = t),
                window.addEventListener('message', c)
            }
            ;(k.iframeCallbackList = {}),
              (window.iframeCallbackList = {}),
              (window.__maia_glob_var = {
                MAIA_IFRAME_ID: '',
                MAIA_SUPPORT_IFRAMES: !1
              }),
              (0, n.default)(k, r)
            var g = function (a) {
              if (null !== a.data)
                try {
                  var e = a.data.data
                  'object' !==
                    (void 0 === e ? 'undefined' : (0, o.default)(e)) &&
                    e &&
                    (e = JSON.parse(e)),
                    k.iframeCallbackList[a.data.actionName] &&
                      k.iframeCallbackList[a.data.actionName](e),
                    window.iframeCallbackList[a.data.actionName] &&
                      window.iframeCallbackList[a.data.actionName](e)
                } catch (e) {
                  k.iframeCallbackList[a.data.actionName] &&
                    k.iframeCallbackList[a.data.actionName](a.data.data),
                    window.iframeCallbackList[a.data.actionName] &&
                      window.iframeCallbackList[a.data.actionName](a.data.data)
                }
            }
            Object.defineProperty(k, 'IFRAME_ENV', {
              set: function (a) {
                !0 === a && a !== this._iframeEnv
                  ? ((this._iframeEnv = a),
                    window.addEventListener('message', g))
                  : !1 === a &&
                    a !== this._iframeEnv &&
                    ((this._iframeEnv = !1),
                    window.removeEventListener('message', g))
              },
              get: function () {
                return this._iframeEnv || !1
              }
            }),
              Object.defineProperty(k, 'MAIA_SUPPORT', {
                set: function (a) {
                  !0 === a && a !== this._maiaSupport
                    ? ((this._maiaSupport = a), p())
                    : !1 === a &&
                      a !== this._maiaSupport &&
                      ((this._maiaSupport = !1), m())
                },
                get: function () {
                  return this._maiaSupport || !1
                }
              }),
              Object.defineProperty(k, 'MAIA_IFRAME_ID', {
                set: function (a) {
                  ;(this._MAIA_IFRAME_ID = a),
                    (this.IFRAME_ENV = !0),
                    (window.__maia_glob_var.MAIA_IFRAME_ID = a)
                },
                get: function () {
                  return this._MAIA_IFRAME_ID || ''
                }
              }),
              Object.defineProperty(k, 'MAIA_SUPPORT_IFRAMES', {
                set: function (a) {
                  !0 === a && a !== this._maiaSupportIframes
                    ? ((this._maiaSupportIframes = !0),
                      (window.__maia_glob_var.MAIA_SUPPORT_IFRAMES = !0))
                    : !0 === a &&
                      a !== this._maiaSupportIframes &&
                      ((this._maiaSupportIframes = !1),
                      (window.__maia_glob_var.MAIA_SUPPORT_IFRAMES = !1))
                },
                get: function () {
                  return this._maiaSupportIframes || !1
                }
              }),
              k.IFRAME_ENV ||
                window.addEventListener('message', function (a) {
                  if (null !== a.data && 'miniappEmit' === a.data.type) {
                    var e = w(a.data.params)
                    window[a.data.callbackName] &&
                      window[a.data.callbackName](e)
                  }
                }),
              (k.screenOrientation = s),
              (k.webviewDisplayMode = u),
              (k.navigationBarTitleMode = _),
              (k.videoSourceType = d),
              (k.install = function (a) {
                a.prototype.$maiaH5 = k
              }),
              (a.exports = k)
          },
          function (a, e, t) {
            a.exports = { default: t(76), __esModule: !0 }
          },
          function (a, e, t) {
            t(19), t(31), (a.exports = t(40).f('iterator'))
          },
          function (a, e, t) {
            var o = t(33),
              n = t(27)
            a.exports = function (a) {
              return function (e, t) {
                var i,
                  r,
                  c = String(n(e)),
                  l = o(t),
                  s = c.length
                return l < 0 || l >= s
                  ? a
                    ? ''
                    : void 0
                  : (i = c.charCodeAt(l)) < 55296 ||
                    i > 56319 ||
                    l + 1 === s ||
                    (r = c.charCodeAt(l + 1)) < 56320 ||
                    r > 57343
                  ? a
                    ? c.charAt(l)
                    : i
                  : a
                  ? c.slice(l, l + 2)
                  : r - 56320 + ((i - 55296) << 10) + 65536
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(56),
              n = t(22),
              i = t(30),
              r = {}
            t(14)(r, t(4)('iterator'), function () {
              return this
            }),
              (a.exports = function (a, e, t) {
                ;(a.prototype = o(r, { next: n(1, t) })), i(a, e + ' Iterator')
              })
          },
          function (a, e, t) {
            var o = t(9),
              n = t(10),
              i = t(23)
            a.exports = t(11)
              ? Object.defineProperties
              : function (a, e) {
                  n(a)
                  for (var t, r = i(e), c = r.length, l = 0; c > l; )
                    o.f(a, (t = r[l++]), e[t])
                  return a
                }
          },
          function (a, e, t) {
            var o = t(18),
              n = t(36),
              i = t(81)
            a.exports = function (a) {
              return function (e, t, r) {
                var c,
                  l = o(e),
                  s = n(l.length),
                  u = i(r, s)
                if (a && t != t) {
                  for (; s > u; ) if ((c = l[u++]) != c) return !0
                } else
                  for (; s > u; u++)
                    if ((a || u in l) && l[u] === t) return a || u || 0
                return !a && -1
              }
            }
          },
          function (a, e, t) {
            var o = t(33),
              n = Math.max,
              i = Math.min
            a.exports = function (a, e) {
              return (a = o(a)) < 0 ? n(a + e, 0) : i(a, e)
            }
          },
          function (a, e, t) {
            var o = t(16),
              n = t(25),
              i = t(37)('IE_PROTO'),
              r = Object.prototype
            a.exports =
              Object.getPrototypeOf ||
              function (a) {
                return (
                  (a = n(a)),
                  o(a, i)
                    ? a[i]
                    : 'function' == typeof a.constructor &&
                      a instanceof a.constructor
                    ? a.constructor.prototype
                    : a instanceof Object
                    ? r
                    : null
                )
              }
          },
          function (a, e, t) {
            'use strict'
            var o = t(84),
              n = t(85),
              i = t(17),
              r = t(18)
            ;(a.exports = t(53)(
              Array,
              'Array',
              function (a, e) {
                ;(this._t = r(a)), (this._i = 0), (this._k = e)
              },
              function () {
                var a = this._t,
                  e = this._k,
                  t = this._i++
                return !a || t >= a.length
                  ? ((this._t = void 0), n(1))
                  : n(0, 'keys' == e ? t : 'values' == e ? a[t] : [t, a[t]])
              },
              'values'
            )),
              (i.Arguments = i.Array),
              o('keys'),
              o('values'),
              o('entries')
          },
          function (a, e) {
            a.exports = function () {}
          },
          function (a, e) {
            a.exports = function (a, e) {
              return { value: e, done: !!a }
            }
          },
          function (a, e, t) {
            a.exports = { default: t(87), __esModule: !0 }
          },
          function (a, e, t) {
            t(88), t(62), t(93), t(94), (a.exports = t(1).Symbol)
          },
          function (a, e, t) {
            'use strict'
            var o = t(3),
              n = t(16),
              i = t(11),
              r = t(6),
              c = t(55),
              l = t(60).KEY,
              s = t(15),
              u = t(38),
              _ = t(30),
              d = t(29),
              f = t(4),
              p = t(40),
              m = t(41),
              b = t(89),
              h = t(90),
              v = t(10),
              w = t(13),
              k = t(25),
              g = t(18),
              E = t(35),
              A = t(22),
              N = t(56),
              I = t(91),
              y = t(92),
              C = t(42),
              T = t(9),
              O = t(23),
              S = y.f,
              M = T.f,
              R = I.f,
              F = o.Symbol,
              P = o.JSON,
              L = P && P.stringify,
              x = f('_hidden'),
              D = f('toPrimitive'),
              G = {}.propertyIsEnumerable,
              U = u('symbol-registry'),
              j = u('symbols'),
              B = u('op-symbols'),
              V = Object.prototype,
              W = 'function' == typeof F && !!C.f,
              q = o.QObject,
              H = !q || !q.prototype || !q.prototype.findChild,
              K =
                i &&
                s(function () {
                  return (
                    7 !=
                    N(
                      M({}, 'a', {
                        get: function () {
                          return M(this, 'a', { value: 7 }).a
                        }
                      })
                    ).a
                  )
                })
                  ? function (a, e, t) {
                      var o = S(V, e)
                      o && delete V[e], M(a, e, t), o && a !== V && M(V, e, o)
                    }
                  : M,
              X = function (a) {
                var e = (j[a] = N(F.prototype))
                return (e._k = a), e
              },
              Y =
                W && 'symbol' == typeof F.iterator
                  ? function (a) {
                      return 'symbol' == typeof a
                    }
                  : function (a) {
                      return a instanceof F
                    },
              z = function (a, e, t) {
                return (
                  a === V && z(B, e, t),
                  v(a),
                  (e = E(e, !0)),
                  v(t),
                  n(j, e)
                    ? (t.enumerable
                        ? (n(a, x) && a[x][e] && (a[x][e] = !1),
                          (t = N(t, { enumerable: A(0, !1) })))
                        : (n(a, x) || M(a, x, A(1, {})), (a[x][e] = !0)),
                      K(a, e, t))
                    : M(a, e, t)
                )
              },
              J = function (a, e) {
                v(a)
                for (var t, o = b((e = g(e))), n = 0, i = o.length; i > n; )
                  z(a, (t = o[n++]), e[t])
                return a
              },
              Q = function (a) {
                var e = G.call(this, (a = E(a, !0)))
                return (
                  !(this === V && n(j, a) && !n(B, a)) &&
                  (!(
                    e ||
                    !n(this, a) ||
                    !n(j, a) ||
                    (n(this, x) && this[x][a])
                  ) ||
                    e)
                )
              },
              $ = function (a, e) {
                if (
                  ((a = g(a)), (e = E(e, !0)), a !== V || !n(j, e) || n(B, e))
                ) {
                  var t = S(a, e)
                  return (
                    !t ||
                      !n(j, e) ||
                      (n(a, x) && a[x][e]) ||
                      (t.enumerable = !0),
                    t
                  )
                }
              },
              Z = function (a) {
                for (var e, t = R(g(a)), o = [], i = 0; t.length > i; )
                  n(j, (e = t[i++])) || e == x || e == l || o.push(e)
                return o
              },
              aa = function (a) {
                for (
                  var e, t = a === V, o = R(t ? B : g(a)), i = [], r = 0;
                  o.length > r;

                )
                  !n(j, (e = o[r++])) || (t && !n(V, e)) || i.push(j[e])
                return i
              }
            W ||
              (c(
                (F = function () {
                  if (this instanceof F)
                    throw TypeError('Symbol is not a constructor!')
                  var a = d(arguments.length > 0 ? arguments[0] : void 0),
                    e = function (t) {
                      this === V && e.call(B, t),
                        n(this, x) && n(this[x], a) && (this[x][a] = !1),
                        K(this, a, A(1, t))
                    }
                  return i && H && K(V, a, { configurable: !0, set: e }), X(a)
                }).prototype,
                'toString',
                function () {
                  return this._k
                }
              ),
              (y.f = $),
              (T.f = z),
              (t(61).f = I.f = Z),
              (t(32).f = Q),
              (C.f = aa),
              i && !t(20) && c(V, 'propertyIsEnumerable', Q, !0),
              (p.f = function (a) {
                return X(f(a))
              })),
              r(r.G + r.W + r.F * !W, { Symbol: F })
            for (
              var ea =
                  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
                    ','
                  ),
                ta = 0;
              ea.length > ta;

            )
              f(ea[ta++])
            for (var oa = O(f.store), na = 0; oa.length > na; ) m(oa[na++])
            r(r.S + r.F * !W, 'Symbol', {
              for: function (a) {
                return n(U, (a += '')) ? U[a] : (U[a] = F(a))
              },
              keyFor: function (a) {
                if (!Y(a)) throw TypeError(a + ' is not a symbol!')
                for (var e in U) if (U[e] === a) return e
              },
              useSetter: function () {
                H = !0
              },
              useSimple: function () {
                H = !1
              }
            }),
              r(r.S + r.F * !W, 'Object', {
                create: function (a, e) {
                  return void 0 === e ? N(a) : J(N(a), e)
                },
                defineProperty: z,
                defineProperties: J,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: aa
              })
            var ia = s(function () {
              C.f(1)
            })
            r(r.S + r.F * ia, 'Object', {
              getOwnPropertySymbols: function (a) {
                return C.f(k(a))
              }
            }),
              P &&
                r(
                  r.S +
                    r.F *
                      (!W ||
                        s(function () {
                          var a = F()
                          return (
                            '[null]' != L([a]) ||
                            '{}' != L({ a: a }) ||
                            '{}' != L(Object(a))
                          )
                        })),
                  'JSON',
                  {
                    stringify: function (a) {
                      for (var e, t, o = [a], n = 1; arguments.length > n; )
                        o.push(arguments[n++])
                      if (((t = e = o[1]), (w(e) || void 0 !== a) && !Y(a)))
                        return (
                          h(e) ||
                            (e = function (a, e) {
                              if (
                                ('function' == typeof t &&
                                  (e = t.call(this, a, e)),
                                !Y(e))
                              )
                                return e
                            }),
                          (o[1] = e),
                          L.apply(P, o)
                        )
                    }
                  }
                ),
              F.prototype[D] || t(14)(F.prototype, D, F.prototype.valueOf),
              _(F, 'Symbol'),
              _(Math, 'Math', !0),
              _(o.JSON, 'JSON', !0)
          },
          function (a, e, t) {
            var o = t(23),
              n = t(42),
              i = t(32)
            a.exports = function (a) {
              var e = o(a),
                t = n.f
              if (t)
                for (var r, c = t(a), l = i.f, s = 0; c.length > s; )
                  l.call(a, (r = c[s++])) && e.push(r)
              return e
            }
          },
          function (a, e, t) {
            var o = t(24)
            a.exports =
              Array.isArray ||
              function (a) {
                return 'Array' == o(a)
              }
          },
          function (a, e, t) {
            var o = t(18),
              n = t(61).f,
              i = {}.toString,
              r =
                'object' == typeof window &&
                window &&
                Object.getOwnPropertyNames
                  ? Object.getOwnPropertyNames(window)
                  : []
            a.exports.f = function (a) {
              return r && '[object Window]' == i.call(a)
                ? (function (a) {
                    try {
                      return n(a)
                    } catch (a) {
                      return r.slice()
                    }
                  })(a)
                : n(o(a))
            }
          },
          function (a, e, t) {
            var o = t(32),
              n = t(22),
              i = t(18),
              r = t(35),
              c = t(16),
              l = t(54),
              s = Object.getOwnPropertyDescriptor
            e.f = t(11)
              ? s
              : function (a, e) {
                  if (((a = i(a)), (e = r(e, !0)), l))
                    try {
                      return s(a, e)
                    } catch (a) {}
                  if (c(a, e)) return n(!o.f.call(a, e), a[e])
                }
          },
          function (a, e, t) {
            t(41)('asyncIterator')
          },
          function (a, e, t) {
            t(41)('observable')
          },
          function (a, e, t) {
            t(96), (a.exports = t(1).Object.assign)
          },
          function (a, e, t) {
            var o = t(6)
            o(o.S + o.F, 'Object', { assign: t(97) })
          },
          function (a, e, t) {
            'use strict'
            var o = t(11),
              n = t(23),
              i = t(42),
              r = t(32),
              c = t(25),
              l = t(58),
              s = Object.assign
            a.exports =
              !s ||
              t(15)(function () {
                var a = {},
                  e = {},
                  t = Symbol(),
                  o = 'abcdefghijklmnopqrst'
                return (
                  (a[t] = 7),
                  o.split('').forEach(function (a) {
                    e[a] = a
                  }),
                  7 != s({}, a)[t] || Object.keys(s({}, e)).join('') != o
                )
              })
                ? function (a, e) {
                    for (
                      var t = c(a),
                        s = arguments.length,
                        u = 1,
                        _ = i.f,
                        d = r.f;
                      s > u;

                    )
                      for (
                        var f,
                          p = l(arguments[u++]),
                          m = _ ? n(p).concat(_(p)) : n(p),
                          b = m.length,
                          h = 0;
                        b > h;

                      )
                        (f = m[h++]), (o && !d.call(p, f)) || (t[f] = p[f])
                    return t
                  }
                : s
          },
          function (a, e, t) {
            var o = t(1),
              n = o.JSON || (o.JSON = { stringify: JSON.stringify })
            a.exports = function (a) {
              return n.stringify.apply(n, arguments)
            }
          },
          function (a, e, t) {
            a.exports = { default: t(100), __esModule: !0 }
          },
          function (a, e, t) {
            t(19), t(101), (a.exports = t(1).Array.from)
          },
          function (a, e, t) {
            'use strict'
            var o = t(21),
              n = t(6),
              i = t(25),
              r = t(63),
              c = t(64),
              l = t(36),
              s = t(102),
              u = t(44)
            n(
              n.S +
                n.F *
                  !t(65)(function (a) {
                    Array.from(a)
                  }),
              'Array',
              {
                from: function (a) {
                  var e,
                    t,
                    n,
                    _,
                    d = i(a),
                    f = 'function' == typeof this ? this : Array,
                    p = arguments.length,
                    m = p > 1 ? arguments[1] : void 0,
                    b = void 0 !== m,
                    h = 0,
                    v = u(d)
                  if (
                    (b && (m = o(m, p > 2 ? arguments[2] : void 0, 2)),
                    void 0 == v || (f == Array && c(v)))
                  )
                    for (t = new f((e = l(d.length))); e > h; h++)
                      s(t, h, b ? m(d[h], h) : d[h])
                  else
                    for (_ = v.call(d), t = new f(); !(n = _.next()).done; h++)
                      s(t, h, b ? r(_, m, [n.value, h], !0) : n.value)
                  return (t.length = h), t
                }
              }
            )
          },
          function (a, e, t) {
            'use strict'
            var o = t(9),
              n = t(22)
            a.exports = function (a, e, t) {
              e in a ? o.f(a, e, n(0, t)) : (a[e] = t)
            }
          },
          function (a, e, t) {
            t(104), (a.exports = t(1).Object.keys)
          },
          function (a, e, t) {
            var o = t(25),
              n = t(23)
            t(66)('keys', function () {
              return function (a) {
                return n(o(a))
              }
            })
          },
          function (a, e, t) {
            t(31), t(19), (a.exports = t(106))
          },
          function (a, e, t) {
            var o = t(10),
              n = t(44)
            a.exports = t(1).getIterator = function (a) {
              var e = n(a)
              if ('function' != typeof e)
                throw TypeError(a + ' is not iterable!')
              return o(e.call(a))
            }
          },
          function (a, e, t) {
            a.exports = { default: t(108), __esModule: !0 }
          },
          function (a, e, t) {
            t(31), t(19), (a.exports = t(109))
          },
          function (a, e, t) {
            var o = t(45),
              n = t(4)('iterator'),
              i = t(17)
            a.exports = t(1).isIterable = function (a) {
              var e = Object(a)
              return (
                void 0 !== e[n] || '@@iterator' in e || i.hasOwnProperty(o(e))
              )
            }
          },
          function (a, e, t) {
            var o =
                (function () {
                  return this
                })() || Function('return this')(),
              n =
                o.regeneratorRuntime &&
                Object.getOwnPropertyNames(o).indexOf('regeneratorRuntime') >=
                  0,
              i = n && o.regeneratorRuntime
            if (((o.regeneratorRuntime = void 0), (a.exports = t(111)), n))
              o.regeneratorRuntime = i
            else
              try {
                delete o.regeneratorRuntime
              } catch (a) {
                o.regeneratorRuntime = void 0
              }
          },
          function (a, e) {
            !(function (e) {
              'use strict'
              var t,
                o = Object.prototype,
                n = o.hasOwnProperty,
                i = 'function' == typeof Symbol ? Symbol : {},
                r = i.iterator || '@@iterator',
                c = i.asyncIterator || '@@asyncIterator',
                l = i.toStringTag || '@@toStringTag',
                s = 'object' == typeof a,
                u = e.regeneratorRuntime
              if (u) s && (a.exports = u)
              else {
                ;(u = e.regeneratorRuntime = s ? a.exports : {}).wrap = k
                var _ = 'suspendedStart',
                  d = 'suspendedYield',
                  f = 'executing',
                  p = 'completed',
                  m = {},
                  b = {}
                b[r] = function () {
                  return this
                }
                var h = Object.getPrototypeOf,
                  v = h && h(h(M([])))
                v && v !== o && n.call(v, r) && (b = v)
                var w = (N.prototype = E.prototype = Object.create(b))
                ;(A.prototype = w.constructor = N),
                  (N.constructor = A),
                  (N[l] = A.displayName = 'GeneratorFunction'),
                  (u.isGeneratorFunction = function (a) {
                    var e = 'function' == typeof a && a.constructor
                    return (
                      !!e &&
                      (e === A ||
                        'GeneratorFunction' === (e.displayName || e.name))
                    )
                  }),
                  (u.mark = function (a) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(a, N)
                        : ((a.__proto__ = N),
                          l in a || (a[l] = 'GeneratorFunction')),
                      (a.prototype = Object.create(w)),
                      a
                    )
                  }),
                  (u.awrap = function (a) {
                    return { __await: a }
                  }),
                  I(y.prototype),
                  (y.prototype[c] = function () {
                    return this
                  }),
                  (u.AsyncIterator = y),
                  (u.async = function (a, e, t, o) {
                    var n = new y(k(a, e, t, o))
                    return u.isGeneratorFunction(e)
                      ? n
                      : n.next().then(function (a) {
                          return a.done ? a.value : n.next()
                        })
                  }),
                  I(w),
                  (w[l] = 'Generator'),
                  (w[r] = function () {
                    return this
                  }),
                  (w.toString = function () {
                    return '[object Generator]'
                  }),
                  (u.keys = function (a) {
                    var e = []
                    for (var t in a) e.push(t)
                    return (
                      e.reverse(),
                      function t() {
                        for (; e.length; ) {
                          var o = e.pop()
                          if (o in a) return (t.value = o), (t.done = !1), t
                        }
                        return (t.done = !0), t
                      }
                    )
                  }),
                  (u.values = M),
                  (S.prototype = {
                    constructor: S,
                    reset: function (a) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = t),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = 'next'),
                        (this.arg = t),
                        this.tryEntries.forEach(O),
                        !a)
                      )
                        for (var e in this)
                          't' === e.charAt(0) &&
                            n.call(this, e) &&
                            !isNaN(+e.slice(1)) &&
                            (this[e] = t)
                    },
                    stop: function () {
                      this.done = !0
                      var a = this.tryEntries[0].completion
                      if ('throw' === a.type) throw a.arg
                      return this.rval
                    },
                    dispatchException: function (a) {
                      if (this.done) throw a
                      var e = this
                      function o(o, n) {
                        return (
                          (c.type = 'throw'),
                          (c.arg = a),
                          (e.next = o),
                          n && ((e.method = 'next'), (e.arg = t)),
                          !!n
                        )
                      }
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var r = this.tryEntries[i],
                          c = r.completion
                        if ('root' === r.tryLoc) return o('end')
                        if (r.tryLoc <= this.prev) {
                          var l = n.call(r, 'catchLoc'),
                            s = n.call(r, 'finallyLoc')
                          if (l && s) {
                            if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                            if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                          } else if (l) {
                            if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                          } else {
                            if (!s)
                              throw new Error(
                                'try statement without catch or finally'
                              )
                            if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                          }
                        }
                      }
                    },
                    abrupt: function (a, e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var o = this.tryEntries[t]
                        if (
                          o.tryLoc <= this.prev &&
                          n.call(o, 'finallyLoc') &&
                          this.prev < o.finallyLoc
                        ) {
                          var i = o
                          break
                        }
                      }
                      i &&
                        ('break' === a || 'continue' === a) &&
                        i.tryLoc <= e &&
                        e <= i.finallyLoc &&
                        (i = null)
                      var r = i ? i.completion : {}
                      return (
                        (r.type = a),
                        (r.arg = e),
                        i
                          ? ((this.method = 'next'),
                            (this.next = i.finallyLoc),
                            m)
                          : this.complete(r)
                      )
                    },
                    complete: function (a, e) {
                      if ('throw' === a.type) throw a.arg
                      return (
                        'break' === a.type || 'continue' === a.type
                          ? (this.next = a.arg)
                          : 'return' === a.type
                          ? ((this.rval = this.arg = a.arg),
                            (this.method = 'return'),
                            (this.next = 'end'))
                          : 'normal' === a.type && e && (this.next = e),
                        m
                      )
                    },
                    finish: function (a) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var t = this.tryEntries[e]
                        if (t.finallyLoc === a)
                          return (
                            this.complete(t.completion, t.afterLoc), O(t), m
                          )
                      }
                    },
                    catch: function (a) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var t = this.tryEntries[e]
                        if (t.tryLoc === a) {
                          var o = t.completion
                          if ('throw' === o.type) {
                            var n = o.arg
                            O(t)
                          }
                          return n
                        }
                      }
                      throw new Error('illegal catch attempt')
                    },
                    delegateYield: function (a, e, o) {
                      return (
                        (this.delegate = {
                          iterator: M(a),
                          resultName: e,
                          nextLoc: o
                        }),
                        'next' === this.method && (this.arg = t),
                        m
                      )
                    }
                  })
              }
              function k(a, e, t, o) {
                var n = e && e.prototype instanceof E ? e : E,
                  i = Object.create(n.prototype),
                  r = new S(o || [])
                return (
                  (i._invoke = (function (a, e, t) {
                    var o = _
                    return function (n, i) {
                      if (o === f)
                        throw new Error('Generator is already running')
                      if (o === p) {
                        if ('throw' === n) throw i
                        return R()
                      }
                      for (t.method = n, t.arg = i; ; ) {
                        var r = t.delegate
                        if (r) {
                          var c = C(r, t)
                          if (c) {
                            if (c === m) continue
                            return c
                          }
                        }
                        if ('next' === t.method) t.sent = t._sent = t.arg
                        else if ('throw' === t.method) {
                          if (o === _) throw ((o = p), t.arg)
                          t.dispatchException(t.arg)
                        } else
                          'return' === t.method && t.abrupt('return', t.arg)
                        o = f
                        var l = g(a, e, t)
                        if ('normal' === l.type) {
                          if (((o = t.done ? p : d), l.arg === m)) continue
                          return { value: l.arg, done: t.done }
                        }
                        'throw' === l.type &&
                          ((o = p), (t.method = 'throw'), (t.arg = l.arg))
                      }
                    }
                  })(a, t, r)),
                  i
                )
              }
              function g(a, e, t) {
                try {
                  return { type: 'normal', arg: a.call(e, t) }
                } catch (a) {
                  return { type: 'throw', arg: a }
                }
              }
              function E() {}
              function A() {}
              function N() {}
              function I(a) {
                ;['next', 'throw', 'return'].forEach(function (e) {
                  a[e] = function (a) {
                    return this._invoke(e, a)
                  }
                })
              }
              function y(a) {
                var e
                this._invoke = function (t, o) {
                  function i() {
                    return new Promise(function (e, i) {
                      !(function e(t, o, i, r) {
                        var c = g(a[t], a, o)
                        if ('throw' !== c.type) {
                          var l = c.arg,
                            s = l.value
                          return s &&
                            'object' == typeof s &&
                            n.call(s, '__await')
                            ? Promise.resolve(s.__await).then(
                                function (a) {
                                  e('next', a, i, r)
                                },
                                function (a) {
                                  e('throw', a, i, r)
                                }
                              )
                            : Promise.resolve(s).then(function (a) {
                                ;(l.value = a), i(l)
                              }, r)
                        }
                        r(c.arg)
                      })(t, o, e, i)
                    })
                  }
                  return (e = e ? e.then(i, i) : i())
                }
              }
              function C(a, e) {
                var o = a.iterator[e.method]
                if (o === t) {
                  if (((e.delegate = null), 'throw' === e.method)) {
                    if (
                      a.iterator.return &&
                      ((e.method = 'return'),
                      (e.arg = t),
                      C(a, e),
                      'throw' === e.method)
                    )
                      return m
                    ;(e.method = 'throw'),
                      (e.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ))
                  }
                  return m
                }
                var n = g(o, a.iterator, e.arg)
                if ('throw' === n.type)
                  return (
                    (e.method = 'throw'),
                    (e.arg = n.arg),
                    (e.delegate = null),
                    m
                  )
                var i = n.arg
                return i
                  ? i.done
                    ? ((e[a.resultName] = i.value),
                      (e.next = a.nextLoc),
                      'return' !== e.method &&
                        ((e.method = 'next'), (e.arg = t)),
                      (e.delegate = null),
                      m)
                    : i
                  : ((e.method = 'throw'),
                    (e.arg = new TypeError('iterator result is not an object')),
                    (e.delegate = null),
                    m)
              }
              function T(a) {
                var e = { tryLoc: a[0] }
                1 in a && (e.catchLoc = a[1]),
                  2 in a && ((e.finallyLoc = a[2]), (e.afterLoc = a[3])),
                  this.tryEntries.push(e)
              }
              function O(a) {
                var e = a.completion || {}
                ;(e.type = 'normal'), delete e.arg, (a.completion = e)
              }
              function S(a) {
                ;(this.tryEntries = [{ tryLoc: 'root' }]),
                  a.forEach(T, this),
                  this.reset(!0)
              }
              function M(a) {
                if (a) {
                  var e = a[r]
                  if (e) return e.call(a)
                  if ('function' == typeof a.next) return a
                  if (!isNaN(a.length)) {
                    var o = -1,
                      i = function e() {
                        for (; ++o < a.length; )
                          if (n.call(a, o))
                            return (e.value = a[o]), (e.done = !1), e
                        return (e.value = t), (e.done = !0), e
                      }
                    return (i.next = i)
                  }
                }
                return { next: R }
              }
              function R() {
                return { value: t, done: !0 }
              }
            })(
              (function () {
                return this
              })() || Function('return this')()
            )
          },
          function (a, e, t) {
            t(62),
              t(19),
              t(31),
              t(113),
              t(121),
              t(122),
              (a.exports = t(1).Promise)
          },
          function (a, e, t) {
            'use strict'
            var o,
              n,
              i,
              r,
              c = t(20),
              l = t(3),
              s = t(21),
              u = t(45),
              _ = t(6),
              d = t(13),
              f = t(28),
              p = t(114),
              m = t(115),
              b = t(69),
              h = t(70).set,
              v = t(117)(),
              w = t(49),
              k = t(71),
              g = t(118),
              E = t(72),
              A = l.TypeError,
              N = l.process,
              I = N && N.versions,
              y = (I && I.v8) || '',
              C = l.Promise,
              T = 'process' == u(N),
              O = function () {},
              S = (n = w.f),
              M = !!(function () {
                try {
                  var a = C.resolve(1),
                    e = ((a.constructor = {})[t(4)('species')] = function (a) {
                      a(O, O)
                    })
                  return (
                    (T || 'function' == typeof PromiseRejectionEvent) &&
                    a.then(O) instanceof e &&
                    0 !== y.indexOf('6.6') &&
                    -1 === g.indexOf('Chrome/66')
                  )
                } catch (a) {}
              })(),
              R = function (a) {
                var e
                return !(!d(a) || 'function' != typeof (e = a.then)) && e
              },
              F = function (a, e) {
                if (!a._n) {
                  a._n = !0
                  var t = a._c
                  v(function () {
                    for (
                      var o = a._v,
                        n = 1 == a._s,
                        i = 0,
                        r = function (e) {
                          var t,
                            i,
                            r,
                            c = n ? e.ok : e.fail,
                            l = e.resolve,
                            s = e.reject,
                            u = e.domain
                          try {
                            c
                              ? (n || (2 == a._h && x(a), (a._h = 1)),
                                !0 === c
                                  ? (t = o)
                                  : (u && u.enter(),
                                    (t = c(o)),
                                    u && (u.exit(), (r = !0))),
                                t === e.promise
                                  ? s(A('Promise-chain cycle'))
                                  : (i = R(t))
                                  ? i.call(t, l, s)
                                  : l(t))
                              : s(o)
                          } catch (a) {
                            u && !r && u.exit(), s(a)
                          }
                        };
                      t.length > i;

                    )
                      r(t[i++])
                    ;(a._c = []), (a._n = !1), e && !a._h && P(a)
                  })
                }
              },
              P = function (a) {
                h.call(l, function () {
                  var e,
                    t,
                    o,
                    n = a._v,
                    i = L(a)
                  if (
                    (i &&
                      ((e = k(function () {
                        T
                          ? N.emit('unhandledRejection', n, a)
                          : (t = l.onunhandledrejection)
                          ? t({ promise: a, reason: n })
                          : (o = l.console) &&
                            o.error &&
                            o.error('Unhandled promise rejection', n)
                      })),
                      (a._h = T || L(a) ? 2 : 1)),
                    (a._a = void 0),
                    i && e.e)
                  )
                    throw e.v
                })
              },
              L = function (a) {
                return 1 !== a._h && 0 === (a._a || a._c).length
              },
              x = function (a) {
                h.call(l, function () {
                  var e
                  T
                    ? N.emit('rejectionHandled', a)
                    : (e = l.onrejectionhandled) &&
                      e({ promise: a, reason: a._v })
                })
              },
              D = function (a) {
                var e = this
                e._d ||
                  ((e._d = !0),
                  ((e = e._w || e)._v = a),
                  (e._s = 2),
                  e._a || (e._a = e._c.slice()),
                  F(e, !0))
              },
              G = function (a) {
                var e,
                  t = this
                if (!t._d) {
                  ;(t._d = !0), (t = t._w || t)
                  try {
                    if (t === a) throw A("Promise can't be resolved itself")
                    ;(e = R(a))
                      ? v(function () {
                          var o = { _w: t, _d: !1 }
                          try {
                            e.call(a, s(G, o, 1), s(D, o, 1))
                          } catch (a) {
                            D.call(o, a)
                          }
                        })
                      : ((t._v = a), (t._s = 1), F(t, !1))
                  } catch (a) {
                    D.call({ _w: t, _d: !1 }, a)
                  }
                }
              }
            M ||
              ((C = function (a) {
                p(this, C, 'Promise', '_h'), f(a), o.call(this)
                try {
                  a(s(G, this, 1), s(D, this, 1))
                } catch (a) {
                  D.call(this, a)
                }
              }),
              ((o = function (a) {
                ;(this._c = []),
                  (this._a = void 0),
                  (this._s = 0),
                  (this._d = !1),
                  (this._v = void 0),
                  (this._h = 0),
                  (this._n = !1)
              }).prototype = t(119)(C.prototype, {
                then: function (a, e) {
                  var t = S(b(this, C))
                  return (
                    (t.ok = 'function' != typeof a || a),
                    (t.fail = 'function' == typeof e && e),
                    (t.domain = T ? N.domain : void 0),
                    this._c.push(t),
                    this._a && this._a.push(t),
                    this._s && F(this, !1),
                    t.promise
                  )
                },
                catch: function (a) {
                  return this.then(void 0, a)
                }
              })),
              (i = function () {
                var a = new o()
                ;(this.promise = a),
                  (this.resolve = s(G, a, 1)),
                  (this.reject = s(D, a, 1))
              }),
              (w.f = S =
                function (a) {
                  return a === C || a === r ? new i(a) : n(a)
                })),
              _(_.G + _.W + _.F * !M, { Promise: C }),
              t(30)(C, 'Promise'),
              t(120)('Promise'),
              (r = t(1).Promise),
              _(_.S + _.F * !M, 'Promise', {
                reject: function (a) {
                  var e = S(this)
                  return (0, e.reject)(a), e.promise
                }
              }),
              _(_.S + _.F * (c || !M), 'Promise', {
                resolve: function (a) {
                  return E(c && this === r ? C : this, a)
                }
              }),
              _(
                _.S +
                  _.F *
                    !(
                      M &&
                      t(65)(function (a) {
                        C.all(a).catch(O)
                      })
                    ),
                'Promise',
                {
                  all: function (a) {
                    var e = this,
                      t = S(e),
                      o = t.resolve,
                      n = t.reject,
                      i = k(function () {
                        var t = [],
                          i = 0,
                          r = 1
                        m(a, !1, function (a) {
                          var c = i++,
                            l = !1
                          t.push(void 0),
                            r++,
                            e.resolve(a).then(function (a) {
                              l || ((l = !0), (t[c] = a), --r || o(t))
                            }, n)
                        }),
                          --r || o(t)
                      })
                    return i.e && n(i.v), t.promise
                  },
                  race: function (a) {
                    var e = this,
                      t = S(e),
                      o = t.reject,
                      n = k(function () {
                        m(a, !1, function (a) {
                          e.resolve(a).then(t.resolve, o)
                        })
                      })
                    return n.e && o(n.v), t.promise
                  }
                }
              )
          },
          function (a, e) {
            a.exports = function (a, e, t, o) {
              if (!(a instanceof e) || (void 0 !== o && o in a))
                throw TypeError(t + ': incorrect invocation!')
              return a
            }
          },
          function (a, e, t) {
            var o = t(21),
              n = t(63),
              i = t(64),
              r = t(10),
              c = t(36),
              l = t(44),
              s = {},
              u = {}
            ;((e = a.exports =
              function (a, e, t, _, d) {
                var f,
                  p,
                  m,
                  b,
                  h = d
                    ? function () {
                        return a
                      }
                    : l(a),
                  v = o(t, _, e ? 2 : 1),
                  w = 0
                if ('function' != typeof h)
                  throw TypeError(a + ' is not iterable!')
                if (i(h)) {
                  for (f = c(a.length); f > w; w++)
                    if (
                      (b = e ? v(r((p = a[w]))[0], p[1]) : v(a[w])) === s ||
                      b === u
                    )
                      return b
                } else
                  for (m = h.call(a); !(p = m.next()).done; )
                    if ((b = n(m, v, p.value, e)) === s || b === u) return b
              }).BREAK = s),
              (e.RETURN = u)
          },
          function (a, e) {
            a.exports = function (a, e, t) {
              var o = void 0 === t
              switch (e.length) {
                case 0:
                  return o ? a() : a.call(t)
                case 1:
                  return o ? a(e[0]) : a.call(t, e[0])
                case 2:
                  return o ? a(e[0], e[1]) : a.call(t, e[0], e[1])
                case 3:
                  return o ? a(e[0], e[1], e[2]) : a.call(t, e[0], e[1], e[2])
                case 4:
                  return o
                    ? a(e[0], e[1], e[2], e[3])
                    : a.call(t, e[0], e[1], e[2], e[3])
              }
              return a.apply(t, e)
            }
          },
          function (a, e, t) {
            var o = t(3),
              n = t(70).set,
              i = o.MutationObserver || o.WebKitMutationObserver,
              r = o.process,
              c = o.Promise,
              l = 'process' == t(24)(r)
            a.exports = function () {
              var a,
                e,
                t,
                s = function () {
                  var o, n
                  for (l && (o = r.domain) && o.exit(); a; ) {
                    ;(n = a.fn), (a = a.next)
                    try {
                      n()
                    } catch (o) {
                      throw (a ? t() : (e = void 0), o)
                    }
                  }
                  ;(e = void 0), o && o.enter()
                }
              if (l)
                t = function () {
                  r.nextTick(s)
                }
              else if (!i || (o.navigator && o.navigator.standalone))
                if (c && c.resolve) {
                  var u = c.resolve(void 0)
                  t = function () {
                    u.then(s)
                  }
                } else
                  t = function () {
                    n.call(o, s)
                  }
              else {
                var _ = !0,
                  d = document.createTextNode('')
                new i(s).observe(d, { characterData: !0 }),
                  (t = function () {
                    d.data = _ = !_
                  })
              }
              return function (o) {
                var n = { fn: o, next: void 0 }
                e && (e.next = n), a || ((a = n), t()), (e = n)
              }
            }
          },
          function (a, e, t) {
            var o = t(3).navigator
            a.exports = (o && o.userAgent) || ''
          },
          function (a, e, t) {
            var o = t(14)
            a.exports = function (a, e, t) {
              for (var n in e) t && a[n] ? (a[n] = e[n]) : o(a, n, e[n])
              return a
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(3),
              n = t(1),
              i = t(9),
              r = t(11),
              c = t(4)('species')
            a.exports = function (a) {
              var e = 'function' == typeof n[a] ? n[a] : o[a]
              r &&
                e &&
                !e[c] &&
                i.f(e, c, {
                  configurable: !0,
                  get: function () {
                    return this
                  }
                })
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(6),
              n = t(1),
              i = t(3),
              r = t(69),
              c = t(72)
            o(o.P + o.R, 'Promise', {
              finally: function (a) {
                var e = r(this, n.Promise || i.Promise),
                  t = 'function' == typeof a
                return this.then(
                  t
                    ? function (t) {
                        return c(e, a()).then(function () {
                          return t
                        })
                      }
                    : a,
                  t
                    ? function (t) {
                        return c(e, a()).then(function () {
                          throw t
                        })
                      }
                    : a
                )
              }
            })
          },
          function (a, e, t) {
            'use strict'
            var o = t(6),
              n = t(49),
              i = t(71)
            o(o.S, 'Promise', {
              try: function (a) {
                var e = n.f(this),
                  t = i(a)
                return (t.e ? e.reject : e.resolve)(t.v), e.promise
              }
            })
          },
          function (a, e, t) {
            a.exports = { default: t(124), __esModule: !0 }
          },
          function (a, e, t) {
            t(125), (a.exports = t(1).Object.freeze)
          },
          function (a, e, t) {
            var o = t(13),
              n = t(60).onFreeze
            t(66)('freeze', function (a) {
              return function (e) {
                return a && o(e) ? a(n(e)) : e
              }
            })
          },
          function (a, e, t) {
            'use strict'
            var o = s(t(5)),
              n = s(t(26)),
              i = s(t(46)),
              r = s(t(47)),
              c = s(t(48)),
              l = s(t(7))
            function s(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var u = t(0),
              _ = u.command,
              d = u.commandAsync,
              f = u.isString,
              p = u.isFunction,
              m = u.emptyFun,
              b = u.trim,
              h = u.isArray,
              v = u.paserObj,
              w = u.mountCallback,
              k = u.isObject,
              g = u.formatCallbackByParam,
              E = u.isBoolean,
              A = u.joinParamToUrl,
              N = u.isNotEmptyObject,
              I = t(2),
              y = t(8).callbackNames,
              C = void 0,
              T = void 0,
              O = void 0,
              S = void 0,
              M = void 0,
              R = void 0,
              F = void 0,
              P = void 0,
              L = void 0,
              x = void 0,
              D = void 0,
              G = void 0,
              U = void 0,
              j = void 0,
              B = void 0,
              V = void 0,
              W = void 0,
              q = void 0,
              H = void 0,
              K = void 0,
              X = void 0
            ;(window.__make_phone_call_callback__ =
              window.__make_phone_call_callback__ ||
              function (a) {
                C(a)
              }),
              (window.__send_phone_message_callback__ =
                window.__send_phone_message_callback__ ||
                function (a) {
                  T(v(a))
                }),
              (window.__send_email_callback__ =
                window.__send_email_callback__ ||
                function (a) {
                  O(a)
                }),
              (window.__get_app_info_callback__ =
                window.__get_app_info_callback__ ||
                function (a) {
                  S(v(a))
                }),
              (window.__get_device_info_callback__ =
                window.__get_device_info_callback__ ||
                function (a) {
                  M(v(a))
                }),
              (window.__get_location_callback__ =
                window.__get_location_callback__ ||
                function (a) {
                  R(v(a))
                }),
              (window.__get_network_callback__ =
                window.__get_network_callback__ ||
                function (a) {
                  var e = v(a)
                  F(e)
                }),
              (window.__scan_code_callback__ =
                window.__scan_code_callback__ ||
                function (a) {
                  P(v(a))
                }),
              (window.__maia_write_nfc_callback__ =
                window.__maia_write_nfc_callback__ ||
                function (a) {
                  x(v(a))
                }),
              (window.__maia_read_nfc_callback__ =
                window.__maia_read_nfc_callback__ ||
                function (a) {
                  L(v(a))
                }),
              (window.__maia_close_nfc_callback__ =
                window.__maia_close_nfc_callback__ ||
                function (a) {
                  D(v(a))
                }),
              (window.__maia_set_screen_brightness_callback__ =
                window.__maia_set_screen_brightness_callback__ ||
                function (a) {
                  G(v(a))
                }),
              (window[y.SET_STORAGE] =
                window[y.SET_STORAGE] ||
                function (a) {
                  U(v(a))
                }),
              (window[y.GET_STORAGE] =
                window[y.GET_STORAGE] ||
                function (a) {
                  j(v(a))
                }),
              (window[y.REMOVE_STORAGE] =
                window[y.REMOVE_STORAGE] ||
                function (a) {
                  B(v(a))
                }),
              (window[y.GET_STORAGE_INFO] =
                window[y.GET_STORAGE_INFO] ||
                function (a) {
                  V(v(a))
                }),
              (window[y.CLEAR_STORAGE] =
                window[y.CLEAR_STORAGE] ||
                function (a) {
                  W(v(a))
                }),
              (window[y.SET_STORAGE_APP] =
                window[y.SET_STORAGE_APP] ||
                function (a) {
                  q(v(a))
                }),
              (window[y.GET_STORAGE_APP] =
                window[y.GET_STORAGE_APP] ||
                function (a) {
                  H(v(a))
                }),
              (window[y.REMOVE_STORAGE_APP] =
                window[y.REMOVE_STORAGE_APP] ||
                function (a) {
                  K(v(a))
                }),
              (window[y.GET_STORAGE_INFO_APP] =
                window[y.GET_STORAGE_INFO_APP] ||
                function (a) {
                  X(v(a))
                }),
              (a.exports = {
                makePhoneCall: function (a) {
                  var e = (0, l.default)({}, a)
                  p(e.callback) || (e.callback = m), (C = e.callback)
                  var t = 'phone=' + e.phoneNumber + '&'
                  ;(t += w.call(this, {
                    apiName: 'makePhoneCall',
                    callbacks: {
                      __make_phone_call_callback__: {
                        method: C,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    _('makePhoneCall', t)
                },
                sendPhoneMessage: function (a) {
                  var e = (0, l.default)({}, a),
                    t = void 0,
                    o = '',
                    n = /^\d{11}$/
                  if ('string' == typeof e.receivers) {
                    if (!/^(\d{11},)*\d{11},?$/.test(e.receivers))
                      throw new Error('receivers字符串格式不正确')
                    t = e.receivers
                  } else {
                    if (!Array.isArray(e.receivers))
                      throw new Error('receivers格式不正确')
                    t = (t = e.receivers.filter(function (a) {
                      return !('string' != typeof a || !n.test(a))
                    })).join(',')
                  }
                  f(e.message) &&
                    '' !== b(e.message) &&
                    (o = '&message=' + encodeURIComponent(b(e.message))),
                    p(e.callback) || (e.callback = m),
                    (T = e.callback)
                  var i = 'receivers=' + t + o + '&'
                  ;(i += w.call(this, {
                    apiName: 'sendPhoneMessage',
                    callbacks: {
                      __send_phone_message_callback__: {
                        method: T,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    _('sendPhoneMessage', i)
                },
                sendEmail: function (a) {
                  var e = (0, l.default)({}, a),
                    t = void 0,
                    o = '',
                    n = '',
                    i = void 0,
                    r = /^(\.\w-)+@(\w-)+(\.[\w-])+$/
                  if ('string' == typeof e.receivers) {
                    if (
                      !/^(([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2}),)*([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})+$/.test(
                        e.receivers
                      )
                    )
                      throw new Error('receivers格式不正确')
                    t = e.receivers
                  } else {
                    if (!Array.isArray(e.receivers))
                      throw new Error('receivers格式不正确')
                    t = (t = e.receivers.filter(function (a) {
                      return !('string' != typeof a || !r.test(a))
                    })).join(',')
                  }
                  'string' == typeof e.subject &&
                    '' !== e.subject.trim() &&
                    (o = '&subject=' + encodeURIComponent(e.subject.trim())),
                    'string' == typeof e.content &&
                      '' !== e.content.trim() &&
                      (n = '&content=' + encodeURIComponent(e.content.trim())),
                    p(e.callback) || (e.callback = m),
                    (O = e.callback),
                    (i = 'receivers=' + encodeURIComponent(t) + o + n + '&'),
                    (i += w.call(this, {
                      apiName: 'sendEmail',
                      callbacks: {
                        __send_email_callback__: {
                          method: O,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    _('sendEmail', i)
                },
                getAppInfo: function (a) {
                  S = g(a)
                  var e = w.call(this, {
                    apiName: 'getAppInfo',
                    callbacks: {
                      __get_app_info_callback__: {
                        method: S,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                  _('getAppInfo', e)
                },
                getDeviceInfo: function (a) {
                  M = g(a)
                  var e = w.call(this, {
                    apiName: 'getDeviceInfo',
                    callbacks: {
                      __get_device_info_callback__: {
                        method: M,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                  _('getDeviceInfo', e)
                },
                getAppInfoAsync: (function () {
                  var a = (0, c.default)(
                    r.default.mark(function a() {
                      var e, t
                      return r.default.wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (!this.IFRAME_ENV) {
                                  a.next = 2
                                  break
                                }
                                return a.abrupt('return', null)
                              case 2:
                                return (
                                  (e = w.call(this, {
                                    apiName: 'getAppInfoAsync',
                                    callbacks: {
                                      __maia_get_app_info__: {
                                        method: function (a) {
                                          ;(window.data = v(a)),
                                            (window.appflag = !0)
                                        },
                                        appCallbackName: 'callback'
                                      }
                                    }
                                  })),
                                  (a.next = 5),
                                  d('getAppInfoAsync', e)
                                )
                              case 5:
                                return (t = a.sent), a.abrupt('return', t)
                              case 7:
                              case 'end':
                                return a.stop()
                            }
                        },
                        a,
                        this
                      )
                    })
                  )
                  return function () {
                    return a.apply(this, arguments)
                  }
                })(),
                getDeviceInfoAsync: (function () {
                  var a = (0, c.default)(
                    r.default.mark(function a() {
                      var e, t
                      return r.default.wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (!this.IFRAME_ENV) {
                                  a.next = 2
                                  break
                                }
                                return a.abrupt('return', null)
                              case 2:
                                return (
                                  (e = w.call(this, {
                                    apiName: 'getDeviceInfoAsync',
                                    callbacks: {
                                      __maia_get_device_info__: {
                                        method: function (a) {
                                          ;(window.data = v(a)),
                                            (window.deviceflag = !0)
                                        },
                                        appCallbackName: 'callback'
                                      }
                                    }
                                  })),
                                  (a.next = 5),
                                  d('getDeviceInfoAsync', e)
                                )
                              case 5:
                                return (t = a.sent), a.abrupt('return', t)
                              case 7:
                              case 'end':
                                return a.stop()
                            }
                        },
                        a,
                        this
                      )
                    })
                  )
                  return function () {
                    return a.apply(this, arguments)
                  }
                })(),
                getDeviceInfoOnlyIframe: function (a) {
                  if (!p(a))
                    throw new Error(
                      '在iframe模式下获取AppInfo必须给定回调函数做参数'
                    )
                  this.IFRAME_ENV &&
                    ((this.iframeCallbackList[I.GETDEVICEINFOIFRAME] =
                      function (e) {
                        a(e)
                      }),
                    window.top.postMessage(
                      {
                        actionName: I.GETDEVICEINFOIFRAME,
                        data: {},
                        el: this.MAIA_IFRAME_ID
                      },
                      '*'
                    ))
                },
                getAppInfoOnlyIframe: function (a) {
                  if (!p(a))
                    throw new Error(
                      '在iframe模式下获取AppInfo必须给定回调函数做参数'
                    )
                  this.IFRAME_ENV &&
                    ((this.iframeCallbackList[I.GETAPPINFOIFRAME] = function (
                      e
                    ) {
                      a(e)
                    }),
                    window.top.postMessage(
                      {
                        actionName: I.GETAPPINFOIFRAME,
                        data: {},
                        el: this.MAIA_IFRAME_ID
                      },
                      '*'
                    ))
                },
                getLocation: function (a) {
                  if (((R = g(a)), this.IFRAME_ENV))
                    (this.iframeCallbackList[I.GETLOCATION] = function (a) {
                      R(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: I.GETLOCATION,
                          data: {},
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var e = w.call(this, {
                      apiName: 'getLocation',
                      callbacks: {
                        __get_location_callback__: {
                          method: R,
                          appCallbackName: 'callback'
                        }
                      }
                    })
                    _('getLocation', e)
                  }
                },
                getLocationByTencentMap: function (a) {
                  if (((R = g(a)), this.IFRAME_ENV))
                    (this.iframeCallbackList[I.GETTENCENTMAPLOCATION] =
                      function (a) {
                        R(a)
                      }),
                      window.top.postMessage(
                        {
                          actionName: I.GETTENCENTMAPLOCATION,
                          data: {},
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var e = w.call(this, {
                      apiName: 'getLocationByTencentMap',
                      callbacks: {
                        __get_location_callback__: {
                          method: R,
                          appCallbackName: 'callback'
                        }
                      }
                    })
                    _('getTencentMapLocation', e)
                  }
                },
                getNetwork: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : '0',
                    e = arguments[1]
                  if (
                    (p(a) && ((e = a), (a = '0')),
                    '0' !== (a = String(a)) && '1' !== a)
                  )
                    throw new Error('isSignal必须是0或1')
                  if (((F = g(e)), this.IFRAME_ENV))
                    (this.iframeCallbackList[I.GETNETWORK] = function (a) {
                      F(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: I.GETNETWORK,
                          data: { isSignal: a },
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var t =
                      'isSignal=' +
                      a +
                      '&' +
                      w.call(this, {
                        apiName: 'getNetwork',
                        callbacks: {
                          __get_network_callback__: {
                            method: F,
                            appCallbackName: 'callback'
                          }
                        }
                      })
                    _('getNetwork', t)
                  }
                },
                scanCode: function (a) {
                  var e = (0, l.default)({}, a),
                    t = [!1, !0],
                    o = [],
                    r = { type: 0 },
                    c = [],
                    s = void 0,
                    u = 0,
                    d = { barCode: 2, qrCode: 1 },
                    p = e.scanType
                  if (h(p)) {
                    var m = !0,
                      b = !1,
                      v = void 0
                    try {
                      for (
                        var k, E = (0, n.default)(p);
                        !(m = (k = E.next()).done);
                        m = !0
                      ) {
                        var A = k.value
                        void 0 !== d[A] && o.push(d[A])
                      }
                    } catch (a) {
                      ;(b = !0), (v = a)
                    } finally {
                      try {
                        !m && E.return && E.return()
                      } finally {
                        if (b) throw v
                      }
                    }
                    o.length === (0, i.default)(d).length && (o = [0]),
                      (r.type = o.join(''))
                  } else f(p) && d[p] && (r.type = d[p])
                  ;(e.callback = g(e.callback)),
                    e.libraryType && (r.libraryType = e.libraryType),
                    [0, 1, '0', '1'].indexOf(e.onlyFromCamera) > -1 &&
                      (r.onlyFromCamera = e.onlyFromCamera)
                  var N = t.indexOf(e.isShowTorch)
                  N > -1 && (r.isShowTorch = N)
                  var I = t.indexOf(e.isShowInput)
                  I > -1 && (r.isShowInput = I)
                  var y = t.indexOf(e.autoCancel)
                  y > -1 && (r.autoCancel = y)
                  var C = t.indexOf(e.supportLocation)
                  for (var T in (C > -1 && (r.supportLocation = C),
                  e.scanningTip &&
                    (r.scanningTip = encodeURIComponent(e.scanningTip)),
                  (P = e.callback),
                  r))
                    c[u++] = T + '=' + r[T]
                  ;(s = c.join('&') + '&'),
                    (s += w.call(this, {
                      apiName: 'scanCode',
                      callbacks: {
                        __scan_code_callback__: {
                          method: P,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    _('scanCode', s)
                },
                closeScanCode: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = g(a.callback),
                    t = ''
                  N(a) && (t += A(a, ['callback']) + '&'),
                    (t += w.call(this, {
                      apiName: 'closeScanCode',
                      callbacks: {
                        __maia_showModal_callback_: {
                          method: e,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    _('closeScanCode', t)
                },
                closeNFC: function (a) {
                  D = g(a)
                  var e = w.call(this, {
                    apiName: 'closeNFC',
                    callbacks: {
                      __maia_close_nfc_callback__: {
                        method: D,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                  _('closeNFC', e)
                },
                writeNFC: function (a, e, t) {
                  if (!f(a)) throw new Error('content必须是string')
                  if (!f(e)) throw new Error('identifier必须是string')
                  x = g(t)
                  var o =
                    'content=' +
                    encodeURIComponent(a) +
                    '&identifier=' +
                    encodeURIComponent(e) +
                    '&'
                  ;(o += w.call(this, {
                    apiName: 'writeNFC',
                    callbacks: {
                      __maia_write_nfc_callback__: {
                        method: x,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    _('writeNFC', o)
                },
                readNFC: function (a) {
                  L = g(a)
                  var e = w.call(this, {
                    apiName: 'readNFC',
                    callbacks: {
                      __maia_read_nfc_callback__: {
                        method: L,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                  _('readNFC', e)
                },
                setScreenBrightness: function (a, e) {
                  G = g(e)
                  var t = a
                  t ? t > 100 && (t = 100) : (t = 0)
                  var o = 'mode=' + t + '&'
                  ;(o += w.call(this, {
                    apiName: 'setScreenBrightness',
                    callbacks: {
                      __maia_set_screen_brightness_callback__: {
                        method: G,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    _('setScreenBrightness', o)
                },
                setStorage: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = (0, l.default)({}, a),
                    t = {},
                    n = []
                  if (!e.key || !e.data) throw new Error('key和data为必填项')
                  for (var i in ((e.callback = g(e.callback)),
                  (t.key = e.key),
                  h(e.data) || k(e.data)
                    ? (t.data = encodeURIComponent((0, o.default)(e.data)))
                    : (t.data = encodeURIComponent(e.data)),
                  t))
                    n.push(i + '=' + t[i])
                  var r = {}
                  'APP' === a.type
                    ? ((q = e.callback),
                      (r[y.SET_STORAGE_APP] = {
                        method: q,
                        appCallbackName: 'callback'
                      }))
                    : ((U = e.callback),
                      (r[y.SET_STORAGE] = {
                        method: U,
                        appCallbackName: 'callback'
                      }))
                  var c = n.join('&') + '&'
                  ;(c += w.call(this, { apiName: 'setStorage', callbacks: r })),
                    _('APP' === a.type ? 'setStorageApp' : 'setStorage', c)
                },
                getStorage: function (a, e, t) {
                  var o = {},
                    n = [],
                    i = e
                  if (!a) throw new Error('key为必填项')
                  for (var r in (p(e) || (i = m), (o.key = a), o))
                    n.push(r + '=' + o[r])
                  var c = {}
                  f(t) && 'APP' === t
                    ? ((H = i),
                      (c[y.GET_STORAGE_APP] = {
                        method: H,
                        appCallbackName: 'callback'
                      }))
                    : ((j = i),
                      (c[y.GET_STORAGE] = {
                        method: j,
                        appCallbackName: 'callback'
                      }))
                  var l = n.join('&') + '&'
                  ;(l += w.call(this, { apiName: 'getStorage', callbacks: c })),
                    f(t) && 'APP' === t
                      ? _('getStorageApp', l)
                      : _('getStorage', l)
                },
                removeStorage: function (a, e, t) {
                  var o = {},
                    n = [],
                    i = e
                  if (!a) throw new Error('key为必填项')
                  for (var r in (p(e) || (i = m), (o.key = a), o))
                    n.push(r + '=' + o[r])
                  var c = {}
                  f(t) && 'APP' === t
                    ? ((K = i),
                      (c[y.REMOVE_STORAGE_APP] = {
                        method: K,
                        appCallbackName: 'callback'
                      }))
                    : ((B = i),
                      (c[y.REMOVE_STORAGE] = {
                        method: B,
                        appCallbackName: 'callback'
                      }))
                  var l = n.join('&') + '&'
                  ;(l += w.call(this, {
                    apiName: 'removeStorage',
                    callbacks: c
                  })),
                    f(t) && 'APP' === t
                      ? _('removeStorageApp', l)
                      : _('removeStorage', l)
                },
                getStorageInfo: function (a, e) {
                  var t = a
                  p(a) || (t = m)
                  var o = {}
                  f(e) && 'APP' === e
                    ? ((X = t),
                      (o[y.GET_STORAGE_INFO_APP] = {
                        method: X,
                        appCallbackName: 'callback'
                      }))
                    : ((V = t),
                      (o[y.GET_STORAGE_INFO] = {
                        method: V,
                        appCallbackName: 'callback'
                      }))
                  var n = ''
                  ;(n += w.call(this, {
                    apiName: 'getStorageInfo',
                    callbacks: o
                  })),
                    f(e) && 'APP' === e
                      ? _('getStorageInfoApp', n)
                      : _('getStorageInfo', n)
                },
                clearStorage: function (a) {
                  var e = a
                  p(a) || (e = m), (W = e)
                  var t = {}
                  t[y.CLEAR_STORAGE] = {
                    method: W,
                    appCallbackName: 'callback'
                  }
                  var o = ''
                  ;(o += w.call(this, {
                    apiName: 'clearStorage',
                    callbacks: t
                  })),
                    _('clearStorage', o)
                },
                copyToClipboard: function (a) {
                  var e = void 0,
                    t = g(a.callback)
                  ;(e = 'content=' + a.content + '&'),
                    E(a.isToast) && a.isToast && (e += 'isToast=1&'),
                    (e += w.call(this, {
                      apiName: 'copyToClipboard',
                      callbacks: {
                        __maia_copy_content_to_app: {
                          method: t,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    _('copyToClipboard', e)
                },
                getClipboardData: function (a) {
                  var e = g(a),
                    t = w.call(this, {
                      apiName: 'getClipboardData',
                      callbacks: {
                        __maia_get_clipboard_data_: {
                          method: e,
                          appCallbackName: 'callback'
                        }
                      }
                    })
                  _('getClipboardData', t)
                },
                onBluetoothDeviceFound: function (a) {
                  var e = (0, l.default)({}, a),
                    t = g(e.callback),
                    n = (0, o.default)(e),
                    i = 'config=' + encodeURIComponent(n) + '&'
                  ;(i += w.call(this, {
                    apiName: 'onBluetoothDeviceFound',
                    callbacks: {
                      __maia_on_bluetooth_device_found: {
                        method: t,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    _('onBluetoothDeviceFound', i)
                },
                stopBluetoothDevicesDiscovery: function (a) {
                  var e = g(a),
                    t = ''
                  ;(t += w.call(this, {
                    apiName: 'stopBluetoothDevicesDiscovery',
                    callbacks: {
                      __maia_stop_bluetooth_device_discovery: {
                        method: e,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    _('stopBluetoothDevicesDiscovery', t)
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o = i(t(7)),
              n = i(t(5))
            function i(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var r = t(0),
              c = r.command,
              l = r.paserObj,
              s = r.isString,
              u = r.isObject,
              _ = r.trim,
              d = r.isUndefined,
              f = r.isNull,
              p = r.getURLParams,
              m = r.isNotEmptyObject,
              b = r.createIframe,
              h = r.isFunction,
              v = r.isAsyncFunction,
              w = r.isNotEmptyString,
              k = r.mountCallback,
              g = r.formatCallbackByParam,
              E = r.deepCopy,
              A = r.isSupportMaiaH5ByUa,
              N = t(2),
              I = t(8),
              y = I.validAppName,
              C = I.callbackNames,
              T = void 0,
              O = void 0,
              S = void 0,
              M = void 0,
              R = t(2)
            ;(window[C.GET_TOKEN] = function (a) {
              T && T(l(a))
            }),
              (window[C.REDIRECT_LOGIN] =
                window[C.REDIRECT_LOGIN] ||
                function (a) {
                  O && O(l(a))
                }),
              (window[C.REDIRECT_LOGIN_CONFIRM] =
                window[C.REDIRECT_LOGIN_CONFIRM] ||
                function (a) {
                  M && M(l(a))
                }),
              (window.__maia_use_native_callback =
                window.__maia_use_native_callback ||
                function (a) {
                  S && S(l(a))
                }),
              (a.exports = {
                createExtension: function (a, e) {
                  if (s(a)) {
                    var t = void 0,
                      o = ''
                    if (d(e) || f(e))
                      (t = new URL(_(a))),
                        (o = t.searchParams
                          ? t.searchParams.get('callback')
                          : p(t).callback),
                        this.IFRAME_ENV
                          ? ((this.iframeCallbackList[N.CREATEEXTENSION] =
                              function (a) {
                                window[o] && window[o](a)
                              }),
                            window.top.postMessage(
                              {
                                actionName: N.CREATEEXTENSION,
                                data: { url: a, encode: e, callbackName: o },
                                el: this.MAIA_IFRAME_ID
                              },
                              '*'
                            ))
                          : c('createExtension', _(a))
                    else if (u(e)) {
                      var i = e,
                        r = a + '?'
                      for (var l in i)
                        u(i[l])
                          ? (r +=
                              l +
                              '=' +
                              encodeURIComponent((0, n.default)(i[l])) +
                              '&')
                          : (r += l + '=' + encodeURIComponent(i[l]) + '&')
                      this.IFRAME_ENV
                        ? ((t = new URL(r)),
                          (o = t.searchParams
                            ? t.searchParams.get('callback')
                            : p(t).callback),
                          (this.iframeCallbackList[N.CREATEEXTENSION] =
                            function (a) {
                              window[o](a)
                            }),
                          window.top.postMessage(
                            {
                              actionName: N.CREATEEXTENSION,
                              data: { url: a, encode: e, callbackName: o },
                              el: this.MAIA_IFRAME_ID
                            },
                            '*'
                          ))
                        : c('createExtension', r.substring(0, r.length - 1))
                    }
                  }
                },
                createExtensionTools: function (a, e) {
                  if (s(a)) {
                    var t = void 0,
                      o = ''
                    if (d(e) || f(e))
                      (t = new URL(_(a))),
                        (o = t.searchParams
                          ? t.searchParams.get('callback')
                          : p(t).callback),
                        this.IFRAME_ENV
                          ? ((this.iframeCallbackList[N.CREATEEXTENSION] =
                              function (a) {
                                window[o] && window[o](a)
                              }),
                            window.top.postMessage(
                              {
                                actionName: N.CREATEEXTENSION,
                                data: { url: a, encode: e, callbackName: o },
                                el: this.MAIA_IFRAME_ID
                              },
                              '*'
                            ))
                          : c('createExtension', _(a), { ignoreMaiaH5Ua: !0 })
                    else if (u(e)) {
                      var i = e,
                        r = a + '?'
                      for (var l in i)
                        u(i[l])
                          ? (r +=
                              l +
                              '=' +
                              encodeURIComponent((0, n.default)(i[l])) +
                              '&')
                          : (r += l + '=' + encodeURIComponent(i[l]) + '&')
                      this.IFRAME_ENV
                        ? ((t = new URL(r)),
                          (o = t.searchParams
                            ? t.searchParams.get('callback')
                            : p(t).callback),
                          (this.iframeCallbackList[N.CREATEEXTENSION] =
                            function (a) {
                              window[o](a)
                            }),
                          window.top.postMessage(
                            {
                              actionName: N.CREATEEXTENSION,
                              data: { url: a, encode: e, callbackName: o },
                              el: this.MAIA_IFRAME_ID
                            },
                            '*'
                          ))
                        : c('createExtension', r.substring(0, r.length - 1), {
                            ignoreMaiaH5Ua: !0
                          })
                    }
                  }
                },
                useNative: function (a, e, t) {
                  var o = E(a),
                    i = E(e),
                    r = E(t)
                  if ((s(o) || (o = 'longfor'), !s(i)))
                    throw new Error('请指定合法的path路径')
                  m(r) || (r = {})
                  var c = ''
                  for (var l in r)
                    if ('callback' !== l)
                      if (u(r[l]))
                        c +=
                          l +
                          '=' +
                          encodeURIComponent((0, n.default)(r[l])) +
                          '&'
                      else {
                        if (h(r[l]) || v(r[l])) continue
                        c += l + '=' + encodeURIComponent(r[l]) + '&'
                      }
                  if (((S = g(r.callback)), this.IFRAME_ENV))
                    (this.iframeCallbackList[R.USENATIVE] = S),
                      window.top.postMessage(
                        {
                          actionName: N.USENATIVE,
                          data: (0, n.default)({
                            protocol: o,
                            path: i,
                            params: r
                          }),
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    if (
                      ((c += k.call(this, {
                        apiName: 'useNative',
                        callbacks: {
                          __maia_use_native_callback: {
                            method: S,
                            appCallbackName: 'callback'
                          }
                        }
                      })),
                      (c += '&'),
                      !A('useNative'))
                    )
                      return null
                    b(o + '://' + i + '?' + c.substring(0, c.length - 1))
                  }
                  return null
                },
                getToken: function (a, e) {
                  if (w(a)) {
                    if (-1 === y.indexOf(a.toUpperCase()))
                      throw new Error('当前输入的appName不合法')
                    if (((T = g(e)), this.IFRAME_ENV))
                      (this.iframeCallbackList[R.GETTOKEN] = T),
                        window.top.postMessage(
                          {
                            actionName: N.GETTOKEN,
                            data: { appName: a },
                            el: this.MAIA_IFRAME_ID
                          },
                          '*'
                        )
                    else {
                      var t = k.call(this, {
                        apiName: 'getToken',
                        callbacks: {
                          __maia_get_token_callback__: {
                            method: T,
                            appCallbackName: 'callback'
                          }
                        }
                      })
                      c('getToken_' + a.toUpperCase(), t)
                    }
                  }
                },
                redirectLogin: function (a, e) {
                  if (w(a)) {
                    if (-1 === y.indexOf(a.toUpperCase()))
                      throw new Error('当前输入的appName不合法')
                    O = g(e)
                    var t = k.call(this, {
                      apiName: 'redirectLogin',
                      callbacks: {
                        __maia_redirect_login_callback__: {
                          method: O,
                          appCallbackName: 'callback'
                        }
                      }
                    })
                    c('redirectLogin_' + a.toUpperCase(), t)
                  }
                },
                redirectLoginConfirm: function (a) {
                  var e = (0, o.default)({}, a),
                    t = {},
                    n = []
                  for (var i in (u(e) || (e = {}),
                  (e.callback = g(e.callback)),
                  (t.login_qr_id = e.id),
                  (t.login_system_name = e.name),
                  t))
                    n.push(i + '=' + t[i])
                  M = e.callback
                  var r = n.join('&') + '&}'
                  ;(r += k.call(this, {
                    apiName: 'redirectLoginConfirm',
                    callbacks: {
                      __maia_redirect_login_confirm_callback__: {
                        method: M,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    c('redirectLoginConfirm', r)
                },
                canIUse: function (a) {
                  var e = (0, o.default)({}, a)
                  if (!e.url) throw new Error('url不能为空!')
                  if ((new URL(e.url), !e.callback))
                    throw new Error('callback不能为空！')
                  var t = g(e.callback),
                    n = 'url=' + encodeURIComponent(e.url) + '&'
                  ;(n += k.call(this, {
                    apiName: 'canIUse',
                    callbacks: {
                      __maia_canIUse_callback__: {
                        method: t,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    c('canIUse', n)
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o = r(t(5)),
              n = r(t(129)),
              i = r(t(7))
            function r(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var c = t(0),
              l = c.command,
              s = c.isNumber,
              u = c.paserObj,
              _ = c.isFunction,
              d = c.emptyFun,
              f = c.isBoolean,
              p = c.isValidNumber,
              m = c.isObject,
              b = c.isNotEmptyString,
              h = c.isString,
              v = c.isNull,
              w = c.isUndefined,
              k = c.trim,
              g = c.mountCallback,
              E = c.deepCopy,
              A = c.formatCallbackByParam,
              N = c.isSupportMaiaH5ByUa,
              I = c.isArray,
              y = t(8),
              C = y.mediaParams,
              T = y.validVideoSourceType,
              O = y.videoSourceType,
              S = t(2),
              M = t(134),
              R = t(138),
              F = new M(),
              P = void 0,
              L = void 0,
              x = void 0,
              D = void 0,
              G = void 0,
              U = void 0,
              j = new R(),
              B = void 0
            ;(window.__maia_choose_image_callback__ =
              window.__maia_choose_image_callback__ ||
              function (a) {
                P(u(a))
              }),
              (window.__maia_take_recorder_callback__ =
                window.__maia_take_recorder_callback__ ||
                function (a) {
                  L(u(a))
                }),
              (window.__maia_take_recorder_text_callback__ =
                window.__maia_take_recorder_text_callback__ ||
                function (a) {
                  x(u(a))
                }),
              (window.__maia_take_xf_recorder_text_callback__ =
                window.__maia_take_xf_recorder_text_callback__ ||
                function (a) {
                  D(u(a))
                }),
              (window.__maia_choose_video_callback__ =
                window.__maia_choose_video_callback__ ||
                function (a) {
                  _(G) && G(u(a))
                }),
              (window.__maia_preview_image_callback__ =
                window.__maia_preview_image_callback__ ||
                function (a) {
                  _(U) && U(u(a))
                }),
              (window.__maia_save_image_to_album_callback__ =
                window.__maia_save_image_to_album_callback__ ||
                function (a) {
                  _(B) && B(u(a))
                }),
              (a.exports = {
                chooseImage: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = parseInt(a.max),
                    t = parseInt(a.edit),
                    o = parseInt(a.width),
                    n = parseInt(a.height),
                    i = parseFloat(a.quality),
                    r = parseFloat(a.details),
                    c = parseFloat(a.advanced),
                    u = parseInt(a.threshold),
                    _ = a.thumb,
                    d = a.thumbWidth,
                    p = a.thumbHeight,
                    m = {
                      max: C.count.default,
                      edit: C.edit.default,
                      quality: C.quality.default,
                      details: C.details.default,
                      advanced: C.advanced.default,
                      createThumb: C.thumb.create,
                      thumbWidth: C.thumb.width,
                      thumbHeight: C.thumb.height
                    },
                    b = [],
                    h = void 0,
                    v = 0
                  for (var w in (!isNaN(e) &&
                    e >= C.count.min &&
                    e <= C.count.max &&
                    (m.max = e),
                  isNaN(o) || (m.width = o),
                  isNaN(n) || (m.height = n),
                  isNaN(t) || (0 !== t && 1 !== t) || (m.edit = t),
                  !isNaN(i) &&
                    i > C.quality.min &&
                    i <= C.quality.max &&
                    (m.quality = i),
                  isNaN(r) || (0 !== r && 1 !== r) || (m.details = r),
                  isNaN(c) || (0 !== c && 1 !== c) || (m.advanced = c),
                  !isNaN(u) && u > 0 && (m.threshold = u),
                  ((s(_) && (0 === _ || 1 === _)) || f(_)) &&
                    (m.createThumb = Number(_)),
                  s(d) && (m.thumbWidth = d),
                  s(p) && (m.thumbHeight = p),
                  (P = A(a.callback)),
                  m))
                    b[v++] = w + '=' + m[w]
                  this.IFRAME_ENV
                    ? ((this.iframeCallbackList[S.CHOOSEIMAGE] = function (a) {
                        P(a)
                      }),
                      window.top.postMessage(
                        {
                          actionName: S.CHOOSEIMAGE,
                          data: m,
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      ))
                    : ((h = b.join('&') + '&'),
                      (h += g.call(this, {
                        apiName: 'chooseImage',
                        callbacks: {
                          __maia_choose_image_callback__: {
                            method: P,
                            appCallbackName: 'callback'
                          }
                        }
                      })),
                      l('chooseImage', h))
                },
                chooseVideo: function (a) {
                  var e = {},
                    t = [],
                    r = '',
                    c = (0, i.default)({}, a)
                  if (-1 === T.indexOf(a.sourceType))
                    throw new Error('必须指定视频来源:摄像头拍摄或相册选取')
                  if (a.sourceType === O.ALBUM) {
                    if (((r = 'chooseVideo'), p(a.count))) {
                      var s = (0, n.default)(a.count)
                      e.max = s <= 0 ? 1 : a.count
                    } else e.max = 1
                    p(a.sizeLimit) &&
                      a.sizeLimit > 0 &&
                      (e.maxSize = a.sizeLimit)
                  } else if (a.sourceType === O.CAMERA) {
                    if (((r = 'cameraStartRecord'), p(a.maxDuration))) {
                      var u = (0, n.default)(a.maxDuration)
                      e.duration = u <= 0 ? C.duration : a.maxDuration
                    } else e.duration = C.duration
                    f(a.showEdit) && (e.editHide = '' + Number(a.showEdit))
                  }
                  for (var m in (a.defaultCompress &&
                    (e.defaultCompress = a.defaultCompress),
                  e))
                    t.push(m + '=' + e[m])
                  if (((G = _(a.callback) ? a.callback : d), this.IFRAME_ENV))
                    (this.iframeCallbackList[S.CHOOSEVIDEO] = function (a) {
                      G(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: S.CHOOSEVIDEO,
                          data: (0, o.default)(c),
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var b = t.join('&') + '&'
                    ;(b += g.call(this, {
                      apiName: 'chooseVideo',
                      callbacks: {
                        __maia_choose_video_callback__: {
                          method: G,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                      l(r, b)
                  }
                },
                createCameraContext: function () {
                  return (
                    (F.IFRAME_ENV = this.IFRAME_ENV),
                    (F.MAIA_IFRAME_ID = this.MAIA_IFRAME_ID),
                    (F.iframeCallbackList = this.iframeCallbackList),
                    F
                  )
                },
                createVideoContext: function () {
                  return (
                    (j.IFRAME_ENV = this.IFRAME_ENV),
                    (j.MAIA_IFRAME_ID = this.MAIA_IFRAME_ID),
                    (j.iframeCallbackList = this.iframeCallbackList),
                    j
                  )
                },
                getRecorder: function (a) {
                  if (((L = A(a)), this.IFRAME_ENV))
                    (this.iframeCallbackList[S.GETRECORDER] = function (a) {
                      L(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: S.GETRECORDER,
                          data: {},
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var e = g.call(this, {
                      apiName: 'getRecorder',
                      callbacks: {
                        __maia_take_recorder_callback__: {
                          method: L,
                          appCallbackName: 'callback'
                        }
                      }
                    })
                    l('getRecorder', e)
                  }
                },
                getXFRecorderText: function (a) {
                  var e = (0, i.default)({}, a)
                  if ((m(e) || (e = {}), (D = A(e.callback)), this.IFRAME_ENV))
                    (this.iframeCallbackList[S.GETXFRECORDERTEXT] = function (
                      a
                    ) {
                      D(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: S.GETXFRECORDERTEXT,
                          data: {},
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var t = g.call(this, {
                      apiName: 'getXFRecorderText',
                      callbacks: {
                        __maia_take_xf_recorder_text_callback__: {
                          method: D,
                          appCallbackName: 'callback'
                        }
                      }
                    })
                    l('getXFRecorderText', t)
                  }
                },
                getRecorderText: function (a) {
                  var e = (0, i.default)({}, a)
                  m(e) || (e = {}), (e.autoText = 1), (x = A(e.callback))
                  var t = [],
                    o = 0,
                    n = {}
                  for (var r in e)
                    'callback' !== r &&
                      ((t[o++] = r + '=' + e[r]), (n[r] = e[r]))
                  if (this.IFRAME_ENV)
                    (this.iframeCallbackList[S.GETRECORDERTEXT] = function (a) {
                      x(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: S.GETRECORDERTEXT,
                          data: n,
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var c = t.join('&') + '&'
                    if (
                      ((c += g.call(this, {
                        apiName: 'getRecorderText',
                        callbacks: {
                          __maia_take_recorder_text_callback__: {
                            method: x,
                            appCallbackName: 'callback'
                          }
                        }
                      })),
                      !N('getRecorderText'))
                    )
                      return ''
                    l('getRecorder', c)
                  }
                  return null
                },
                previewImage: function (a) {
                  var e = {},
                    t = [],
                    n = 0,
                    r = {}
                  if (
                    (m(a) && (r = (0, i.default)({}, a)),
                    'string' == typeof r.downHide
                      ? (e.downHide = k(r.downHide) || 0)
                      : (e.downHide = r.downHide || 0),
                    b(r.paths))
                  )
                    (e.paths = encodeURIComponent((0, o.default)([r.paths]))),
                      (n = 1)
                  else {
                    if (!Array.isArray(r.paths))
                      throw new Error('必须指定预览的图片地址')
                    ;(e.paths = encodeURIComponent((0, o.default)(r.paths))),
                      (n = r.paths.length)
                  }
                  if (
                    (p(r.start) && r.start > 0 && r.start < n
                      ? (e.startPageIndex = Number(r.start))
                      : (e.startPageIndex = 0),
                    !w(r.watermark) && !v(r.watermark))
                  ) {
                    if (!h(r.watermark))
                      throw new Error('水印文本类型指定错误,必须为字符串')
                    e.waterMark = encodeURIComponent(r.watermark)
                  }
                  w(r.waterMarkColor) ||
                    v(r.waterMarkColor) ||
                    (e.waterMarkColor = encodeURIComponent(r.waterMarkColor)),
                    I(r.thumbPaths) &&
                      (e.thumbPaths = encodeURIComponent(
                        (0, o.default)(r.thumbPaths)
                      )),
                    (U = _(r.callback) ? r.callback : d)
                  var c = A(r.closeCallback)
                  for (var s in e) t.push(s + '=' + e[s])
                  var u = t.join('&') + '&'
                  ;(u += g.call(this, {
                    apiName: 'previewImage',
                    callbacks: {
                      __maia_preview_image_callback__: {
                        method: U,
                        appCallbackName: 'callback'
                      },
                      __maia_preview_image_close_callback__: {
                        method: c,
                        appCallbackName: 'closeCallback'
                      }
                    }
                  })),
                    l('previewImage', u)
                },
                saveImageToAlbum: function (a) {
                  var e = void 0
                  if (((B = A(a.callback)), !b(a.base64)))
                    throw new Error('base64图片数据不能为空')
                  ;(e = a.base64), (e = decodeURIComponent(e))
                  var t = 'source=' + encodeURIComponent(e) + '&'
                  f(a.toastHide) && a.toastHide && (t += 'toastHide=1&'),
                    (t += g.call(this, {
                      apiName: 'saveImageToAlbum',
                      callbacks: {
                        __maia_save_image_to_album_callback__: {
                          method: B,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    l('saveToAlbum', t)
                },
                choosePhotoOrVideo: function (a) {
                  var e = E(a),
                    t = A(a.callback),
                    o = ''
                  e.max && s(e.max) && (o += 'max=' + e.max + '&'),
                    (o += g.call(this, {
                      apiName: 'choosePhotoOrVideo',
                      callbacks: {
                        __maia_choose_photo_or_video_: {
                          method: t,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    l('choosePhotoOrVideo', o)
                }
              })
          },
          function (a, e, t) {
            a.exports = { default: t(130), __esModule: !0 }
          },
          function (a, e, t) {
            t(131), (a.exports = t(1).Number.parseInt)
          },
          function (a, e, t) {
            var o = t(6),
              n = t(132)
            o(o.S + o.F * (Number.parseInt != n), 'Number', { parseInt: n })
          },
          function (a, e, t) {
            var o = t(3).parseInt,
              n = t(133).trim,
              i = t(73),
              r = /^[-+]?0[xX]/
            a.exports =
              8 !== o(i + '08') || 22 !== o(i + '0x16')
                ? function (a, e) {
                    var t = n(String(a), 3)
                    return o(t, e >>> 0 || (r.test(t) ? 16 : 10))
                  }
                : o
          },
          function (a, e, t) {
            var o = t(6),
              n = t(27),
              i = t(15),
              r = t(73),
              c = '[' + r + ']',
              l = RegExp('^' + c + c + '*'),
              s = RegExp(c + c + '*$'),
              u = function (a, e, t) {
                var n = {},
                  c = i(function () {
                    return !!r[a]() || '​' != '​'[a]()
                  }),
                  l = (n[a] = c ? e(_) : r[a])
                t && (n[t] = l), o(o.P + o.F * c, 'String', n)
              },
              _ = (u.trim = function (a, e) {
                return (
                  (a = String(n(a))),
                  1 & e && (a = a.replace(l, '')),
                  2 & e && (a = a.replace(s, '')),
                  a
                )
              })
            a.exports = u
          },
          function (a, e, t) {
            'use strict'
            var o = l(t(5)),
              n = l(t(26)),
              i = l(t(7)),
              r = l(t(50)),
              c = l(t(51))
            function l(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var s = t(0),
              u = s.command,
              _ = s.paserObj,
              d = s.isBoolean,
              f = s.isNumber,
              p = s.isNotEmptyObject,
              m = s.isArray,
              b = s.isString,
              h = s.mountCallback,
              v = s.formatCallbackByParam,
              w = s.isStringNumberOrNumber,
              k = t(8),
              g = k.mediaParams,
              E = k.callbackNames,
              A = t(2),
              N = void 0,
              I = void 0
            ;(window.__maia_camera_start_record_callback__ =
              window.__maia_camera_start_record_callback__ ||
              function (a) {
                void 0
              }),
              (window.__maia_take_photo_callback__ =
                window.__maia_take_photo_callback__ ||
                function (a) {
                  N && N(_(a))
                }),
              (window[E.TAKE_PHOTOS] =
                window[E.TAKE_PHOTOS] ||
                function (a) {
                  I && I(_(a))
                })
            var y = (function () {
              function a() {
                ;(0, r.default)(this, a)
              }
              return (
                (0, c.default)(a, [
                  {
                    key: 'takePhoto',
                    value: function () {
                      var a =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        e = {
                          edit: g.edit.default,
                          quality: g.quality.default,
                          advanced: g.advanced.default,
                          createThumb: g.thumb.create,
                          thumbWidth: g.thumb.width,
                          thumbHeight: g.thumb.height
                        },
                        t = [],
                        o = void 0,
                        n = 0
                      f(a.width) && (e.width = a.width),
                        f(a.height) && (e.height = a.height)
                      var i = a.edit
                      !f(i) || (0 !== i && 1 !== i) || (e.edit = i)
                      var r = parseFloat(a.quality)
                      !isNaN(r) &&
                        r > g.quality.min &&
                        r <= g.quality.max &&
                        (e.quality = r)
                      var c = parseInt(a.threshold)
                      !isNaN(c) && c > 0 && (e.threshold = c)
                      var l = a.advanced
                      !f(l) || (0 !== l && 1 !== l) || (e.advanced = l)
                      var s = a.thumb
                      ;((f(s) && (0 === s || 1 === s)) || d(s)) &&
                        (e.createThumb = Number(s))
                      var _ = a.thumbWidth
                      f(_) && (e.thumbWidth = _)
                      var p = a.thumbHeight
                      f(p) && (e.thumbHeight = p)
                      var m = [!1, !0].indexOf(a.watermark)
                      for (var b in (m > -1 && (e.watermark = m),
                      w(a.markY) && (e.markY = a.markY),
                      w(a.markX) && (e.markX = a.markX),
                      (N = v(a.callback)),
                      e))
                        t[n++] = b + '=' + e[b]
                      this.IFRAME_ENV
                        ? ((this.iframeCallbackList[A.TAKEPHOTO] = function (
                            a
                          ) {
                            N(a)
                          }),
                          window.top.postMessage(
                            {
                              actionName: A.TAKEPHOTO,
                              data: e,
                              el: this.MAIA_IFRAME_ID
                            },
                            '*'
                          ))
                        : ((o = t.join('&') + '&'),
                          (o += h.call(this, {
                            apiName: 'takePhoto',
                            callbacks: {
                              __maia_take_photo_callback__: {
                                method: N,
                                appCallbackName: 'callback'
                              }
                            }
                          })),
                          u('takePhoto', o))
                    }
                  },
                  {
                    key: 'takePhotos',
                    value: function (a) {
                      var e = (0, i.default)({}, a),
                        t = {},
                        r = []
                      if ((p(e) || (e = {}), e.photos))
                        if (b(e.photos)) t.photos = [e.photos]
                        else if (m(e.photos)) {
                          var c = !0,
                            l = !1,
                            s = void 0
                          try {
                            for (
                              var _, d = (0, n.default)(e.photos);
                              !(c = (_ = d.next()).done);
                              c = !0
                            ) {
                              var w = _.value
                              if (!b(w)) throw new Error('指定的图片路径有误')
                            }
                          } catch (a) {
                            ;(l = !0), (s = a)
                          } finally {
                            try {
                              !c && d.return && d.return()
                            } finally {
                              if (l) throw s
                            }
                          }
                          t.photos = e.photos
                        }
                      for (var k in (f(e.count) &&
                        e.count >= 1 &&
                        e.count <= 9 &&
                        (t.continuousCount = e.count),
                      (I = v(e.callback)),
                      t))
                        m(t[k])
                          ? r.push(
                              k + '=' + encodeURIComponent((0, o.default)(t[k]))
                            )
                          : r.push(k + '=' + t[k])
                      if (this.IFRAME_ENV)
                        (this.iframeCallbackList[A.TAKEPHOTOS] = function (a) {
                          I(a)
                        }),
                          window.top.postMessage(
                            {
                              actionName: A.TAKEPHOTOS,
                              data: (0, o.default)(e),
                              el: this.MAIA_IFRAME_ID
                            },
                            '*'
                          )
                      else {
                        var g = r.join('&') + '&'
                        ;(g += h.call(this, {
                          apiName: 'takePhotos',
                          callbacks: {
                            __maia_take_photos_callback__: {
                              method: I,
                              appCallbackName: 'callback'
                            }
                          }
                        })),
                          u('takePhotos', g)
                      }
                    }
                  }
                ]),
                a
              )
            })()
            a.exports = y
          },
          function (a, e, t) {
            a.exports = { default: t(136), __esModule: !0 }
          },
          function (a, e, t) {
            t(137)
            var o = t(1).Object
            a.exports = function (a, e, t) {
              return o.defineProperty(a, e, t)
            }
          },
          function (a, e, t) {
            var o = t(6)
            o(o.S + o.F * !t(11), 'Object', { defineProperty: t(9).f })
          },
          function (a, e, t) {
            'use strict'
            var o = r(t(5)),
              n = r(t(50)),
              i = r(t(51))
            function r(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var c = t(0),
              l = c.isNotEmptyString,
              s = c.paserObj,
              u = c.command,
              _ = c.isValidNumber,
              d = c.isObject,
              f = c.mountCallback,
              p = c.formatCallbackByParam,
              m = t(2),
              b = void 0,
              h = void 0
            ;(window.__maia_play_video_callback__ =
              window.__maia_play_video_callback__ ||
              function (a) {
                b && b(s(a))
              }),
              (window.__maia_compress_video_callback__ =
                window.__maia_compress_video_callback__ ||
                function (a) {
                  h && h(s(a))
                })
            var v = (function () {
              function a() {
                ;(0, n.default)(this, a)
              }
              return (
                (0, i.default)(a, [
                  {
                    key: 'play',
                    value: function (a, e) {
                      var t = {}
                      if ((d(a) ? (t = a) : (t.url = a), l(t.url)))
                        if (((b = p(e)), this.IFRAME_ENV))
                          (this.iframeCallbackList[m.PLAY] = function (a) {
                            b(a)
                          }),
                            window.top.postMessage(
                              {
                                actionName: m.PLAY,
                                data: (0, o.default)(t),
                                el: this.MAIA_IFRAME_ID
                              },
                              '*'
                            )
                        else {
                          var n = ''
                          for (var i in t)
                            n +=
                              i +
                              '=' +
                              ('url' === i ||
                              'waterMarkColor' === i ||
                              'watermark' === i
                                ? encodeURIComponent(t[i])
                                : t[i]) +
                              '&'
                          ;(n += f.call(this, {
                            apiName: 'play',
                            callbacks: {
                              __maia_play_video_callback__: {
                                method: b,
                                appCallbackName: 'callback'
                              }
                            }
                          })),
                            u('play', n)
                        }
                    }
                  },
                  {
                    key: 'compress',
                    value: function (a, e, t) {
                      if (!l(a)) throw new Error('必须指定视频Url')
                      if (!_(e)) throw new Error('必须指定视频压缩后的大小限制')
                      if (((h = p(t)), this.IFRAME_ENV))
                        (this.iframeCallbackList[m.COMPRESS] = function (a) {
                          h(a)
                        }),
                          window.top.postMessage(
                            {
                              actionName: m.COMPRESS,
                              data: (0, o.default)({ url: a, size: e }),
                              el: this.MAIA_IFRAME_ID
                            },
                            '*'
                          )
                      else {
                        var n = 'url=' + a + '&maxSize=' + e + '&'
                        ;(n += f.call(this, {
                          apiName: 'compress',
                          callbacks: {
                            __maia_compress_video_callback__: {
                              method: h,
                              appCallbackName: 'callback'
                            }
                          }
                        })),
                          u('compress', n)
                      }
                    }
                  }
                ]),
                a
              )
            })()
            a.exports = v
          },
          function (a, e, t) {
            'use strict'
            var o = r(t(7)),
              n = r(t(5)),
              i = r(t(26))
            function r(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var c = t(0),
              l = c.command,
              s = c.isNumber,
              u = c.isBoolean,
              _ = c.isString,
              d = c.isArray,
              f = c.isObject,
              p = c.isFunction,
              m = c.trim,
              b = c.emptyFun,
              h = c.isNull,
              v = c.paserObj,
              w = c.isUndefined,
              k = c.mountCallback,
              g = c.formatCallbackByParam,
              E = c.deepCopy,
              A = c.isSupportMaiaH5ByUa,
              N = c.isRequired,
              I = c.joinParamToUrl,
              y = t(8),
              C = y.validOrientations,
              T = y.screenOrientation,
              O = y.validNavigationBarTitleMode,
              S = y.navigationBarTitleMode,
              M = y.validWebviewDisplayMode,
              R = y.webviewDisplayMode,
              F = t(2),
              P = t(140),
              L = new P(),
              x = void 0,
              D = void 0,
              G = void 0,
              U = void 0,
              j = void 0,
              B = void 0,
              V = void 0,
              W = void 0,
              q = void 0,
              H = void 0,
              K = void 0
            function X(a) {
              var e = E(a)
              if (w(e) || h(e)) return null
              if ((f(e) && (e = [e]), !d(e))) return null
              if (0 === e.length) return null
              var t = [],
                o = 0,
                n = !0,
                r = !1,
                c = void 0
              try {
                for (
                  var l, s = (0, i.default)(e);
                  !(n = (l = s.next()).done);
                  n = !0
                ) {
                  var u = l.value,
                    p = {}
                  if (!_(u.action)) throw new Error('action必须为指定字符串')
                  ;(p.action = u.action),
                    ('js' !== u.action && 1 * u.customized != 1) ||
                      (p.js = u.js),
                    _(u.image) && '' !== m(u.image)
                      ? ((p.image = m(u.image)),
                        _(u.bundle) &&
                          '' !== m(u.bundle) &&
                          (p.bundle = m(u.bundle)))
                      : _(u.title) &&
                        '' !== m(u.title) &&
                        (p.title = m(u.title)),
                    1 * u.customized == 1 && (p.customized = u.customized),
                    (t[o++] = p)
                }
              } catch (a) {
                ;(r = !0), (c = a)
              } finally {
                try {
                  !n && s.return && s.return()
                } finally {
                  if (r) throw c
                }
              }
              return t
            }
            ;(window.__set_maia_page_orientation_callback__ =
              window.__set_maia_page_orientation_callback__ ||
              function (a) {
                p(x) && x(v(a).status || '0')
              }),
              (window.__maia_enable_webview_scroll_callback__ =
                window.__maia_enable_webview_scroll_callback__ ||
                function (a) {
                  G && G(v(a).status || '0')
                }),
              (window.__maia_disable_webview_scroll_callback__ =
                window.__maia_disable_webview_scroll_callback__ ||
                function (a) {
                  D && D(v(a).status || '0')
                }),
              (window.__maia_enable_webivew_swipe_callback__ =
                window.__maia_enable_webivew_swipe_callback__ ||
                function (a) {
                  j && j(v(a).status || '0')
                }),
              (window.__maia_disable_webivew_swipe_callback__ =
                window.__maia_disable_webivew_swipe_callback__ ||
                function (a) {
                  U && U(JSON.parse(a).status || '0')
                }),
              (window.__set_maia_navigation_bar_color_callback__ =
                window.__set_maia_navigation_bar_color_callback__ ||
                function (a) {
                  B && B(v(a).status || '0')
                }),
              (window.__maia_set_webview_display_mode_callback__ =
                window.__maia_set_webview_display_mode_callback__ ||
                function (a) {
                  W(v(a).status || '0')
                }),
              (window.__maia_get_webview_display_mode_callback__ =
                window.__maia_get_webview_display_mode_callback__ ||
                function (a) {
                  V(v(a))
                }),
              (window.__maia_set_navigation_left_callback =
                window.__maia_set_navigation_left_callback ||
                function (a) {
                  ;(void 0)(v(a))
                }),
              (window.__maia_set_navigation_right_callback =
                window.__maia_set_navigation_right_callback ||
                function (a) {
                  ;(void 0)(v(a))
                }),
              (window.__maia_set_navigation_center_callback =
                window.__maia_set_navigation_center_callback ||
                function (a) {
                  ;(void 0)(v(a))
                }),
              (window.__maia_set_navigation_bar_more_buttons_callback__ =
                function (a) {
                  H(v(a))
                }),
              (window.__maia_clear_nav_callback__ =
                window.__maia_clear_nav_callback__ ||
                function (a) {
                  K(v(a))
                }),
              (window.mawkClickTitle =
                window.mawkClickTitle ||
                function () {
                  q()
                })
            var Y = {
              setNavigationBar: function (a) {
                var e = E(a),
                  t = this,
                  o = function (o) {
                    a[o].forEach(function (a, n) {
                      if ('js' === a.action || 1 * a.customized == 1) {
                        for (
                          var i = a.js,
                            r = g(i),
                            c = '',
                            l =
                              '__maia_set_navigation_' +
                              o +
                              '_' +
                              n +
                              '_callback__',
                            s = 0;
                          window[l];

                        )
                          (l = '' + l + s + '_'), s++
                        ;(t.IFRAME_ENV || p(a.js)) &&
                          ((c = '' + l + t.MAIA_IFRAME_ID.substr(1)),
                          (e[o][n].js = c)),
                          t.IFRAME_ENV && (t.iframeCallbackList[c] = r)
                        var u = {}
                        ;(u['' + l] = { method: r, appCallbackName: 'js' }),
                          k.call(t, {
                            apiName: 'setNavigationBar',
                            callbacks: u
                          })
                      }
                    })
                  }
                for (var i in a) o(i)
                if (this.IFRAME_ENV)
                  window.top.postMessage(
                    {
                      actionName: F.SETNAVIGATIONBAR,
                      data: (0, n.default)(e),
                      el: this.MAIA_IFRAME_ID || ''
                    },
                    '*'
                  )
                else {
                  var r = e.left,
                    c = e.right
                  if (r || c) {
                    var s = (function (a) {
                      var e = {},
                        t = [],
                        o = 0,
                        i = X(a.left)
                      null !== i && (e.left = i)
                      var r = X(a.right)
                      for (var c in (null !== r && (e.right = r), e))
                        t[o++] =
                          c + '=' + encodeURIComponent((0, n.default)(e[c]))
                      return t.join('&')
                    })(e)
                    l('setNavigationBar', s)
                  }
                  if (e.center) {
                    var u = (0, n.default)(e.center)
                    l('setNavigationCenterBar', encodeURIComponent(u))
                  }
                }
              },
              clearNavigationBar: function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : '',
                  e = arguments[1]
                if (!A('clearNavigationBar')) return ''
                K = g(e)
                var t = k.call(this, {
                  apiName: 'clearNavigationBar',
                  callbacks: {
                    __maia_clear_nav_callback__: {
                      method: K,
                      appCallbackName: 'callback'
                    }
                  }
                })
                return (
                  'center' === a
                    ? l('setNavigationCenterBar', '[]&' + t)
                    : 'all' === a
                    ? (l('setNavigationCenterBar', '[]&' + t),
                      l('setNavigationBar', 'left=[]&right=[]&' + t))
                    : l(
                        'setNavigationBar',
                        'left' === a
                          ? 'left=[]&' + t
                          : 'right' === a
                          ? 'right=[]&' + t
                          : 'left=[]&right=[]&' + t
                      ),
                  null
                )
              },
              setNavigationBarTitle: function (a) {
                var e = '',
                  t = S.NORMAL,
                  o = void 0,
                  n = '',
                  i = void 0,
                  r = [].concat(Array.prototype.slice.call(arguments))
                if (((q = b), 1 === r.length && _(r[0]))) e = a
                else if (1 === r.length && f(r[0]))
                  _(a.title) && '' !== m(a.title) && (e = m(a.title)),
                    -1 !== O.indexOf(a.mode) && (t = a.mode),
                    _(a.icon) && '' !== m(a.icon) && (o = m(a.icon)),
                    p(a.onTap) && (q = a.onTap),
                    _(a.bundle) && '' !== m(a.bundle) && (i = m(a.bundle))
                else {
                  if (2 !== r.length)
                    throw new Error('请确认设置导航栏标题时传入的参数格式')
                  if (((e = r[0]), !_(e)))
                    throw new Error('第一个参数导航栏标题必须为字符串')
                  ;-1 !== O.indexOf(r[1]) && (t = r[1])
                }
                this.IFRAME_ENV
                  ? window.top.postMessage(
                      {
                        actionName: F.SETNAVIGATIONBARTITLE,
                        data: {
                          mode: t,
                          title: e,
                          titleRightImage: o,
                          bundle: i
                        },
                        el: this.MAIA_IFRAME_ID
                      },
                      '*'
                    )
                  : ((n =
                      'mode=' +
                      t +
                      (e ? '&title=' + encodeURIComponent(e) : '') +
                      (o ? '&titleRightImage=' + encodeURIComponent(o) : '') +
                      (i ? '&bundle=' + i : '') +
                      '&'),
                    (n += k.call(this, {
                      apiName: 'setNavigationBarTitle',
                      callbacks: {
                        mawkClickTitle: {
                          method: q,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    l('setNavigationBarTitle', n))
              },
              setPageOrientation: function (a) {
                if (!w(a) && !h(a)) {
                  var e = T.PORTRAIT
                  ;-1 !== C.indexOf(a.orientation) && (e = a.orientation),
                    (x = g(a.callback))
                  var t = e ? 'orientation=' + e + '&' : ''
                  ;(t += k.call(this, {
                    apiName: 'setPageOrientation',
                    callbacks: {
                      __set_maia_page_orientation_callback__: {
                        method: x,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('setPageOrientation', t)
                }
              },
              enableWebViewScroll: function (a) {
                G = g(a)
                var e = 'enabled=1&'
                ;(e += k.call(this, {
                  apiName: 'enableWebViewScroll',
                  callbacks: {
                    __maia_enable_webview_scroll_callback__: {
                      method: G,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  l('switchWebViewScroll', e)
              },
              disableWebViewScroll: function (a) {
                D = g(a)
                var e = 'enabled=0&'
                ;(e += k.call(this, {
                  apiName: 'disableWebViewScroll',
                  callbacks: {
                    __maia_disable_webview_scroll_callback__: {
                      method: D,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  l('switchWebViewScroll', e)
              },
              enableWebViewSwipe: function (a) {
                j = g(a)
                var e = 'enabled=1&'
                ;(e += k.call(this, {
                  apiName: 'enableWebViewSwipe',
                  callbacks: {
                    __maia_enable_webivew_swipe_callback__: {
                      method: j,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  l('switchWebViewSwipe', e)
              },
              disableWebViewSwipe: function (a) {
                if (((U = g(a)), this.IFRAME_ENV))
                  (this.iframeCallbackList[F.DISABLEWEBVIEWSWIPE] = U),
                    window.top.postMessage(
                      {
                        actionName: F.DISABLEWEBVIEWSWIPE,
                        data: {},
                        el: this.MAIA_IFRAME_ID
                      },
                      '*'
                    )
                else {
                  var e = 'enabled=0&'
                  ;(e += k.call(this, {
                    apiName: 'disableWebViewSwipe',
                    callbacks: {
                      __maia_disable_webivew_swipe_callback__: {
                        method: U,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('switchWebViewSwipe', e)
                }
              },
              setNavigationBarColor: function (a) {
                var e = {},
                  t = [],
                  o = '',
                  n = 0,
                  i = a.page,
                  r = a.statusMode
                if ((_(i) && (i = parseInt(i)), !s(i) || (0 !== i && 1 !== i)))
                  throw new Error(
                    'page参数必须是数字或者数字格式的字符串,且取值为0或1'
                  )
                if (
                  ((e.page = i),
                  _(a.frontColor) &&
                    m(a.frontColor) &&
                    (e.textColor = a.frontColor),
                  _(a.backgroundColor) &&
                    m(a.backgroundColor) &&
                    (e.barColor = a.backgroundColor),
                  _(a.statusColor) &&
                    m(a.statusColor) &&
                    (e.statusBarColor = a.statusColor),
                  (w(r) || h(r)) && (r = 1),
                  _(r) && (r = parseInt(r)),
                  !u(r) && (!s(r) || (0 !== r && 1 !== r)))
                )
                  throw new Error(
                    'statusMode参数必须是数字或者数字格式的字符串,且取值为0或1'
                  )
                for (var c in ((e.statusBarLightMode = new Boolean(r)),
                (B = g(a.callback)),
                e))
                  t[n++] = c + '=' + encodeURIComponent(e[c])
                ;(o = t.join('&') + '&'),
                  (o += k.call(this, {
                    apiName: 'setNavigationBarColor',
                    callbacks: {
                      __set_maia_navigation_bar_color_callback__: {
                        method: B,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                  l('setNavigationBarColor', o)
              },
              getWebviewDisplayMode: function (a) {
                if (((V = g(a)), this.IFRAME_ENV))
                  return (
                    (this.iframeCallbackList[F.GETWEBVIEWDISPLAYMODE] =
                      function (a) {
                        V(a)
                      }),
                    void window.top.postMessage(
                      {
                        actionName: F.GETWEBVIEWDISPLAYMODE,
                        data: {},
                        el: this.MAIA_IFRAME_ID
                      },
                      '*'
                    )
                  )
                var e = k.call(this, {
                  apiName: 'getWebviewDisplayMode',
                  callbacks: {
                    __maia_get_webview_display_mode_callback__: {
                      method: V,
                      appCallbackName: 'callback'
                    }
                  }
                })
                l('getWebviewDisplayMode', e)
              },
              setWebviewDisplayMode: function (a) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  t = arguments[2],
                  o = [].concat(Array.prototype.slice.call(arguments))
                if (2 === o.length && p(e)) W = g(e)
                else if (!u(e)) throw new Error('whole参数格式必须为布尔类型')
                var n = R.NORMAL,
                  i = '',
                  r = !1
                ;-1 !== M.indexOf(a) && (n = a),
                  u(e) && (r = Number(e)),
                  3 === o.length && (W = g(t)),
                  (i = 'mode=' + n + '&whole=' + r + '&'),
                  (i += k.call(this, {
                    apiName: 'setWebviewDisplayMode',
                    callbacks: {
                      __maia_set_webview_display_mode_callback__: {
                        method: W,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                  l('setWebviewDisplayMode', i)
              },
              setWebviewDisplayModeSeparated: function (a) {
                return A('setWebviewDisplayModeSeparated')
                  ? (window.navigator &&
                      window.navigator.userAgent &&
                      (/(iPhone|iPad|iPod|iOS)/i.exec(
                        window.navigator.userAgent
                      )
                        ? this.setWebviewDisplayMode(
                            a.iosMode,
                            a.whole,
                            a.callback
                          )
                        : window.navigator.userAgent.match(/Android/i) &&
                          this.setWebviewDisplayMode(
                            a.androidMode,
                            a.whole,
                            a.callback
                          )),
                    null)
                  : ''
              },
              createFloatBallContext: function () {
                return (
                  L || (L = new P()),
                  (L.IFRAME_ENV = this.IFRAME_ENV),
                  (L.MAIA_IFRAME_ID = this.MAIA_IFRAME_ID),
                  L
                )
              },
              setNavigationBarMoreButtons: function (a, e) {
                if (!d(a))
                  throw new Error(
                    'setNavigationBarMoreButtons方法参数格式必须是个数组'
                  )
                for (var t = [], i = a.length, r = 0; r < i; r++) {
                  var c = (0, o.default)({}, a[r])
                  c.js = g(c.js)
                  var s =
                    '__maia_set_navigation_bar_more_buttons_' +
                    r +
                    '_callback' +
                    (this.setNavigationBarMoreButtons.MAIA_IFRAME_ID || '')
                  ;(window[s] = g(c.js)), (c.js = s), t.push(c)
                }
                H = g(e)
                var u = 'custom=' + encodeURIComponent((0, n.default)(t)) + '&'
                ;(u += k.call(this, {
                  apiName: 'setNavigationBarMoreButtons',
                  callbacks: {
                    __maia_set_navigation_bar_more_buttons_callback__: {
                      method: H,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  l('setNavigationBarMoreButtons', u)
              },
              showToast: function () {
                var a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                if (N(a.title, 'title')) {
                  var e = I(a, ['callback']) + '&',
                    t = g(a.callback)
                  ;(e += k.call(this, {
                    apiName: 'showToast',
                    callbacks: {
                      __maia_show_toast_callback__: {
                        method: t,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('showToast', e)
                }
              },
              hideToast: function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = g(a.callback),
                  t = k.call(this, {
                    apiName: 'hideToast',
                    callbacks: {
                      __maia_hide_toast_callback__: {
                        method: e,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                l('hideToast', t)
              },
              showLoading: function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = g(a.callback),
                  t = I(a, ['callback'])
                t && (t += '&'),
                  (t += k.call(this, {
                    apiName: 'showLoading',
                    callbacks: {
                      __maia_show_loading_callback__: {
                        method: e,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                  l('showLoading', t)
              },
              hideLoading: function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = g(a.callback),
                  t = k.call(this, {
                    apiName: 'hideLoading',
                    callbacks: {
                      __maia_hide_loading_callback__: {
                        method: e,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                l('hideLoading', t)
              },
              showActionSheet: function () {
                var a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                if (N(a.itemList, 'itemList')) {
                  var e = g(a.callback),
                    t = I(a, ['callback']) + '&'
                  ;(t += k.call(this, {
                    apiName: 'showActionSheet',
                    callbacks: {
                      __maia_showActionSheet_callback_: {
                        method: e,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('showActionSheet', t)
                }
              },
              showModal: function () {
                var a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = g(a.callback),
                  t = I(a, ['callback'])
                t && (t += '&'),
                  (t += k.call(this, {
                    apiName: 'showModal',
                    callbacks: {
                      __maia_showModal_callback_: {
                        method: e,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                  l('showModal', t)
              }
            }
            a.exports = Y
          },
          function (a, e, t) {
            'use strict'
            var o = c(t(5)),
              n = c(t(7)),
              i = c(t(50)),
              r = c(t(51))
            function c(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var l = t(0),
              s = l.isFunction,
              u = l.paserObj,
              _ = l.isString,
              d = l.isObject,
              f = l.command,
              p = l.emptyFun,
              m = l.getFunctionName,
              b = l.mountCallback,
              h = l.formatCallbackByParam,
              v = l.deepCopy,
              w = l.isSupportMaiaH5ByUa,
              k = t(2),
              g = void 0,
              E = void 0,
              A = void 0
            ;(window.__maia_set_float_ball_buttons_callback__ =
              window.__maia_set_float_ball_buttons_callback__ ||
              function (a) {
                g && g(u(a))
              }),
              (window.__maia_show_bottom_float_ball_callback__ =
                window.__maia_show_bottom_float_ball_callback__ ||
                function (a) {
                  E && E(u(a))
                }),
              (window.__maia_add_float_ball_tab_callback__ =
                window.__maia_add_float_ball_tab_callback__ ||
                function (a) {
                  A && A(u(a))
                })
            var N = [],
              I = (function () {
                function a() {
                  ;(0, i.default)(this, a), (this.eventHandler = {})
                }
                return (
                  (0, r.default)(
                    a,
                    [
                      {
                        key: 'addCurrentTab',
                        value: function (a) {
                          if (((A = h(a)), this.IFRAME_ENV))
                            (window.iframeCallbackList[k.ADDCURRENTTAB] =
                              function (a) {
                                A(u(a))
                              }),
                              window.top.postMessage(
                                {
                                  actionName: k.ADDCURRENTTAB,
                                  data: {},
                                  el: this.MAIA_IFRAME_ID
                                },
                                '*'
                              )
                          else {
                            var e = b.call(this, {
                              apiName: 'addCurrentTab',
                              callbacks: {
                                __maia_add_float_ball_tab_callback__: {
                                  method: A,
                                  appCallbackName: 'callback'
                                }
                              }
                            })
                            f('addCurrentTab', e)
                          }
                        }
                      },
                      {
                        key: 'setButtons',
                        value: function (e, t) {
                          var i = this
                          if (
                            ((N = a.validateButtons(e)),
                            (g = h(t)),
                            this.IFRAME_ENV)
                          ) {
                            window.iframeCallbackList[k.SETBUTTONS] = function (
                              a
                            ) {
                              g(u(a))
                            }
                            var r = []
                            e.forEach(function (a, e) {
                              var t = (0, n.default)({}, a)
                              _(t.js)
                                ? (t.js = window[t.js] || p)
                                : s(t.js) || (t.js = p)
                              var o =
                                m('set_buttons', e) +
                                (i.MAIA_IFRAME_ID || '').substr(1)
                              ;(window.iframeCallbackList[o] = t.js),
                                (t.js = o),
                                r.push(t)
                            }),
                              window.top.postMessage(
                                {
                                  actionName: k.SETBUTTONS,
                                  data: (0, o.default)(r),
                                  el: this.MAIA_IFRAME_ID
                                },
                                '*'
                              )
                          } else {
                            var c =
                              'custom=' +
                              encodeURIComponent((0, o.default)(N)) +
                              '&'
                            ;(c += b.call(this, {
                              apiName: 'setButtons',
                              callbacks: {
                                __maia_set_float_ball_buttons_callback__: {
                                  method: g,
                                  appCallbackName: 'callback'
                                }
                              }
                            })),
                              f('setButtons', c)
                          }
                        }
                      },
                      {
                        key: 'addButtons',
                        value: function (e, t) {
                          return w('addButtons')
                            ? ((N = N.concat(a.validateButtons(e))),
                              this.setButtons(N, t),
                              null)
                            : ''
                        }
                      },
                      {
                        key: 'removeButton',
                        value: function (a, e) {
                          return w('removeButton')
                            ? (N[a] && N.splice(a, 1),
                              this.setButtons(N, e),
                              null)
                            : ''
                        }
                      },
                      {
                        key: 'show',
                        value: function (a) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 'bottom'
                          if (((E = h(a)), this.IFRAME_ENV))
                            (window.iframeCallbackList[k.SHOW] = function (a) {
                              E(u(a))
                            }),
                              window.top.postMessage(
                                {
                                  actionName: k.SHOW,
                                  data: {},
                                  el: this.MAIA_IFRAME_ID
                                },
                                '*'
                              )
                          else if ('bottom' === e) {
                            var t = b.call(this, {
                              apiName: 'show',
                              callbacks: {
                                __maia_show_bottom_float_ball_callback__: {
                                  method: E,
                                  appCallbackName: 'callback'
                                }
                              }
                            })
                            f('showFloatBall', t)
                          }
                        }
                      },
                      {
                        key: 'clean',
                        value: function (a) {
                          return w('clean')
                            ? (this.setButtons([], a), null)
                            : null
                        }
                      },
                      {
                        key: 'CustomButtons',
                        get: function () {
                          return N
                        }
                      }
                    ],
                    [
                      {
                        key: 'validateButtons',
                        value: function (a) {
                          var e = v(a)
                          try {
                            if (!Array.isArray(e)) {
                              if (!d(e))
                                throw new Error(
                                  '设置底部浮窗按钮时参数必须为按钮数组或单个按钮对象'
                                )
                              e = [e]
                            }
                            e.forEach(function (a) {
                              if (!a.title || !_(a.title))
                                throw new Error(
                                  '按钮标题title参数必填且类型必须为string'
                                )
                              if (!a.image || !_(a.image))
                                throw new Error(
                                  '按钮图片image参数必填且类型必须为string'
                                )
                              if (a.bundle && !_(a.bundle))
                                throw new Error(
                                  '按钮图片bundle参数类型必须为string'
                                )
                              if (a.js && !_(a.js))
                                throw new Error(
                                  '按钮点击事件js参数必须为函数名'
                                )
                            })
                          } catch (a) {
                            e = []
                          }
                          return e
                        }
                      }
                    ]
                  ),
                  a
                )
              })()
            a.exports = I
          },
          function (module, exports, __webpack_require__) {
            'use strict'
            var _assign = __webpack_require__(7),
              _assign2 = _interopRequireDefault(_assign),
              _stringify = __webpack_require__(5),
              _stringify2 = _interopRequireDefault(_stringify)
            function _interopRequireDefault(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var _require = __webpack_require__(0),
              command = _require.command,
              paserObj = _require.paserObj,
              isString = _require.isString,
              isBoolean = _require.isBoolean,
              isFunction = _require.isFunction,
              trim = _require.trim,
              isNumber = _require.isNumber,
              isNull = _require.isNull,
              isUndefined = _require.isUndefined,
              emptyFun = _require.emptyFun,
              mountCallback = _require.mountCallback,
              formatCallbackByParam = _require.formatCallbackByParam,
              deepCopy = _require.deepCopy,
              _require2 = __webpack_require__(8),
              validOrientations = _require2.validOrientations,
              screenOrientation = _require2.screenOrientation,
              validWebviewDisplayMode = _require2.validWebviewDisplayMode,
              webviewDisplayMode = _require2.webviewDisplayMode,
              ACTIONNAME = __webpack_require__(2),
              redirectToAppCallback = void 0,
              createPageCallback = void 0,
              popWebviewStackCallback = void 0,
              closeCurrentPage = void 0,
              closePageJsParam = void 0,
              reloadPageCallback = void 0
            ;(window.__redirect_app_callback__ =
              window.__redirect_app_callback__ ||
              function (a) {
                try {
                  var e = paserObj(a)
                  isFunction(redirectToAppCallback) && redirectToAppCallback(e)
                } catch (e) {
                  redirectToAppCallback(a)
                }
              }),
              (window.__create_page_callback__ =
                window.__create_page_callback__ ||
                function (a) {
                  isFunction(createPageCallback) && createPageCallback(a || 0)
                }),
              (window.__maia_close_page_js_param_callback__ =
                window.__maia_close_page_js_param_callback__ ||
                function (a) {
                  isFunction(closePageJsParam) && closePageJsParam(a)
                }),
              (window.__maia_pop_webview_stack_callback__ =
                window.__maia_pop_webview_stack_callback__ ||
                function (a) {
                  isFunction(popWebviewStackCallback) &&
                    popWebviewStackCallback(a || 0)
                }),
              (window.__maia_close_page_callback__ =
                window.__maia_close_page_callback__ ||
                function (a) {
                  closeCurrentPage(a)
                }),
              (window.__maia_reload_page_callback__ =
                window.__maia_reload_page_callback__ ||
                function (a) {
                  reloadPageCallback(a)
                }),
              (module.exports = {
                createPage: function (a) {
                  if (!isUndefined(a) && !isNull(a)) {
                    var e = {},
                      t = [],
                      o = void 0,
                      n = 0
                    if (isString(a.title) && '' !== trim(a.title))
                      (e.title = trim(a.title)), (e.htmlTitle = 0)
                    else if (isNumber(a.htmlTitle) && 1 * a.htmlTitle == 1)
                      e.htmlTitle = a.htmlTitle
                    else if (isNumber(a.htmlTitle) && 1 * a.htmlTitle == 0)
                      throw new Error(
                        '当htmlTitle设置为0时，必须同时设置title值'
                      )
                    for (var i in (isString(a.url) &&
                      '' !== trim(a.url) &&
                      (e.url = trim(a.url)),
                    (e.orientation = screenOrientation.PORTRAIT),
                    -1 !== validOrientations.indexOf(a.orientation) &&
                      (e.orientation = a.orientation),
                    (e.mode = webviewDisplayMode.NORMAL),
                    -1 !== validWebviewDisplayMode.indexOf(a.mode) &&
                      (e.mode = a.mode),
                    (e.whole = 0),
                    isBoolean(a.whole) && (e.whole = Number(a.whole)),
                    !isNumber(a.scrollMonitor) ||
                    (1 * a.scrollMonitor != 0 && 1 * a.scrollMonitor != 1)
                      ? isBoolean(a.scrollMonitor)
                        ? (e.scrollMonitor = new Number(a.scrollMonitor))
                        : (e.scrollMonitor = 0)
                      : (e.scrollMonitor = a.scrollMonitor),
                    a.webErrorMonitor &&
                      (e.webErrorMonitor = a.webErrorMonitor),
                    a.extra && (e.extra = a.extra),
                    !isNumber(a.closeVisible) ||
                    (0 !== a.closeVisible && 1 !== a.closeVisible)
                      ? isBoolean(a.closeVisible)
                        ? (e.closeVisible = new Number(a.closeVisible))
                        : (e.closeVisible = 0)
                      : (e.closeVisible = a.closeVisible),
                    e.autoPlay || (e.autoPlay = 0),
                    e))
                      t[n++] = i + '=' + encodeURIComponent(e[i])
                    ;(o = t.join('&') + '&'),
                      (createPageCallback = formatCallbackByParam(a.callback)),
                      this.IFRAME_ENV
                        ? ((this.iframeCallbackList[ACTIONNAME.CREATEPAGE] =
                            function (a) {
                              createPageCallback(a)
                            }),
                          window.top.postMessage(
                            {
                              actionName: ACTIONNAME.CREATEPAGE,
                              data: (0, _stringify2.default)(a),
                              el: this.MAIA_IFRAME_ID
                            },
                            '*'
                          ))
                        : ((o += mountCallback.call(this, {
                            apiName: 'createPage',
                            callbacks: {
                              __create_page_callback__: {
                                method: createPageCallback,
                                appCallbackName: 'callback'
                              }
                            }
                          })),
                          command('createPage', o))
                  }
                },
                backPage: function () {
                  command('backPage', '')
                },
                closePage: function closePage(options) {
                  var option = (0, _assign2.default)({}, options)
                  ;(isUndefined(option) || isNull(option)) && (option = {})
                  var js = void 0,
                    queryUrl = ''
                  isString(option.js) && '' !== trim(option.js)
                    ? ((js = trim(option.js)),
                      (js = js.indexOf('(') > -1 ? js : window[js]),
                      (closeCurrentPage = js))
                    : (closeCurrentPage = isFunction(option.js)
                        ? option.js
                        : emptyFun),
                    this.IFRAME_ENV
                      ? ((this.iframeCallbackList[ACTIONNAME.CLOSEPAGE] =
                          function (data) {
                            isFunction(closeCurrentPage)
                              ? closeCurrentPage(data)
                              : isString(closeCurrentPage) &&
                                eval(closeCurrentPage)
                          }),
                        window.top.postMessage(
                          {
                            actionName: ACTIONNAME.CLOSEPAGE,
                            data: (0, _stringify2.default)(option),
                            el: this.MAIA_IFRAME_ID
                          },
                          '*'
                        ))
                      : ((queryUrl = isString(closeCurrentPage)
                          ? 'js=' + closeCurrentPage
                          : mountCallback.call(this, {
                              apiName: 'closePage',
                              callbacks: {
                                __maia_close_page_callback__: {
                                  method: closeCurrentPage,
                                  appCallbackName: 'js'
                                }
                              }
                            })),
                        command('closePage', queryUrl))
                },
                reloadPage: function (a) {
                  reloadPageCallback = formatCallbackByParam(a)
                  var e = mountCallback.call(this, {
                    apiName: 'reloadPage',
                    callbacks: {
                      __maia_reload_page_callback__: {
                        method: reloadPageCallback,
                        appCallbackName: 'callback'
                      }
                    }
                  })
                  command('reloadPage', e)
                },
                redirectToApp: function (a) {
                  var e = (0, _assign2.default)({}, a)
                  if (!isUndefined(e) && !isNull(e)) {
                    var t = void 0,
                      o = void 0
                    isString(e.url) && '' !== trim(e.url) && (t = trim(e.url)),
                      isFunction(e.callback) || (e.callback = emptyFun),
                      (redirectToAppCallback = e.callback),
                      (o = (t ? 'url=' + encodeURIComponent(t) : '') + '&'),
                      (o += mountCallback.call(this, {
                        apiName: 'redirectToApp',
                        callbacks: {
                          __redirect_app_callback__: {
                            method: redirectToAppCallback,
                            appCallbackName: 'callback'
                          }
                        }
                      })),
                      command('redirectToApp', o)
                  }
                },
                popWebViewStack: function (a, e) {
                  var t = deepCopy(a)
                  if ((isString(t) && (t = parseInt(t)), !isNumber(t)))
                    throw new Error('step参数必须是数字或者数字格式的字符串')
                  ;(t = t || 1),
                    (popWebviewStackCallback = formatCallbackByParam(e))
                  var o = 'step=' + t + '&'
                  ;(o += mountCallback.call(this, {
                    apiName: 'popWebViewStack',
                    callbacks: {
                      __maia_pop_webview_stack_callback__: {
                        method: popWebviewStackCallback,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    command('popWebViewStack', o)
                },
                lock: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = a.back,
                    t = a.callback,
                    o = [!1, !0].indexOf(e),
                    n = ''
                  o > -1 && (n += 'back=' + o + '&'),
                    (t = formatCallbackByParam(t)),
                    (n += mountCallback.call(this, {
                      apiName: 'lock',
                      callbacks: {
                        __maia_lock_callback__: {
                          method: t,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    command('lock', n)
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o = r(t(43)),
              n = r(t(7)),
              i = r(t(5))
            function r(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var c = t(0),
              l = c.command,
              s = c.isString,
              u = c.isArray,
              _ = c.isObject,
              d = c.isFunction,
              f = c.trim,
              p = c.isFormData,
              m = c.formData2Object,
              b = c.isBoolean,
              h = c.emptyFun,
              v = c.paserObj,
              w = c.mountCallback,
              k = c.deepCopy,
              g = c.formatCallbackByParam,
              E = t(8).mediaParams,
              A = t(2),
              N = 0,
              I = 0,
              y = 0,
              C = 0
            function T(a) {
              var e = k(a)
              '0' === (e = v(e)).status
                ? ((e.response = v(e.response)),
                  (e.header = v(e.header)),
                  this.request_success_callback(e.response, e.header),
                  this.request_complete_callback())
                : (this.request_fail_callback({
                    status: e.status,
                    error: e.message,
                    header: e.header
                  }),
                  this.request_complete_callback()),
                delete window[this.callbackFuncName]
            }
            function O(a) {
              var e = k(a)
              '0' === (e = v(e)).status
                ? (this.upload_success_callback(v(e.uploads)),
                  this.upload_complete_callback())
                : (this.upload_fail_callback({
                    status: e.status,
                    error: e.message
                  }),
                  this.upload_complete_callback()),
                delete window[this.callbackFuncName]
            }
            function S(a) {
              var e = k(a)
              e = v(e)
              var t = v(e.progress),
                o = t.progress,
                n = { has: t.has, total: t.total, done: t.done }
              this.upload_progress_callback(o, n),
                t.done && delete window[this.progresscallbackFuncName]
            }
            function M(a) {
              var e = k(a)
              '0' === (e = v(e)).status
                ? (this.download_success_callback(e.savePath),
                  this.download_complete_callback())
                : (this.download_fail_callback({
                    status: e.status,
                    error: e.message
                  }),
                  this.download_complete_callback()),
                delete window[this.callbackFuncName]
            }
            function R(a) {
              var e = k(a)
              e = v(e)
              var t = v(e.progress),
                o = t.progress,
                n = { has: t.has, total: t.total, done: t.done }
              this.download_progress_callback(o, n),
                t.done && delete window[this.progresscallbackFuncName]
            }
            function F(a) {
              var e = k(a)
              ;(e = v(e)),
                this.download_save_album_callback(e.status, e.message),
                delete window[this.saveAlbumcallbackFuncName]
            }
            var P = void 0,
              L = void 0,
              x = void 0,
              D = void 0,
              G = void 0,
              U = void 0,
              j = void 0
            ;(window.__maia_download_start_callback =
              window.__maia_download_start_callback ||
              function (a) {
                P(v(a))
              }),
              (window.__maia_download_callback =
                window.__maia_download_callback ||
                function (a) {
                  L(v(a))
                }),
              (window.__maia_download_start_callback.eventList =
                window.__maia_download_start_callback.eventList || []),
              (window.__maia_download_callback.eventList =
                window.__maia_download_callback.eventList || []),
              (window.__maia_download_query_callback =
                window.__maia_download_query_callback ||
                function (a) {
                  var e = v(a)
                  '0' === e.status && (e.result = v(e.result)), x(e)
                }),
              (window.__maia_download_pause_callback =
                window.__maia_download_pause_callback ||
                function (a) {
                  D(v(a))
                }),
              (window.__maia_download_resume_callback =
                window.__maia_download_resume_callback ||
                function (a) {
                  G(v(a))
                }),
              (window.__maia_download_delete_callback =
                window.__maia_download_delete_callback ||
                function (a) {
                  U(v(a))
                }),
              (window.__maia_preview_file_callback_ =
                window.__maia_preview_file_callback_ ||
                function (a) {
                  j(v(a))
                }),
              (a.exports = {
                request: function (a, e) {
                  var t = void 0
                  if (s(a)) (t = k(e) || {}).url = a
                  else {
                    if (!_(a)) throw new Error('params error')
                    t = a
                  }
                  var o = {}
                  s(t.url) && '' !== f(t.url) && (o.url = f(t.url)),
                    s(t.method) &&
                      '' !== f(t.method) &&
                      (o.method = f(t.method).toUpperCase()),
                    _(t.header) && (o.header = t.header),
                    _(t.data) && (o.params = t.data),
                    t.timeout && (o.timeout = t.timeout),
                    (t.success = g(t.success)),
                    (t.fail = g(t.fail)),
                    (t.complete = g(t.complete)),
                    N++
                  var n = {
                      request_success_callback: t.success,
                      request_fail_callback: t.fail,
                      request_complete_callback: t.complete,
                      callbackFuncName: '__request_callback_' + N + '__'
                    },
                    r = 'data=' + encodeURIComponent((0, i.default)(o)) + '&'
                  if (
                    ((window[n.callbackFuncName] = T.bind(n)), this.IFRAME_ENV)
                  )
                    (this.iframeCallbackList[A.REQUESTSUCCESS] = function (a) {
                      t.success(a)
                    }),
                      (this.iframeCallbackList[A.REQUESTFAIL] = function (a) {
                        t.fail(a)
                      }),
                      (this.iframeCallbackList[A.REQUESTCOMPLETE] =
                        function () {
                          t.complete()
                        }),
                      window.top.postMessage(
                        {
                          actionName: A.REQUEST,
                          data: o,
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var c = {}
                    ;(c[n.callbackFuncName] = {
                      method: T.bind(n),
                      appCallbackName: 'callback'
                    }),
                      (r += w.call(this, { apiName: 'request', callbacks: c })),
                      l('request', r)
                  }
                },
                uploadFile: function (a, e, t) {
                  var o = k(e),
                    n = E.count.max,
                    r = {},
                    c = t ? k(t) : {}
                  if (!s(a) || '' === f(a))
                    throw new Error('必须给定上传服务器的地址')
                  if (s(o)) o = [{ filePath: o }]
                  else {
                    if (!u(o)) throw new TypeError('传递参数files格式不正确')
                    o.length > n && (o = o.slice(0, n - 1))
                  }
                  if ((_(c.header) || (c.header = {}), p(c.data)))
                    try {
                      c.data = m(c.data)
                    } catch (a) {
                      throw a
                    }
                  else _(c.data) || (c.data = {})
                  ;(r = { header: c.header, params: c.data, uploadFiles: o }),
                    c.timeout && (r.timeout = c.timeout),
                    s(a) && '' !== f(a) && (r.url = f(a)),
                    (c.success = g(c.success)),
                    (c.fail = g(c.fail)),
                    (c.complete = g(c.complete)),
                    (c.progress = g(c.progress)),
                    I++
                  var d = {
                      upload_success_callback: c.success,
                      upload_fail_callback: c.fail,
                      upload_complete_callback: c.complete,
                      upload_progress_callback: c.progress,
                      callbackFuncName: '__upload_callback_' + I + '__',
                      progresscallbackFuncName:
                        '__upload_progress_callback_' + I + '__'
                    },
                    b = 'data=' + encodeURIComponent((0, i.default)(r)) + '&'
                  if (
                    ((window[d.callbackFuncName] = O.bind(d)),
                    (window[d.progresscallbackFuncName] = S.bind(d)),
                    this.IFRAME_ENV)
                  )
                    (this.iframeCallbackList[A.UPLOADFILESUCCESS] = function (
                      a
                    ) {
                      c.success(a)
                    }),
                      (this.iframeCallbackList[A.UPLOADFILEFAIL] = function (
                        a
                      ) {
                        c.fail(a)
                      }),
                      (this.iframeCallbackList[A.UPLOADFILECOMPLETE] =
                        function () {
                          c.complete()
                        }),
                      (this.iframeCallbackList[A.UPLOADFILECOMPLETE] =
                        function (a) {
                          c.progress(a)
                        }),
                      window.top.postMessage(
                        {
                          actionName: A.UPLOADFILE,
                          data: r,
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var h = {}
                    ;(h[d.callbackFuncName] = {
                      method: O.bind(d),
                      appCallbackName: 'callback'
                    }),
                      (h[d.progresscallbackFuncName] = {
                        method: S.bind(d),
                        appCallbackName: 'callbackProgress'
                      }),
                      (b += w.call(this, {
                        apiName: 'uploadFile',
                        callbacks: h
                      })),
                      l('upload', b)
                  }
                },
                downloadFile: function (a, e, t) {
                  var o = t ? k(t) : {}
                  if (!s(a) || '' === f(a))
                    throw new Error('下载资源路径不能为空')
                  var n = '',
                    i = ''
                  s(e) && '' !== f(e)
                    ? ((i = f(e)),
                      (n = 'savePath=' + encodeURIComponent(i) + '&'))
                    : _(e) && (o = e),
                    b(o.saveAlbum) &&
                      o.saveAlbum &&
                      (n += 'saveAlbum=' + Number(o.saveAlbum) + '&'),
                    (o.success = g(o.success)),
                    (o.onSaveAlbum = g(o.onSaveAlbum)),
                    (o.fail = g(o.fail)),
                    (o.complete = g(o.complete)),
                    (o.progress = g(o.progress)),
                    y++
                  var r = {
                      download_success_callback: o.success,
                      download_fail_callback: o.fail,
                      download_complete_callback: o.complete,
                      download_progress_callback: o.progress,
                      download_save_album_callback: o.onSaveAlbum,
                      callbackFuncName: '__download_callback_' + y + '__',
                      progresscallbackFuncName:
                        '__download_progress_callback_' + y + '__',
                      saveAlbumcallbackFuncName:
                        '__download_save_album_callback_' + y + '__'
                    },
                    c = n + 'downloadUrl=' + encodeURIComponent(a) + '&'
                  if (
                    (o.timeout && (c += 'timeout=' + o.timeout + '&'),
                    (window[r.callbackFuncName] = M.bind(r)),
                    (window[r.progresscallbackFuncName] = R.bind(r)),
                    (window[r.saveAlbumcallbackFuncName] = F.bind(r)),
                    this.IFRAME_ENV)
                  )
                    (this.iframeCallbackList[A.DOWNLOADFILESUCCESS] = function (
                      a
                    ) {
                      o.success(a)
                    }),
                      (this.iframeCallbackList[A.DOWNLOADFILEFAIL] = function (
                        a
                      ) {
                        o.fail(a)
                      }),
                      (this.iframeCallbackList[A.DOWNLOADFILECOMPLETE] =
                        function () {
                          o.complete()
                        }),
                      (this.iframeCallbackList[A.DOWNLOADFILEPROGRESS] =
                        function (a) {
                          o.progress(a.progress, a.data)
                        }),
                      window.top.postMessage(
                        {
                          actionName: A.DOWNLOADFILE,
                          data: {
                            downUrl: a,
                            storeUrl: i,
                            saveAlbum: o.saveAlbum,
                            timeout: o.timeout
                          },
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var u = {}
                    ;(u[r.callbackFuncName] = {
                      method: M.bind(r),
                      appCallbackName: 'callback'
                    }),
                      (u[r.progresscallbackFuncName] = {
                        method: R.bind(r),
                        appCallbackName: 'callbackProgress'
                      }),
                      (u[r.saveAlbumcallbackFuncName] = {
                        method: F.bind(r),
                        appCallbackName: 'callbackSaveAlbum'
                      }),
                      (c += w.call(this, {
                        apiName: 'downloadFile',
                        callbacks: u
                      })),
                      l('download', c)
                  }
                },
                deleteFile: function (a, e, t) {
                  var o = a,
                    n = s(e) ? e : '',
                    i = void 0
                  i = g(t || e)
                  var r = parseInt(o),
                    c = ''
                  if (isNaN(r)) throw new Error('资源类型参数有误')
                  if (1 * r == 0) {
                    if (!s(n) || '' === f(n))
                      throw new Error('当资源类型为0时必须指定资源相对路径')
                    c = '&filePath=' + encodeURIComponent(f(n))
                  } else n = ''
                  ;(r = 'resourceType=' + r), C++
                  var u = {
                      delete_file_callback: d(i) ? i : h,
                      callbackFuncName: '__delete_callback_' + C + '__'
                    },
                    _ = '' + r + c + '&'
                  if (this.IFRAME_ENV)
                    (this.iframeCallbackList[A.DELETEFILE] = function (a) {
                      u.delete_file_callback(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: A.DELETEFILE,
                          data: { type: o, path: n },
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var p = {}
                    ;(p[u.callbackFuncName] = {
                      method: function (a) {
                        var e = k(a)
                        '0' === (e = v(e)).status
                          ? this.delete_file_callback(null, e.result)
                          : this.delete_file_callback(
                              { status: e.status, error: e.message },
                              null
                            ),
                          delete window[this.callbackFuncName]
                      }.bind(u),
                      appCallbackName: 'callback'
                    }),
                      (_ += w.call(this, {
                        apiName: 'deleteFile',
                        callbacks: p
                      })),
                      l('deleteFile', _)
                  }
                },
                download: function (a) {
                  var e = (0, n.default)({}, a)
                  if (!s(e.downloadUrl) || '' === f(e.downloadUrl))
                    throw new Error('请输入合法的下载地址')
                  if (
                    ((e.downloadUrl = encodeURIComponent(e.downloadUrl)),
                    s(e.savePath) && '' === f(e.savePath))
                  )
                    throw new Error('请输入合法的存储地址')
                  e.savePath && (e.savePath = encodeURIComponent(e.savePath)),
                    (P = d(e.startDownloadCallback)
                      ? e.startDownloadCallback
                      : (s(e.startDownloadCallback) &&
                          window[e.startDownloadCallback]) ||
                        h),
                    (L = d(e.callback)
                      ? e.callback
                      : (s(e.callback) && window[e.callback]) || h)
                  var t = '',
                    o = ['startDownloadCallback', 'callback']
                  for (var i in e)
                    -1 === o.indexOf(i) && e[i] && (t += i + '=' + e[i] + '&')
                  ;(t += w.call(this, {
                    apiName: 'download',
                    callbacks: {
                      __maia_download_start_callback: {
                        method: P,
                        appCallbackName: 'callback'
                      },
                      __maia_download_callback: {
                        method: L,
                        appCallbackName: 'finishCallback'
                      }
                    }
                  })),
                    l('downloadStart', t)
                },
                downloadQuery: function (a, e) {
                  if (!u(a)) throw new Error('requestId 类型为数组类型')
                  var t = [].concat((0, o.default)(a)),
                    n = ''
                  ;(n +=
                    'requestIds=' +
                    encodeURIComponent((0, i.default)(t)) +
                    '&'),
                    (x = g(e)),
                    (n += w.call(this, {
                      apiName: 'downloadQuery',
                      callbacks: {
                        __maia_download_query_callback: {
                          method: x,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                    l('downloadQuery', n)
                },
                downloadPause: function (a, e) {
                  if (!a) throw new Error('暂停下载的id不能为空')
                  D = g(e)
                  var t = 'requestId=' + a + '&'
                  ;(t += w.call(this, {
                    apiName: 'downloadPause',
                    callbacks: {
                      __maia_download_pause_callback: {
                        method: D,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('downloadPause', t)
                },
                downloadResume: function (a, e) {
                  if (!a) throw new Error('继续下载的id不能为空')
                  G = g(e)
                  var t = 'requestId=' + a + '&'
                  ;(t += w.call(this, {
                    apiName: 'downloadResume',
                    callbacks: {
                      __maia_download_resume_callback: {
                        method: G,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('downloadResume', t)
                },
                downloadDelete: function (a) {
                  if (!a.requestId) throw new Error('删除下载的id不能为空')
                  U = g(a.callback)
                  var e =
                    'requestId=' +
                    a.requestId +
                    '&delType=' +
                    (a.delType || 0) +
                    '&'
                  ;(e += w.call(this, {
                    apiName: 'downloadDelete',
                    callbacks: {
                      __maia_download_delete_callback: {
                        method: U,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('downloadDelete', e)
                },
                previewFile: function (a, e) {
                  if (!f(a)) throw new Error('文件路径fileUrl 不能为空')
                  j = g(e)
                  var t = 'fileUrl=' + encodeURIComponent(a) + '&'
                  ;(t += w.call(this, {
                    apiName: 'previewFile',
                    callbacks: {
                      __maia_preview_file_callback_: {
                        method: j,
                        appCallbackName: 'callback'
                      }
                    }
                  })),
                    l('previewFile', t)
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o,
              n = t(5),
              i = (o = n) && o.__esModule ? o : { default: o }
            var r = t(0),
              c = r.command,
              l = r.formatCallbackByParam,
              s = void 0
            ;(window.__emit_login_iam_finished_callback__ =
              window.__emit_login_iam_finished_callback__ ||
              function (a) {
                s(JSON.parse(a))
              }),
              (a.exports = {
                emitPageFinished: function () {
                  c('emitPageFinished', '')
                },
                emitLoginIAMFinished: function (a, e) {
                  if (null == a.token)
                    throw new Error('发送IAM登录成功事件需要提供token参数')
                  s = l(e)
                  var t = encodeURIComponent((0, i.default)(a))
                  c(
                    'emitLoginIAMFinished',
                    'data=' +
                      t +
                      '&callback=__emit_login_iam_finished_callback__'
                  )
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o = t(0),
              n = o.command,
              i = o.paserObj,
              r = o.isBoolean,
              c = o.isArray,
              l = o.isNull,
              s = o.isString,
              u = o.mountCallback,
              _ = o.setMethodAttr,
              d = o.formatCallbackByParam,
              f = o.deepCopy,
              p = void 0,
              m = void 0,
              b = void 0,
              h = void 0,
              v = void 0,
              w = void 0,
              k = void 0,
              g = void 0
            ;(window.__get_fast_app_version_callback__ =
              window.__get_fast_app_version_callback__ ||
              function (a) {
                var e = i(a)
                p(e)
              }),
              (window.__register_alias_callback__ =
                window.__register_alias_callback__ ||
                function (a) {
                  var e = i(a)
                  m(e)
                }),
              (window.__register_groups_callback__ =
                window.__register_groups_callback__ ||
                function (a) {
                  var e = i(a)
                  b(e)
                }),
              (window.__delete_alias_callback__ =
                window.__delete_alias_callback__ ||
                function (a) {
                  var e = i(a)
                  h(e)
                }),
              (window.__delete_groups_callback__ =
                window.__delete_groups_callback__ ||
                function (a) {
                  var e = i(a)
                  v(e)
                }),
              (window.__delete_alias_and_groups_callback__ =
                window.__delete_alias_and_groups_callback__ ||
                function (a) {
                  var e = i(a)
                  w(e)
                }),
              (window.__delete_all_groups_callback__ =
                window.__delete_all_groups_callback__ ||
                function (a) {
                  var e = i(a)
                  k(e)
                }),
              (window.__delete_alias_and_all_groups_callback__ =
                window.__delete_alias_and_all_groups_callback__ ||
                function (a) {
                  var e = i(a)
                  g(e)
                })
            var E = {
              registerAlias: function (a, e, t) {
                m = d(t)
                var o = 'appKey=' + a + '&alias=' + encodeURIComponent(e) + '&'
                ;(o += u.call(this, {
                  apiName: 'registerAlias',
                  callbacks: {
                    __register_alias_callback__: {
                      method: m,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('registerAlias', o)
              },
              registerGroups: function (a, e, t) {
                var o = f(e)
                if (!s(o) && !Array.isArray(o))
                  throw new Error(
                    '注册的群组名称数据类型有误，需要使用字符串或者字符串数组'
                  )
                s(o) && (o = [o]), (b = d(t))
                var i =
                  'appKey=' +
                  a +
                  '&groups=' +
                  encodeURIComponent(o.join(',')) +
                  '&'
                ;(i += u.call(this, {
                  apiName: 'registerGroups',
                  callbacks: {
                    __register_groups_callback__: {
                      method: b,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('registerGroups', i)
              },
              deleteAlias: function (a, e) {
                h = d(e)
                var t = 'appKey=' + a + '&'
                ;(t += u.call(this, {
                  apiName: 'deleteAlias',
                  callbacks: {
                    __delete_alias_callback__: {
                      method: h,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('deleteAlias', t)
              },
              deleteGroups: function (a, e, t) {
                var o = f(e)
                if (!s(o) && !Array.isArray(o))
                  throw new Error(
                    '删除的群组名称数据类型有误，需要使用字符串或者字符串数组'
                  )
                s(o) && (o = [o]), (v = d(t))
                var i =
                  'appKey=' +
                  a +
                  '&groups=' +
                  encodeURIComponent(o.join(',')) +
                  '&'
                ;(i += u.call(this, {
                  apiName: 'deleteGroups',
                  callbacks: {
                    __delete_groups_callback__: {
                      method: v,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('deleteGroups', i)
              },
              deleteAliasAndGroups: function (a, e, t) {
                var o = f(e)
                if (!s(o) && !Array.isArray(o))
                  throw new Error(
                    '删除的群组名称数据类型有误，需要使用字符串或者字符串数组'
                  )
                s(o) && (o = [o]), (w = d(t))
                var i =
                  'appKey=' +
                  a +
                  '&groups=' +
                  encodeURIComponent(o.join(',')) +
                  '&'
                ;(i += u.call(this, {
                  apiName: 'deleteAliasAndGroups',
                  callbacks: {
                    __delete_alias_and_groups_callback__: {
                      method: w,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('deleteAliasAndGroups', i)
              },
              deleteAllGroups: function (a, e) {
                k = d(e)
                var t = 'appKey=' + a + '&'
                ;(t += u.call(this, {
                  apiName: 'deleteAllGroups',
                  callbacks: {
                    __delete_all_groups_callback__: {
                      method: k,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('deleteAllGroups', t)
              },
              deleteAliasAndAllGroups: function (a, e) {
                g = d(e)
                var t = 'appKey=' + a + '&'
                ;(t += u.call(this, {
                  apiName: 'deleteAliasAndAllGroups',
                  callbacks: {
                    __delete_alias_and_all_groups_callback__: {
                      method: g,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('deleteAliasAndAllGroups', t)
              }
            }
            a.exports = {
              getFastAppVersion: function (a) {
                p = d(a)
                var e = u.call(this, {
                  apiName: 'getFastAppVersion',
                  callbacks: {
                    __get_fast_app_version_callback__: {
                      method: p,
                      appCallbackName: 'callback'
                    }
                  }
                })
                n('getFastAppVersion', e)
              },
              registerAlias: function (a, e, t) {
                var o = {
                  data: { el: '#' + (this.registerAlias.MAIA_IFRAME_ID || '') }
                }
                _(E.registerAlias, o), E.registerAlias(a, e, t)
              },
              registerGroups: function (a, e, t) {
                var o = {
                  data: { el: '#' + (this.registerGroups.MAIA_IFRAME_ID || '') }
                }
                _(E.registerGroups, o), E.registerGroups(a, e, t)
              },
              deleteAliasAndGroups: function (a) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [],
                  o = arguments[3],
                  n = {
                    data: {
                      el: '#' + (this.deleteAliasAndGroups.MAIA_IFRAME_ID || '')
                    }
                  }
                if (!r(e)) throw new Error('传入的alias别名参数不是布尔类型')
                e && ((c(t) && 0 === t.length) || l(t) || (r(t) && !t))
                  ? (_(E.deleteAlias, n), E.deleteAlias(a, o))
                  : c(t) || s(t)
                  ? e
                    ? (_(E.deleteAliasAndGroups, n),
                      E.deleteAliasAndGroups(a, t, o))
                    : (_(E.deleteGroups, n), E.deleteGroups(a, t, o))
                  : r(t) &&
                    t &&
                    (e
                      ? (_(E.deleteAliasAndAllGroups, n),
                        E.deleteAliasAndAllGroups(a, o))
                      : (_(E.deleteAllGroups, n), E.deleteAllGroups(a, o)))
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o,
              n = t(5),
              i = (o = n) && o.__esModule ? o : { default: o }
            var r = t(0),
              c = r.command,
              l = r.paserObj,
              s = r.mountCallback,
              u = r.formatCallbackByParam,
              _ = r.isRequired,
              d = t(2),
              f = null,
              p = null,
              m = null
            ;(window.__maia_get_facial_callback__ =
              window.__maia_get_facial_callback__ ||
              function (a) {
                f(l(a))
              }),
              (window.__maia_sign_callback__ =
                window.__maia_sign_callback__ ||
                function (a) {
                  p(l(a))
                }),
              (window.__maia_pay_auth_callback__ =
                window.__maia_pay_auth_callback__ ||
                function (a) {
                  m(l(a))
                }),
              (a.exports = {
                getFacial: function (a) {
                  if (((f = u(a)), this.IFRAME_ENV))
                    (this.iframeCallbackList[d.GETFACIAL] = function (a) {
                      f(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: d.GETFACIAL,
                          data: {},
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var e = {}
                    e.__maia_get_facial_callback__ = {
                      method: f,
                      appCallbackName: 'callback'
                    }
                    var t = s.call(this, { apiName: 'getFacial', callbacks: e })
                    c('getFacial', t)
                  }
                },
                sign: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = a.watermark,
                    t = a.callback,
                    o = a.ext1,
                    n = a.ext2
                  if (_(t, 'callback')) {
                    p = u(t)
                    var i = ''
                    e && (i += 'watermark=' + encodeURIComponent(e) + '&'),
                      o && (i += 'ext1=' + encodeURIComponent(o) + '&'),
                      n && (i += 'ext2=' + encodeURIComponent(n) + '&'),
                      (i += s.call(this, {
                        apiName: 'sign',
                        callbacks: {
                          __maia_sign_callback__: {
                            method: p,
                            appCallbackName: 'callback'
                          }
                        }
                      })),
                      c('sign', i)
                  }
                },
                payAuth: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = a.callback
                  if (((m = u(e)), this.IFRAME_ENV))
                    (this.iframeCallbackList[d.PAYAUTH] = function (a) {
                      m(a)
                    }),
                      window.top.postMessage(
                        {
                          actionName: d.PAYAUTH,
                          data: (0, i.default)(a),
                          el: this.MAIA_IFRAME_ID
                        },
                        '*'
                      )
                  else {
                    var t = ''
                    for (var o in a)
                      'callback' !== o &&
                        Object.hasOwnProperty.call(a, o) &&
                        (t += o + '=' + encodeURIComponent(a[o]) + '&')
                    ;(t += s.call(this, {
                      apiName: 'payAuth',
                      callbacks: {
                        __maia_pay_auth_callback__: {
                          method: m,
                          appCallbackName: 'callback'
                        }
                      }
                    })),
                      c('payAuth', t)
                  }
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o = t(8).callbackNames,
              n = t(0),
              i = n.command,
              r = n.paserObj,
              c = n.isNotEmptyObject,
              l = n.isNull,
              s = n.isUndefined,
              u = n.mountCallback,
              _ = n.deepCopy,
              d = n.formatCallbackByParam,
              f = void 0,
              p = void 0
            ;(window[o.CHOOSE_INVOICE] =
              window[o.CHOOSE_INVOICE] ||
              function (a) {
                f && f(r(a))
              }),
              (window[o.SELECT_INVOICE] =
                window[o.SELECT_INVOICE] ||
                function (a) {
                  p && p(r(a))
                }),
              (a.exports = {
                chooseInvoice: function (a) {
                  var e = _(a)
                  c(e) || (e = {})
                  var t = ''
                  l(e.shopId) || s(e.shopId) || (t = 'shopId=' + e.shopId),
                    (f = d(e.statusCallback)),
                    (p = d(e.callback))
                  var n = t + '&',
                    r = {}
                  ;(r[o.CHOOSE_INVOICE] = {
                    method: f,
                    appCallbackName: 'callback'
                  }),
                    (r[o.SELECT_INVOICE] = {
                      method: p,
                      appCallbackName: 'selectCallback'
                    }),
                    (n += u.call(this, {
                      apiName: 'chooseInvoice',
                      callbacks: r
                    })),
                    i('chooseInvoice', n)
                }
              })
          },
          function (a, e, t) {
            'use strict'
            var o = t(0),
              n = o.command,
              i = o.mountCallback,
              r = o.formatCallbackByParam
            a.exports = {
              navigateTo: function (a) {
                var e = r(a.callback),
                  t = 'url=' + encodeURIComponent(a.url) + '&'
                ;(t += i.call(this, {
                  apiName: 'navigateTo',
                  callbacks: {
                    __maia_miniapp_navigate_to_callback__: {
                      method: e,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('navigateTo', t, { supportMiniApp: !0 })
              },
              redirectTo: function (a) {
                var e = r(a.callback),
                  t = 'url=' + encodeURIComponent(a.url) + '&'
                ;(t += i.call(this, {
                  apiName: 'redirectTo',
                  callbacks: {
                    __maia_miniapp_redirectTo_to_callback__: {
                      method: e,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('redirectTo', t, { supportMiniApp: !0 })
              },
              navigateBack: function (a) {
                var e = ''
                a.delta && (e += 'delta=' + a.delta + '&')
                var t = r(a.callback)
                ;(e += i.call(this, {
                  apiName: 'navigateBack',
                  callbacks: {
                    __maia_miniapp_navigate_back_callback__: {
                      method: t,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('navigateBack', e, { supportMiniApp: !0 })
              },
              switchTab: function (a) {
                var e = 'url=' + encodeURIComponent(a.url) + '&',
                  t = r(a.callback)
                ;(e += i.call(this, {
                  apiName: 'switchTab',
                  callbacks: {
                    __maia_miniapp_switchTab_to_callback__: {
                      method: t,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('switchTab', e, { supportMiniApp: !0 })
              },
              reLaunch: function (a) {
                var e = 'url=' + encodeURIComponent(a.url) + '&',
                  t = r(a.callback)
                ;(e += i.call(this, {
                  apiName: 'reLaunch',
                  callbacks: {
                    __maia_miniapp_reLaunch_callback__: {
                      method: t,
                      appCallbackName: 'callback'
                    }
                  }
                })),
                  n('reLaunch', e, { supportMiniApp: !0 })
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = i(t(67)),
              n = i(t(43))
            function i(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var r = t(149),
              c = r.downloadFile,
              l = r.uploadFile,
              s = r.request,
              u = r.deleteFile,
              _ = t(150),
              d = _.getAppInfo,
              f = _.getDeviceInfo,
              p = _.getLocation,
              m = _.getNetwork,
              b = _.getLocationByTencentMap,
              h = t(151),
              v = h.createExtension,
              w = h.getToken,
              k = h.useNative,
              g = t(152),
              E = g.takePhoto,
              A = g.chooseImage,
              N = g.getRecorder,
              I = g.getRecorderText,
              y = g.getXFRecorderText,
              C = g.takePhotos,
              T = g.compress,
              O = g.chooseVideo,
              S = g.play,
              M = t(153),
              R = M.getFacial,
              F = M.payAuth,
              P = t(154),
              L = P.setNavigationBarTitle,
              x = P.getWebviewDisplayMode,
              D = P.setNavigationBar,
              G = P.disableWebViewSwipe,
              U = P.addCurrentTab,
              j = P.setButtons,
              B = P.show,
              V = t(155),
              W = V.closePage,
              q = V.createPage,
              H = t(2),
              K = t(12).maApi,
              X = t(0),
              Y = X.isArray,
              z = X.isNotEmptyObject,
              J = X.isNotEmptyString,
              Q = X.paserObj
            function $(a, e) {
              if (!a.data || !a.data.data) return null
              var t = Q(a.data.data),
                i = (function a() {
                  for (
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 'fun',
                      t = arguments[1],
                      i = arguments[2],
                      r = arguments[3],
                      c = [].concat((0, n.default)(t)),
                      l = 0;
                    l < c.length;
                    l++
                  ) {
                    var s = c[l]
                    if (z(s))
                      for (var u in s)
                        J(s[u]) &&
                          -1 !== s[u].indexOf('__maiaH5_custom_function__') &&
                          (function () {
                            var a = s[u].split('__maiaH5_custom_function__'),
                              e = (0, o.default)(a, 3),
                              t = (e[0], e[1]),
                              n = e[2]
                            ;(s[t] = function (a) {
                              r.contentWindow.postMessage(
                                { actionName: n, data: a },
                                '*'
                              )
                            }),
                              delete s[u]
                          })()
                    else
                      J(s) && -1 !== s.indexOf('__maiaH5_custom_function__')
                        ? (function () {
                            var a = s.split('__maiaH5_custom_function__'),
                              e = (0, o.default)(a, 2),
                              t = (e[0], e[1])
                            s = function (a) {
                              r.contentWindow.postMessage(
                                { actionName: t, data: a },
                                '*'
                              )
                            }
                          })()
                        : Y(s) && (s = a(e, s, i, r))
                    c[l] = s
                  }
                  return c
                })(a.data.actionName, t, a, e)
              return (
                (K[a.data.actionName].MAIA_IFRAME_ID = a.data.el.substr(1)),
                (K[a.data.actionName].MAIA_SUPPORT_IFRAMES =
                  window.__maia_glob_var.MAIA_SUPPORT_IFRAMES),
                K[a.data.actionName].apply(K, (0, n.default)(i)),
                null
              )
            }
            a.exports = {
              downloadFile: c,
              uploadFile: l,
              deleteFile: u,
              request: s,
              getAppInfo: d,
              getDeviceInfo: f,
              getLocation: p,
              getLocationByTencentMap: b,
              getNetwork: m,
              createExtension: v,
              takePhoto: E,
              chooseImage: A,
              setNavigationBarTitle: L,
              receiveIframeMessage: function a(e) {
                if (
                  null !== e.data &&
                  (!e.data || e.data.data) &&
                  'string' != typeof e.data
                ) {
                  var t = void 0,
                    o = a.iframe
                  if (Y(o) && e.data.el)
                    for (var n = o.length, i = 0; i < n; i++) {
                      var r = o[i]
                      if (r.id === e.data.el) {
                        t = r.el
                        break
                      }
                    }
                  else t = o
                  switch (e.data.actionName) {
                    case H.DOWNLOADFILE:
                      c(e, t)
                      break
                    case H.UPLOADFILE:
                      l(e, t)
                      break
                    case H.REQUEST:
                      s(e, t)
                      break
                    case H.DELETEFILE:
                      u(e, t)
                      break
                    case H.GETDEVICEINFOIFRAME:
                      f(e, t)
                      break
                    case H.GETAPPINFOIFRAME:
                      d(e, t)
                      break
                    case H.GETLOCATION:
                      p(e, t)
                      break
                    case H.GETTENCENTMAPLOCATION:
                      b(e, t)
                      break
                    case H.GETNETWORK:
                      m(e, t)
                      break
                    case H.CREATEEXTENSION:
                      v(e, t)
                      break
                    case H.TAKEPHOTO:
                      E(e, t)
                      break
                    case H.CHOOSEIMAGE:
                      A(e, t)
                      break
                    case H.GETRECORDER:
                      N(e, t)
                      break
                    case H.GETRECORDERTEXT:
                      I(e, t)
                      break
                    case H.GETXFRECORDERTEXT:
                      y(e, t)
                      break
                    case H.GETFACIAL:
                      R(e, t)
                      break
                    case H.PAYAUTH:
                      F(e, t)
                      break
                    case H.SETNAVIGATIONBARTITLE:
                      L(e, t)
                      break
                    case H.GETWEBVIEWDISPLAYMODE:
                      x(e, t)
                      break
                    case H.GETTOKEN:
                      w(e, t)
                      break
                    case H.CLOSEPAGE:
                      W(e, t)
                      break
                    case H.CREATEPAGE:
                      q(e, t)
                      break
                    case H.TAKEPHOTOS:
                      C(e, t)
                      break
                    case H.USENATIVE:
                      k(e, t)
                      break
                    case H.SETNAVIGATIONBAR:
                      D(e, t)
                      break
                    case H.DISABLEWEBVIEWSWIPE:
                      G(e, t)
                      break
                    case H.CHOOSEVIDEO:
                      O(e, t)
                      break
                    case H.COMPRESS:
                      T(e, t)
                      break
                    case H.PLAY:
                      S(e, t)
                      break
                    case H.ADDCURRENTTAB:
                      U(e, t)
                      break
                    case H.SETBUTTONS:
                      j(e, t)
                      break
                    case H.SHOW:
                      B(e, t)
                      break
                    default:
                      $(e, t)
                  }
                }
              },
              getRecorder: N,
              getXFRecorderText: y,
              getFacial: R
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(12).api,
              n = t(2),
              i = t(0).setMethodAttr
            a.exports = {
              downloadFile: function (a, e) {
                var t = a.data.data.downUrl,
                  r = a.data.data.storeUrl,
                  c = a.data.data.saveAlbum,
                  l = a.data.data.timeout
                i(o.downloadFile, a),
                  o.downloadFile(t, r, {
                    saveAlbum: c,
                    timeout: l,
                    success: function (a) {
                      e.contentWindow.postMessage(
                        { actionName: n.DOWNLOADFILESUCCESS, data: a },
                        '*'
                      )
                    },
                    fail: function (a) {
                      var t = a.status,
                        o = a.error
                      e.contentWindow.postMessage(
                        {
                          actionName: n.DOWNLOADFILEFAIL,
                          data: { status: t, error: o }
                        },
                        '*'
                      )
                    },
                    complete: function () {
                      e.contentWindow.postMessage(
                        { actionName: n.DOWNLOADFILECOMPLETE, data: {} },
                        '*'
                      )
                    },
                    progress: function (a, t) {
                      e.contentWindow.postMessage(
                        {
                          actionName: n.DOWNLOADFILEPROGRESS,
                          data: { progress: a, data: t }
                        },
                        '*'
                      )
                    }
                  })
              },
              uploadFile: function (a, e) {
                var t = a.data.data.url,
                  r = a.data.data.uploadFiles,
                  c = {
                    header: a.data.data.header,
                    data: a.data.data.params,
                    success: function (a) {
                      e.contentWindow.postMessage(
                        { actionName: n.UPLOADFILESUCCESS, data: a },
                        '*'
                      )
                    },
                    fail: function (a, t) {
                      e.contentWindow.postMessage(
                        {
                          actionName: n.UPLOADFILEFAIL,
                          data: { status: a, error: t }
                        },
                        '*'
                      )
                    },
                    complete: function () {
                      e.contentWindow.postMessage(
                        { actionName: n.UPLOADFILECOMPLETE, data: {} },
                        '*'
                      )
                    },
                    progress: function (a, t) {
                      e.contentWindow.postMessage(
                        {
                          actionName: n.UPLOADFILEPROGRESS,
                          data: { progress: a, data: t }
                        },
                        '*'
                      )
                    }
                  }
                i(o.uploadFile, a), o.uploadFile(t, r, c)
              },
              request: function (a, e) {
                var t = a.data.data
                ;(t.success = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.REQUESTSUCCESS, data: a },
                    '*'
                  )
                }),
                  (t.fail = function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.REQUESTFAIL, data: a },
                      '*'
                    )
                  }),
                  (t.complete = function () {
                    e.contentWindow.postMessage(
                      { actionName: n.REQUESTCOMPLETE, data: {} },
                      '*'
                    )
                  }),
                  i(o.request, a),
                  o.request(t)
              },
              deleteFile: function (a, e) {
                var t = a.data.data.type,
                  r = a.data.data.path
                i(o.deleteFile, a),
                  o.deleteFile(t, r, function (a, t) {
                    e.contentWindow.postMessage(
                      { actionName: n.DELETEFILE, data: { err: a, data: t } },
                      '*'
                    )
                  })
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o,
              n,
              i = s(t(47)),
              r = s(t(48)),
              c =
                ((o = (0, r.default)(
                  i.default.mark(function a(e, t) {
                    var o
                    return i.default.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                d(u.getAppInfoAsync, e),
                                (a.next = 3),
                                u.getAppInfoAsync()
                              )
                            case 3:
                              ;(o = a.sent),
                                t.contentWindow.postMessage(
                                  { actionName: _.GETAPPINFOIFRAME, data: o },
                                  '*'
                                )
                            case 5:
                            case 'end':
                              return a.stop()
                          }
                      },
                      a,
                      this
                    )
                  })
                )),
                function (a, e) {
                  return o.apply(this, arguments)
                }),
              l =
                ((n = (0, r.default)(
                  i.default.mark(function a(e, t) {
                    var o
                    return i.default.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                d(u.getDeviceInfoAsync, e),
                                (a.next = 3),
                                u.getDeviceInfoAsync()
                              )
                            case 3:
                              ;(o = a.sent),
                                t.contentWindow.postMessage(
                                  {
                                    actionName: _.GETDEVICEINFOIFRAME,
                                    data: o
                                  },
                                  '*'
                                )
                            case 5:
                            case 'end':
                              return a.stop()
                          }
                      },
                      a,
                      this
                    )
                  })
                )),
                function (a, e) {
                  return n.apply(this, arguments)
                })
            function s(a) {
              return a && a.__esModule ? a : { default: a }
            }
            var u = t(12).api,
              _ = t(2),
              d = t(0).setMethodAttr
            a.exports = {
              getAppInfo: c,
              getDeviceInfo: l,
              getLocation: function (a, e) {
                d(u.getLocation, a),
                  u.getLocation(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: _.GETLOCATION, data: a },
                      '*'
                    )
                  })
              },
              getLocationByTencentMap: function (a, e) {
                d(u.getLocationByTencentMap, a),
                  u.getLocationByTencentMap(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: _.GETTENCENTMAPLOCATION, data: a },
                      '*'
                    )
                  })
              },
              getNetwork: function (a, e) {
                d(u.getNetwork, a),
                  u.getNetwork(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: _.GETNETWORK, data: a },
                      '*'
                    )
                  })
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(12).api,
              n = t(2),
              i = t(0).setMethodAttr
            a.exports = {
              createExtension: function (a, e) {
                var t = a.data.data,
                  r = t.url,
                  c = t.encode,
                  l = t.callbackName
                i(o.createExtension, a),
                  o.createExtension(r, c),
                  (window[l] = function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.CREATEEXTENSION, data: a },
                      '*'
                    )
                  })
              },
              getToken: function (a, e) {
                var t = a.data.data.appName
                i(o.getToken, a),
                  o.getToken(t, function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.GETTOKEN, data: a },
                      '*'
                    )
                  })
              },
              useNative: function (a, e) {
                var t = JSON.parse(a.data.data),
                  r = t.protocol,
                  c = t.path,
                  l = t.params
                ;(l.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.USENATIVE, data: a },
                    '*'
                  )
                }),
                  i(o.useNative, a),
                  o.useNative(r, c, l)
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(12).api,
              n = t(2),
              i = t(0).setMethodAttr
            a.exports = {
              chooseImage: function (a, e) {
                var t = a.data.data
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.CHOOSEIMAGE, data: a },
                    '*'
                  )
                }),
                  i(o.chooseImage, a),
                  o.chooseImage(t)
              },
              takePhoto: function (a, e) {
                var t = a.data.data
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.TAKEPHOTO, data: a },
                    '*'
                  )
                }),
                  (t.edit *= 1),
                  i(o.createCameraContext().takePhoto, a),
                  o.createCameraContext().takePhoto(t)
              },
              getRecorder: function (a, e) {
                i(o.getRecorder, a),
                  o.getRecorder(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.GETRECORDER, data: a },
                      '*'
                    )
                  })
              },
              getRecorderText: function (a, e) {
                var t = a.data.data
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.GETRECORDERTEXT, data: a },
                    '*'
                  )
                }),
                  i(o.getRecorderText, a),
                  o.getRecorderText(t)
              },
              getXFRecorderText: function (a, e) {
                var t = a.data.data
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.GETXFRECORDERTEXT, data: a },
                    '*'
                  )
                }),
                  i(o.getXFRecorderText, a),
                  o.getXFRecorderText(t)
              },
              chooseVideo: function (a, e) {
                var t = JSON.parse(a.data.data)
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.CHOOSEVIDEO, data: a },
                    '*'
                  )
                }),
                  i(o.chooseVideo, a),
                  o.chooseVideo(t)
              },
              takePhotos: function (a, e) {
                var t = JSON.parse(a.data.data)
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.TAKEPHOTOS, data: a },
                    '*'
                  )
                }),
                  i(o.createCameraContext().takePhotos, a),
                  o.createCameraContext().takePhotos(t)
              },
              compress: function (a, e) {
                var t = JSON.parse(a.data.data),
                  r = t.url,
                  c = t.size
                i(o.createVideoContext().compress, a),
                  o.createVideoContext().compress(r, c, function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.COMPRESS, data: a },
                      '*'
                    )
                  })
              },
              play: function (a, e) {
                var t = JSON.parse(a.data.data)
                i(o.createVideoContext().play, a),
                  o.createVideoContext().play(t, function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.PLAY, data: a },
                      '*'
                    )
                  })
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(12).api,
              n = t(2),
              i = t(0).setMethodAttr
            a.exports = {
              getFacial: function (a, e) {
                i(o.getFacial, a),
                  o.getFacial(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.GETFACIAL, data: a },
                      '*'
                    )
                  })
              },
              payAuth: function (a, e) {
                var t = a.data.data
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.PAYAUTH, data: a },
                    '*'
                  )
                }),
                  i(o.payAuth, a),
                  o.payAuth(t)
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(12).api,
              n = t(2),
              i = t(0).setMethodAttr
            a.exports = {
              setNavigationBarTitle: function (a, e) {
                var t = a.data.data
                i(o.setNavigationBarTitle, a), o.setNavigationBarTitle(t)
              },
              getWebviewDisplayMode: function (a, e) {
                i(o.getWebviewDisplayMode, a),
                  o.getWebviewDisplayMode(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.GETWEBVIEWDISPLAYMODE, data: a },
                      '*'
                    )
                  })
              },
              setNavigationBar: function (a, e) {
                var t = JSON.parse(a.data.data),
                  n = {}
                for (var r in t)
                  n[r] = t[r].map(function (a) {
                    var t = {}
                    for (var o in a) t[o] = a[o]
                    return (
                      t.js &&
                        (window[t.js] = function (a) {
                          e.contentWindow.postMessage(
                            { actionName: t.js, data: a },
                            '*'
                          )
                        }),
                      t
                    )
                  })
                i(o.setNavigationBar, a), o.setNavigationBar(n)
              },
              disableWebViewSwipe: function (a, e) {
                i(o.disableWebViewSwipe, a),
                  o.disableWebViewSwipe(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.DISABLEWEBVIEWSWIPE, data: a },
                      '*'
                    )
                  })
              },
              addCurrentTab: function (a, e) {
                i(o.createFloatBallContext().addCurrentTab, a),
                  o.createFloatBallContext().addCurrentTab(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.ADDCURRENTTAB, data: a },
                      '*'
                    )
                  })
              },
              setButtons: function (a, e) {
                var t = JSON.parse(a.data.data)
                t.forEach(function (a) {
                  if (a.js) {
                    var t = a.js
                    window[t] = function (a) {
                      e.contentWindow.postMessage(
                        { actionName: t, data: a },
                        '*'
                      )
                    }
                  }
                }),
                  i(o.createFloatBallContext().setButtons, a),
                  o.createFloatBallContext().setButtons(t, function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.SETBUTTONS, data: a },
                      '*'
                    )
                  })
              },
              show: function (a, e) {
                i(o.createFloatBallContext().show, a),
                  o.createFloatBallContext().show(function (a) {
                    e.contentWindow.postMessage(
                      { actionName: n.SHOW, data: a },
                      '*'
                    )
                  })
              }
            }
          },
          function (a, e, t) {
            'use strict'
            var o = t(12).api,
              n = t(2),
              i = t(0).setMethodAttr
            a.exports = {
              closePage: function (a, e) {
                var t = JSON.parse(a.data.data)
                ;(t.js = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.CLOSEPAGE, data: a },
                    '*'
                  )
                }),
                  i(o.closePage, a),
                  o.closePage(t)
              },
              createPage: function (a, e) {
                var t = JSON.parse(a.data.data)
                ;(t.callback = function (a) {
                  e.contentWindow.postMessage(
                    { actionName: n.CREATEPAGE, data: a },
                    '*'
                  )
                }),
                  i(o.createPage, a),
                  o.createPage(t)
              }
            }
          },
          function (a, e, t) {
            'use strict'
            a.exports = {
              addSupport: function () {
                var a = document.createDocumentFragment(),
                  e = document.createElement('div'),
                  t = document.createElement('img')
                ;(e.className = 'maia-support-logo'),
                  (e.style =
                    'position: fixed; left: 0; bottom: 0; width: 30%; z-index: 9999;'),
                  (t.style = 'display: block; width: 100%;'),
                  (t.src =
                    'https://s.longfor.com/image/2e378d01225df2ddb1e256b7d46cc879.png'),
                  e.appendChild(t),
                  a.appendChild(e),
                  document.body.appendChild(a)
              },
              removeSupport: function () {
                var a = document.getElementsByClassName('maia-support-logo')
                a && a[0] && document.body.removeChild(a[0])
              }
            }
          }
        ])
      })

      /***/
    }
    /******/
  ]
)
