// ==UserScript==
// @name         京东读书PDF下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://e.m.jd.com/static/read/*
// @grant        none
// ==/UserScript==

$(function () {
  'use strict'
  // Your code here...
  const addPromise = (f) => new Promise((r, e) => f(r, e))
  const events = []

  const style = (r) => {
    const s = `
          .JD_header, .JD_footer, #wrapper-pay-epub, .popup-dialog{
              display:none !important;
          }
          .page_container {
              width: 90% !important;
          }
      `
    const st = document.createElement('style')
    st.innerHTML = s
    st.onload = r
    document.head.appendChild(st)
  }

  const load = async (rsall) => {
    const max = 50
    let count = 0

    const loadStart = (r) => {
      const mode = document.compatMode
      const el = ~mode.indexOf('css1')
        ? document.documentElement
        : document.body
      const st = el.scrollTop
      if (st !== 0) el.scrollTop = 0
      count++
      setTimeout(() => {
        if (el.scrollTop === 0) {
          r()
          return
        }
        loadStart(r)
      }, 500)
    }
    const loadEnd = (r) => {
      const mode = document.compatMode
      const el = ~mode.indexOf('css1')
        ? document.documentElement
        : document.body
      const ph = el.scrollHeight
      el.scrollTop = ph
      count++
      setTimeout(() => {
        if (el.scrollHeight === ph || count === max) {
          r()
          return
        }
        loadEnd(r)
      }, 1000)
    }
    await addPromise(loadStart)
    await addPromise(loadEnd)
    rsall()
  }

  const evMoniter = () => {
    window.constructor.prototype.addEventListener = function (...args) {
      const [type, f] = args
      if (type === 'resize') {
        events.push(f)
      }
    }
  }

  const removeJs = () => {
    const sc = document.querySelectorAll('script')
    sc.forEach((s) => {
      s.parentNode.removeChild(s)
    })
  }

  const ask = () => {
    const r = window.confirm('是否需要下载当前文章?')
    if (!r) return
    window.print()
  }

  const removeResize = (r) => {
    if (!window.getEventListeners) {
      events.forEach((f) => void window.removeEventListener('resize', f))
    } else {
      const evs = getEventListeners(window)
      if (!evs.resize) return
      evs.resize.forEach((e) => {
        window.removeEventListener(e.type, e.listener)
        r()
      })
    }
  }

  const main = async () => {
    await addPromise(load)
    removeJs()
    await addPromise(style)
    await addPromise(removeResize)
    ask()
  }

  main()
})
