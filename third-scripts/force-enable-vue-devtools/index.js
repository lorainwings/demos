// ==UserScript==
// @name              Force Enable Vue Devtools
// @version           0.0.1
// @author            Lorain <lorainwings@gmail.com> (https://github.com/lorainwings)
// @description       Force enable Vue Devtools for any Vue2 or Vue3 production build.
// @homepage          https://github.com/lorainwings/demos/tree/master/third-scripts/enable-vue-devtools
// @supportURL        https://github.com/lorainwings/demos/issues
// @namespace         https://blog.yasuo.fun
// @name:zh-CN        Force Enable Vue Devtools
// @name:zh-TW        強制開啓Vue Devtools
// @description:zh-CN 为生产构建的Vue2或Vue3应用强制开启Vue Devtools
// @description:zh-TW 爲生產構建的Vue2或Vue3應用強制開啓Vue Devtools
// @license           MIT
// @run-at            document-idle
// @noframes
// @include           /^.*$/
// @grant             unsafeWindow
// @grant             GM_info
// @grant             GM.info
// ==/UserScript==

function nuxtDetected() {
  const nuxtDetected = !!(window.__NUXT__ || window.$nuxt)

  if (nuxtDetected) {
    let Vue

    if (window.$nuxt) {
      Vue = window.$nuxt.$root && window.$nuxt.$root.constructor
    }
    if (Vue.config.devtools != true) {
      Vue.config.devtools = true
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue
    }

    window.postMessage(
      {
        devtoolsEnabled: true,
        vueDetected: true,
        nuxtDetected: true
      },
      '*'
    )
    return true
  }
  return false
}

function vue3Detected() {
  const vueDetected = !!window.__VUE__ || app.__vue_app__

  if (vueDetected) {
    const allVue3 = document.querySelectorAll('*')
    let elVue3
    let versionVue3
    for (let i = 0; i < allVue3.length; i++) {
      if (allVue3[i].__vue_app__) {
        elVue3 = allVue3[i].__vue_app__
        versionVue3 = allVue3[i].__vue_app__.version
        break
      }
    }
    if (elVue3) {
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.push({
        app: elVue3,
        version: versionVue3,
        types: {
          Comment: Symbol('Comment'),
          Fragment: Symbol('Fragment'),
          Static: Symbol('Static'),
          Text: Symbol('Text')
        }
      })
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled = true

      console.log(
        `\n %c 检测到Vue@${versionVue3}应用 %c 已开启Devtools \n`,
        'color: #000000; background: #ffffff; padding:5px 0;',
        'color: #ffffff; background: #1ab394; padding:5px 0;'
      )

      window.postMessage(
        {
          devtoolsEnabled: true,
          vueDetected: true
        },
        '*'
      )
      return true
    }

    return false
  }
}

function vue2Detected() {
  const all = document.querySelectorAll('*')
  let el
  for (let i = 0; i < all.length; i++) {
    if (all[i].__vue__) {
      el = all[i]
      break
    }
  }
  if (el) {
    let Vue = Object.getPrototypeOf(el.__vue__).constructor
    while (Vue.super) {
      Vue = Vue.super
    }

    if (Vue.config.devtools != true) {
      Vue.config.devtools = true
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue
      console.log(
        `\n %c 检测到Vue@${Vue.version}应用 %c 已开启Devtools \n`,
        'color: #000000; background: #ffffff; padding:5px 0;',
        'color: #ffffff; background: #1ab394; padding:5px 0;'
      )
    }
    window.postMessage(
      {
        devtoolsEnabled: true,
        vueDetected: true
      },
      '*'
    )
    return true
  }
  return false
}

function detect() {
  // Method 1: Check Nuxt.js
  if (nuxtDetected()) return
  // Method 2: Check  Vue 3
  if (vue3Detected()) return
  // Method 3: Scan all elements inside document
  vue2Detected()
}

console.log('%c------>[LOG:开始运行]', 'color: fuchsia')
detect()
