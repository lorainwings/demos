// ==UserScript==
// @name         拼多多Ipad秒杀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://mobile.yangkeduo.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        none
// ==/UserScript==

$(function () {
  'use strict'

  window.JQ = $

  let isPause = false

  function start() {
    console.log('--开始抢购')
    if (isPause) return
    $('._1NYJ19ir._3ZnFiR1Z').click()
    const timer = setTimeout(() => {
      const ctx = $('._1fxhW6ly')
      const desc = $('._-9QJS4rV').text()
      if (ctx.length && /开抢/g.test(desc)) {
        $('._1ndnGTGp _2ohwni30').click()
        clearTimeout(timer)
        start()
      } else {
        console.log('--已点抢购')
        let count = 10
        while (count-- > 0) {
          $('.rWnMut3Q').click()
          $('.SCxpgXCc').click()
          $('._1MTN8Aqi').click()
          $('._17xol9LY').click()
        }
      }
      isPause = false
    }, 500)
  }

  function pause() {
    isPause = true
  }

  const renderButton = () => {
    console.log('---开始加载')

    $('head').append(`
    <style>
      #r-b-container {
        position: fixed;
        right: 20px;
        top: 20px;
      }
    </style>`)

    $('body').append(`
    <div id="r-b-container">
      <button class="start">开始抢购</button>
      <button class="pause"></button>
    <div>`)

    $('#r-b-container').on('click', 'button.start', start)
    $('#r-b-container').on('click', 'button.pause', pause)
  }

  window.onload = renderButton
})
