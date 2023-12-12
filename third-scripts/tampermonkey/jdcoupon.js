// ==UserScript==
// @name         优惠券秒杀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://pro.m.jd.com/mall/active/*
// @match        *://prodev.m.jd.com/mall/active/*
// @match        *://detail.m.tmall.com/item.htm
// @match        *://pro.m.jd.com/jdlite/active/*
// @match        *://market.m.taobao.com/apps/market/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        none
// ==/UserScript==

$(function () {
  'use strict'
  // Your code here...
  const request = (opts) => {
    return new Promise((rs, rj) => {
      $.ajax({ ...opts, success: rs, error: rj })
    })
  }

  const callApiCheck = async (data) => {
    return request({
      url: `https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection`,
      method: 'POST',
      data,
      dataType: 'json',
      xhrFields: { withCredentials: true }
    }).catch((e) => e)
  }

  const callApiCheckAll = async () => {
    const bodys = [
      'body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D0BA8EA20F867138EB117A751BC1735A4C652EF62652283C962439E7B19A0238343D02E2BABF6ACEB951D3D0C0B0B7E4E_babel%2CroleId%3DA6E578381B3D69C72D2028D01F6F49B7_babel%22%2C%22platform%22%3A%223%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22MX4S4KSTHISLFBUGDM5L5TDK2UKKF4LL7VBHLVEWPBY6Y3F25ERXI3VGGFNKZXJ6TN442CIBZY3MW7YFGOTHT5QKHM%22%2C%22fp%22%3A%22ff35b48cd1deef4d007dfac05a79ce31%22%2C%22shshshfp%22%3A%222b947502435df2d0db3d0bd9b3e878e0%22%2C%22shshshfpa%22%3A%22e1f5b558-61e7-cbbc-5eb7-7956f510e5ac-1546867479%22%2C%22shshshfpb%22%3A%22jGRcQ2j12%20WN9sO95v1XVWg%3D%3D%22%2C%22childActivityUrl%22%3A%22https%3A%2F%2Fpro.m.jd.com%2Fjdlite%2Factive%2F3H885vA4sQj6ctYzzPVix4iiYN2P%2Findex.html%3Fcu%3Dtrue%26utm_source%3Dweixin%26utm_medium%3Dweixin%26utm_campaign%3Dt_1000072672_17053_001%26utm_term%3Dbb5863e67bdd43cdbaf631d5f826fe6c%26PTAG%3D17053.1.1%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22homeLng%22%3A%22%22%2C%22homeLat%22%3A%22%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=750*1334&client=wh5&clientVersion=1.0.0&sid=&uuid=1605006429058559342576&area=',
      'body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D44ADBA901822B0B411D45D4249A1E30513301B32ECF67BC2584ED18948B06F29E4092763C5B428A75557949303E18C25_babel%2CroleId%3D5708B82862087DC3FE822825275AEEAB_babel%22%2C%22platform%22%3A%223%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22MX4S4KSTHISLFBUGDM5L5TDK2UKKF4LL7VBHLVEWPBY6Y3F25ERXI3VGGFNKZXJ6TN442CIBZY3MW7YFGOTHT5QKHM%22%2C%22fp%22%3A%22ff35b48cd1deef4d007dfac05a79ce31%22%2C%22shshshfp%22%3A%222b947502435df2d0db3d0bd9b3e878e0%22%2C%22shshshfpa%22%3A%22e1f5b558-61e7-cbbc-5eb7-7956f510e5ac-1546867479%22%2C%22shshshfpb%22%3A%22jGRcQ2j12%20WN9sO95v1XVWg%3D%3D%22%2C%22childActivityUrl%22%3A%22https%3A%2F%2Fpro.m.jd.com%2Fjdlite%2Factive%2F3H885vA4sQj6ctYzzPVix4iiYN2P%2Findex.html%3Fcu%3Dtrue%26utm_source%3Dweixin%26utm_medium%3Dweixin%26utm_campaign%3Dt_1000072672_17053_001%26utm_term%3Dbb5863e67bdd43cdbaf631d5f826fe6c%26PTAG%3D17053.1.1%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22homeLng%22%3A%22%22%2C%22homeLat%22%3A%22%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=750*1334&client=wh5&clientVersion=1.0.0&sid=&uuid=1605006429058559342576&area=',
      'body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DA75FFC01763F6F0F7A2D9AACB11DEC2DB50551B208A9F789C3C12D1F6D1BB07842DF437149EA5E5B2146EA8A022376C3_babel%2CroleId%3DCDC36B0A46813664CF37E58D3427A62F_babel%22%2C%22platform%22%3A%223%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22MX4S4KSTHISLFBUGDM5L5TDK2UKKF4LL7VBHLVEWPBY6Y3F25ERXI3VGGFNKZXJ6TN442CIBZY3MW7YFGOTHT5QKHM%22%2C%22fp%22%3A%22ff35b48cd1deef4d007dfac05a79ce31%22%2C%22shshshfp%22%3A%222b947502435df2d0db3d0bd9b3e878e0%22%2C%22shshshfpa%22%3A%22e1f5b558-61e7-cbbc-5eb7-7956f510e5ac-1546867479%22%2C%22shshshfpb%22%3A%22jGRcQ2j12%20WN9sO95v1XVWg%3D%3D%22%2C%22childActivityUrl%22%3A%22https%3A%2F%2Fpro.m.jd.com%2Fjdlite%2Factive%2F3H885vA4sQj6ctYzzPVix4iiYN2P%2Findex.html%3Fcu%3Dtrue%26utm_source%3Dweixin%26utm_medium%3Dweixin%26utm_campaign%3Dt_1000072672_17053_001%26utm_term%3Dbb5863e67bdd43cdbaf631d5f826fe6c%26PTAG%3D17053.1.1%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22homeLng%22%3A%22%22%2C%22homeLat%22%3A%22%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=750*1334&client=wh5&clientVersion=1.0.0&sid=&uuid=1605006429058559342576&area=',
      'body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D8956CC481859D95DBD5DAD809511745735510AAB02E7987E1B90DF3EF45B7AD6D5F35AF79B5D26ECD3404F4AE7C40ABB_babel%2CroleId%3D1449588651ABB4A9336241A1201BEA61_babel%22%2C%22platform%22%3A%223%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22MX4S4KSTHISLFBUGDM5L5TDK2UKKF4LL7VBHLVEWPBY6Y3F25ERXI3VGGFNKZXJ6TN442CIBZY3MW7YFGOTHT5QKHM%22%2C%22fp%22%3A%22ff35b48cd1deef4d007dfac05a79ce31%22%2C%22shshshfp%22%3A%222b947502435df2d0db3d0bd9b3e878e0%22%2C%22shshshfpa%22%3A%22e1f5b558-61e7-cbbc-5eb7-7956f510e5ac-1546867479%22%2C%22shshshfpb%22%3A%22jGRcQ2j12%20WN9sO95v1XVWg%3D%3D%22%2C%22childActivityUrl%22%3A%22https%3A%2F%2Fpro.m.jd.com%2Fjdlite%2Factive%2F3H885vA4sQj6ctYzzPVix4iiYN2P%2Findex.html%3Fcu%3Dtrue%26utm_source%3Dweixin%26utm_medium%3Dweixin%26utm_campaign%3Dt_1000072672_17053_001%26utm_term%3Dbb5863e67bdd43cdbaf631d5f826fe6c%26PTAG%3D17053.1.1%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22homeLng%22%3A%22%22%2C%22homeLat%22%3A%22%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=750*1334&client=wh5&clientVersion=1.0.0&sid=&uuid=1605006429058559342576&area='
    ]
    const checkApiArr = bodys.map(callApiCheck)
    const resultArr = await Promise.all(checkApiArr)
    const successArr = resultArr.filter((p) => p.code !== '0')
    console.log(
      '%c 🐥🐥🐥🐥🐥🐥🐥🐥  优惠券接口查询中...  🐥🐥🐥🐥🐥🐥🐥🐥🐥',
      'color:#b90905',
      successArr
    )
    if (successArr.length)
      console.log(
        '%c ✨✨✨✨✨✨✨ 恭喜抢券成功! 至少抢到一张券!  ✨✨✨✨✨✨✨✨',
        'color:white;background-color:#1ab394;'
      )
    else {
      clearTimeout(callApiCheckAll.timer)
      callApiCheckAll.timer = setTimeout(() => {
        callApiCheckAll()
      }, 200)
    }
  }

  const refreshCheck = () => {
    callApiCheckAll()
    if (!~location.href.indexOf('jd')) return
    const bel = document.querySelectorAll(
      '.free_coupon a,.free_coupon_module a'
    )
    const existArr = [...bel].filter((item) =>
      item.classList.contains('button_can_click')
    )
    if (existArr.length) {
      existArr.forEach((item) => item.click())
      console.log('恭喜抢券成功!')
      setTimeout(() => {
        location.reload()
      }, 1000)
    } else {
      console.log('优惠券检查中...')
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  }

  const rushCoupon = () => {
    const btn = $('.btn')
    const btnText = $('.btn .btnText')
    const timeout =
      new Date().getMinutes() >= 2 && new Date().getMinutes() !== 59
    const exist = btnText.text() !== '已抢光'
    if (timeout) {
      console.log('超时了,结束任务!')
      return
    }
    if (exist) {
      btn.click()
      console.log('恭喜抢券成功!')
      setTimeout(rushCoupon, 300)
    } else {
      console.log('红包检查中...')
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  }

  const getJdTime = async () => {
    const res = await request({
      url: `https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5`,
      method: 'GET',
      dataType: 'json'
    })
    return res
  }

  const getBookCoupon = () => {}

  /* {
    currentTime: "2021-11-01 19:01:35",
    currentTime2: "1635764495187"
  } */
  const bookCouponUpdate = async () => {
    const { currentTime, currentTime2 } = await getJdTime()
    const timestamp = new Date('2021-11-01 19:59:30').valueOf() - currentTime2
    if (timestamp <= 10) {
      getBookCoupon()
      return
    }
    const delay = parseInt(timestamp / 2)
    bookCouponUpdate.timer = setTimeout(
      (() => {
        console.log('开始计时', delay)
        bookCouponUpdate()
      },
      delay)
    )
  }

  const main = () => {
    // if (~location.href.indexOf('jd')) refreshCheck();
    // if (~location.href.indexOf('taobao')) rushCoupon();
    bookCouponUpdate()
  }

  window.onload = main
})
