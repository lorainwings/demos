// ==UserScript==
// @name         JD优惠券秒杀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://pro.m.jd.com/mall/active/*
// @match        *://prodev.m.jd.com/mall/active/*
// @match        *://detail.m.tmall.com/item.htm
// @match        *://pro.m.jd.com/jdlite/active/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        none
// ==/UserScript==


(function () {
    'use strict';
    const refreshCheck = () => {
        if (!~location.href.indexOf('jd')) return;
        check.timer = null;
        const bel = document.querySelectorAll('.free_coupon a,.free_coupon_module a');
        const existArr = [...bel].filter((item) => item.classList.contains('button_can_click'));
        if (existArr.length) {
            clearTimeout(check.timer);
            existArr.forEach(item => item.click());
            console.log("恭喜抢券成功!");
        } else {
            console.log("优惠券检查中...");
            clearTimeout(check.timer);
            setTimeout(() => { location.reload() }, 2000);
        }
    }

    // Your code here...
    const request = (opts) => {
        return new Promise((rs, rj) => {
            $.ajax({
                ...opts,
                success: rs,
                error: rj
            })
        });
    }

    const callApiCheck = async () => {
        const data = await request({
            url: `https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection`,
            method: 'POST',
            data: 'body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D5A003DD04F3E7E5C8636BAA3BDC0C271DEAA44AC30A73C0F410CC8D1DF8AA4F69E3CD63600598E14E74BC266BA46876F_babel%2CroleId%3D76687B3A676A1A1AF08CFC1568FCBA45_babel%22%2C%22platform%22%3A%223%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22KLIBL4RSEWNJYF4LTRJ6W6MN252KN24LIMAD2YJRZDE6U62K2BTNI477YIQM3AWZ2B2TLDKQLFGXAXDK5TFU6AQGKE%22%2C%22fp%22%3A%22eb8c4eae2c05af5ab3b9619d9f9aefde%22%2C%22shshshfp%22%3A%228a07ff9582034a2d4fb94994f7be13ad%22%2C%22shshshfpa%22%3A%22fd830e91-bbea-7d64-c781-9cff424f144f-1602864698%22%2C%22shshshfpb%22%3A%22iZOImm8LnmKKPnsH1xjbSKA%3D%3D%22%2C%22childActivityUrl%22%3A%22https%3A%2F%2Fpro.m.jd.com%2Fjdlite%2Factive%2FvN4YuYXS1mPse7yeVPRq4TNvCMR%2Findex.html%3F_ts%3D1606006763826%26utm_user%3Dplusmember%26ad_od%3Dshare%26utm_source%3Dandroidapp%26utm_medium%3Dappshare%26utm_campaign%3Dt_335139774%26utm_term%3DCopyURL%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22homeLng%22%3A%22%22%2C%22homeLat%22%3A%22%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=750*1334&client=wh5&clientVersion=1.0.0&sid=&uuid=16028646986161145512452&area=',
            dataType: 'json',
            xhrFields: { withCredentials: true }
        }).catch(e => e)
        console.log("优惠券接口查询中...", data);
        if (data.code !== '0') console.log("恭喜抢券成功!")
        else {
            clearTimeout(callApiCheck.timer);
            callApiCheck.timer = setTimeout(() => {
                callApiCheck();
            }, 1000);
        }
    }
    // refreshCheck();
    callApiCheck();
})();

