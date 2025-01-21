
// ==UserScript==
// @name         抖音自动滚动加载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://www.douyin.com/user/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment.min.js
// @grant        none
// @connect *
// ==/UserScript==

; (function () {
  'use strict'
  // Your code here...
  const asyncCreate = () => ((asyncCreate.r = []).push(new Promise((...args) => asyncCreate.r.push(...args))), asyncCreate.r)
  let timer = null

  const checkDomReady = (cb) => {
    const [container] = $('[data-e2e="scroll-list"]')
    if (container.children.length) return cb(), clearTimeout(timer)
    timer = setTimeout(() => checkDomReady(cb), 1000)
  }

  const scroll = async (el) => {
    if (/暂时没有更多了/g.test(el.innerText)) return
    el.scrollTo(0, el.scrollHeight)
    setTimeout(() => scroll(el), 500)
  }

  const main = () => {
    const [scroContainer] = $('.route-scroll-container')
    scroll(scroContainer)
  }

  checkDomReady(main)
})()


