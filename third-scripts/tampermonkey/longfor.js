// ==UserScript==
// @name         Open Longfor Devtools
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  在检测到Vue.js环境时，打开vue开发工具的开关，并关闭maia-sdk的弹窗
// @author       Lorain
// @include      /^(http|https)://[^]+\.longfor\.[^]/
// @include      /^(http|https)://localhost/
// @icon         https://cn.vuejs.org/images/logo.svg
// @grant        none
// @run-at       document-start
// @require      https://cdn.bootcdn.net/ajax/libs/vue/2.5.8/vue.js
// ==/UserScript==

;(function (g) {
  'use strict'

  Vue.config.productionTip = false

  // 禁用龙信sdk唤醒
  window.createIfm = () => {}

  const empty = (ctx) =>
    new Proxy(
      {},
      {
        get(target, propKey, receiver) {
          console.log(`${ctx}: ${propKey}!`)
          return () => {}
        }
      }
    )

  // 禁用maia-sdk唤醒
  Object.defineProperty(window, 'maiaH5', {
    get() {
      return empty('[get maia-sdk]')
    },
    set(f) {
      console.log('[set maia sdk]', f)
    },
    configurable: false
  })
})(Window)
