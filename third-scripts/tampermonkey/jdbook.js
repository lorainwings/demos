// ==UserScript==
// @name         常用技术blog清爽模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://pro.m.jd.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment.min.js
// @grant        none
// @connect *
// ==/UserScript==

;(function () {
  'use strict'
  // Your code here...

  /* const getTime = async () => {
    const t = await fetch(
      'https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5'
    ).then((r) => r.json())
    return t
  }

  const wait = async () => {
    const target = +new Date('2022-11-10 19:59:58')
    if (t.currentTime2 >= target) return
    setTimeout(async () => {
      const t = await getTime()
      if (t.currentTime2 < target) wait()
    }, 300)
  } */

  const update = () => {
    const el = $('.coupon.in_date_out_time .coupon_status_stamp')
    console.log('---', el)

    if (!el.length) return
    setTimeout(update, 500)
  }

  const click = async () => {
    // await wait()
    update()
    $('.bab_opt_mod.bab_opt_mod_1_6.free_coupon').click()
  }
})()

