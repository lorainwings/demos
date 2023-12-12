// https://fenwan.cdn.bcebos.com/webgame/static/webgame/js/2569.0e7aa99c.js
;(self.webpackChunkgame_center_pc = self.webpackChunkgame_center_pc || []).push(
  [
    [2569, 36, 441, 5218, 9399, 2925],
    {
      50757: function (e, t, n) {
        var a = n(73610),
          r = n(99385),
          o = n(89632),
          i = n(15461)
        t = a(!1)
        var c = r(o),
          l = r(i)
        t.push([
          e.id,
          '.all-game-wrap {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n}\n.all-game-wrap:hover .all-game-main {\n  display: block;\n}\n.all-game-wrap:hover .all-game-trigger:after {\n  transform: rotateZ(180deg);\n}\n.all-game-wrap .all-game-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.all-game-wrap .all-game-main {\n  position: absolute;\n  z-index: 999;\n  top: 46px;\n  right: 0;\n  width: 322px;\n  box-sizing: border-box;\n  padding: 10px 0 0;\n  background: #3b3c47;\n}\n.all-game-wrap .all-game-main.game {\n  top: 33px;\n}\n.all-game-wrap .all-game-main .all-game-module .m-title {\n  color: #fff;\n  padding: 16px 26px 18px;\n  font-size: 14px;\n  line-height: 14px;\n  opacity: 0.6;\n}\n.all-game-wrap .all-game-main .all-game-module .m-server-box {\n  padding: 0 26px 0;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.all-game-wrap .all-game-main .all-game-module .m-server-box .s-item {\n  display: block;\n  width: 120px;\n  font-size: 12px;\n  letter-spacing: 0;\n  line-height: 17px;\n  color: #fcd797;\n  margin-bottom: 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n}\n.all-game-wrap .all-game-main .all-game-module .m-server-box .s-item:hover {\n  color: #ffbe00;\n}\n.all-game-wrap .all-game-main .all-game-module .m-server-box .s-item:nth-child(odd) {\n  margin-right: 30px;\n}\n.all-game-wrap .all-game-main .all-game-module .m-more {\n  margin: 11px auto 0;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: #fcd797;\n  background: rgba(0,0,0,0.2);\n}\n.all-game-wrap .all-game-main .all-game-module .m-more .m-arrow {\n  width: 12px;\n  height: 12px;\n  background: url(' +
            c +
            ') center no-repeat;\n  background-size: cover;\n}\n.all-game-wrap .all-game-main .all-game-module .m-more:hover {\n  color: #ffbe00;\n}\n.all-game-wrap .all-game-main .all-game-module .m-more:hover .m-arrow {\n  background-image: url(' +
            l +
            ');\n}\n.all-game-wrap .all-game-main .all-game-module .resource-box .r-item {\n  display: block;\n  height: 181px;\n  background-size: cover;\n  background-position: center;\n}\n',
          ''
        ]),
          (e.exports = t)
      },
      81109: function (e, t, n) {
        'use strict'
        n.d(t, {
          Tw: function () {
            return c
          },
          H9: function () {
            return l
          },
          KG: function () {
            return s
          }
        })
        n(20108),
          n(7954),
          n(50289),
          n(78054),
          n(42443),
          n(27329),
          n(52918),
          n(33290),
          n(15953),
          n(58026),
          n(11365),
          n(20276)
        var a = n(92813)
        function r(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  i(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        function c(e) {
          return (0, a.Z)({
            url: '/gameapi',
            params: o(
              {
                action: 'gift_detail'
              },
              e
            )
          })
        }
        function l(e) {
          var t = e.pageNum,
            n = void 0 === t ? 1 : t,
            r = e.pageSize,
            o = void 0 === r ? 10 : r
          return (0, a.Z)({
            url: '/gameapi',
            params: {
              action: 'user_gifts',
              pageNum: n,
              pageSize: o
            }
          })
        }
        function s(e) {
          var t = e.gameId,
            n = e.serverId,
            r = e.giftId
          return (0, a.Z)({
            url: '/gameapi',
            params: {
              action: 'receive_gift',
              gameId: t,
              serverId: n,
              giftId: r
            }
          })
        }
      },
      17875: function (e, t, n) {
        'use strict'
        var a = n(68270),
          r = n(51367),
          o = n.n(r),
          i = n(73381),
          c = n(92661),
          l = 'game-active-modal'
        t.Z = function (e) {
          var t = e.show,
            n = void 0 !== t && t,
            r = e.size,
            s = void 0 === r ? 'small' : r,
            u = e.showClose,
            m = e.className,
            d = void 0 === m ? '' : m,
            f = e.closeBtnCls,
            g = void 0 === f ? '' : f,
            p = e.contentShowCls,
            v = void 0 === p ? '' : p,
            y = e.contentImgCls,
            A = void 0 === y ? '' : y,
            h = e.children,
            E = e.url,
            b = e.src,
            w = void 0 === b ? '' : b,
            N = e.onJump,
            I = e.onClose,
            S = e.showLog,
            O = o()(l, ''.concat(s, '-modal'), d),
            k = o()(''.concat(l, '-content-close-btn'), g),
            C = o()(''.concat(l, '-content-show'), v),
            x = o()(''.concat(l, '-content-show-image'), A)
          return (
            (0, a.useEffect)(
              function () {
                n && S && S()
              },
              [n]
            ),
            a.createElement(
              a.Fragment,
              null,
              n
                ? a.createElement(
                    'div',
                    {
                      className: O
                    },
                    a.createElement(
                      'div',
                      {
                        className: ''.concat(l, '-content')
                      },
                      u
                        ? a.createElement('div', {
                            className: k,
                            onClick: I
                          })
                        : null,
                      a.createElement(
                        'div',
                        {
                          className: C,
                          onClick: N
                        },
                        h ||
                          a.createElement(
                            c.default,
                            {
                              url: E
                            },
                            a.createElement(i.Z, {
                              className: x,
                              lazyed: !1,
                              src: w
                            })
                          )
                      )
                    )
                  )
                : a.createElement('div', null)
            )
          )
        }
      },
      62925: function (e, t, n) {
        'use strict'
        n.r(t)
        var a = n(68270),
          r = n(85129),
          o = n(7142),
          i = n(64647),
          c = n(84229),
          l = n(92661)
        t.default = function (e) {
          var t = e.children
          return a.createElement(
            'div',
            {
              className: 'game-title'
            },
            a.createElement(
              l.default,
              {
                url: o.Ol.HOME + (0, c.gm)(null)
              },
              a.createElement('img', {
                className: 'logo',
                src: r,
                onClick: function () {
                  var e = window.location.pathname.substring(1)
                  e !== o.Ol.HOME &&
                    (0, i.ut)({
                      page: e,
                      value: 'baiduGame'
                    })
                }
              })
            ),
            t
          )
        }
      },
      50036: function (e, t, n) {
        'use strict'
        n.r(t)
        var a = n(68270),
          r = n(7142)
        t.default = function () {
          return a.createElement(
            a.Fragment,
            null,
            a.createElement('span', {
              className: 'divide'
            }),
            a.createElement(
              'a',
              {
                href: r.li,
                rel: 'noreferrer noopener',
                className: 'upgrade-word'
              },
              a.createElement(
                'span',
                {
                  style: {
                    color: '#f60'
                  }
                },
                '原百度游戏账号升级'
              )
            )
          )
        }
      },
      80441: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            default: function () {
              return T
            }
          })
        n(75577),
          n(78054),
          n(15953),
          n(27329),
          n(58026),
          n(11365),
          n(6816),
          n(35680),
          n(41903),
          n(55627),
          n(61089),
          n(20108),
          n(7954),
          n(50289),
          n(42443),
          n(52918),
          n(33290),
          n(20276),
          n(35162),
          n(33678),
          n(18989),
          n(36929),
          n(13899),
          n(8500),
          n(76910),
          n(90329),
          n(82254),
          n(82742),
          n(73258)
        var a = n(68270),
          r = n(2843),
          o = n(93379),
          i = n.n(o),
          c = n(7795),
          l = n.n(c),
          s = n(90569),
          u = n.n(s),
          m = n(3565),
          d = n.n(m),
          f = n(19216),
          g = n.n(f),
          p = n(44589),
          v = n.n(p),
          y = n(50757),
          A = n.n(y),
          h = {}
        ;(h.styleTagTransform = v()),
          (h.setAttributes = d()),
          (h.insert = u().bind(null, 'head')),
          (h.domAPI = l()),
          (h.insertStyleElement = g())
        i()(A(), h), A() && A().locals && A().locals
        var E = n(61489),
          b = n(64647),
          w = n(84229),
          N = n(92661)
        function I(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return S(e)
            })(e) ||
            (function (e) {
              if (
                ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e['@@iterator']
              )
                return Array.from(e)
            })(e) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return S(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return S(e, t)
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function S(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        function O(e, t, n, a, r, o, i) {
          try {
            var c = e[o](i),
              l = c.value
          } catch (e) {
            return void n(e)
          }
          c.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        function k(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function C(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? k(Object(n), !0).forEach(function (t) {
                  x(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function x(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        var T = (0, r.connect)(
          function (e) {
            return {
              navAllGameList: e.game.navAllGameList
            }
          },
          function (e) {
            return {
              navAllGame: e.game.navAllGame
            }
          }
        )(function (e) {
          var t = e.cls,
            n = void 0 === t ? 'point' : t,
            r = e.theme,
            o = void 0 === r ? 'dark' : r,
            i = e.navAllGame,
            c = e.navAllGameList,
            l = e.allGameLoaded,
            s = e.showAllGame,
            u = window.location.pathname.substring(1),
            m = {
              webGames: '热门游戏',
              myGames: '我的游戏'
            },
            d = function (e, t, n) {
              ;(0, E._6)(n)
              var a = {}
              switch (t) {
                case 'webGames':
                case 'myGames':
                  ;(0, b.ut)({
                    page: u,
                    value: 'game',
                    ext: {
                      gameName: e.gameName,
                      gameId: e.gameId,
                      clickType: 'words',
                      clickBtnType: 'play',
                      moduleName: m[t],
                      popupName: '全部游戏'
                    }
                  })
                  break
                case 'resource':
                  '1' === e.resourceCat &&
                    (a = {
                      ext: {
                        activityType: '资源位',
                        activityName: e.ResourceTitle,
                        activityId: e.resourceId,
                        popupName: '全部游戏'
                      }
                    }),
                    '2' === e.resourceCat &&
                      (a = {
                        ext: {
                          clickType: 'resource',
                          clickBtnType: 'play',
                          gameName: e.ResourceTitle,
                          gameId: e.resourceId,
                          popupName: '全部游戏'
                        }
                      }),
                    (0, b.ut)(
                      C(
                        {
                          page: u,
                          value: '1' === e.resourceCat ? 'activity' : 'game'
                        },
                        a
                      )
                    )
                  break
                default:
                  return [e, t]
              }
            },
            f = (function () {
              var e,
                t =
                  ((e = regeneratorRuntime.mark(function e() {
                    var t
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), i()
                          case 2:
                            ;(t =
                              document.querySelectorAll(
                                '.m-server-box .s-item'
                              ) || []).length &&
                              I(t).forEach(function (e) {
                                var t = e.dataset.log
                                  ? JSON.parse(e.dataset.log)
                                  : {}
                                ;(0, b.dV)(
                                  {
                                    type: 'showItems'
                                  },
                                  {
                                    page: u,
                                    ext: C(
                                      C({}, t),
                                      {},
                                      {
                                        gameName: e.innerText,
                                        popupName: '全部游戏'
                                      }
                                    )
                                  }
                                )
                              }),
                              (0, b.Yk)(
                                {
                                  page: u
                                },
                                '.resource-box',
                                '.r-item',
                                {
                                  popupName: '全部游戏'
                                }
                              )
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })),
                  function () {
                    var t = this,
                      n = arguments
                    return new Promise(function (a, r) {
                      var o = e.apply(t, n)
                      function i(e) {
                        O(o, a, r, i, c, 'next', e)
                      }
                      function c(e) {
                        O(o, a, r, i, c, 'throw', e)
                      }
                      i(void 0)
                    })
                  })
              return function () {
                return t.apply(this, arguments)
              }
            })()
          return (
            (0, a.useEffect)(
              function () {
                f && f()
              },
              [l]
            ),
            a.createElement(
              'div',
              {
                className: 'all-game-wrap-proxy-box all-game-wrap '
                  .concat(n, ' ')
                  .concat(o)
              },
              c && c.length > 0 && s
                ? a.createElement(
                    'div',
                    {
                      className: 'all-game-main '.concat(
                        window.location.pathname.substring(1)
                      )
                    },
                    c &&
                      c.length &&
                      c.map(function (e) {
                        return a.createElement(
                          'div',
                          {
                            className: 'all-game-module '.concat(e.type),
                            key: e.type
                          },
                          'resource' !== e.type
                            ? a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(
                                  'div',
                                  {
                                    className: 'm-title'
                                  },
                                  e.typeName
                                ),
                                a.createElement(
                                  'div',
                                  {
                                    className: 'm-server-box'
                                  },
                                  e.list &&
                                    e.list.length &&
                                    e.list.map(function (t) {
                                      return a.createElement(
                                        N.default,
                                        {
                                          cls: 's-item',
                                          key: t.gameId,
                                          'data-log': JSON.stringify({
                                            moduleName: m[e.type],
                                            gameId: t.gameId
                                          }),
                                          onClick: function (n) {
                                            return d(t, e.type, n)
                                          },
                                          url: (0, E.IH)(t)
                                        },
                                        t.gameName
                                      )
                                    })
                                ),
                                e.hasMore &&
                                  a.createElement(
                                    'div',
                                    {
                                      className: 'm-more',
                                      onClick: function () {
                                        return (
                                          (t = e.type),
                                          (n =
                                            window.location.pathname.substring(
                                              1
                                            )),
                                          (0, b.ut)({
                                            page: n,
                                            value: 'moreGames',
                                            ext: {
                                              moduleName: m[t],
                                              popupName: '全部游戏'
                                            }
                                          }),
                                          void (0, w.q2)({
                                            url:
                                              'webGames' === t
                                                ? '/lobby'
                                                : '/user',
                                            newPage: 'game' === n
                                          })
                                        )
                                        var t, n
                                      }
                                    },
                                    '更多游戏 ',
                                    a.createElement('span', {
                                      className: 'm-arrow'
                                    })
                                  )
                              )
                            : a.createElement(
                                'div',
                                {
                                  className: 'resource-box'
                                },
                                e.list &&
                                  e.list.length &&
                                  e.list.map(function (t) {
                                    return a.createElement(
                                      N.default,
                                      {
                                        cls: 'r-item',
                                        key: t.resourceImg,
                                        style: {
                                          backgroundImage: 'url('.concat(
                                            t.resourceImg,
                                            ')'
                                          )
                                        },
                                        onClick: function (n) {
                                          return d(t, e.type, n)
                                        },
                                        'data-log': JSON.stringify({
                                          ext: {
                                            reype: t.resourceCat,
                                            reName: t.ResourceTitle,
                                            reId: t.resourceId
                                          }
                                        }),
                                        url: (0, E.IH)(
                                          C(
                                            C({}, t),
                                            {},
                                            {
                                              url: t.resourceUrl
                                            }
                                          )
                                        )
                                      },
                                      t.gameName
                                    )
                                  })
                              )
                        )
                      })
                  )
                : null
            )
          )
        })
      },
      94627: function (e, t, n) {
        'use strict'
        n(7954),
          n(33678),
          n(78054),
          n(18989),
          n(36929),
          n(13899),
          n(8500),
          n(90329),
          n(82254),
          n(76910),
          n(82742),
          n(73258),
          n(44713)
        var a,
          r,
          o = n(68270),
          i = n(55989),
          c = n(96262),
          l = n(7142),
          s = n(92661),
          u = n(61489),
          m = n(64647)
        function d(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return f(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return f(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function f(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        function g(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        var p =
            (g((a = {}), l.Qp.SUCEESS, '恭喜您领取成功'),
            g(a, l.Qp.RECEIVED, '您已领取过该礼包'),
            g(a, l.Qp.NO_MORE, '礼包已被抢光'),
            a),
          v =
            (g((r = {}), l.Qp.SUCEESS, '进入游戏'),
            g(r, l.Qp.RECEIVED, '进入游戏'),
            g(r, l.Qp.NO_MORE, '更多礼包 >'),
            r),
          y = function (e) {
            var t = e.url,
              n = e.receiveStatus,
              a = e.children,
              r = e.customNeedToGame,
              i = e.onClick
            return n !== l.Qp.NO_MORE && r
              ? o.createElement(
                  s.default,
                  {
                    url: t,
                    onClick: i
                  },
                  a
                )
              : o.createElement(
                  'div',
                  {
                    onClick: i
                  },
                  a
                )
          }
        t.Z = function (e) {
          var t = e.visible,
            n = void 0 === t || t,
            a = e.onCloseClick,
            r = void 0 === a ? function () {} : a,
            s = e.giftDetail,
            f = e.gameId,
            g = void 0 === f ? 0 : f,
            A = e.selectedGift,
            h = e.gameName,
            E = e.serverId,
            b = void 0 === E ? '' : E,
            w = e.customNeedToGame,
            N = void 0 === w || w,
            I = e.onButtonClick,
            S = void 0 === I ? function () {} : I,
            O = e.onCopy,
            k = void 0 === O ? function () {} : O,
            C = d((0, o.useState)(!1), 2),
            x = C[0],
            T = C[1]
          return (
            (0, o.useEffect)(
              function () {
                n &&
                  (0, m.yD)({
                    value: 'giftPopup',
                    ext: {
                      giftId: s.giftId,
                      gameId: g,
                      serverId: b,
                      receiveStatus: s.receiveStatus
                    }
                  })
              },
              [n]
            ),
            o.createElement(
              i.Z,
              {
                maskClosable: !0,
                visible: n,
                onClose: r
              },
              o.createElement(
                'div',
                {
                  className: 'gift__wrapper'
                },
                o.createElement('div', {
                  className: 'conner__close',
                  onClick: r
                }),
                o.createElement(
                  'div',
                  {
                    className: 'gift__popup'
                  },
                  o.createElement(
                    'div',
                    {
                      className: 'gift__title'
                    },
                    p[s.receiveStatus]
                  ),
                  s.receiveStatus !== l.Qp.NO_MORE
                    ? o.createElement(
                        'div',
                        {
                          className: 'gift__code'
                        },
                        o.createElement(
                          'div',
                          {
                            className: 'gift-code__label'
                          },
                          '礼包码'
                        ),
                        o.createElement(
                          'div',
                          {
                            className: 'gift-code__content'
                          },
                          o.createElement(
                            'div',
                            {
                              className: 'gift-code__code'
                            },
                            s.giftCode
                          ),
                          o.createElement(
                            'div',
                            {
                              className: 'gift-code__btn',
                              onClick: function () {
                                T(!0),
                                  setTimeout(function () {
                                    T(!1)
                                  }, 3e3),
                                  k()
                              }
                            },
                            o.createElement(
                              c.CopyToClipboard,
                              {
                                text: s.giftCode
                              },
                              o.createElement(
                                'span',
                                {
                                  className: 'copy',
                                  onClick: function () {
                                    ;(0, m.ut)({
                                      value: 'copyGfit',
                                      pos: A.index,
                                      ext: {
                                        giftId: A.giftId,
                                        gameId: A.gameId,
                                        giftName: A.giftName,
                                        moduleName: 'giftPopup',
                                        gameName: h
                                      }
                                    })
                                  }
                                },
                                x ? '已复制' : '复制'
                              )
                            )
                          )
                        ),
                        o.createElement(
                          'div',
                          {
                            className: 'gift__detail'
                          },
                          (0, u.gK)(s.giftRule, 30, '...')
                        )
                      )
                    : o.createElement(
                        'div',
                        {
                          className: 'gift__nomore'
                        },
                        '敬请期待后期更多福利~'
                      ),
                  o.createElement(
                    y,
                    {
                      url: (0, u.IH)({
                        gameId: s.gameId || g,
                        serverId: b
                      }),
                      receiveStatus: s.receiveStatus,
                      onClick: function () {
                        return S({
                          receiveStatus: s.receiveStatus
                        })
                      },
                      customNeedToGame: N
                    },
                    o.createElement(
                      'div',
                      {
                        className: 'gift__btn'
                      },
                      v[s.receiveStatus]
                    )
                  )
                )
              )
            )
          )
        }
      },
      56487: function (e, t, n) {
        'use strict'
        n.r(t)
        n(75577),
          n(82254),
          n(6816),
          n(82742),
          n(73258),
          n(7954),
          n(33678),
          n(78054),
          n(18989),
          n(36929),
          n(13899),
          n(8500),
          n(90329),
          n(76910),
          n(20108),
          n(50289),
          n(42443),
          n(27329),
          n(52918),
          n(33290),
          n(15953),
          n(58026),
          n(11365),
          n(20276),
          n(35162),
          n(32752)
        var a = n(68270),
          r = n(2843),
          o = n(30529),
          i = n(98584),
          c = n(7142),
          l = n(25082),
          s = n(28523),
          u = n(84730),
          m = n(19518),
          d = n(92661),
          f = n(64647)
        function g() {
          return (
            (g =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
            g.apply(this, arguments)
          )
        }
        function p(e, t, n, a, r, o, i) {
          try {
            var c = e[o](i),
              l = c.value
          } catch (e) {
            return void n(e)
          }
          c.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        function v(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function y(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? v(Object(n), !0).forEach(function (t) {
                  A(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function A(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        function h(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return E(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return E(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function E(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        t.default = (0, r.connect)(
          function (e) {
            var t = e.home,
              n = t.hasActiveModal,
              a = t.closeActiveModalStatus,
              r = e.user,
              o = r.isShowVip,
              i = r.isOnlineModalShow,
              c = r.vipInfo
            return {
              closeActiveModalStatus: a,
              hasActiveModal: n,
              isLogin: r.isLogin,
              isShowVip: o,
              vipInfo: c,
              avatar: r.userInfo.avatar,
              isOnlineModalShow: i
            }
          },
          function (e) {
            var t = e.pay.setData,
              n = e.user
            return {
              getVipInfo: n.getVipInfo,
              setPayData: t,
              setActiveMenu: n.setData
            }
          }
        )(function (e) {
          var t = e.closeActiveModalStatus,
            n = e.hasActiveModal,
            r = e.isShowVip,
            v = e.isLogin,
            A = e.avatar,
            E = e.vipInfo,
            b = e.getVipInfo,
            w = e.setPayData,
            N = e.setActiveMenu,
            I = e.isOnlineModalShow,
            S = E || {},
            O = S.isVip,
            k = S.currentLevel,
            C = h((0, a.useState)(!1), 2),
            x = C[0],
            T = C[1],
            P = ((0, o.detect)() || {}).name,
            j = function (e) {
              var t = e || {},
                n = t.nocurPos,
                a = t.router,
                r = void 0 === a ? c.Ol.USER : a
              return (
                N({
                  activeMenuItem: c.Sz.NOBLE
                }),
                'firefox' === P
                  ? ''
                  : ''
                      .concat(window.location.origin, '/')
                      .concat(r, '?menu=noble&nocurPos=')
                      .concat(n)
              )
            },
            M = function (e) {
              var t = e || {},
                n = t.nocurPos,
                a = t.router,
                r = void 0 === a ? c.Ol.USER : a
              'firefox' === P &&
                (0, i.c4)('/'.concat(r, '?menu=noble&nocurPos=').concat(n))
            },
            L = function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              ;(0, f.ut)({
                page: 'homePage',
                value: e,
                ext: y(
                  {
                    tagName: t
                  },
                  n
                )
              })
            },
            D = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              ;(0, f.dV)(
                {
                  type: 'showparts'
                },
                {
                  page: 'homePage',
                  value: e,
                  ext: y({}, t)
                }
              )
            },
            U = function (e) {
              var t = e.text,
                n = e.level,
                r = e.callback,
                o = e.logValue
              return a.createElement(
                'div',
                {
                  className: 'topTips'
                },
                '由',
                a.createElement(
                  d.default,
                  {
                    url: j({
                      nocurPos: 'levelrule'
                    })
                  },
                  a.createElement(
                    'span',
                    {
                      className: 'rules',
                      onClick: function () {
                        r && r(), L(o, 'seeRule'), M()
                      }
                    },
                    '等级规则'
                  )
                ),
                t,
                a.createElement(
                  'span',
                  {
                    className: 'grade'
                  },
                  ''.concat(0 === n ? '普通用户' : '贵族'.concat(n))
                )
              )
            },
            G = (function () {
              var e,
                t =
                  ((e = regeneratorRuntime.mark(function e() {
                    var t, n, r, o
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), (0, l.wm)()
                            case 3:
                              ;(t = e.sent),
                                (n = t.upgrade),
                                (r = u.Z.show({
                                  top: a.createElement('div', {
                                    className:
                                      'vip-badge-for-uplevel level-'.concat(k)
                                  }),
                                  title: '页游中心贵族等级上线啦!',
                                  topTips: U({
                                    text: '判定您当前的等级为',
                                    level: k,
                                    callback: function () {
                                      return o()
                                    },
                                    logValue: 'userNobleFirstModal'
                                  }),
                                  okText: a.createElement(
                                    d.default,
                                    {
                                      url: j(),
                                      style: {
                                        color: '#000'
                                      },
                                      onClick: M
                                    },
                                    '了解更多贵族权益'
                                  ),
                                  children: a.createElement(
                                    s.Z,
                                    g({}, t || {}, {
                                      setData: w,
                                      close: function (e) {
                                        L('userNobleFirstModal', 'conpous'),
                                          e && o(),
                                          M({
                                            router: c.Ol.PAY
                                          })
                                      }
                                    })
                                  ),
                                  onOk: function () {
                                    L('userNobleFirstModal', 'btn')
                                  },
                                  onClose: function () {
                                    L('userNobleFirstModal', 'close')
                                  }
                                })),
                                (o = r.destroy),
                                D('userNobleFirstModal', {
                                  status: n.available ? 'canUse' : 'noCanUse'
                                }),
                                (e.next = 11)
                              break
                            case 9:
                              ;(e.prev = 9), (e.t0 = e.catch(0))
                            case 11:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    )
                  })),
                  function () {
                    var t = this,
                      n = arguments
                    return new Promise(function (a, r) {
                      var o = e.apply(t, n)
                      function i(e) {
                        p(o, a, r, i, c, 'next', e)
                      }
                      function c(e) {
                        p(o, a, r, i, c, 'throw', e)
                      }
                      i(void 0)
                    })
                  })
              return function () {
                return t.apply(this, arguments)
              }
            })(),
            B = function () {
              var e
              localStorage.getItem('nobleModal') ||
                (I &&
                  (localStorage.setItem('nobleModal', !0),
                  O
                    ? G()
                    : ((e = a.createElement(
                        'div',
                        {
                          className: 'normalTips'
                        },
                        '充值',
                        a.createElement('span', null, '1元'),
                        '即可成为',
                        a.createElement('span', null, '贵族'),
                        '，获得以下福利哦～'
                      )),
                      u.Z.show({
                        topTips: e,
                        noble: !1,
                        top: a.createElement(m.default, {
                          src: A,
                          size: 54,
                          grade: k,
                          className: 'modal-avatar'
                        }),
                        showBottomTips: !0,
                        title: '百度页游中心上线贵族等级啦!',
                        okText: a.createElement(
                          d.default,
                          {
                            url: j({
                              router: c.Ol.PAY
                            }),
                            style: {
                              color: '#000'
                            },
                            onClick: function () {
                              M({
                                router: c.Ol.PAY
                              })
                            }
                          },
                          '充值1元成为贵族'
                        ),
                        bottomTips: a.createElement(
                          d.default,
                          {
                            url: j(),
                            style: {
                              color: '#81693D'
                            },
                            onClick: M
                          },
                          '了解更多贵族特权'
                        ),
                        children: a.createElement('img', {
                          className: 'nobleImg',
                          src: 'https://fenwan.cdn.bcebos.com/cms/gamenow/2021-5/1621495985188/d9b8efed3d6a.png'
                        }),
                        onClose: function () {
                          L('userNotNobleFirstModal', 'close')
                        },
                        onOk: function () {
                          L('userNotNobleFirstModal', 'btn')
                        },
                        onJump: function () {
                          L('userNotNobleFirstModal', 'seePrivilege')
                        }
                      }),
                      D('userNotNobleFirstModal'))))
            }
          return (
            (0, a.useEffect)(
              function () {
                v &&
                  r &&
                  b({
                    registCurLevel: !0
                  }).then(function () {
                    T(!0)
                  })
              },
              [v]
            ),
            (0, a.useEffect)(
              function () {
                if (x) {
                  localStorage.getItem('historyLevel') ||
                    localStorage.setItem('historyLevel', k)
                  var e = window.location.pathname
                  ;(/home/.test(e) && (null === n || n)) || B()
                }
              },
              [x, n]
            ),
            (0, a.useEffect)(
              function () {
                t && B()
              },
              [t]
            ),
            ''
          )
        })
      },
      84476: function (e, t, n) {
        'use strict'
        n(75577), n(44713), n(78054), n(35162)
        var a = n(68270),
          r = n(2843),
          o = n(63434),
          i = n(26997),
          c = n(61489),
          l = n(7142),
          s = n(84229),
          u = n(64647),
          m = n(64242)
        function d(e, t, n, a, r, o, i) {
          try {
            var c = e[o](i),
              l = c.value
          } catch (e) {
            return void n(e)
          }
          c.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        t.Z = (0, r.connect)(
          function (e) {
            var t = e.user,
              n = t.nextHandle,
              a = t.closeToastHandle,
              r = t.clickDataLog,
              o = t.gameId,
              i = t.selfAccountBind,
              c = t.userInfo,
              l = e.pay,
              s = l.activeGame,
              u = l.activeServer,
              m = l.selfAccountCertReduceAmount,
              d = l.cpServerId
            return {
              nextHandle: n,
              closeToastHandle: a,
              clickDataLog: r,
              gameId: o,
              loginMode: e.home.loginMode,
              activeGame: s,
              activeServer: u,
              selfAccountCertReduceAmount: m,
              selfAccountBind: i,
              userInfo: c,
              cpServerId: d
            }
          },
          function (e) {
            var t = e.user,
              n = t.getInfoAfterLogin,
              a = t.setNextHandle,
              r = t.setData,
              o = t.getSubUsers
            return {
              getInfoAfterLogin: n,
              setNextHandle: a,
              setData: r,
              getPayBasicInfo: e.pay.getPayBasicInfo,
              getSubUsers: o
            }
          }
        )(function (e) {
          var t = e.getInfoAfterLogin,
            n = e.nextHandle,
            r = e.setNextHandle,
            f = e.setData,
            g = e.gameId,
            p = (e.loginMode, e.activeGame),
            v = e.activeServer,
            y = e.selfAccountCertReduceAmount,
            A = e.selfAccountBind,
            h = e.getPayBasicInfo,
            E = e.getSubUsers,
            b = e.cpServerId,
            w = e.userInfo,
            N = (w = void 0 === w ? {} : w).markInfo,
            I = w.subUserId,
            S = (0, s.nl)(window.location.href),
            O = window.location.pathname.substring(1),
            k = function () {
              f({
                showPayLogin: !1
              }),
                (0, u.ut)({
                  page: O,
                  value: 'closePayLoginModal',
                  ext: {
                    gameId: S.gameId,
                    idfrom: S.idfrom,
                    serverId: S.serverId
                  }
                })
            },
            C = function () {
              t(g).then(function () {
                f({
                  showPayLogin: !1
                })
                var e = '您已是百度页游平台用户，登录成功'
                1 == +A &&
                  +y > 0 &&
                  (e = '您已成功登录百度账号，获取'.concat(y, '元减免')),
                  (0, i.j)({
                    info: e
                  }),
                  E()
                var t = v.serverId,
                  a = p.gameId
                h({
                  serverId: S.serverId || t,
                  cpServerId: S.cpServerId || b,
                  gameId: S.gameId || a,
                  fixedUserId: (0, o.Bz)(N + ',' + I)
                }).then(function () {
                  ;(0, c.bL)({
                    serverId: S.serverId || t,
                    serverHasRole: !0
                  }).then(function () {
                    ;(0, u.dV)(
                      {
                        type: 'show'
                      },
                      {
                        page: O,
                        value: 'refreshed',
                        ext: {
                          gameId: S.gameId,
                          idfrom: S.idfrom,
                          serverId: S.serverId
                        }
                      }
                    )
                  })
                }),
                  n && n(),
                  r(null)
              })
            },
            x = function () {
              window.localStorage.setItem('passLoginType', 'sms'),
                window.passport.use(
                  'login',
                  {
                    tangram: !0,
                    loginVersion: 'v5',
                    defaultCss: !0
                  },
                  function (e) {
                    var t = new (0, e.passport.login)({
                      product: l.jn,
                      sms: 5,
                      uniqueId: !0,
                      hasRegUrl: !1,
                      autosuggest: !0,
                      hasPlaceholder: !0,
                      u: window.location,
                      staticPage: ''.concat(
                        window.location.origin,
                        '/v3Jump.html'
                      )
                    })
                    t.on(
                      'loginSuccess',
                      (function () {
                        var e,
                          t =
                            ((e = regeneratorRuntime.mark(function e(t) {
                              return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      ;(t.returnValue = !1),
                                        (0, u.dV)(
                                          {
                                            type: 'display'
                                          },
                                          {
                                            page: O,
                                            value: 'verifySuccess',
                                            ext: {
                                              gameId: S.gameId,
                                              idfrom: S.idfrom,
                                              serverId: S.serverId
                                            }
                                          }
                                        ),
                                        O === l.Ol.GAME && (0, c.rW)()
                                          ? ((0, s.q2)({
                                              url: 'https://'.concat(
                                                location.hostname,
                                                '/home?param=setBduss'
                                              )
                                            }),
                                            setTimeout(function () {
                                              ;(0, c.RJ)().then(function (e) {
                                                e.ok
                                                  ? C()
                                                  : (0, i.j)({
                                                      info: '您未在新页面完成确认，验证失败，请重试'
                                                    })
                                              })
                                            }, 2e3))
                                          : C(),
                                        m.Z.sendMyError(
                                          'payLoginSuccessToast',
                                          {
                                            msg: '登录成功'
                                          }
                                        )
                                    case 4:
                                    case 'end':
                                      return e.stop()
                                  }
                              }, e)
                            })),
                            function () {
                              var t = this,
                                n = arguments
                              return new Promise(function (a, r) {
                                var o = e.apply(t, n)
                                function i(e) {
                                  d(o, a, r, i, c, 'next', e)
                                }
                                function c(e) {
                                  d(o, a, r, i, c, 'throw', e)
                                }
                                i(void 0)
                              })
                            })
                        return function (e) {
                          return t.apply(this, arguments)
                        }
                      })()
                    ),
                      t.on('loginError', function (e) {
                        var t = e.rsp.errInfo,
                          n = t.no,
                          a = t.msg
                        m.Z.sendMyError('payLoginErrorToast', {
                          no: n,
                          msg: a
                        })
                      }),
                      t.render('popup-login')
                  }
                )
            }
          return (
            (0, a.useEffect)(function () {
              ;(0, u.dV)(
                {
                  type: 'show'
                },
                {
                  page: O,
                  value: 'verifyTelePopup',
                  ext: {
                    gameId: S.gameId,
                    idfrom: S.idfrom,
                    serverId: S.serverId
                  }
                }
              )
              var e = (0, c.FL)({
                checkFlag: 1,
                checkSelector: '#popup-login-wrap .pass-form-item'
              })
              return (
                window.passport && window.passport.use
                  ? x()
                  : (0, s.nE)(l.fm).then(function () {
                      x()
                    }),
                (0, c.z)(),
                function () {
                  ;(0, c.i5)(), e()
                }
              )
            }, []),
            a.createElement(
              'div',
              {
                className: 'pay-login-container'
              },
              a.createElement(
                'div',
                {
                  className: 'popup-login-wrap',
                  id: 'popup-login-wrap'
                },
                a.createElement('div', {
                  className: 'popup-login-bac',
                  onClick: k
                }),
                a.createElement(
                  'div',
                  {
                    className: 'popup-login-box'
                  },
                  a.createElement('div', {
                    id: 'popup-login'
                  }),
                  a.createElement(
                    'div',
                    {
                      className: 'sms-login-reward'
                    },
                    '首次充值需验证手机号',
                    +y > 0 &&
                      a.createElement(
                        a.Fragment,
                        null,
                        '，本单',
                        a.createElement('span', null, '立减', y, '元')
                      )
                  ),
                  a.createElement(
                    'i',
                    {
                      className: 'iconfont close-popup-login',
                      onClick: k
                    },
                    ''
                  )
                )
              )
            )
          )
        })
      },
      25218: function (e, t, n) {
        'use strict'
        n.r(t)
        n(82254),
          n(35680),
          n(41903),
          n(55627),
          n(90329),
          n(7954),
          n(33678),
          n(78054),
          n(18989),
          n(36929),
          n(13899),
          n(8500),
          n(76910),
          n(82742),
          n(73258)
        var a = n(68270),
          r = n(2843),
          o = n(98584),
          i = n(7142),
          c = n(61489),
          l = n(64647)
        function s(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return u(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return u(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function u(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        t.default = (0, r.connect)(
          function (e) {
            var t = e.game,
              n = t.gameName,
              a = t.gameId,
              r = e.user,
              o = r.subUserInfo,
              i = r.userInfo,
              c = r.selectSubUser
            return {
              subUserLimit: r.subUserLimit,
              subUserInfo: o,
              userInfo: i,
              gameName: n,
              gameId: a,
              selectSubUser: c
            }
          },
          function (e) {
            var t = e.user
            return {
              getSubUsers: t.getSubUsers,
              setData: t.setData
            }
          }
        )(function (e) {
          var t = e.getSubUsers,
            n = e.subUserInfo,
            r = e.userInfo,
            u = r.userNickName,
            m = r.isSubUser,
            d = e.subUserLimit,
            f = e.selectSubUser,
            g = e.gameName,
            p = e.gameId,
            v = e.setData,
            y = s((0, a.useState)(!1), 2),
            A = y[0],
            h = y[1],
            E = function (e) {
              var t = e.id,
                n = e.name
              f &&
                f.subUserId &&
                f.subUserId !== t &&
                (0, l.ut)({
                  page: window.location.pathname.substring(1),
                  value: 'gameNumber',
                  ext: {
                    gameId: p,
                    gameName: g,
                    clickPos: '添加小号入口弹窗',
                    numberType: 'mainUser' === t ? '主号' : '小号'
                  }
                }),
                'mainUser' !== t &&
                  (0, l.ut)({
                    page: 'gamePage',
                    value: 'Number',
                    ext: {
                      gameId: p,
                      gameName: g,
                      moduleName: 'addNumber',
                      pos: 2
                    }
                  }),
                v({
                  selectSubUser: {
                    subUserId: t,
                    subUserName: n
                  }
                }),
                h(!1),
                (0, c.nR)(!0, 'switch')
            },
            b = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ''
              return (
                (0, l.ut)({
                  page: window.location.pathname.substring(1),
                  value: 'addNumber',
                  ext: {
                    gameId: p,
                    gameName: g,
                    clickPos: 'navbar' === e ? '导航条' : '添加小号入口弹窗'
                  }
                }),
                h(!1),
                (0, c.et)(!0),
                !0
              )
            },
            w = function (e) {
              var t = document.querySelector('.sub-user-nav'),
                n = e.target
              t && t.contains && (t.contains(n) || h(!1))
            }
          return (
            (0, a.useEffect)(function () {
              t()
              var e = document.querySelector('body')
              return (
                e && e.addEventListener('click', w),
                function () {
                  e && e.addEventListener('click', w)
                }
              )
            }, []),
            a.createElement(
              'div',
              {
                className: 'sub-user-nav '.concat(
                  window.location.pathname.substring(1)
                )
              },
              n
                ? a.createElement(
                    a.Fragment,
                    null,
                    n.length
                      ? a.createElement(
                          'div',
                          {
                            className: 'sub-user-main'
                          },
                          a.createElement(
                            'div',
                            {
                              className: 'flag-box',
                              onClick: function () {
                                A ||
                                  (0, l.dV)(
                                    {
                                      type: 'display'
                                    },
                                    {
                                      page: window.location.pathname.substring(
                                        1
                                      ),
                                      value: 'popWindow',
                                      ext: {
                                        gameId: p,
                                        gameName: g,
                                        popupName: '添加小号入口'
                                      }
                                    }
                                  ),
                                  h(function (e) {
                                    return !e
                                  })
                              }
                            },
                            a.createElement(
                              'div',
                              {
                                className: 'flag '.concat(m ? 'sub' : 'main')
                              },
                              m ? '小号' : '主号'
                            ),
                            a.createElement('div', {
                              className: 'arrow '.concat(A ? 'down' : 'up')
                            })
                          ),
                          A
                            ? a.createElement(
                                'div',
                                {
                                  className: 'drop-down-wrap'
                                },
                                a.createElement(
                                  'div',
                                  {
                                    className: 'user-list'
                                  },
                                  a.createElement(
                                    'div',
                                    {
                                      className: 'user-item main-user',
                                      onClick: function () {
                                        return E({
                                          id: 'mainUser',
                                          name: u
                                        })
                                      }
                                    },
                                    a.createElement(
                                      'div',
                                      {
                                        className: 'sub-nick'
                                      },
                                      u
                                    ),
                                    a.createElement(
                                      'div',
                                      {
                                        className: 'flag-box'
                                      },
                                      a.createElement(
                                        'div',
                                        {
                                          className: 'flag main'
                                        },
                                        '主号'
                                      )
                                    )
                                  ),
                                  n.slice(0, 4).map(function (e, t) {
                                    return a.createElement(
                                      'div',
                                      {
                                        key: t,
                                        className: 'user-item',
                                        onClick: function () {
                                          return E({
                                            id: e.subUserId,
                                            name: e.subUserName
                                          })
                                        }
                                      },
                                      a.createElement(
                                        'div',
                                        {
                                          className: 'sub-nick'
                                        },
                                        e.subUserName
                                      ),
                                      a.createElement(
                                        'div',
                                        {
                                          className: 'flag-box'
                                        },
                                        a.createElement(
                                          'div',
                                          {
                                            className: 'flag sub'
                                          },
                                          '小号'
                                        )
                                      )
                                    )
                                  })
                                ),
                                a.createElement(
                                  'div',
                                  {
                                    className: 'add-manage'
                                  },
                                  n.length < d
                                    ? a.createElement(
                                        'div',
                                        {
                                          className: 'manage-item',
                                          onClick: function () {
                                            return b('popwindow')
                                          }
                                        },
                                        '添加小号'
                                      )
                                    : a.createElement(
                                        'div',
                                        {
                                          className: 'manage-item',
                                          onClick: function () {
                                            h(!1),
                                              v({
                                                activeMenuItem: i.Sz.SUBUSER,
                                                centerMainTitle: '我的小号'
                                              }),
                                              (0, o.c4)(
                                                '/'.concat(
                                                  i.Ol.USER,
                                                  '?sourcePos=all'
                                                )
                                              )
                                          }
                                        },
                                        '管理小号'
                                      ),
                                  n.length > 5 &&
                                    a.createElement(
                                      'div',
                                      {
                                        className: 'manage-item',
                                        onClick: function () {
                                          ;(0, l.ut)({
                                            page: window.location.pathname.substring(
                                              1
                                            ),
                                            value: 'moreNumber',
                                            ext: {
                                              gameId: p,
                                              gameName: g,
                                              popupName: '添加小号入口'
                                            }
                                          }),
                                            (0, c.nR)(!0, 'checklist'),
                                            h(!1)
                                        }
                                      },
                                      '更多'
                                    )
                                )
                              )
                            : null
                        )
                      : a.createElement(
                          'div',
                          {
                            className: 'add-sub-user',
                            onClick: function () {
                              return b('navbar')
                            }
                          },
                          '添加小号'
                        )
                  )
                : null
            )
          )
        })
      },
      68340: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, {
            default: function () {
              return yt
            }
          })
        n(75577),
          n(74289),
          n(82742),
          n(6142),
          n(81542),
          n(73258),
          n(84260),
          n(6816),
          n(61089),
          n(82),
          n(35680),
          n(41903),
          n(55627),
          n(29410),
          n(44713),
          n(50289),
          n(78054),
          n(42443),
          n(27329),
          n(52918),
          n(22899),
          n(7954),
          n(33678),
          n(18989),
          n(36929),
          n(13899),
          n(8500),
          n(90329),
          n(82254),
          n(76910),
          n(35162),
          n(20108),
          n(33290),
          n(15953),
          n(58026),
          n(11365),
          n(20276)
        var a = n(68270),
          r = n(2843),
          o = n(234),
          i = n(98584),
          c = n(30529),
          l = n(65614),
          s = n(51367),
          u = n.n(s),
          m = n(7142),
          d = (n(69494), n(84229)),
          f = n(25082),
          g = n(51565),
          p = n(81109),
          v = n(64647),
          y = n(61489),
          A = n(91702),
          h = n(99705),
          E = n(90439),
          b = n.n(E),
          w = n(90245),
          N = n.n(w),
          I = n(8872),
          S = n.n(I),
          O = function (e) {
            var t = e.showCloseButton,
              n = e.qrcodeUrl,
              r = e.onClose,
              o = e.className
            return a.createElement(
              'div',
              {
                className: u()('h5-game-qrcode-container', o)
              },
              t &&
                a.createElement(
                  'i',
                  {
                    className: u()(
                      'iconfont',
                      'h5-game-qrcode-container-close'
                    ),
                    onClick: r
                  },
                  ''
                ),
              a.createElement(
                'div',
                {
                  className: 'qrcode'
                },
                a.createElement(S(), {
                  value: n,
                  size: 108
                })
              ),
              a.createElement('span', null, '手机扫码 随时畅玩')
            )
          }
        O.defaultProps = {
          showCloseButton: !0
        }
        var k = O,
          C = ['value'],
          x = ['value']
        function T(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function P(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? T(Object(n), !0).forEach(function (t) {
                  j(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function j(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        function M(e, t) {
          if (null == e) return {}
          var n,
            a,
            r = (function (e, t) {
              if (null == e) return {}
              var n,
                a,
                r = {},
                o = Object.keys(e)
              for (a = 0; a < o.length; a++)
                (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
              return r
            })(e, t)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            for (a = 0; a < o.length; a++)
              (n = o[a]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (r[n] = e[n]))
          }
          return r
        }
        function L(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return D(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return D(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function D(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var U = function (e) {
            var t = e.qrcodeUrl,
              n = e.gameId,
              r = e.gameName,
              o = L((0, a.useState)({}), 2),
              i = o[0],
              c = o[1],
              l = (0, a.useRef)(N().get('hasShowQrcode')),
              s = L((0, a.useState)(null), 2),
              d = s[0],
              f = s[1],
              g = L((0, a.useState)(!1), 2),
              p = g[0],
              y = g[1],
              A = L((0, a.useState)(!1), 2),
              h = A[0],
              E = A[1],
              w = (0, a.useRef)(0),
              I = L(
                (0, a.useState)({
                  x: 0,
                  y: 0
                }),
                2
              ),
              S = I[0],
              O = I[1],
              T = (0, a.useRef)(),
              j = L((0, a.useState)(!0), 2),
              D = j[0],
              U = j[1]
            ;(0, a.useEffect)(function () {
              var e = new Date(),
                t = e.getFullYear(),
                n = e.getMonth() + 1,
                a = e.getDate() + 1,
                r = ''.concat(t, '-').concat(n, '-').concat(a)
              N().set('hasShowQrcode', 'yes', {
                expires: new Date(r)
              })
            }, [])
            var G = function (e) {
              var t = e.value,
                a = M(e, C)
              ;(0, v.dV)(
                {
                  type: 'showParts'
                },
                {
                  value: t,
                  page: m.Ol.GAME,
                  ext: P(
                    {
                      gameId: n,
                      gameName: r
                    },
                    a
                  ),
                  pos: ''
                }
              )
            }
            ;(0, a.useEffect)(function () {
              var e = l.current ? 'floatingball' : 'qrcodeModule',
                t = l.current ? '' : 0
              G({
                value: e,
                status: t
              })
            }, [])
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(k, {
                className: u()('fixed-qrcode', {
                  'fixed-qrcode-initHide': l.current,
                  'fixed-qrcode-animation': d
                }),
                onClose: function () {
                  var e, t, a
                  ;(t = (e = {
                    value: 'closeQrcodeBtn'
                  }).value),
                    (a = M(e, x)),
                    (0, v.ut)({
                      page: m.Ol.GAME,
                      value: t,
                      ext: P(
                        {
                          gameId: n,
                          gameName: r
                        },
                        a
                      )
                    }),
                    G({
                      value: 'floatingball'
                    }),
                    f(!0)
                },
                qrcodeUrl: t
              }),
              a.createElement(
                b(),
                {
                  handle: 'strong',
                  position: S,
                  onDrag: function (e, t) {
                    E(!1), U(!1), (w.current = w.current + t.deltaY)
                  },
                  onStop: function (e) {
                    var t = T.current.getBoundingClientRect().left,
                      n =
                        document.documentElement.clientWidth ||
                        document.body.clientWidth
                    O({
                      x: t < n / 2 ? -n : 0,
                      y: w.current
                    }),
                      setTimeout(function () {
                        U(!0)
                      }),
                      y(!1)
                  },
                  onStart: function () {
                    return y(!0)
                  }
                },
                a.createElement(
                  'div',
                  {
                    className: u()('floating-ball-container')
                  },
                  a.createElement(
                    'div',
                    {
                      className: (function () {
                        var e = {
                          'floating-ball': !0
                        }
                        switch (d) {
                          case !0:
                            e['floating-ball-show'] = !0
                            break
                          case !1:
                            e['floating-ball-hide'] = !0
                        }
                        return (
                          l.current || (e['floating-ball-hide'] = !0), u()(e)
                        )
                      })(),
                      onMouseEnter: function () {
                        var e = S.x
                        c(
                          e < 0
                            ? {
                                transitionDuration: '300ms',
                                left: '88px'
                              }
                            : {
                                transitionDuration: '300ms',
                                right: '88px'
                              }
                        )
                      },
                      onMouseLeave: function (e) {
                        e.stopPropagation(), E(!1)
                        var t = S.x
                        c(
                          t < 0
                            ? {
                                transitionDuration: '300ms',
                                left: 0
                              }
                            : {
                                transitionDuration: '300ms',
                                right: 0
                              }
                        )
                      },
                      onClick: function () {
                        D &&
                          (E(!0),
                          G({
                            value: 'qrcodeModule',
                            status: 1
                          }),
                          y(!1))
                      },
                      style: i,
                      ref: T
                    },
                    a.createElement(
                      'strong',
                      null,
                      a.createElement('div', {
                        className: 'floating-ball-img'
                      })
                    ),
                    a.createElement(k, {
                      qrcodeUrl: t,
                      showCloseButton: !1,
                      className: u()('floating-ball-qrcode-container', {
                        'floating-ball-qrcode-container-show': h
                      })
                    })
                  )
                )
              ),
              a.createElement('div', {
                className: u()('floatingBallMask', {
                  'floatingBallMask-show': p
                })
              })
            )
          },
          G = n(47041),
          B = n(86212),
          R = n(9505),
          Q = n(62925),
          F = n(86406),
          q = n(98210),
          V = n(92661)
        function Y(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function J(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Y(Object(n), !0).forEach(function (t) {
                  z(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Y(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function z(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        var K = function (e) {
            var t = e.gameLists,
              n = void 0 === t ? [] : t,
              r = e.setUrgestayShow,
              o = function (e) {
                var t = (e && e.currentTarget) || {},
                  n = JSON.parse(t.dataset.log),
                  a = window.location.pathname.substring(1)
                n &&
                  ((0, y.px)({
                    gameId: n.gameId,
                    newPage: !0
                  }),
                  (0, v.ut)({
                    page: a,
                    value: 'game',
                    ext: J(
                      {
                        clickType: 'picture',
                        clickBtnType: 'play',
                        popupName: '更多热门游戏推荐'
                      },
                      n
                    )
                  }))
              }
            return a.createElement(
              'div',
              {
                className: 'popups-container'
              },
              a.createElement('div', {
                className: 'popups-masking',
                onClick: r
              }),
              a.createElement(
                'div',
                {
                  className: 'popups-content-wrap'
                },
                a.createElement(
                  'div',
                  {
                    className: 'popups-title'
                  },
                  '更多热门游戏推荐',
                  a.createElement('span', {
                    className: 'close-icon',
                    onClick: r
                  })
                ),
                a.createElement(
                  'div',
                  {
                    className: 'popups-box'
                  },
                  n.map(function (e, t) {
                    var n = e.gameIcon,
                      r = e.gameName,
                      i = e.gameId
                    return a.createElement(
                      'div',
                      {
                        key: ''.concat(t).concat(i),
                        className: 'popups-game-card',
                        onClick: o,
                        'data-log': JSON.stringify({
                          gameId: i,
                          gameName: r
                        })
                      },
                      a.createElement('img', {
                        src: n,
                        alt: ''
                      }),
                      a.createElement('p', null, r)
                    )
                  })
                )
              )
            )
          },
          H = (n(50036), n(64242))
        function Z(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return _(e)
            })(e) ||
            (function (e) {
              if (
                ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e['@@iterator']
              )
                return Array.from(e)
            })(e) ||
            X(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function W(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            X(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function X(e, t) {
          if (e) {
            if ('string' == typeof e) return _(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _(e, t)
                : void 0
            )
          }
        }
        function _(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var $ = (0, r.connect)(
          function (e) {
            return {
              selfPassSwitch: e.cover.selfPassSwitch
            }
          },
          function (e) {
            return {
              switchSelfAccountLogin: e.user.switchSelfAccountLogin
            }
          }
        )(function (e) {
          var t = e.loginTypeBtnLog,
            n = e.onLoginSuccess,
            r = e.submitBtnBac,
            o = void 0 === r ? '' : r,
            i = e.theme,
            c = void 0 === i ? 'dark' : i,
            l = e.titleIndicate,
            s = void 0 === l ? '' : l,
            u = e.showCloseIcon,
            f = void 0 !== u && u,
            g = e.onCloseIconClick,
            p = e.initSms,
            y = void 0 === p || p,
            A = e.defaultLoginType,
            h = void 0 === A ? '' : A,
            E = e.onLoginError,
            b = e.authsiteCurrentOpen,
            w = e.switchSelfAccountLogin,
            N = e.selfPassSwitch,
            I = W((0, a.useState)(!1), 2),
            S = I[0],
            O = I[1],
            k = function () {
              y && window.localStorage.setItem('passLoginType', 'sms'),
                h && window.localStorage.setItem('curLoginType', h),
                window.passport &&
                  window.passport.use(
                    'login',
                    {
                      tangram: !0,
                      loginVersion: 'v4',
                      defaultCss: !0
                    },
                    function (e) {
                      var a = new (0, e.passport.login)({
                        sms: 5,
                        product: m.jn,
                        uniqueId: !0,
                        loginType: 1,
                        hasRegUrl: !0,
                        autosuggest: !0,
                        hasPlaceholder: !0,
                        authsiteLogin: ['qzone', 'weixin', 'tsina'],
                        u: window.location.href,
                        authsiteCurrentOpen: b,
                        staticPage: ''.concat(
                          window.location.origin,
                          '/v3Jump.html'
                        )
                      })
                      a.on('loginSuccess', function (e) {
                        ;(e.returnValue = !1),
                          n && n(),
                          H.Z.sendMyError('loginSuccessMerge', {
                            msg: '登录成功'
                          })
                      }),
                        a.on('loginError', function (e) {
                          var t = e.rsp.errInfo,
                            n = t.no,
                            a = t.msg
                          return (
                            H.Z.sendMyError('loginErrorMerge', {
                              no: n,
                              msg: a
                            }),
                            E && E(),
                            e
                          )
                        })
                      var r,
                        o,
                        i,
                        c,
                        l,
                        s = setTimeout(function () {
                          var e = document.querySelector(
                              '.pass-phoenix-btn .bd-acc-qzone .phoenix-btn-item'
                            ),
                            n = document.querySelector(
                              '.pass-phoenix-btn .bd-acc-list .bd-acc-weixin .phoenix-btn-item'
                            ),
                            a = document.querySelector(
                              '.pass-phoenix-btn .bd-acc-list .bd-acc-tsina .phoenix-btn-item'
                            )
                          e &&
                            e.addEventListener('click', function () {
                              window.localStorage.setItem(
                                'curLoginType',
                                'qqzone'
                              ),
                                t && t()
                            }),
                            n &&
                              n.addEventListener('click', function () {
                                window.localStorage.setItem(
                                  'curLoginType',
                                  'weixin'
                                ),
                                  t && t()
                              }),
                            a &&
                              a.addEventListener('click', function () {
                                window.localStorage.setItem(
                                  'curLoginType',
                                  'weibo'
                                ),
                                  t && t()
                              }),
                            clearTimeout(s)
                        }, 600)
                      a.on('render', function () {
                        !(function () {
                          if (N) {
                            var e = document.querySelector(
                              '.pass-merge-wrapper #TANGRAM__PSP_4__sms_btn_back'
                            )
                            e && (e.innerText = '百度帐号登录'),
                              (0, v.yD)({
                                value: 'baiduAccLogin',
                                ext: {
                                  loginStyle: 'passmerge'
                                }
                              })
                          }
                        })()
                      }),
                        document.getElementById('pass-merge-module') &&
                          (a.render('pass-merge-module'),
                          O(!0),
                          (function () {
                            var e = document.querySelector(
                                '.pass-merge-wrapper .pass-sms-btn'
                              ),
                              t = document.createElement('span'),
                              n = document.querySelector(
                                '.pass-merge-wrapper .tang-pass-footerBarQrcode'
                              ),
                              a = document.querySelector(
                                '.pass-merge-wrapper .tang-pass-footerBarULogin'
                              ),
                              r = document.querySelector(
                                '.pass-merge-wrapper .tang-pass-footerBar'
                              )
                            t.classList.add('mock-to-smg-link'),
                              (t.innerHTML = '短信快捷登录'),
                              (t.onclick = function () {
                                ;(t.style.display = 'none'),
                                  (n.style.display = 'inline-block'),
                                  (a.style.display = 'none'),
                                  e.click()
                              }),
                              'sms' !==
                                window.localStorage.getItem('passLoginType') &&
                                t.classList.add('visible')
                            var o = {
                              sms: e,
                              qrcode: n,
                              password: a
                            }
                            o[h] && o[h].click(), r.appendChild(t)
                          })(),
                          (r = document.querySelector(
                            '.pass-merge-wrapper .tang-pass-footerBarQrcode'
                          )),
                          (o = document.querySelector(
                            '.pass-merge-wrapper .tang-pass-footerBarULogin'
                          )),
                          (i = document.querySelector(
                            '.pass-merge-wrapper .mock-to-smg-link'
                          )),
                          (c = document.querySelector(
                            '.pass-merge-wrapper .pass-sms-btn'
                          )),
                          (l = document.querySelector(
                            '.pass-merge-wrapper .pass-sms-link-back'
                          )),
                          c &&
                            c.addEventListener('click', function () {
                              window.localStorage.setItem(
                                'curLoginType',
                                'code'
                              ),
                                t && t()
                            }),
                          l &&
                            l.addEventListener('click', function () {
                              window.localStorage.setItem(
                                'curLoginType',
                                'password'
                              ),
                                t && t()
                            }),
                          r &&
                            r.addEventListener('click', function () {
                              window.localStorage.setItem(
                                'curLoginType',
                                'qrcode'
                              ),
                                (i.style.display = 'block'),
                                t && t()
                            }),
                          o &&
                            o.addEventListener('click', function () {
                              window.localStorage.setItem(
                                'curLoginType',
                                'password'
                              ),
                                (i.style.display = 'none'),
                                t && t()
                            }),
                          N &&
                            (function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 'body',
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : '',
                                n =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : null,
                                a = document.querySelector(e),
                                r = document.createElement('span')
                              r.setAttribute('class', 'self-account-login'),
                                (r.innerHTML = t),
                                (r.onclick = n),
                                a.appendChild(r)
                            })('.pass-merge-main', '游戏帐号登录', function () {
                              return (
                                w({
                                  showSelfAccountLogin: !0
                                }),
                                void (0, v.ut)({
                                  value: 'baiduAccLoginBtn',
                                  ext: {
                                    loginStyle: 'passmerge'
                                  }
                                })
                              )
                            }))
                    }
                  )
            }
          return (
            (0, a.useEffect)(
              function () {
                S &&
                  o &&
                  o &&
                  Z(
                    document.querySelectorAll(
                      '.pass-merge-out .pass-button-submit'
                    )
                  ).forEach(function (e) {
                    return (
                      (e.style.background = 'url('.concat(o, ') no-repeat')),
                      (e.style.backgroundSize = '100% 100%'),
                      e
                    )
                  })
              },
              [o, S]
            ),
            (0, a.useEffect)(function () {
              return (
                window.passport && window.passport.use
                  ? k()
                  : (0, d.nE)(m.fm).then(function () {
                      k()
                    }),
                function () {
                  window.localStorage.removeItem('passLoginType')
                }
              )
            }, []),
            a.createElement(
              'div',
              {
                className: 'pass-merge-out '
                  .concat(c, ' ')
                  .concat(o ? 'special-submit' : '')
              },
              s
                ? a.createElement(
                    'div',
                    {
                      className: 'indicate-word'
                    },
                    s
                  )
                : null,
              a.createElement(
                'div',
                {
                  className: 'pass-merge-main'
                },
                a.createElement(
                  'div',
                  {
                    className: 'pass-merge-wrapper '
                      .concat(c, ' ')
                      .concat(o ? 'special-submit' : ''),
                    id: 'pass-merge-wrapper'
                  },
                  a.createElement('div', {
                    id: 'pass-merge-module',
                    className: 'pass-merge-module'
                  })
                ),
                f
                  ? a.createElement('div', {
                      className: 'close-toast-icon',
                      onClick: function () {
                        return g && g()
                      }
                    })
                  : ''
              )
            )
          )
        })
        function ee(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return te(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return te(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function te(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var ne = function () {
            var e = ee((0, a.useState)(!1), 2),
              t = e[0],
              n = e[1],
              r = +new Date()
            if (
              ((0, a.useEffect)(function () {
                return function () {
                  window.flashCheckT && clearTimeout(window.flashCheckT),
                    window.flashCheckT && delete window.flashCheckT
                }
              }, []),
              (0, d.BL)().flash || 'desktop' !== (0, d.Ze)().platform)
            )
              return null
            var o = function e() {
              var t = (0, d.BL)().flash
              window.flashCheckT && clearTimeout(window.flashCheckT),
                +new Date() - r > 3e3 && n(!0),
                t
                  ? window.location.reload()
                  : (window.flashCheckT = setTimeout(function () {
                      e()
                    }, 1e3))
            }
            return a.createElement(
              'div',
              {
                className: 'flash-guide-modal-wrapper'
              },
              a.createElement(
                'div',
                {
                  className: 'modal-main'
                },
                a.createElement(
                  'div',
                  {
                    className: 'triggle-flash-wrap'
                  },
                  a.createElement(
                    'a',
                    {
                      href: 'http://www.adobe.com/go/getflashplayer',
                      rel: 'noopener noreferrer nofollow',
                      title: '升级Flash插件',
                      className: 'add-flash-btn',
                      target: '_blank',
                      onClick: o
                    },
                    '点击运行flash，开始畅玩'
                  ),
                  t &&
                    a.createElement(
                      'div',
                      {
                        className: 'no-response-tip',
                        onClick: o
                      },
                      '点击后没反应？',
                      a.createElement(
                        'a',
                        {
                          href: 'https://bj.bcebos.com/fenwan/cms/gamenow/2021-1/1610975268272/852e241a0f9a.html',
                          rel: 'noopener noreferrer',
                          target: '_blank'
                        },
                        a.createElement('span', null, '查看设置指南')
                      )
                    )
                )
              )
            )
          },
          ae = n(17875),
          re =
            (n(97828),
            function (e) {
              var t = e.list,
                n = e.gameId,
                r = e.setlistShow,
                o = e.gameName,
                i = e.channel,
                c = e.titleType
              return a.createElement(
                'div',
                {
                  className: 'servers-item-container'
                },
                t.length &&
                  t.map(function (e) {
                    return a.createElement(
                      'span',
                      {
                        key: ''.concat(e.serverId).concat(e.serverName),
                        onClick: function (t) {
                          return (function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {}
                            r && r(!1),
                              (0, v.ut)({
                                page: 'gamePage',
                                value:
                                  '最近玩过' === c
                                    ? 'PlayedServerarea'
                                    : 'recommendServerarea',
                                ext: {
                                  gameId: n || '',
                                  gameName: o,
                                  moduleName: 'moreServerarea',
                                  serverName: e.serverName || '',
                                  channel: i
                                }
                              }),
                              (0, y.px)({
                                gameId: n,
                                serverId: e.serverId
                              })
                          })(e, t)
                        },
                        className: 'servers-item'
                      },
                      e.serverName
                    )
                  })
              )
            }),
          oe = n(89050)
        function ie(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return ce(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return ce(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function ce(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var le = (0, r.connect)(
            function (e) {
              var t = e.gameDetail
              return {
                finalServer: t.finalServer,
                themeType: t.themeType
              }
            },
            function (e) {
              return {
                getGameServerInfo: e.gameDetail.getGameServerInfo
              }
            }
          )(function (e) {
            var t,
              n = e.expectedName,
              r = void 0 === n ? '' : n,
              o = e.finalServer,
              i = e.themeType,
              c = e.getGameServerInfo,
              l = e.showMoreServer,
              s = e.gameName,
              u = e.channel,
              m = ie((0, a.useState)(!1), 2),
              f = m[0],
              g = m[1],
              p = ie((0, a.useState)(!1), 2),
              v = p[0],
              y = p[1],
              A = ['played', 'recommend'],
              h = {
                played: '最近玩过',
                recommend: '推荐区服'
              },
              E = (0, d.nl)(window.location.href),
              b = E.gameId,
              w = E.serverId,
              N = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  n = !1
                return (
                  'played' === t &&
                    (e.forEach(function (e) {
                      e.serverId === w && (n = !0)
                    }),
                    !n &&
                      r &&
                      e.unshift({
                        serverName: r,
                        serverId: w
                      })),
                  e.splice(6),
                  e
                )
              },
              I = function () {
                g(!1), y(!0)
              }
            return (
              (0, a.useEffect)(function () {
                c({
                  gameId: b,
                  withColorSchema: 'y'
                })
              }, []),
              (0, a.useEffect)(
                function () {
                  g(l)
                },
                [l]
              ),
              a.createElement(
                'div',
                {
                  className: 'more-server-btn-'.concat(i),
                  onMouseLeave: function () {
                    return g(!1)
                  }
                },
                f &&
                  a.createElement(
                    'div',
                    {
                      className: 'more-servers-list-content'
                    },
                    ((t = o),
                    a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        'div',
                        {
                          className: 'lists-wrap'
                        },
                        A.map(function (e) {
                          return a.createElement(
                            'div',
                            {
                              className: 'lists-type-content',
                              key: e
                            },
                            a.createElement(
                              'div',
                              {
                                className: 'lists-type'
                              },
                              h[e]
                            ),
                            a.createElement(re, {
                              list: N(t[e], e) || [],
                              gameId: b,
                              gameName: s,
                              channel: u,
                              setlistShow: g,
                              titleType: h[e]
                            })
                          )
                        })
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'all-servers'
                        },
                        a.createElement(
                          'span',
                          {
                            onClick: I,
                            className: 'all-servers-title'
                          },
                          a.createElement('span', null, '全部区服'),
                          a.createElement('span', {
                            className: 'span_right span_right_1'
                          }),
                          a.createElement('span', {
                            className: 'span_right span_right_2'
                          })
                        )
                      )
                    ))
                  ),
                v &&
                  a.createElement(oe.default, {
                    onClose: y,
                    controlByState: !0
                  })
              )
            )
          }),
          se = n(56487),
          ue = n(80441)
        n(33491)
        function me(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return de(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return de(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function de(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var fe = (0, r.connect)(
            function (e) {
              return {
                remainTime: e.user.remainTime
              }
            },
            function (e) {
              return {
                setData: e.user.setData
              }
            }
          )(function (e) {
            var t = e.isVisitor,
              n = e.setData,
              r = e.setLoginTitle,
              o = e.togglePass,
              i = e.remainTime,
              c = e.clickBind,
              l = me((0, a.useState)(!1), 2),
              s = l[0],
              u = l[1],
              m = me((0, a.useState)(''), 2),
              f = m[0],
              g = m[1],
              p = function e() {
                if (t) {
                  var a = (0, y.lS)(),
                    i = a.originT,
                    c = a.formatT,
                    l = a.allT
                  n({
                    remainTime: c
                  }),
                    i > 0
                      ? (0, d.BL)().flash &&
                        ((i -= 1),
                        N().set(
                          'visitorRemainTime',
                          ''.concat(i, '/').concat(l)
                        ),
                        (window.checkTimer = setTimeout(function () {
                          e()
                        }, 1e3)))
                      : (clearTimeout(window.checkTimer),
                        o(!0),
                        r('游客试玩结束，登录后继续畅玩'))
                }
              }
            return (
              (0, A.TI)({
                onPageShow: function () {
                  p()
                },
                onPageHide: function () {
                  clearInterval(window.checkTimer)
                },
                reRender: [t]
              }),
              (0, a.useEffect)(function () {
                var e = setTimeout(function () {
                  var n = me(
                      String(N().get('visitorRemainTime') || '0/600').split(
                        '/'
                      ),
                      2
                    ),
                    a = n[0],
                    r = void 0 === a ? 0 : a,
                    o = n[1],
                    i = void 0 === o ? 600 : o
                  if (t && parseInt(r, 10) > 5) {
                    g(
                      '当前为游客模式，您可试玩'.concat(
                        Math.floor(i / 60),
                        '分钟'
                      )
                    ),
                      u(!0)
                    var c = setTimeout(function () {
                        u(!1), clearTimeout(c)
                      }, 5e3),
                      l = setInterval(function () {
                        var e = me(
                          String(N().get('visitorRemainTime') || '0/600').split(
                            '/'
                          ),
                          1
                        )[0]
                        if ((void 0 === e ? 0 : e) <= 10) {
                          g('体验即将结束，请尽快登陆!'),
                            u(!0),
                            clearTimeout(c),
                            clearInterval(l)
                          var t = setTimeout(function () {
                            u(!1), clearTimeout(t)
                          }, 5e3)
                        }
                      }, 500)
                  }
                  clearTimeout(e)
                }, 1500)
              }, []),
              (0, a.useEffect)(
                function () {
                  p()
                },
                [t]
              ),
              a.createElement(
                'div',
                {
                  className: 'info color-theme'
                },
                '（剩余时间',
                i,
                '）',
                s
                  ? a.createElement(
                      'div',
                      {
                        className: 'visitor-tips'
                      },
                      f,
                      a.createElement(
                        'span',
                        {
                          className: 'confirm-tip',
                          onClick: function () {
                            return u(!1)
                          }
                        },
                        '  知道了'
                      )
                    )
                  : null,
                a.createElement(
                  'span',
                  {
                    className: 'info click',
                    onClick: c
                  },
                  '绑定账号'
                )
              )
            )
          }),
          ge = n(25218),
          pe = (n(32752), n(63434)),
          ve = n(34788)
        n(35642)
        function ye() {
          return (
            (ye =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
            ye.apply(this, arguments)
          )
        }
        var Ae = function (e) {
            var t = e || {},
              n = t.successConfirm,
              r = t.actInfo,
              o = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'draw'
                ;(0, v.ut)({
                  value: t,
                  page: m.Ol.GAME,
                  ext: {
                    gameId: e.registGame && e.registGame.gameId,
                    gameName: e.registGame && e.registGame.gameName,
                    numberType: e.isSubUser ? '小号' : '主号',
                    popupName: '支付成功'
                  },
                  callback: function () {
                    window.open(
                      '/gameactivity/activitynew?activityId='.concat(
                        r.activityId
                      ),
                      '_blank'
                    )
                  }
                })
              }
            return (
              (0, a.useEffect)(function () {
                return (
                  (0, v.dV)(
                    {
                      type: 'show'
                    },
                    {
                      value: 'popWindow',
                      page: m.Ol.GAME,
                      ext: {
                        gameId: e.registGame && e.registGame.gameId,
                        gameName: e.registGame && e.registGame.gameName,
                        numberType: e.isSubUser ? '小号' : '主号',
                        popupName: '支付成功',
                        isAct: r ? 'true' : 'false'
                      }
                    }
                  ),
                  function () {
                    ;(0, v.ut)({
                      value: 'close',
                      page: m.Ol.GAME,
                      ext: {
                        gameId: e.registGame && e.registGame.gameId,
                        gameName: e.registGame && e.registGame.gameName,
                        numberType: e.isSubUser ? '小号' : '主号',
                        popupName: '支付成功',
                        isAct: r ? 'true' : 'false'
                      }
                    })
                  }
                )
              }, []),
              a.createElement(
                'div',
                {
                  className: 'pay-success-box'
                },
                a.createElement('div', {
                  className: 'close-btn',
                  onClick: function () {
                    n && n()
                  }
                }),
                r
                  ? a.createElement('img', {
                      src: 'https://fenwan.cdn.bcebos.com/cms/gamenow/webgame/2023-1/1673871431767/d07a7c936465.png',
                      className: 'act-icon'
                    })
                  : a.createElement('div', {
                      className: 'icon'
                    }),
                a.createElement(
                  'div',
                  {
                    className: 'desc'
                  },
                  '支付成功',
                  !!r &&
                    (r.lotteryTimes > 0
                      ? '，您当前有'.concat(r.lotteryTimes, '次抽奖机会')
                      : '，最高可抽500元京东卡')
                ),
                a.createElement('div', {
                  className: 'divide-line'
                }),
                a.createElement(
                  'div',
                  {
                    className: 'order-info'
                  },
                  [
                    {
                      chargeWay: '支付方式'
                    },
                    {
                      orderId: '订单号'
                    },
                    {
                      chargeAmount: '充值金额'
                    }
                  ].map(function (t) {
                    var n = Object.keys(t)[0],
                      r = Object.values(t)[0]
                    return a.createElement(
                      'p',
                      {
                        className: 'order-item',
                        key: n
                      },
                      a.createElement(
                        'span',
                        {
                          className: 'order-label'
                        },
                        r
                      ),
                      a.createElement(
                        'span',
                        {
                          className: 'colon'
                        },
                        '：'
                      ),
                      a.createElement(
                        'span',
                        {
                          className: 'order-msg'
                        },
                        e[n]
                      )
                    )
                  })
                ),
                a.createElement(
                  'div',
                  {
                    className: 'btn-area'
                  },
                  a.createElement(
                    'div',
                    {
                      className: 'btn-item '.concat(
                        r ? 'continue' : 'confirm full-width'
                      ),
                      onClick: function () {
                        n && n()
                      }
                    },
                    '返回游戏'
                  ),
                  !!r &&
                    a.createElement(
                      'div',
                      {
                        className: 'btn-item confirm',
                        onClick: function () {
                          return o('draw')
                        }
                      },
                      '立即抽奖'
                    )
                ),
                !!r &&
                  a.createElement(
                    'div',
                    {
                      className: 'act-banner-wrapper',
                      onClick: function () {
                        return o('ads')
                      }
                    },
                    a.createElement('img', {
                      className: 'act-banner',
                      src: r.activityCover
                    })
                  )
              )
            )
          },
          he = function (e) {
            var t = e.registGame,
              n = e.failConfirm
            return (
              (0, a.useEffect)(function () {
                ;(0, v.dV)(
                  {
                    type: 'display'
                  },
                  {
                    value: 'payFail',
                    page: m.Ol.GAME,
                    ext: {
                      gameId: t && t.gameId
                    }
                  }
                )
              }, []),
              a.createElement(
                'div',
                {
                  className: 'pay-failed-box'
                },
                a.createElement('div', {
                  className: 'close-btn',
                  onClick: function () {
                    n && n()
                  }
                }),
                a.createElement('div', {
                  className: 'icon'
                }),
                a.createElement(
                  'div',
                  {
                    className: 'desc'
                  },
                  a.createElement('p', null, '支付失败'),
                  a.createElement('p', null, '请尝试重新扫码支付')
                ),
                a.createElement(
                  'div',
                  {
                    className: 'btn-area'
                  },
                  a.createElement(
                    'div',
                    {
                      className: 'confirm',
                      onClick: function () {
                        n && n()
                      }
                    },
                    '确定'
                  )
                )
              )
            )
          },
          Ee = (0, r.connect)(
            function (e) {
              var t = e.pay,
                n = t.orderStatus,
                a = t.orderInfo,
                r = t.actInfo
              return {
                orderStatus: n,
                orderInfo: a,
                isSubUser: e.user.isSubUser,
                actInfo: r
              }
            },
            function (e) {
              var t = e.pay
              return {
                setData: t.setData,
                queryOrder: t.queryOrder
              }
            }
          )(function (e) {
            var t = e.orderStatus,
              n = e.orderInfo,
              r = e.successConfirm,
              o = e.failConfirm,
              i = e.failClose,
              c = e.registGame,
              l = e.actInfo
            return a.createElement(
              'div',
              {
                className: 'main'
              },
              t === m._y.fail &&
                a.createElement(he, {
                  failConfirm: o,
                  failClose: i,
                  registGame: c
                }),
              t === m._y.success &&
                a.createElement(
                  Ae,
                  ye({}, n, {
                    successConfirm: r,
                    registGame: c,
                    actInfo: l
                  })
                )
            )
          }),
          be = n(77974),
          we = function (e) {
            var t = e.singleAmount,
              n = e.availableAmount,
              r = e.monthAmount,
              o = e.activeAccount,
              i = e.onClose,
              c = function () {
                return o > t
                  ? a.createElement(
                      a.Fragment,
                      null,
                      '您单次充值不得超过',
                      a.createElement(
                        'span',
                        {
                          className: 'red'
                        },
                        t
                      ),
                      '元 ，请适度消费'
                    )
                  : o > n
                  ? a.createElement(
                      a.Fragment,
                      null,
                      '您每月充值金额不得超过',
                      a.createElement(
                        'span',
                        {
                          className: 'red'
                        },
                        r
                      ),
                      '元 ，本月还可以充',
                      a.createElement(
                        'span',
                        {
                          className: 'red'
                        },
                        n
                      ),
                      '元 ，请适度消费'
                    )
                  : void 0
              }
            return (
              (0, a.useEffect)(function () {
                var e = c()
                return (
                  (0, v.yD)({
                    from: 'Mini_Swan_game',
                    page: m.Ol.GAME,
                    value: 'popWindow',
                    type: 'display',
                    ext: {
                      popupName: '防沉迷充值提示',
                      popupType: e
                    }
                  }),
                  function () {
                    ;(0, v.ut)({
                      from: 'Mini_Swan_game',
                      page: m.Ol.GAME,
                      value: 'close',
                      type: 'click',
                      ext: {
                        popupName: '防沉迷充值提示',
                        popupType: e
                      }
                    })
                  }
                )
              }, []),
              a.createElement(
                'div',
                {
                  className: 'fast-pay-box error-feed-wrap'
                },
                a.createElement('div', {
                  className: 'close-btn',
                  onClick: i
                }),
                a.createElement(
                  'div',
                  {
                    className: 'title'
                  },
                  '防沉迷充值提示'
                ),
                a.createElement(
                  'div',
                  {
                    className: 'message-text'
                  },
                  c()
                ),
                a.createElement(
                  'div',
                  {
                    className: 'button-close',
                    onClick: i
                  },
                  '确定'
                )
              )
            )
          }
        function Ne() {
          return (
            (Ne =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
              }),
            Ne.apply(this, arguments)
          )
        }
        function Ie(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function Se(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Ie(Object(n), !0).forEach(function (t) {
                  Oe(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ie(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function Oe(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        function ke(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Ce(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ce(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function Ce(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var xe = '945a7c1579a8aad460a5dcb7bfee927a',
          Te = 'secret',
          Pe = 'popwindow',
          je = 'raisepay',
          Me = (0, r.connect)(
            function (e) {
              var t = e.pay,
                n = t.showOrderToast,
                a = t.fastPayStatus,
                r = t.gameId,
                o = t.orderCreateFail,
                i = t.singleAmount,
                c = t.availableAmount,
                l = t.monthAmount,
                s = t.antiLimit,
                u = t.orderInfo,
                m = t.orderStatus,
                d = t.activeAccount,
                f = t.activePouList,
                g = t.activeCoupon,
                p = e.user,
                v = p.userInfo
              return {
                showOrderToast: n,
                fastPayStatus: a,
                gameId: r,
                orderCreateFail: o,
                singleAmount: i,
                availableAmount: c,
                monthAmount: l,
                antiLimit: s,
                orderInfo: u,
                orderStatus: m,
                activeAccount: d,
                isVisitor: p.isVisitor,
                activePouList: f,
                activeCoupon: g,
                userInfo: v
              }
            },
            function (e) {
              var t = e.pay
              return {
                getPayBasicInfo: t.getPayBasicInfo,
                setData: t.setData,
                getServerInfo: t.getServerInfo,
                queryOrder: t.queryOrder
              }
            }
          )(function (e) {
            var t = e.singleAmount,
              n = e.availableAmount,
              r = e.getPayBasicInfo,
              o = e.monthAmount,
              c = e.fastPayStatus,
              l = e.setData,
              s = e.orderInfo,
              u = e.queryOrder,
              d = e.activeAccount,
              f = e.setIsShowPass,
              g = e.isVisitor,
              p = e.activePouList,
              A = e.activeCoupon,
              h = e.userInfo,
              E = (h = void 0 === h ? {} : h).markInfo,
              b = h.subUserId,
              w = h.isSubUser,
              N = h.userName,
              I = h.userNickName,
              S = h.subUserName,
              O = ke((0, a.useState)(!1), 2),
              k = O[0],
              C = O[1],
              x = ke((0, a.useState)(!1), 2),
              T = x[0],
              P = x[1],
              j = ke((0, a.useState)({}), 2),
              M = j[0],
              L = j[1],
              D = '#baidu-cp-game-slot',
              U = '',
              G = function (e) {
                var t,
                  n,
                  a = (e || {}).data,
                  o = e.source
                try {
                  var i = a.token,
                    c = a.action,
                    s = a.data
                  if (i !== xe) return !1
                  if (c !== Pe) return
                  if ((console.log('百度平台收到', c, s), g)) return f(!0), !1
                  if (
                    ((n = s.activeAccount),
                    !(!/^[1-9]\d{0,5}$/.test(n) || n >= 1e5
                      ? ((0, y.x2)({
                          info: '充值金额必须1-100000之间整数'
                        }),
                        0)
                      : (l({
                          activeAccount: n
                        }),
                        1)))
                  )
                    return !1
                  C(!0),
                    (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {}
                      ;(e.roleId || e.cpExtra) &&
                        l(
                          Se(
                            Se(
                              Se(
                                {},
                                e.roleId
                                  ? {
                                      roleId: e.roleId
                                    }
                                  : {}
                              ),
                              e.cpExtra
                                ? {
                                    cpExtra: e.cpExtra
                                  }
                                : {
                                    cpExtra: ''
                                  }
                            ),
                            e.cpServerId
                              ? {
                                  cpServerId: e.cpServerId
                                }
                              : {}
                          )
                        ),
                        r({
                          gameId: e.gameId,
                          serverId: e.serverId,
                          cpServerId: e.cpServerId,
                          fixedUserId: (0, pe.Bz)(E + ',' + b)
                        })
                          .then(function (t) {
                            if (t) {
                              if ((L(t), t.antiLimit)) {
                                if (e.activeAccount > t.singleAmount)
                                  return (0, y.mh)(3), !1
                                if (e.activeAccount > t.availableAmount)
                                  return (0, y.mh)(3), !1
                              }
                              var n = (0, y.KV)(e.activeAccount, t.vouchers),
                                a = (0, y.fU)(n, e.activeAccount)
                              l({
                                fastPayStatus: 1,
                                activePouList: n,
                                activeCoupon: a
                              }),
                                (0, v.dV)(
                                  {
                                    type: 'show'
                                  },
                                  {
                                    value: 'popWindow',
                                    page: m.Ol.GAME,
                                    ext: {
                                      gameId: t.gameId,
                                      gameName: t.gameName,
                                      numberType: w ? '小号' : '主号',
                                      popupName: '百度页游支付'
                                    }
                                  }
                                ),
                                (0, y.bL)({
                                  activeAccount: e.activeAccount
                                })
                            } else
                              C(!1),
                                H.Z.sendMyError('FastPayError', {
                                  msg: '支付接口返回值为空'
                                })
                          })
                          .catch(function (e) {
                            var t = e.errorNo,
                              n = e.message
                            t === m.uY.SERVER_NOT_EXIST ||
                            t === m.uY.ROLE_NOT_EXIST ||
                            t === m.uY.GAME_NOT_EXIST
                              ? (0, y.x2)({
                                  info: n
                                })
                              : t === m.uY.PARAMS_ERROR
                              ? (0, y.x2)({
                                  info: '游戏、区服信息不完整，请再次确认！'
                                })
                              : (0, y.x2)({
                                  info: '创建订单失败，请稍后重试！'
                                }),
                              H.Z.sendMyError('FastPayError', {
                                no: t,
                                msg: n
                              }),
                              C(!1)
                          })
                    })(s),
                    (t = {
                      token: xe,
                      action: je
                    }),
                    o && o.postMessage(t, U)
                } catch (e) {
                  return e
                }
              },
              B = function () {
                C(!1),
                  l({
                    fastPayStatus: 0,
                    orderId: ''
                  }),
                  (0, v.ut)({
                    page: m.Ol.GAME,
                    value: 'close',
                    ext: {
                      gameId: M.gameId,
                      gameName: M.gameName,
                      numberType: w ? '小号' : '主号',
                      popupName: '百度页游支付'
                    }
                  })
              }
            return (
              (0, a.useEffect)(function () {
                var e, t, n, a
                return (
                  (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : D,
                      t = document.querySelector(e),
                      n = t && t.src,
                      a = /^https?:\/\/[\w-.]+(:\d+)?/i.exec(n),
                      r = a ? a[0] : ''
                    U = r
                  })(),
                  (e = document.querySelector(D)),
                  (t = {
                    action: Te,
                    token: xe
                  }),
                  (n = 0),
                  (a = setInterval(function () {
                    n < 5
                      ? (e &&
                          e.contentWindow &&
                          e.contentWindow.postMessage(t, U || '*'),
                        (n += 1))
                      : clearInterval(a)
                  }, 1e3)),
                  window.addEventListener('message', G, !1),
                  function () {
                    window.removeEventListener('message', G)
                  }
                )
              }, []),
              i.V5.listen(function (e) {
                var t = e.location.pathname
                ;/^\/game/.test(t) ||
                  l({
                    orderId: ''
                  })
              }),
              a.createElement(
                'div',
                {
                  className: 'fast-pay-panel'.concat(k ? ' show-panel' : '')
                },
                a.createElement('div', {
                  className: 'mask'
                }),
                1 === c &&
                  a.createElement(
                    'div',
                    {
                      className: 'fast-pay-box',
                      style: {}
                    },
                    a.createElement('div', {
                      className: 'close-btn',
                      onClick: B
                    }),
                    a.createElement(
                      'div',
                      {
                        className: 'title'
                      },
                      '百度页游充值'
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'line-item'
                      },
                      a.createElement(
                        'div',
                        {
                          className: 'label'
                        },
                        a.createElement('span', null, '充值账号'),
                        '：'
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'value user-name'
                        },
                        w ? S : I || N,
                        a.createElement(
                          'div',
                          {
                            className: 'flag '.concat(w ? 'sub' : 'main')
                          },
                          w ? '小号' : '主号'
                        )
                      )
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'line-item'
                      },
                      a.createElement(
                        'div',
                        {
                          className: 'label'
                        },
                        a.createElement('span', null, '原     价'),
                        '：'
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'value origin-price'
                        },
                        d,
                        '元'
                      )
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'line-item'
                      },
                      a.createElement(
                        'div',
                        {
                          className: 'label'
                        },
                        a.createElement('span', null, '优 惠 券'),
                        '：'
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'value coupon'
                        },
                        d && p && p.length
                          ? a.createElement(
                              'div',
                              {
                                className: 'list-item-box',
                                onClick: function () {
                                  P(!T),
                                    (0, v.ut)({
                                      value: 'couponDown',
                                      page: m.Ol.GAME,
                                      ext: {
                                        gameId: M.gameId,
                                        gameName: M.gameName,
                                        numberType: w ? '小号' : '主号',
                                        popupName: '选择优惠券'
                                      }
                                    })
                                }
                              },
                              a.createElement('span', {
                                className: 'coupon-icon-box'
                              }),
                              a.createElement(
                                'span',
                                {
                                  className: 'coupon-title'
                                },
                                A ? A.voucherName : '没有使用优惠券'
                              ),
                              a.createElement('span', {
                                className: 'fold-icon'
                              })
                            )
                          : a.createElement(
                              'div',
                              {
                                className: 'item-tip'
                              },
                              '暂无可用优惠'
                            )
                      )
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'line-item need-pay'
                      },
                      a.createElement(
                        'div',
                        {
                          className: 'label'
                        },
                        a.createElement('span', null, '需 支 付'),
                        '：'
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'value need-pay'
                        },
                        a.createElement(
                          'span',
                          {
                            className: 'num'
                          },
                          (function () {
                            var e = d
                            if (d && A && A.voucherId) {
                              var t = A.voucherType,
                                n = A.discountPercent,
                                a = A.reducePrice
                              return 'reduce' === t
                                ? (e - a).toFixed(2)
                                : (e * (n / 100)).toFixed(2)
                            }
                            return e
                          })()
                        ),
                        a.createElement(
                          'span',
                          {
                            className: 'unit'
                          },
                          '元'
                        )
                      )
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'fast-pay-main'
                      },
                      a.createElement(ve.Z, {
                        fastPay: !0
                      })
                    )
                  ),
                2 === c &&
                  a.createElement(Ee, {
                    failConfirm: function () {
                      l({
                        showOrderToast: !1,
                        fastPayStatus: 0,
                        orderStatus: m._y.pending
                      }),
                        u({
                          orderId: s.orderId
                        })
                    },
                    successConfirm: function () {
                      l({
                        showOrderToast: !1,
                        fastPayStatus: 0,
                        activeAccount: 0,
                        alipayUrl: '',
                        wechatUrl: '',
                        orderId: '',
                        orderStatus: m._y.pending
                      }),
                        C(!1)
                    },
                    registGame: M
                  }),
                3 === c &&
                  a.createElement(we, {
                    singleAmount: t,
                    availableAmount: n,
                    monthAmount: o,
                    activeAccount: d,
                    onClose: B
                  }),
                T
                  ? a.createElement(
                      'div',
                      {
                        className: 'coupons-wrap'
                      },
                      a.createElement('div', {
                        className: 'close-btn',
                        onClick: function () {
                          P(!1),
                            (0, v.ut)({
                              value: 'close',
                              page: m.Ol.GAME,
                              ext: {
                                gameId: M.gameId,
                                gameName: M.gameName,
                                numberType: w ? '小号' : '主号',
                                popupName: '选择优惠券'
                              }
                            })
                        }
                      }),
                      a.createElement(
                        'div',
                        {
                          className: 'title'
                        },
                        '选择优惠券'
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'main-box'
                        },
                        a.createElement(
                          'div',
                          {
                            className: 'box'
                          },
                          p && p.length
                            ? p.map(function (e, t) {
                                return a.createElement(
                                  be.Z,
                                  Ne({}, e, {
                                    key: t,
                                    active: e.voucherId === (A && A.voucherId),
                                    onClickCard: function () {
                                      return (function () {
                                        var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                              ? arguments[0]
                                              : {},
                                          t =
                                            arguments.length > 1
                                              ? arguments[1]
                                              : void 0
                                        if (e && e.voucherId) {
                                          var n = {}
                                          e.voucherId === (A && A.voucherId)
                                            ? l({
                                                activeCoupon: null
                                              })
                                            : (l({
                                                activeCoupon: e
                                              }),
                                              (n.voucherId = e.voucherId)),
                                            P(!1),
                                            (0, y.bL)(Se({}, n))
                                        }
                                        ;(0, v.ut)({
                                          value: 'coupon',
                                          page: m.Ol.GAME,
                                          ext: {
                                            gameId: M.gameId,
                                            gameName: M.gameName,
                                            numberType: w ? '小号' : '主号',
                                            popupName: '选择优惠券'
                                          },
                                          pos: t + 1
                                        })
                                      })(e, t)
                                    },
                                    curPos: t + 1
                                  })
                                )
                              })
                            : null
                        )
                      )
                    )
                  : null
              )
            )
          }),
          Le = n(64753),
          De = n(1949)
        function Ue(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Ge(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ge(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function Ge(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var Be = function (e) {
            var t = e.item,
              n = Ue((0, a.useState)(''), 2),
              r = n[0],
              o = n[1],
              i = Ue((0, a.useState)(!1), 2),
              c = i[0],
              l = i[1]
            ;(0, a.useEffect)(
              function () {
                var e = ''
                t.isLimitGame
                  ? t.limitGames.map(function (t) {
                      e += t.gameName + ','
                    })
                  : (e = '所有游戏'),
                  o(e)
              },
              [t]
            )
            return a.createElement(
              'div',
              {
                className: 'coupon-item-in-game-wrapper'
              },
              a.createElement(
                'div',
                {
                  className: 'coupon-price'
                },
                'discount' === t.voucherType
                  ? a.createElement(
                      'div',
                      null,
                      a.createElement(
                        'div',
                        {
                          className: 'price'
                        },
                        t.discountPercent / 10,
                        a.createElement('span', null, '折')
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'requirement'
                        },
                        t.discountLimitMin,
                        '-',
                        t.discountLimitMax,
                        '元可用'
                      )
                    )
                  : a.createElement(
                      'div',
                      null,
                      a.createElement(
                        'div',
                        {
                          className: 'price'
                        },
                        t.reducePrice,
                        a.createElement('img', {
                          src: De
                        })
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'requirement'
                        },
                        '满',
                        t.reduceLimit,
                        '元可用'
                      )
                    )
              ),
              a.createElement(
                'div',
                {
                  className: 'coupon-detail'
                },
                a.createElement(
                  'div',
                  {
                    className: 'title'
                  },
                  t.voucherName
                ),
                a.createElement(
                  'div',
                  {
                    className: 'time'
                  },
                  t.startAt,
                  '-',
                  t.endAt
                ),
                a.createElement(
                  'div',
                  {
                    className: 'limit'
                  },
                  '限游戏：',
                  a.createElement('span', null, r)
                ),
                a.createElement(
                  'div',
                  {
                    className: 'interactive'
                  },
                  a.createElement(
                    'div',
                    {
                      className: 'intro',
                      onClick: function () {
                        l(!c)
                      }
                    },
                    '使用须知',
                    a.createElement(
                      'span',
                      {
                        className: 'iconfont '.concat(c ? 'show' : '')
                      },
                      ''
                    )
                  ),
                  a.createElement(
                    'div',
                    {
                      className: 'use',
                      onClick: function () {
                        window.open('/'.concat(m.Ol.PAY))
                      }
                    },
                    '去使用'
                  )
                ),
                a.createElement('div', {
                  className: 'circle'
                })
              ),
              c &&
                t.voucherDesc &&
                a.createElement(
                  'div',
                  {
                    className: 'use-condition-list'
                  },
                  a.createElement(
                    'div',
                    {
                      className: 'voucher-desc-box'
                    },
                    t.voucherDesc
                  )
                )
            )
          },
          Re = function (e) {
            var t = e.gameId,
              n = e.index,
              r = e.gameName,
              o = e.giftContent,
              i = e.giftCover,
              c = e.giftId,
              l = e.giftLeftNum,
              s = e.giftCodeType,
              u = e.giftName,
              m = (e.isPlayed, e.isReceived),
              d = e.handleReceiveGift,
              f = function () {
                ;(0, v.ut)({
                  value: 'giftItemClick',
                  ext: {
                    giftId: c,
                    gameId: t,
                    gameName: r
                  },
                  pos: n,
                  callback: function () {
                    ;(0, y.g$)(c, t, !0)
                  }
                })
              }
            return a.createElement(
              'div',
              {
                className: 'gift-item-in-game-wrapper ubc-display-item',
                'data-log': JSON.stringify({
                  value: 'giftItem',
                  ext: {
                    giftId: c,
                    gameId: t,
                    gameName: r,
                    isReceived: m
                  },
                  pos: n
                })
              },
              a.createElement(
                'div',
                {
                  className: 'gift-cover-box'
                },
                a.createElement('img', {
                  className: 'gift-cover',
                  src: i,
                  onClick: f
                }),
                m &&
                  a.createElement(
                    'div',
                    {
                      className: 'gift-received'
                    },
                    '已领取'
                  )
              ),
              a.createElement(
                'div',
                {
                  className: 'info-wrapper',
                  onClick: f
                },
                a.createElement(
                  'div',
                  {
                    className: 'info-title'
                  },
                  u
                ),
                a.createElement(
                  'div',
                  {
                    className: 'info-content'
                  },
                  o
                ),
                a.createElement(
                  'div',
                  {
                    className: 'info-left'
                  },
                  '剩余数量：',
                  a.createElement(
                    'span',
                    {
                      className: 'left-num'
                    },
                    2 === s ? '不限量' : l
                  )
                )
              ),
              a.createElement(
                'div',
                {
                  className: 'receive-btn-wrapper'
                },
                a.createElement(
                  'div',
                  {
                    className: 'receive-btn '.concat(m && 'received'),
                    onClick: function () {
                      ;(0, v.ut)({
                        value: m ? 'useGift' : 'receiveGift',
                        ext: {
                          giftId: c,
                          gameId: t,
                          gameName: r
                        },
                        pos: n,
                        callback: function () {
                          d(c, t, u, n, m, r)
                        }
                      })
                    }
                  },
                  m ? '去使用' : '领取礼包'
                )
              )
            )
          }
        function Qe(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Fe(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Fe(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function Fe(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var qe = function (e) {
            var t = e.title
            return a.createElement(
              'div',
              {
                className: 'divide-line'
              },
              a.createElement('div', {
                className: 'line'
              }),
              a.createElement(
                'div',
                {
                  className: 'title'
                },
                t
              ),
              a.createElement('div', {
                className: 'line'
              })
            )
          },
          Ve = function (e) {
            var t = e.giftList,
              n = e.couponList,
              r = e.gameId,
              o = e.isShow,
              i = e.onMouseLeave,
              c = e.handleReceiveGift,
              l = Qe((0, a.useState)(!1), 2),
              s = l[0],
              u = l[1],
              m = Qe((0, a.useState)(!1), 2),
              d = m[0],
              f = m[1],
              g = Qe((0, a.useState)([]), 2),
              p = g[0],
              v = g[1],
              y = Qe((0, a.useState)([]), 2),
              A = y[0],
              h = y[1],
              E = function () {
                v(n.slice(0, 2)), u(!0)
              },
              b = function () {
                h(t.slice(0, 2)), f(!0)
              },
              w = t.length + n.length
            return (
              (0, a.useEffect)(
                function () {
                  E(), b()
                },
                [n, t]
              ),
              a.createElement(
                'div',
                {
                  className: 'gift-list-in-game-wrapper',
                  style: {
                    display: o ? 'block' : 'none'
                  },
                  onMouseLeave: i
                },
                a.createElement(
                  'div',
                  {
                    className: 'title'
                  },
                  '您有',
                  a.createElement('span', null, w),
                  '个待使用福利'
                ),
                a.createElement(
                  'div',
                  {
                    className: 'gift-list-box'
                  },
                  n &&
                    n.length > 0 &&
                    a.createElement(
                      'div',
                      {
                        className: 'coupon-wrapper'
                      },
                      a.createElement(qe, {
                        title: '优惠券'
                      }),
                      p.map(function (e, t) {
                        return a.createElement(Be, {
                          key: t,
                          item: e
                        })
                      })
                    ),
                  n && n.length > 2
                    ? s
                      ? a.createElement(
                          'div',
                          {
                            className: 'unfold-all-coupon',
                            onClick: function () {
                              v(n), u(!1)
                            }
                          },
                          '展开全部优惠券',
                          a.createElement(
                            'span',
                            {
                              className: 'iconfont unfold'
                            },
                            ''
                          )
                        )
                      : a.createElement(
                          'div',
                          {
                            className: 'unfold-all-coupon',
                            onClick: E
                          },
                          '收起全部优惠券',
                          a.createElement(
                            'span',
                            {
                              className: 'iconfont fold'
                            },
                            ''
                          )
                        )
                    : null,
                  t &&
                    t.length > 0 &&
                    a.createElement(
                      'div',
                      {
                        className: 'container'
                      },
                      a.createElement(qe, {
                        title: '礼包码'
                      }),
                      A.map(function (e, t) {
                        return a.createElement(Re, {
                          key: e.giftId,
                          index: t + 1,
                          giftName: e.giftName,
                          gameName: e.gameName,
                          gameId: r,
                          giftContent: e.giftContent,
                          giftCover: e.giftCover,
                          giftId: e.giftId,
                          giftLeftNum: e.giftLeftNum,
                          isPlayed: e.isPlayed,
                          isReceived: e.isReceived,
                          handleReceiveGift: c,
                          giftCodeType: e.giftCodeType
                        })
                      })
                    ),
                  t && t.length > 2
                    ? d
                      ? a.createElement(
                          'div',
                          {
                            className: 'unfold-all-gift',
                            onClick: function () {
                              h(t), f(!1)
                            }
                          },
                          '展开全部礼包',
                          a.createElement(
                            'span',
                            {
                              className: 'iconfont unfold'
                            },
                            ''
                          )
                        )
                      : a.createElement(
                          'div',
                          {
                            className: 'unfold-all-gift',
                            onClick: b
                          },
                          '收起全部礼包',
                          a.createElement(
                            'span',
                            {
                              className: 'iconfont fold'
                            },
                            ''
                          )
                        )
                    : null
                )
              )
            )
          },
          Ye = n(94627),
          Je = n(22819),
          ze = n(13482)
        function Ke(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return We(e)
            })(e) ||
            (function (e) {
              if (
                ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e['@@iterator']
              )
                return Array.from(e)
            })(e) ||
            Ze(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function He(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            Ze(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function Ze(e, t) {
          if (e) {
            if ('string' == typeof e) return We(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? We(e, t)
                : void 0
            )
          }
        }
        function We(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var Xe = function (e) {
            var t = e.index,
              n = e.msgItem,
              r = e.msgListRead,
              o = e.canChargeDirectly,
              i = e.gameId,
              c = e.gameName,
              l = function (e, a) {
                ;(0, v.ut)({
                  value: e,
                  ext: {
                    platform: 'pc',
                    module: 'messagebox',
                    gameId: i,
                    gameName: c,
                    cuoponName: n.msgTitle,
                    couponId: n.msgId,
                    pos: t + 1
                  },
                  callback: function () {
                    a()
                  }
                })
              },
              s = function () {
                l('checkcoupon', function () {
                  window.open(
                    '/'
                      .concat(m.Ol.USER, '?sourcePos=nav&menu=')
                      .concat(m.Sz.COUPON)
                  )
                })
              }
            return a.createElement(
              'div',
              {
                className: 'msg-item-in-game-wrapper'
              },
              a.createElement('img', {
                src: 'https://gamedelivery.cdn.bcebos.com/comment/c3b8fa0ea4e0616226372f63cf409525.png',
                className: 'cs-icon'
              }),
              a.createElement(
                'div',
                {
                  className: 'msg-content-wrapper'
                },
                a.createElement(
                  'div',
                  {
                    className: 'cs-name'
                  },
                  '客服小美'
                ),
                a.createElement(
                  'div',
                  {
                    className: 'msg-card'
                  },
                  a.createElement(
                    'div',
                    {
                      className: 'msg-title'
                    },
                    0 === r[t] ? a.createElement('span', null) : null,
                    n.msgTitle
                  ),
                  a.createElement(
                    'div',
                    {
                      className: 'msg-text'
                    },
                    n.msgContent
                  ),
                  4 === n.type &&
                    (o
                      ? a.createElement(
                          'div',
                          {
                            className: 'msg-button'
                          },
                          a.createElement(
                            'div',
                            {
                              className: 'recharge',
                              onClick: function () {
                                l('usecoupon', function () {
                                  window.open('/'.concat(m.Ol.PAY))
                                })
                              }
                            },
                            '充值使用'
                          ),
                          a.createElement(
                            'div',
                            {
                              className: 'check',
                              onClick: s
                            },
                            '查看优惠券'
                          )
                        )
                      : a.createElement(
                          'div',
                          {
                            className: 'msg-button-full'
                          },
                          a.createElement(
                            'div',
                            {
                              className: 'check-full',
                              onClick: s
                            },
                            '查看优惠券'
                          ),
                          a.createElement(
                            'div',
                            {
                              className: 'text'
                            },
                            '优惠券可在游戏内操作充值时使用'
                          )
                        ))
                )
              )
            )
          },
          _e = function (e) {
            var t = e.msgList,
              n = e.msgListRead,
              r = e.unReadNum,
              o = e.isShow,
              i = e.onMouseLeave,
              c = e.canChargeDirectly,
              l = Je.Z.dispatch,
              s = He((0, a.useState)([]), 2),
              u = s[0],
              m = s[1]
            ;(0, a.useEffect)(
              function () {
                0 === u.length && m(n)
              },
              [n]
            )
            var f = (0, d.P2)(
              function () {
                var e = document.querySelector('.msg-list').scrollTop
                t.forEach(function (t, n) {
                  document.querySelector('#item-'.concat(n)).offsetTop - e <
                    300 &&
                    1 !== u[n] &&
                    ((u[n] = 1),
                    m(u),
                    (0, ze.rz)({
                      msgId: t.msgId
                    }))
                }),
                  l.user.setData({
                    msgListRead: Ke(u)
                  })
              },
              {
                wait: 50
              }
            )
            return t && t.length
              ? a.createElement(
                  'div',
                  {
                    className: 'msg-list-in-game-wrapper',
                    style: {
                      display: o ? 'block' : 'none'
                    },
                    onMouseLeave: i
                  },
                  a.createElement(
                    'div',
                    {
                      className: 'container'
                    },
                    a.createElement(
                      'div',
                      {
                        className: 'top-info-bar'
                      },
                      a.createElement(
                        'div',
                        {
                          className: 'total-msg'
                        },
                        '有',
                        r > 0 ? a.createElement('span', null, r) : r,
                        '条未读消息'
                      ),
                      r > 0 &&
                        a.createElement(
                          'div',
                          {
                            className: 'mark-as-read',
                            onClick: function () {
                              ;(0, ze.A0)(),
                                m([]),
                                l.user.setData({
                                  msgListRead: [1]
                                })
                            }
                          },
                          '全部标为已读'
                        )
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'divide-line-h'
                      },
                      a.createElement('div', null)
                    ),
                    a.createElement(
                      'div',
                      {
                        className: 'msg-list',
                        onScroll: f
                      },
                      t.map(function (e, t) {
                        return a.createElement(
                          'div',
                          {
                            id: 'item-'.concat(t),
                            key: t
                          },
                          a.createElement(Xe, {
                            index: t,
                            msgItem: e,
                            msgListRead: u,
                            canChargeDirectly: c
                          })
                        )
                      })
                    )
                  )
                )
              : a.createElement(
                  'div',
                  {
                    style: {
                      display: o ? 'flex' : 'none'
                    },
                    className: 'msg-list-in-game-wrapper wrapper-empty',
                    onMouseLeave: i
                  },
                  '您还没有收到消息哦～'
                )
          },
          $e =
            (n(95062),
            function (e) {
              var t = e.text,
                n = e.newsId,
                r = (0, a.useMemo)(function () {
                  return (0, d.nl)(window.location.href)
                }, []),
                o = r.gameId,
                i = r.idfrom
              return (
                t &&
                a.createElement(
                  'div',
                  {
                    className: 'notice-in-game-wrapper'
                  },
                  a.createElement(
                    'span',
                    {
                      className: 'icon iconfont'
                    },
                    ''
                  ),
                  a.createElement(
                    'div',
                    {
                      className: 'notice-loop-mask',
                      onClick: function () {
                        window.open(
                          '/'
                            .concat(m.Ol.GAMEDETAIL, '?idfrom=')
                            .concat(i, '&gameId=')
                            .concat(o, '&newsId=')
                            .concat(n, '&categoryId=notice')
                        )
                      }
                    },
                    a.createElement(
                      'div',
                      {
                        className: ''.concat(
                          t.length > 17 ? 'notice-loop-box' : '',
                          ' text-style'
                        )
                      },
                      a.createElement('span', null, t)
                    )
                  )
                )
              )
            }),
          et = n(84476),
          tt = n(15618)
        n(85587)
        function nt(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return at(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return at(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function at(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        var rt = (0, r.connect)(
            function (e) {
              return {
                signInInfo: e.user.signInInfo
              }
            },
            function (e) {
              var t = e.user
              return {
                getSignInInfo: t.getSignInInfo,
                signIn: t.signIn
              }
            }
          )(function (e) {
            var t = e.cls,
              n = e.signInInfo,
              r = e.getSignInInfo,
              o = e.clickCb,
              i = (0, d.nl)(window.location.href).gameId,
              c = nt((0, a.useState)(!0), 2),
              l = c[0],
              s = c[1],
              u = function () {
                o && o(),
                  window.localStorage.setItem('showTime', +new Date()),
                  s(!1)
              }
            ;(0, a.useEffect)(function () {
              r({
                gameId: i
              }),
                (0, v.dV)(
                  {
                    type: 'show'
                  },
                  {
                    page: m.Ol.GAME,
                    value: 'checkBox',
                    ext: {
                      template: '签到',
                      gameId: i
                    }
                  }
                )
            }, [])
            return (
              (0, a.useEffect)(function () {
                var e = window.localStorage.getItem('showTime')
                ;(function (e) {
                  return (
                    new Date(e).toDateString() === new Date().toDateString()
                  )
                })(Number(e)) && s(!1)
              }, []),
              a.createElement(
                'div',
                {
                  id: 'sign-in',
                  className: 'sign-in-wrapper '.concat(t),
                  onClick: u,
                  onMouseEnter: u
                },
                a.createElement(
                  'div',
                  {
                    className: 'sign-info'
                  },
                  '签到领豪礼'
                ),
                l &&
                  (null == n ? void 0 : n.rewardName) &&
                  a.createElement(
                    'div',
                    {
                      className: 'reward-info'
                    },
                    n.rewardName
                  )
              )
            )
          }),
          ot = n(85776)
        function it(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function ct(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? it(Object(n), !0).forEach(function (t) {
                  lt(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : it(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function lt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        var st = function (e) {
          var t,
            n = e.onClose
          return a.createElement(
            ot.default,
            ((t = function () {
              n()
            }),
            {
              title: null,
              cancelBtn: null,
              children: a.createElement(
                'div',
                {
                  style: {
                    padding: '0 15px 15px',
                    color: '#999',
                    textAlign: 'center'
                  }
                },
                a.createElement(
                  'div',
                  null,
                  '已为您关注百度游戏企业号，在企业号中领取更多福利哦'
                ),
                a.createElement(
                  'div',
                  null,
                  '可以随时前往企业号取消关注【网盘消息-通讯录-百度游戏】'
                )
              ),
              okBtn: ct(
                {
                  text: '我知道了',
                  onClick: t
                },
                {
                  width: '143px',
                  lineHeight: '35px'
                }
              ),
              icon: 'success',
              close: t
            })
          )
        }
        function ut(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, a)
          }
          return n
        }
        function mt(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? ut(Object(n), !0).forEach(function (t) {
                  dt(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ut(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function dt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          )
        }
        function ft(e, t, n, a, r, o, i) {
          try {
            var c = e[o](i),
              l = c.value
          } catch (e) {
            return void n(e)
          }
          c.done ? t(l) : Promise.resolve(l).then(a, r)
        }
        function gt(e) {
          return function () {
            var t = this,
              n = arguments
            return new Promise(function (a, r) {
              var o = e.apply(t, n)
              function i(e) {
                ft(o, a, r, i, c, 'next', e)
              }
              function c(e) {
                ft(o, a, r, i, c, 'throw', e)
              }
              i(void 0)
            })
          }
        }
        function pt(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
              if (null == n) return
              var a,
                r,
                o = [],
                i = !0,
                c = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (a = n.next()).done) &&
                  (o.push(a.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                ;(c = !0), (r = e)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (c) throw r
                }
              }
              return o
            })(e, t) ||
            (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return vt(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return vt(e, t)
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function vt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
          return a
        }
        ;(0, o.getFCP)(function (e) {
          e.value > 0 &&
            tt.Z.sendFCLP({
              fcpTime: e.value,
              page: m.Ol.GAME
            })
        }, !0),
          (0, o.getLCP)(function (e) {
            e.value > 0 &&
              tt.Z.sendFCLP({
                lcpTime: e.value,
                page: m.Ol.GAME
              })
          }, !0)
        var yt = (0, r.connect)(
          function (e) {
            var t = e.game,
              n = t.serverName,
              a = t.gameName,
              r = t.gameDetailUrl,
              o = t.isShowChargeEntry,
              i = t.cpLoginUrl,
              c = t.gameId,
              l = t.serverId,
              s = t.isVisitor,
              u = t.isH5,
              m = t.qrcodeUrl,
              d = t.popupsGamesList,
              f = t.gameCategory,
              g = t.gameWeiUrl,
              p = t.popInfo,
              v = t.welfareGameList,
              y = t.currentTaskStatus,
              A = t.forbidLoad,
              h = t.isNeedCert,
              E = t.isCert,
              b = t.currentTaskInfo,
              w = t.currentTaskItem,
              N = t.isSpecificLeavl,
              I = e.user,
              S = I.remainTime,
              O = I.userInfo,
              k = O.userNickName,
              C = O.subUserName
            return {
              forbidLoad: A,
              isNeedCert: h,
              isCert: E,
              userCmFlag: O.userCmFlag,
              isAdult: O.isAdult,
              serverName: n,
              gameName: a,
              gameDetailUrl: r,
              isShowChargeEntry: o,
              cpLoginUrl: i,
              gameId: c,
              serverId: l,
              remainTime: S,
              isVisitor: s,
              isH5: u,
              qrcodeUrl: m,
              popupsGamesList: d,
              userNickName: k,
              subUserName: C,
              gameCategory: f,
              gameWeiUrl: g,
              isLogin: I.isLogin,
              msgCountInfo: I.msgCountInfo,
              vipInfo: I.vipInfo,
              popInfo: p,
              welfareGameList: v,
              currentTaskStatus: y,
              currentTaskInfo: b,
              currentTaskItem: w,
              isSpecificLeavl: N,
              messageListInGame: I.messageListInGame,
              msgListRead: I.msgListRead,
              canChargeDirectly: I.canChargeDirectly,
              isSelfLogin: I.isSelfLogin,
              showPayLogin: I.showPayLogin
            }
          },
          function (e) {
            var t = e.game,
              n = t.entryGameInfo,
              a = t.clearData,
              r = t.recommendGamesList,
              o = t.getBonusGameTasks,
              i = t.getGamePlayTaskStatus,
              c = t.setData,
              l = e.user,
              s = l.setData,
              u = l.getUserInfo
            return {
              entryGameInfo: n,
              clearData: a,
              setData: s,
              getInfoAfterLogin: l.getInfoAfterLogin,
              getUserInfo: u,
              recommendGamesList: r,
              getGamePlayTaskStatus: i,
              getMessageCount: l.getMessageCount,
              getBonusGameTasks: o,
              setGameData: c,
              getMessageListInGame: l.getMessageListInGame,
              getSignInInfo: l.getSignInInfo
            }
          }
        )(function (e) {
          var t = e.isAdult,
            n = e.userCmFlag,
            r = e.serverName,
            o = e.serverId,
            s = e.gameName,
            E = e.gameDetailUrl,
            b = e.isShowChargeEntry,
            w = e.cpLoginUrl,
            N = e.entryGameInfo,
            I = e.clearData,
            S = e.isVisitor,
            O = e.setData,
            k = e.setGameData,
            C = e.getInfoAfterLogin,
            x = e.isH5,
            T = e.isRedirect,
            P = e.recommendGamesList,
            j = e.popupsGamesList,
            M = e.userNickName,
            L = e.subUserName,
            D = e.forbidLoad,
            Y = void 0 === D || D,
            J = e.isNeedCert,
            z = e.isCert,
            H = e.getUserInfo,
            Z = e.gameCategory,
            W = void 0 === Z ? '' : Z,
            X = e.gameWeiUrl,
            _ = void 0 === X ? '' : X,
            ee = e.isLogin,
            te = e.msgCountInfo,
            re = e.getMessageCount,
            oe = e.vipInfo,
            ie = e.qrcodeUrl,
            ce = e.popInfo,
            me = (ce = void 0 === ce ? {} : ce).alertPop,
            de = void 0 === me ? {} : me,
            pe = ce.hoverPop,
            ve = void 0 === pe ? {} : pe,
            ye = e.getBonusGameTasks,
            Ae = e.currentTaskStatus,
            he = e.currentTaskItem,
            Ee = e.isSpecificLeavl,
            be = e.getMessageListInGame,
            we = e.messageListInGame,
            Ne = e.msgListRead,
            Ie = e.canChargeDirectly,
            Se = e.isSelfLogin,
            Oe = e.showPayLogin,
            ke = e.getSignInInfo
          ;(0, A.yC)(void 0, void 0, s),
            (0, A.mh)({
              page: m.Ol.GAME
            }),
            (0, A.sE)(z)
          var Ce = (0, i.TH)(),
            xe = (0, i.s0)(),
            Te = pt((0, a.useState)(!1), 2),
            Pe = Te[0],
            je = Te[1],
            De = pt((0, a.useState)(!1), 2),
            Ue = De[0],
            Ge = De[1],
            Be = pt((0, a.useState)(''), 2),
            Re = Be[0],
            Qe = Be[1],
            Fe = pt((0, a.useState)(!1), 2),
            qe = Fe[0],
            Je = Fe[1],
            ze = pt((0, a.useState)(!1), 2),
            Ke = ze[0],
            He = ze[1],
            Ze = pt((0, a.useState)(!1), 2),
            We = Ze[0],
            Xe = Ze[1],
            tt = pt((0, a.useState)(!1), 2),
            nt = tt[0],
            at = tt[1],
            ot = pt((0, a.useState)(!1), 2),
            it = ot[0],
            ct = ot[1],
            lt = pt((0, a.useState)(!1), 2),
            ut = lt[0],
            dt = lt[1],
            ft = pt((0, a.useState)(!1), 2),
            vt = ft[0],
            yt = ft[1],
            At = pt((0, a.useState)(!1), 2),
            ht = At[0],
            Et = At[1],
            bt = pt((0, a.useState)(''), 2),
            wt = bt[0],
            Nt = bt[1],
            It = pt((0, a.useState)({}), 2),
            St = It[0],
            Ot = It[1],
            kt = pt((0, a.useState)(!1), 2),
            Ct = kt[0],
            xt = kt[1],
            Tt = (0, a.useMemo)(function () {
              return (0, d.nl)(window.location.href)
            }, []),
            Pt = window.innerWidth,
            jt = pt((0, a.useState)(!1), 2),
            Mt = jt[0],
            Lt = jt[1],
            Dt = pt((0, a.useState)(!1), 2),
            Ut = Dt[0],
            Gt = Dt[1],
            Bt = pt((0, a.useState)(!1), 2),
            Rt = Bt[0],
            Qt = Bt[1],
            Ft = pt((0, a.useState)([]), 2),
            qt = Ft[0],
            Vt = Ft[1],
            Yt = pt((0, a.useState)([]), 2),
            Jt = Yt[0],
            zt = Yt[1],
            Kt = pt((0, a.useState)(!1), 2),
            Ht = Kt[0],
            Zt = Kt[1],
            Wt = pt((0, a.useState)({}), 2),
            Xt = Wt[0],
            _t = Wt[1],
            $t = pt((0, a.useState)(0), 2),
            en = $t[0],
            tn = $t[1],
            nn = pt((0, a.useState)(''), 2),
            an = nn[0],
            rn = nn[1],
            on = pt((0, a.useState)(''), 2),
            cn = on[0],
            ln = on[1],
            sn = pt((0, a.useState)(!1), 2),
            un = sn[0],
            mn = sn[1],
            dn = pt((0, a.useState)(!1), 2),
            fn = dn[0],
            gn = dn[1]
          ;(0, a.useEffect)(function () {
            Lt(Pt > 1668)
          }),
            (0, a.useEffect)(function () {
              var e = window.location.href
              e.indexOf('https:') > -1 &&
                w.indexOf('http:') > -1 &&
                window.location.replace(e.replace('https:', 'http:'))
            }),
            (0, a.useEffect)(
              function () {
                var e = ((c.detect && (0, c.detect)()) || {}).os,
                  t = window.navigator.userAgent.toLowerCase()
                if (
                  [
                    'iOS',
                    'Android OS',
                    'BlackBerry OS',
                    'Windows Mobile'
                  ].includes(e) ||
                  /micromessenger/i.test(t)
                ) {
                  if (!ie) return
                  var n = window.location.origin,
                    a = window.location.search.replace(
                      /idfrom=[0-9]+/,
                      'idfrom=3101'
                    )
                  window.location.replace(''.concat(n, '/gameh5').concat(a))
                }
              },
              [ie]
            )
          var pn = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              Ge(e), !e && Je(!1)
            },
            vn = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              ;(0, y.e_)({
                showSignInPanel: e
              })
            },
            yn = (function () {
              var e = gt(
                regeneratorRuntime.mark(function e(t) {
                  var n, a, r, o, i, c, l, s
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = 'reportPlay'),
                              (a = function () {
                                var e = window.localStorage.getItem(n)
                                return e ? JSON.parse(e) : {}
                              }),
                              (r = function (e, t) {
                                var r = a()
                                ;(r[e] = t),
                                  window.localStorage.setItem(
                                    n,
                                    JSON.stringify(r)
                                  )
                              }),
                              (o = function (e) {
                                var t = a()
                                delete t[e],
                                  window.localStorage.setItem(
                                    n,
                                    JSON.stringify(t)
                                  )
                              }),
                              (e.prev = 4),
                              (i = (+new Date() / 1e3).toFixed()),
                              (c = Tt.gameId),
                              0 === (l = parseInt(t, 10)) &&
                                r(c, {
                                  gameId: c,
                                  actionTime: i,
                                  actionType: t
                                }),
                              (e.next = 11),
                              (0, f.Op)({
                                actionType: t,
                                actionTime: i,
                                gameId: c
                              })
                            )
                          case 11:
                            0 === l
                              ? o(c)
                              : ((s = a()),
                                Object.entries(s).map(function (e) {
                                  var t = pt(e, 2),
                                    n = t[0],
                                    a = t[1]
                                  return (0, f.Op)(a).then(function () {
                                    o(n)
                                  })
                                })),
                              (e.next = 17)
                            break
                          case 14:
                            return (
                              (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              e.abrupt('return', e.t0)
                            )
                          case 17:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            An = function (e) {
              var t = e.type,
                n = e.value,
                a = e.ext
              ;(0, v.dV)(
                {
                  type: t
                },
                {
                  page: m.Ol.GAME,
                  value: n,
                  ext: mt(
                    {
                      gameId: Tt.gameId || '',
                      gameName: s,
                      taskType: null == Tt ? void 0 : Tt.taskType,
                      taskId: null == Tt ? void 0 : Tt.taskId,
                      channel: null == Tt ? void 0 : Tt.idfrom
                    },
                    a
                  )
                }
              )
            },
            hn = function (e) {
              var t = e.value,
                n = e.ext
              ;(0, v.dV)(
                {
                  type: 'showParts'
                },
                {
                  page: m.Ol.GAME,
                  value: t,
                  ext: mt(
                    {
                      gameId: Tt.gameId || '',
                      gameName: s,
                      taskType: null == Tt ? void 0 : Tt.taskType,
                      taskId: null == Tt ? void 0 : Tt.taskId,
                      channel: null == Tt ? void 0 : Tt.idfrom
                    },
                    n
                  )
                }
              )
            },
            En = function (e) {
              var t = e.value,
                n = e.ext
              ;(0, v.ut)({
                page: m.Ol.GAME,
                value: t,
                ext: mt(
                  {
                    gameId: Tt.gameId || '',
                    gameName: s,
                    taskType: null == Tt ? void 0 : Tt.taskType,
                    taskId: null == Tt ? void 0 : Tt.taskId,
                    channel: null == Tt ? void 0 : Tt.idfrom
                  },
                  n
                )
              })
            }
          ;(0, a.useEffect)(
            function () {
              Ue &&
                hn({
                  value: 'showPass'
                })
            },
            [Ue]
          ),
            (0, a.useEffect)(
              function () {
                de.image &&
                  (yt(!0),
                  setTimeout(function () {
                    hn({
                      value: 'DBFestivalActiveBottomBannerShow'
                    })
                  }, 0))
              },
              [de.image]
            ),
            (0, a.useEffect)(
              function () {
                Y && Ct && Nt('')
              },
              [Y, Ct]
            )
          var bn = function (e) {
              yn(0),
                (0, d.qQ)(''.concat(Tt.gameId, 'repLog'), {
                  gameId: Tt.gameId,
                  gameName: s
                }),
                !he ||
                ('30' !== Tt.taskType && '34' !== Tt.taskType) ||
                1 !== (null == he ? void 0 : he.activityType)
                  ? je(!0)
                  : k({
                      isSpecificLeavl: !0
                    })
              var t = e || window.event
              return t && (t.returnValue = '确认离开吗'), '确认离开吗'
            },
            wn = function () {
              var e = Tt.frontQuery
              return e
                ? {
                    frontQuery: decodeURIComponent(e)
                  }
                : {}
            },
            Nn = function () {
              var e = Tt.grext
              if (e) {
                var t = ''
                try {
                  t = JSON.parse(decodeURIComponent(e))
                } catch (n) {
                  t = e
                }
                return {
                  grInfo: t
                }
              }
              return {}
            },
            In = function (e) {
              var t = new Date(e),
                n = t.getDay(),
                a = t.getHours()
              return (
                ((0, d.w_)(t) || [0, 5, 6].includes(n)) &&
                !(0, d.$8)(t) &&
                a >= 20 &&
                a <= 21
              )
            },
            Sn = function () {
              ;(0, y.FL)({
                checkFlag: 6,
                checkSelector: '.minor-modal .disable-modal-tips'
              }),
                l.Z.show({
                  className: 'minor-modal',
                  wrapperClassName: 'minor-mask',
                  title: '防沉迷游戏提示',
                  children: a.createElement(
                    'div',
                    {
                      className: 'disable-modal-tips'
                    },
                    '根据国家防沉迷游戏的规定，',
                    a.createElement('br', null),
                    '您的可玩游戏时间为每周五、六、日和法定节假日的',
                    a.createElement('span', null, '20:00-21:00')
                  ),
                  showCancelButton: !1,
                  showCloseButton: !1,
                  okText: '',
                  onOk: function () {
                    return xe('/'.concat(m.Ol.HOME).concat((0, d.gm)()))
                  },
                  maskStyle: {
                    top: '46px',
                    background: 'url('.concat(
                      'http://fenwan.cdn.bcebos.com/webgame/static/webgame/images/8c0607e8f3db0dba371bb21233ffd1c7.jpg',
                      ') 50% no-repeat'
                    ),
                    backgroundSize: 'cover'
                  }
                })
            },
            On = (function () {
              var e = gt(
                regeneratorRuntime.mark(function e() {
                  var t, n, a
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), (0, f.Xn)()
                        case 2:
                          if (
                            ((t = e.sent),
                            (n = t.current),
                            (a = t.deadline),
                            !In(1e3 * n))
                          ) {
                            e.next = 10
                            break
                          }
                          return (
                            setTimeout(function () {
                              Sn(), xt(!0)
                            }, 1e3 * a - 1e3 * n),
                            e.abrupt('return')
                          )
                        case 10:
                          Sn()
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          ;(0, a.useEffect)(
            function () {
              ;(0, f.Xn)().then(function (e) {
                var a = e.current,
                  r = '端游' === W ? _ : w,
                  o = In(1e3 * a)
                Y && J && !z && (r = ''),
                  !1 === t && Y && n && !o && (r = ''),
                  Nt(r)
              })
            },
            [t, _, w, J, z, Y, n]
          ),
            (0, a.useEffect)(
              function () {
                T && w && (window.location.href = w)
              },
              [T, w]
            )
          var kn = (function () {
            var e = gt(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          ye({
                            gameId: Tt.gameId,
                            channel: Tt.idfrom,
                            taskType: Tt.taskType,
                            taskId: Tt.taskId,
                            showLoad: Tt.showLoad
                          }).then(function (e) {
                            if (e && e.length > 0 && 2 === e[0].activityType)
                              k({
                                isNetDisk: !0
                              })
                            else {
                              Tt &&
                                Tt.gameId &&
                                ((0, d.$o)('game'.concat(Tt.gameId), m.pE) ||
                                  (!(0, d.BL)().flash && !x) ||
                                  P({
                                    currentGameId: Tt.gameId
                                  }))
                            }
                          })
                        )
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          ;(0, a.useEffect)(
            function () {
              ;(null != he && he.taskIsFinished) ||
                1 !== (null == he ? void 0 : he.activityType) ||
                (window.onbeforeunload = bn)
            },
            [he]
          ),
            (0, a.useEffect)(
              function () {
                void 0 !== t &&
                  void 0 !== n &&
                  (0, v.dV)(
                    {
                      type: 'showParts'
                    },
                    {
                      page: m.Ol.GAME,
                      value: 'gamePlayerReport',
                      ext: {
                        gameId: Tt.gameId || '',
                        userCmFlag: n,
                        isAdult: t,
                        channel: Tt.idfrom,
                        taskType: Tt.taskType,
                        taskId: Tt.taskId
                      }
                    }
                  ),
                  !1 !== n
                    ? void 0 !== t &&
                      (t
                        ? void 0 === Tt.showLoad &&
                          void 0 !== Tt.taskType &&
                          kn()
                        : On())
                    : Et(!0)
              },
              [t, n]
            ),
            (0, a.useEffect)(
              function () {
                ;((Tt.showLoad && Tt.taskType) ||
                  (Tt.fromNetDisk && Tt.taskType)) &&
                  kn()
              },
              [Tt.showLoad, Tt.fromNetDisk]
            ),
            (0, a.useEffect)(function () {
              H().then(function () {
                O({
                  subUserTheme: 'dark'
                })
              }),
                Tt.channel && delete Tt.channel,
                N(Tt)
                  .then(function (e) {
                    var t = e || {},
                      n = t.isCert,
                      a = t.isNeedCert
                    ;(0, v.yD)({
                      page: m.Ol.GAME,
                      ext: mt(
                        mt(
                          mt(
                            mt(
                              {
                                gameId: Tt.gameId,
                                gameName: e.gameName
                              },
                              wn()
                            ),
                            Nn()
                          ),
                          Tt.sid
                            ? {
                                sid: Tt.sid
                              }
                            : {}
                        ),
                        Tt.materialId
                          ? {
                              materialId: Tt.materialId
                            }
                          : {}
                      )
                    }),
                      (0, y.sZ)([
                        {
                          type: 'title',
                          content: ''
                            .concat(e.gameName, '-')
                            .concat(e.serverName, '-百度页游中心')
                        }
                      ]),
                      yn(1),
                      void 0 === Tt.taskType && (window.onbeforeunload = bn),
                      a &&
                        !n &&
                        (0, y.Pc)(!0, {
                          forbidHide: !0
                        }),
                      (function () {
                        var e = wn().frontQuery
                        if (e)
                          var t = setTimeout(function () {
                            ;(0, f.bx)(
                              mt(
                                mt({}, Tt),
                                {},
                                {
                                  query: e
                                }
                              )
                            ),
                              clearTimeout(t)
                          }, 5e3)
                      })()
                  })
                  .catch(function (e) {
                    ;(e.errorNo !== m.uY.GAME_NOT_EXIST &&
                      e.errorNo !== m.uY.SERVER_NOT_EXIST &&
                      e.errorNo !== m.uY.PARAMS_ERROR) ||
                      xe('/'.concat(m.Ol.HOME).concat((0, d.gm)()))
                  })
              var e =
                window.performance ||
                window.msPerformance ||
                window.webkitPerformance
              if (e) {
                if (0 === e.navigation.type) {
                  var t = (0, d.$o)(''.concat(Tt.gameId, 'repLog')) || ''
                  t &&
                    (0, v.dV)(
                      {
                        type: 'display'
                      },
                      {
                        page: m.Ol.GAME,
                        value: 'popWindow',
                        ext: mt(
                          {
                            popupName: '更多热门游戏推荐'
                          },
                          t
                        )
                      }
                    )
                }
                window.localStorage.removeItem(''.concat(Tt.gameId, 'repLog'))
              }
              return function () {
                I(),
                  (window.onbeforeunload = null),
                  clearInterval(window.checkTimer)
              }
            }, [])
          ;(0, a.useEffect)(
            function () {
              var e = Tt.gameId
              ee &&
                ((0, f.Jg)({
                  method: 'save'
                }),
                re(),
                be({
                  gameId: e
                }),
                ke({
                  gameId: e
                }).then(function (e) {
                  null != e && e.taskId && mn(!0)
                }))
            },
            [ee]
          ),
            (0, a.useEffect)(function () {
              if (Ne && Ne.length > 0) {
                var e = Ne.filter(function (e) {
                  return 1 !== e
                }).length
                tn(e)
              }
            }),
            (0, a.useEffect)(
              function () {
                wt &&
                  (0, y.B3)({
                    selector: '#baidu-cp-game-slot',
                    qrcodeUrl: ie
                  })
              },
              [wt, ie]
            )
          ;(0, a.useEffect)(function () {
            var e = Tt.gameId
            ;(0, g.WY)(e).then(function (e) {
              var t,
                n,
                a = e.vouchers_list,
                r = void 0 === a ? [] : a,
                o = e.gifts_list,
                i = void 0 === o ? [] : o
              Vt(i),
                zt(r),
                (i.length || r.length) &&
                  ((t = new Date()),
                  (n = ''
                    .concat(Tt.gameId, '-')
                    .concat(t.getFullYear(), '-')
                    .concat(t.getMonth() + 1, '-')
                    .concat(t.getDate())),
                  window.localStorage.getItem(n) || Gt(!0),
                  window.localStorage.setItem(n, !0))
            })
          }, []),
            (0, a.useEffect)(function () {
              var e = Tt.gameId
              ;(0, g.fY)({
                gameId: e
              }).then(function (e) {
                e.length && rn(e[0].newsTitle), e.length && ln(e[0].newsId)
              })
            }, []),
            (0, a.useEffect)(
              function () {
                Ut &&
                  An({
                    type: 'display',
                    value: 'benefits'
                  })
              },
              [Ut]
            ),
            (0, a.useEffect)(
              function () {
                Rt &&
                  An({
                    type: 'display',
                    value: 'messagebox'
                  })
              },
              [Rt]
            ),
            (0, a.useEffect)(function () {
              if (Tt.fromNetDisk)
                var e = setTimeout(function () {
                  var t = (0, d.nl)(window.location.href).channel
                  t &&
                    (0, g.T)({
                      channel: t
                    }).then(function (e) {
                      0 === e.status &&
                        ((0, v.dV)(
                          {
                            type: 'display'
                          },
                          {
                            page: m.Ol.GAME,
                            value: 'netdiskFollowSuccess',
                            ext: {
                              gameId: Tt.gameId || '',
                              gameName: s
                            }
                          }
                        ),
                        gn(!0))
                    }),
                    clearTimeout(e)
                }, 5e3)
            }, [])
          if (!M)
            return a.createElement(B.Z, {
              type: m.Ol.GAME
            })
          var Cn,
            xn,
            Tn,
            Pn = (function () {
              var e = gt(
                regeneratorRuntime.mark(function e() {
                  var t, n, a
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), C()
                        case 2:
                          ;(t = e.sent),
                            (n = t.visitorBind),
                            pn(!1),
                            (0, y.x2)({
                              info: n
                                ? '绑定成功'
                                : '绑定失败，该帐号已有游戏记录'
                            }),
                            (a = (0, d.nl)(Ce.href)).channel &&
                              delete a.channel,
                            N(a).then(function (e) {
                              var t = e || {},
                                n = t.isCert
                              t.isNeedCert &&
                                !n &&
                                (0, y.Pc)(!0, {
                                  forbidHide: !0
                                })
                            }),
                            clearInterval(window.checkTimer),
                            pn(!1)
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            jn = function () {
              dt(!0)
            },
            Mn = function () {
              dt(!1)
            },
            Ln = u()({
              info: !0,
              link: !0,
              message: en > 0
            }),
            Dn = u()({
              'game-wrap': !0,
              'hide-title': Tt.hidetitle,
              'small-game-title': !Mt
            }),
            Un = function () {
              Et(!1),
                En({
                  value: 'guideModalShow'
                })
            },
            Gn = window.navigator.userAgent.toLowerCase(),
            Bn =
              Tt.taskType &&
              (1 === (null == he ? void 0 : he.activityType) ||
                (2 === (null == he ? void 0 : he.activityType) &&
                  /WindowsBaiduYunGuanJia/i.test(Gn)) ||
                window.location.hostname.includes('.baidu.com')),
            Rn = function () {
              Zt(!1)
            }
          return a.createElement(
            'div',
            {
              className: Dn
            },
            a.createElement(
              Q.default,
              null,
              a.createElement(
                'span',
                {
                  className: 'info first-info'
                },
                s
              ),
              a.createElement(
                'span',
                {
                  className: 'more-server-btn',
                  onMouseEnter: function () {
                    at(!0),
                      ct(!0),
                      hn({
                        value: 'moreServerarea',
                        ext: {
                          modulename: 'moreServerarea'
                        }
                      })
                  },
                  onMouseLeave: function () {
                    ct(!1)
                  }
                },
                a.createElement(
                  'span',
                  {
                    className: 'info server-name'
                  },
                  r
                ),
                Mt
                  ? a.createElement(
                      'span',
                      {
                        className: 'more-servers-title'
                      },
                      '更多区服'
                    )
                  : null,
                nt
                  ? a.createElement(le, {
                      expectedName: r,
                      moreServerLoaded: nt,
                      showMoreServer: it,
                      gameName: s,
                      channel: Tt.idfrom
                    })
                  : null
              ),
              a.createElement('span', {
                className: 'divide'
              }),
              a.createElement(q.Z, {
                cls: 'info game-short-cart'
              }),
              a.createElement('span', {
                className: 'divide'
              }),
              a.createElement(
                'span',
                {
                  className: 'info link collection',
                  onClick: function () {
                    En({
                      value: 'broserCollect'
                    })
                    var e = window.location.origin,
                      t = m.Lk
                    window.external &&
                    void 0 !== window.external &&
                    window.external.addFavorite
                      ? window.external.addFavorite &&
                        window.external.addFavorite(e, t)
                      : window.sidebar &&
                        void 0 !== window.sidebar &&
                        window.sidebar.addPanel
                      ? window.sidebar.addPanel &&
                        window.sidebar.addPanel(t, e, '')
                      : alert('加入收藏失败，请使用Ctrl+D进行添加')
                  }
                },
                Mt
                  ? a.createElement(
                      'span',
                      null,
                      a.createElement(
                        'span',
                        {
                          className: 'icon iconfont'
                        },
                        ''
                      ),
                      '收藏'
                    )
                  : '收藏'
              ),
              Mt &&
                an &&
                a.createElement('span', {
                  className: 'divide'
                }),
              Mt &&
                a.createElement($e, {
                  text: an,
                  newsId: cn,
                  onClick: function () {
                    En({
                      value: 'news'
                    })
                  }
                }),
              Bn && he && a.createElement(Le.default, null),
              he &&
                Ae &&
                a.createElement(
                  'div',
                  {
                    style: {
                      visibility: Ee ? 'visible' : 'hidden'
                    }
                  },
                  a.createElement(G.Z, null)
                ),
              ve && ve.imageHover && !he
                ? a.createElement(
                    'span',
                    {
                      className: 'info right myAward',
                      onFocus: jn,
                      onMouseOver: jn,
                      onMouseLeave: Mn
                    },
                    a.createElement('img', {
                      className: 'award',
                      src: ve.image
                    }),
                    a.createElement(ae.Z, {
                      size: 'big',
                      show: ut,
                      src: ve.imageHover,
                      url: ve.url,
                      onJump: function () {
                        dt(!1),
                          En({
                            value: 'DBFestivalActiveTopBannerJump'
                          })
                      },
                      showLog: function () {
                        hn({
                          value: 'DBFestivalActiveTopBannerShow'
                        })
                      }
                    })
                  )
                : a.createElement('span', {
                    className: 'info right',
                    onFocus: jn,
                    onMouseOver: jn,
                    onMouseLeave: Mn
                  }),
              Mt
                ? a.createElement(
                    'span',
                    {
                      className: 'info'
                    },
                    L || M
                  )
                : a.createElement(
                    'span',
                    {
                      className: 'info'
                    },
                    (Tn = L || M) && Tn.length > 4
                      ? ''.concat(Tn.substring(0, 4), '...')
                      : Tn
                  ),
              oe &&
                !(0, d.xb)(oe) &&
                a.createElement(
                  V.default,
                  {
                    url: '/user?menu=noble',
                    cls: 'ubc-show-mod',
                    style: {
                      lineHeight: '20px'
                    },
                    'data-log': JSON.stringify({
                      value: 'coverNobleLogo'
                    })
                  },
                  a.createElement(R.Z, {
                    grade: oe.currentLevel || 0,
                    className: 'game-title-nob-icon',
                    onClick: function () {
                      En({
                        value: 'coverNobleLogo',
                        ext: {
                          tagName: ''
                        }
                      })
                    }
                  })
                ),
              a.createElement(ge.default, null),
              S
                ? a.createElement(fe, {
                    isVisitor: S,
                    setLoginTitle: Qe,
                    togglePass: pn,
                    clickBind: function () {
                      pn(!0), Je(!0)
                    }
                  })
                : null,
              a.createElement('span', {
                className: 'divide'
              }),
              ee &&
                a.createElement(
                  a.Fragment,
                  null,
                  !Se &&
                    un &&
                    a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(rt, {
                        cls: 'info link',
                        clickCb: function () {
                          vn(!0), Qt(!1), Gt(!1)
                        }
                      }),
                      a.createElement('span', {
                        className: 'divide'
                      })
                    ),
                  a.createElement(
                    'div',
                    {
                      className: 'layout-center'
                    },
                    a.createElement(
                      V.default,
                      {
                        url: '/'
                          .concat(m.Ol.USER, '?sourcePos=nav&menu=')
                          .concat(m.Sz.NEWS)
                      },
                      a.createElement(
                        'span',
                        {
                          className: Ln,
                          'data-label': ''.concat(en || ''),
                          onClick: function () {
                            En({
                              value: 'messagebox'
                            })
                          },
                          onMouseEnter: function () {
                            Qt(!0), Gt(!1), vn(!1)
                          }
                        },
                        Mt
                          ? a.createElement(
                              'span',
                              null,
                              a.createElement(
                                'span',
                                {
                                  className: 'icon iconfont'
                                },
                                ''
                              ),
                              '消息'
                            )
                          : '消息'
                      )
                    ),
                    a.createElement(_e, {
                      isShow: Rt,
                      onMouseLeave: function () {
                        return Qt(!1)
                      },
                      unReadNum: en,
                      msgList: we,
                      msgListRead: Ne,
                      canChargeDirectly: Ie
                    })
                  )
                ),
              b &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement('span', {
                    className: 'divide'
                  }),
                  a.createElement(
                    'span',
                    {
                      className: 'info link',
                      onClick: function () {
                        if (
                          (En({
                            value: 'gamePay'
                          }),
                          S)
                        )
                          return pn(!0), Je(!0), !1
                        ;(0, y.PH)('game', {
                          gId: Tt.gameId,
                          sId: Tt.serverId,
                          idfrom: Tt.idfrom
                        })
                      }
                    },
                    Mt
                      ? a.createElement(
                          'span',
                          null,
                          a.createElement(
                            'span',
                            {
                              className: 'icon iconfont'
                            },
                            ''
                          ),
                          '充值'
                        )
                      : '充值'
                  )
                ),
              a.createElement('span', {
                className: ''.concat(
                  te && te.unreadNum ? 'mesdivide' : 'divide'
                )
              }),
              a.createElement(F.Z, {
                cls: 'info link',
                origin: 'game',
                gameId: Tt.gameId,
                gameName: s
              }),
              !S && !1,
              a.createElement('span', {
                className: 'divide'
              }),
              a.createElement(
                'span',
                {
                  className: 'info link',
                  onClick: function () {
                    En({
                      value: 'gameWeb'
                    }),
                      (0, d.q2)({
                        url:
                          E ||
                          '/'.concat(m.Ol.GAMEDETAIL) +
                            ''.concat(
                              (0, d.gm)({
                                gameId: Tt.gameId,
                                channel: Tt.idfrom
                              })
                            )
                      })
                  }
                },
                Mt
                  ? a.createElement(
                      'span',
                      null,
                      a.createElement(
                        'span',
                        {
                          className: 'icon iconfont'
                        },
                        ''
                      ),
                      '官网'
                    )
                  : '官网'
              ),
              qt.length || Jt.length
                ? a.createElement(
                    'div',
                    {
                      className: 'layout-center'
                    },
                    a.createElement('span', {
                      className: 'divide'
                    }),
                    a.createElement('img', {
                      src: h,
                      className: 'gift-icon'
                    }),
                    a.createElement(
                      'span',
                      {
                        className: 'gift',
                        onMouseEnter: function () {
                          Gt(!0), Qt(!1), vn(!1)
                        }
                      },
                      '优惠券&礼包'
                    ),
                    a.createElement(Ve, {
                      isShow: Ut,
                      giftList: qt,
                      couponList: Jt,
                      gameId: Tt.gameId,
                      gameName: s,
                      onMouseLeave: function () {
                        return Gt(!1)
                      },
                      handleReceiveGift: function (e, t, n, a, r) {
                        ;(0, p.KG)({
                          gameId: t,
                          serverId: o,
                          giftId: e
                        }).then(function (e) {
                          _t(e), Zt(!0)
                        }),
                          Ot({
                            giftId: e,
                            gameId: t,
                            giftName: n,
                            index: a,
                            isReceived: r
                          }),
                          r ||
                            En({
                              value: 'receiveGift',
                              ext: {
                                modulename: 'showGift',
                                giftId: e,
                                giftName: n,
                                pos: a
                              }
                            })
                      }
                    }),
                    a.createElement(Ye.Z, {
                      visible: Ht,
                      giftList: qt,
                      selectedGift: St,
                      giftDetail: Xt,
                      gameName: s,
                      customNeedToGame: !1,
                      onMaskClick: Rn,
                      onCloseClick: Rn,
                      onButtonClick: function (e) {
                        e.receiveStatus === m.Qp.NO_MORE &&
                          (1 === qt.length ? xe('/gift') : Gt(!0)),
                          Rn()
                      }
                    })
                  )
                : null,
              a.createElement('span', {
                className: 'divide'
              }),
              a.createElement(
                'span',
                {
                  className: 'all-game-block',
                  onMouseEnter: function () {
                    Qt(!1),
                      Gt(!1),
                      He(!0),
                      Xe(!0),
                      vn(!1),
                      hn({
                        value: 'allgames'
                      })
                  },
                  onMouseLeave: function () {
                    Xe(!1)
                  }
                },
                a.createElement(
                  'span',
                  {
                    className: 'all-game-trigger'
                  },
                  '最近玩过'
                ),
                Ke
                  ? a.createElement(ue.default, {
                      cls: 'info link',
                      allGameLoaded: Ke,
                      showAllGame: We
                    })
                  : null
              ),
              a.createElement(se.default, null)
            ),
            w &&
              a.createElement('iframe', {
                src: wt,
                title: '游戏',
                id: 'baidu-cp-game-slot'
              }),
            a.createElement(ae.Z, {
              size: 'small',
              showClose: !0,
              show: vt,
              src: de.image,
              url: de.url,
              onJump: function () {
                yt(!1),
                  En({
                    value: 'DBFestivalActiveBottomBannerJump'
                  })
              },
              onClose: function () {
                yt(!1),
                  En({
                    value: 'DBFestivalActiveBottomBannerClose'
                  })
              }
            }),
            a.createElement(Me, {
              setIsShowPass: Ge
            }),
            Ue
              ? a.createElement(
                  'div',
                  {
                    className: 'pass-content-game-box'
                  },
                  a.createElement($, {
                    titleIndicate: Re,
                    onLoginSuccess: Pn,
                    theme: 'light',
                    showCloseIcon: qe,
                    onCloseIconClick: function () {
                      return pn(!1)
                    }
                  })
                )
              : null,
            j && j.length
              ? a.createElement(
                  'div',
                  {
                    style: {
                      visibility: Pe ? 'visible' : 'hidden'
                    }
                  },
                  a.createElement(K, {
                    gameLists: j,
                    setUrgestayShow: function () {
                      ;(0, d.qQ)('game'.concat(Tt.gameId), 'urgestayed'),
                        En({
                          value: 'close',
                          ext: {
                            popupName: '更多热门游戏推荐'
                          }
                        }),
                        je(!1)
                    }
                  })
                )
              : null,
            !x && '端游' !== W && a.createElement(ne, null),
            x &&
              ie &&
              a.createElement(U, {
                qrcodeUrl:
                  ((Cn = Tt.idfrom),
                  (xn = /idfrom/.test(ie)),
                  Cn
                    ? xn
                      ? ie.replace(/idfrom=[0-9]+/, 'idfrom='.concat(Cn))
                      : ''.concat(ie, '&idfrom=').concat(Cn)
                    : ie),
                gameId: Tt.gameId,
                gameName: s
              }),
            ht &&
              a.createElement(
                ae.Z,
                {
                  className: 'netdisk-cer-modal',
                  size: 'middle',
                  show: !0
                },
                a.createElement(
                  'div',
                  {
                    className: 'netdisk-modal-wrap'
                  },
                  a.createElement(
                    'span',
                    {
                      className: 'netdisk-modal-close',
                      onClick: Un
                    },
                    '关闭'
                  ),
                  a.createElement(
                    'span',
                    {
                      className: 'netdisk-modal-to-cer',
                      onClick: Un
                    },
                    '立即认证'
                  )
                )
              ),
            Oe && Se && a.createElement(et.Z, null),
            fn &&
              a.createElement(st, {
                onClose: function () {
                  return gn(!1)
                }
              })
          )
        })
      },
      99705: function (e) {
        'use strict'
        e.exports =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAJoUlEQVRYCe1YXWwdRxU+s3uvr+3EcWraAAlSIUoKBSmA0jZ/RaKoaUpFUYISgchj1ag8oCDxQAGJIpAKApX+vFCFUkEfqhJFogK1IS1tUds4NfmpGnCcxhCnjS1I7DiJ7fj6+u7u4fvO3tm7vt6kQeoLEkd3dmbPnDnzzZlzzsxekcuRJn9RjZ/8Lfs16VNnjV0rVKaH0zELPyEla428I1Kup8zJoQbzX50iwUzKdJW0vuxTkyfVdwZs6KMLwFgq+liXdRhTJi6JxAMiE5MmnDJHqPxtkeF2Y2YP1dORJkdUkxdNhSavoz2goAUUSrGz9fz2UMqJSDKNlR5U2XefSNglUm+bQG/YFHz5TawpAjqwb8eULx/jcPA6DEpTsDQLJgpJAbgMQxiINmM1BUe7FomrPyQcf/jVNTK6qE80dO6J8XtN8moftjsU1uQ4JhoTceO7RNt3iHwA7WvFuetNxoCqHnxA3Ds/d8GtTpLRHaKnxQWrnejJuRPqHzb8RPdtVN13E2x3COWg6gtrVZ+7zZZD6XQXRuV+GTwsMvB3YMD0ck7k2Fsi7x4X/c3qmILpqk8OidSqwEQ4EITdZQQluSiyIG/HhWBWYDeHmahRUXdjYIIJO9O9TjVOQ1PUMIBNDUHyYpQw5aeCE7B+Fd4ScE5iBI2DF4cQTA7wtaEGs+3oeVg0XiD3rFrDDvn10T4Jw4Pu8fFf2XvRQ/XMS5oMwUz98LIj38nLqPb/TpOT4J95DY/UajmBbGbyVAfvEJ3eJ65adW5tJ4y+VJILI3hHb3JQtPNmCToviHwJ2/vGHtGOLeI6J527YZHX2aJw3xKJJ8/Iib1Y+vHX5dLEdRAsy4qty9MBOiX9T8GfdVSWfXq5LF19oyy9uebcnVlYzVX4zC0qJdg1GYf1EScJ3D2BYbf/3gMQeforsChWWkIuKF2DNsDV673uawc2UCjdFS/+dk3k0jAEptO99vzt8CRPhxF8JIfJHJJBe7dIT8/6lNmqsGMUW41SwiA6EYlrwAoz+jC8zhMdS5HGwma2mouQ2awGDdw7loyAkN5JAviM6GacGO7laa7CKfTMoNAhg4YCVgkQemtPNkaTH2NWpqPAUbXRXIVR+yMyufhbEsOWYkHXECPCRnOMgUXCDA7DK13iHu7PYUx7/4eeqhc2ajKMsDuByHprLB9eeF+jeuKc6rs11bEtRcvyprY+xOdm0Sl4MbeS4UZ/nBYX3uVU9z4gWvkhEhD4jeI63nBu2TowMmpReEypAE67wbn1varPDkpyaYW4maPw4FWmyHXeJdJ1VLQ8LNIB2SVdzi2Z8hrneJvoeSA6jwy6vpcCzm1eCT/iDq8SpZOe3+Pcpr3oR8K4+EcR5AkZ+SJlPbUgfL4uI38tydjAqPx7cFh0dpGs3LYMCtPg73/qkDicjmHHaVl+63a5AWDDD3UjM/GANJqr8Lk74Hz1QMp0OiCKEVabHke7IfYiziWGkIN+xXIj+Gsc/9R9ef93TRsemWPrM+v2S3UG0phsEkuPuCEMAGyOD7uzp6AMIgHSeQlZJuiBXHQ/hOYrlJnZtRJhcP0MCmysPNKBlJvkady3GZ5YQQUy4Qd9r9UZQhkLAhmHkWewTMvsQGHhhhTllzzUzCoIcJE2TLAw2+AWhROI1xgKHWYOfeBCxtyoYcNy435hQ/GIYXKI56mJ8BoYusqEAAk7/rxYzobXou2J170Iw9u6PMfqpkImYuojuPzeK5ZsRzv4sEZGlKN8S55pKuSG1iGVV0jFduKhJrUqTCAwNzSabiN1dLKYEGr8TDkResjs98QlU9ajb/CbCCNsWzUM7ALCZWRjczakm3qiMp4pLRCbCmeTPqmV1klUhl24fq6dBNfwyqeb4qkyuBazdo6yKd2DA+sFVxaZRWqaxo77wiXTdVg8j/UMQq8O2bD0SE5fzobgul1DTu/ruVei4BZxcQrxyKk12YCK9FmbCwjlkkT1H7hfDKY39EzofW5461yVWtVzn4I3fwZrheFmh+CIfc6tRMp5b8JRAjvBj5yj9141vSdA1bP34LbxBHTDxkxArFFYm6OD56I/gbHFudsssAEGent/BDt/X7SENhzHoSjW5eAYtnPlIzhVNjrXPX4ltJcFiEng3Kf+iUPg+hQY71oRVh+/gOsP9rW+CRkTF6880PoXAApxUN6PIwwOSQ8FMDFvjcGDTr57PoGXHsNHyc7LgbwCwL/thJXgsQ0ALtrt3Oe/mlekugcOOnNAEtzXGNBM79RI92X4KAAE5dud2/aSH6d6CMzqCKx5nQEnWNeGM/vGXi+Tr7OwyzPT9gWcUvhlZRxfT7v9tctEnNuKqAk/AlBTc8Gh2yUzEtQ+lgeX6sVTz+PMwMlgullPIoaL6bIWpLgO7Nwtw//YZlvM6yL9qIyi2GleL3lxpYbPPURpDgFlJhR59dspi1nOMhx2OGr4L2/QtPBHP7nXrfwZLgvFVAhQ99z0WQkX4WtsumIfDhZ48H8FSH5k2GkNkHYFgOLNTxdrf/brKZ/XAh47AbaT1wP7MwJBTTfnt4brrEk8sc5tPfRmqyJ663yqlV7Bx0fFFCgO6gTZNYYif+mmBe06Qauh5I9E80Osm/XZM5gc7awAEIHSegGzMjK5Y+Fc5VfQubgVTDHAqdluqWLVET5uIoCLYD1ajgcwP9Fod2Ij2R7waEhfjUFw7AC+1Dfxbv0Yj5uO7UAJWx1iR0oscO2OerfXkK+LAY5glVWAqkIJT5SIK6fP2Cz58Wk7f+3JW/A0rFNEdoQDaAn6QszRAZAdzOPzqRhgD62G6IobWxti5RYQUEiMrRbkJcWDz9INhD4+On9GcpjHWeyfh8ZWl+btro0tBsjD1l/BgM3+RSEoliKij5pV0OmNzBrGKST2sXAe32YcFVAxQIIiwAijLUWgTQVFAA14zgfzFrwSQIKjwgRzECS9qICKARo4SHMCU4TaAEIht5oK82AVW2xMVuygDOpCgOBzfF4vXv87gAxY/tuAzyhDxg8L/klAcIaMANDMCFs8B3GjgzryZNYFw/sgV80caXffvGCzXWzBenBRamG3RS+/FYjGBwnn9PNaxLKbybbBzEcx/wExth8AWb+1/A+P53UJMhYsmLOAigG65G6JKn+WWtyWbjNXSs0AimYWsZnCnA+S5607jVODbeKzGg3W5gZQFOCoi5Fe2iuz0H83euZRIUD342OvQbKi31z+DXwEPChJfbEkiBwebd4YNmkDiVlwnm64SSMP+q3NRAgOlgvLF6Qt+J57dPCXWdf/G++zBf4DV8ntgz8N9LwAAAAASUVORK5CYII='
      },
      1949: function (e) {
        'use strict'
        e.exports =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAFpOLgnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMqADAAQAAAABAAAAMgAAAAB1y6+rAAAEnUlEQVRoBe1ZO2zUQBBNQgJIFGmCBCJAGiQEFQ0S0FHxp4ASlBJRgKigBDooI/GnIVCmBdHR8f8JQUcDNBRJQYHEJyTwZuO3Gc+u1+u7SwIRK/lm5/PezOzaPp+vqwvjN4ZIDuo9hWEHDYU8yUAnjdPZHBKO7dBuFwEij5WQohBNB3NSL8mkU6iYy6GEGuOdV8glVpn3FoYeGqAPFDZX2ag4ijHqHTKB8bU4aKysrNJBpFuBIsdub5xJMVjYfRrt18B94kDwuiSAaAZBnuKcvkAi4AiOqeJgvEjabhPEBRW9G0esedrEXz3A7tZX0lRGibMYu2wQ7Gvo9D4YTgTGwks7pO/HuZRjL5lgW0s7bV7CMWCd1CG3+UA9UQEHMF9PXccESyZBOgDznu7ubm/z+4G48vk7i7olHAANi8lngHFqNsZv5DRtACzhPJAAuxE4YNAZfJ3RQKSI2Z0tlYEnWCXYOhoDSnVJKZYRpZdirF90wL5DLNM+jQsImiZC/A+QL61KIPag9aKCSQ2KJRZ/TgKJC5KIEYmksk8y57CJoP+ET3cwqZeIuFoJontCroeAoP/UNsw/1pKlAkBwzhBa9W4KH/WB4ahlaajfiRLnGJHI34iZNAcnMf72QwAIVmC+krqSepOdGbFDys/pV5wAE1SiEsB/c7mi10m0xTaM/rYim2l5ci8uQIN7F7h6gXffGrqTizYJwKXnHOsXHTFrIEo3R+gPmEBifCeiANC4G0CCLuwK6E4kz2H50AMke7Su5/ANQrddXNAxMi91IgYAs7tBaO1tXjhtJ2LbIB96gMw9ShrbWuj2Aj2kYzgPOhEHSL9A9DNIpF3n3C4EG+tE7KvkQw+Q7qeO+XrMbRfBCjC+UoLoFY7SYDCM9vtEOm9tlDLMKAchhiL25a1lAApkNyKEtouXdQmiG69BkkTrdm5PCOsXPUgCzlETuBX6RmOjOo7JfSoikXRY685mDXWV23irxzoLvhkB8s/WhsCe7rKMyaUkPlguOqyMdOhv5TbW6rY66++IHiwXKh7KZJbrRf+UcTDsyQeLD5YrsiwWk9RjGz8vyxV0UlVmpMO/a+PnZbkWT5Jgn7HB8krom2x0zXgcgNswINelmnx01z4L+jKA6McxQWRCPvGgNibgv5zIQdc0JlsapwGoD8d7siTk08bkCgDeKwluuuQMWadgzacgeES2hHzWnNk9peQ0MY68pafMVnI5DIjGEk3Q1agZgK4SmJByRvS1XHgMCMKRREK6nsew1obgawQk5EOL65iOpGcSiel6kUqIoOsMTMixFEdHfEgu79brRvTpG6CcJkY6UmgOCQraWdcJ/KVmoMd+flia0zn5OxqDCjbj+GUrMforSQrbTWOPqUc6WmATMlSzGsfXWFUNbTub5J2TWBS8AsfnhoUzXHZ005wUZkmRqN33kCy6VZn12ndeHn/t4vwTOpY9ePcd2Yrg12m7zS3UjmS9VWjS3EI10qTGzsTitPh/sXdmKfNYci66N6A6m0fnoo7jM3iJbPDnoVe9qTOhXW+tYV70zLtW9d/3LVa5aC72/420eAbMGWzR7MgfH/psqIXPiMcAAAAASUVORK5CYII='
      },
      85129: function (e) {
        'use strict'
        e.exports =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAAA8CAMAAACHBCVtAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAQIDAEPBgIOAw0LCgcJBQtnEtCAAABjVJREFUeNrtm+t6oyAQQLnfUd7/aXezEEcZKFDTzX5f9vxpYxThCDOALVmDmZSSp+Q/DYRLGUU+FhE95zxqgvHpiSUfCpMpswlSYdOBJ59JAAVO1Oby4X3nKZGPZEsnHHmiKWWMmcdB+ZBmPlMPTU84Tymxx7F94+mEeUQl9pl6wmlcaZcMoUEmhInckJ+FZSj5aVjm8asa3jO7yAOICJlc6mA0+VFShn3VJMie/Hy2zh90dQniciNUCgJKTlseaSZ9QegIovPY/iXPm1SHxXl+Edp6AnwJJEz+wi3ooQnOED59jYzt5z4PX74kd3xVenBTj82V05N6OPQ1Dle20TCroXKieeI9egTMTS194KCvla7l6ZORHih447/xlvR5OhGq1ZqN0Qc7C6U+5h16YHRtR+sAdGRSz1rmQqF4uxYg9j8pTb1DD4yue3os/40pDeYHinTZO+3YCUaoje1v0QOja1oPO1FCJ6GpCSNdRLMVlCzAa1IhsBp10TN/Fxhd03pw/vEreuC+NXInt7DPcgimoQcSeD1XgIwCo+s7ekrvid/Rg0KyFy9axYUZPfA7/p412mgtddcJErEUQJlLQA+w63rw6NrIXUzK7GM9EBgCw8GCM8Y0QXBo0zjnqCM7S7KsB48uRe5iU0GM9aQhdKzH8iuXnOOOuZ1/npkyOHONR9f2uh0ST16nJ8KaC+lBfeI6o7PPBsZqqje9Zr+9JZjmYN/TA3UMJz2GF3p6wvOBb9WKlcPnMToBRvyjenYYr2hi2NNDn/nTVfN9Xw9bMdl59q5DGhnb6Uv0rIdmGBBqWg+kCFXnUXZtrAiT00LecbOZY/Cp+3rWEzs8cd/SY3nGle5SBUEwW4iX0q1LbC4w036o5awoMvtf0COQHgVNR3qqXsFQCq1CDT2fp2T+bZzWTf89YDjVauvqCawDX9MjHNKj4Ql29Zg6fprUbByFsSLCYN4jB0ndH7UKz44asJ7BGooN9HRguJ7x0MNZiZpVB1PotmgKf+ixbmYzFbUOmxZ5xLLs5w16ODxCXr6koAfOcJ3GKVRdSZQcb6YC3cADMAVB/+f1RFwE7+qxjTo4KEtg1WG8qIj4FSCAxznLdzR/R49e0QOfgNhuHB/vEOPhySf0qHJH9Tf0KHJXj4a4ispCXy3rwYNLlz7sX6iHdhBkUo+lD0pPyReip7v39Mid3NCjkej8W1NPpB1CT88IHC8aenh/kW9GvcdZMqnHDaeNHFpmXzQttPRLbP2Y1JIeeLim3eYgyKyeRJrsElqHHvxtPXxq6x7qKZb0QGiG5yn8wubWjopFCOV54j5m0fYteoSEsbWgx+MAbN14BQ7Q1a2w+BY9Clq+ogcvKpSsThyQAEkmcG/REyA8LmSuHU2iFJ52jpsLQ3G6t4lbmQvrceyCq/TAmnZl3rMhF2x+Cx4XIcVsfjWvmvf41ptHylPBoxus6MmSyy0c1uPJELtwPqSC8LJpYZTw3rqWIyO5o0eXblP86KMiHrY0hpiF0Wglivm3Z80C+q9RZzmJCXJLjyopvfyMpSJSwZp9LhUBasqOJPf0iMv52oMg0/5bNPkdPb7UVcPoYilxvfQuR8jZaE5hgnhTD4Xzq/GEQtGN0CyfAcMdo4vJeC7PkjEMvWIfnSfFop7Q1qPhDGUSABvaaCe+r0fVeuxx03g8eaov5SmyGH3K2MQogxLidGJnqa3nPDN36YRTovloTE8P7E+jayiB0YXK02QMTRWmrp2IZ4Xu9puKWJqi2R82lxBuy9/pSxV1U8+jGIMWjuALRhcKuPw3dnLuA0iv7FMNZVVksLf1sKKZpiEU7cRjPbT1QkKckvdWx1WLb9FHoKcHb7H7O8Dreuw10nKkx6hoWnpgVTHSw+rFNjvZcO3FAp3PXmMC+a4eX53PKj35D0kUx3pg+aSRHpn1IAHhPEMz9eiyckYPnL1qZ12Pr5eK+2VUbPqozGZw3cuhiPQo0AO3gAvykQ1lKmuwnvt+Qjvnj4kWTqf5kCAafVuwkRX09Rp1/KMIJTr/IEcxGtcplvLyp8t8YYdbjNFuLrh+KiKkEfKj/x95l8Pg8dGILfXhH911MnqT/+V8hVA+AZB0/3NAmXcpI/mmPsvNLwMwgOzbqc99AAAAAElFTkSuQmCC'
      },
      15461: function (e) {
        'use strict'
        e.exports =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAHAAAAADIVzd0AAABBklEQVRIDcXWQQrCMBAF0F9178pT9AiC4BE8qSu3FgSP4ClcuVfiTAYKIU2TNM2koFj097+0Mi3QeOu439xxQ4c9trh0J7xzTSX5jS3jcoMjvhjMA4dcgMUvzAuAVk6lL3r1ixAFeXsJeMV25XQGLIIxO5xzLsfS/AhohXAALRAeQBsxCdBEBAFaiFmABiIKqI1IAtREyCTkhshmhxINJ/qZTMwfrpGI83UonwxwjrbiTjLAG7Uy/5MpoXzSf8ALr3ifiAJqlvPpmwXULp8FaJQHAVrlkwDNcg+gXe4AWpSPgFblDJBJKHO9p/3sh1E+CAryAjD40ER45j4J23J+K82PB2rw4Q+FRBYxSGV8egAAAABJRU5ErkJggg=='
      },
      89632: function (e) {
        'use strict'
        e.exports =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAHAAAAADIVzd0AAABEElEQVRIDcXWPw6CMBQG8BYIK5NHcPIITh7BK3gqJ67g5OzkEUxMPIKTKwFrXy0kUFr6h76yEINfv1/FPCAk8UGhv32er/xU5Xl5pNvT29UUks9kWUUY23/b5sZe9cYVAHjfvACInRP6YITtfBAheXELYMewc1HOEZRjsqI8uNwO3/wASIUYAVIgFAA2YhaAidACsBBGAAZiERAbYQWIiehHMXQYDxhKYjjJidl1zcUYmFzU5a0Bk/VW+1jYrqSMWv7ktM3C93R5q/+AEl7xObEIiFkOv4wRELvcCMAo1wKwymcBmOUKALt8BEhRPgBSlQNATML/XPd7GYVFQvL9s+BDKL27vglDuTxC8/06+OcfVvb0NaepbVUAAAAASUVORK5CYII='
      }
    }
  ]
)
