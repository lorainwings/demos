// ==UserScript==
// @name         优惠券秒杀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://coupon.m.jd.com/coupons
// @require      https://ga.jspm.io/npm:es-module-shims@1.6.2/dist/es-module-shims.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js

// @grant        none
// ==/UserScript==

;(function (g) {
  'use strict'
  const url = `https://s.m.jd.com/activemcenter/mfreecoupon/getcoupon?linkKey=AAROH_xIpeffAs_-naABEFoeDAtN3tNKH6bwEtW3g2DYNJqsfj_86i0e57TNZOzvTVjWSBw2VWKQLB75QFD7i4-RxWuwsg&to=m.jd.com&_stk=linkKey,to&_ste=1&h5st=20221102100343039;7984702325665301;8ba9b;tk02w7a221b2e18ne8V0IUHqPlwPk5q82DQjNSN48yBrJOR7Mj1vx1A96HnFc4FjsnKnqmg/608pZgNMqbRht5Z3Wk2T;7c3ec1487c2a1ecfd98ad4dae856702443993a9dfb3fd596a63c7f29e1a34ec4;3.0;1667354623039&_=1667354623041&sceneval=2&g_login_type=1&appCode=ms0ca95114&callback=jsonpCBKD&g_ty=ls`
  const script = `<script src='url'></script>`

  $(document.body).append(script)

  $('.coupon-btns .btn').text().indexOf('')
})(Window)
