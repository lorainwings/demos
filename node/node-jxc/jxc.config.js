/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-24 20:46:01
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-25 12:56:34
 * @FilePath: /demos/node/node-jxc/jxc.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  browserDirectory: "/Applications/Google Chrome.app/Contents/MacOS/Google\ Chrome",
  userDataDirectory: ".puppeteer_cache/user_data",
  // 要下载小册的阅读链接
  link: "https://juejin.cn/book/6982013809212784676/section/6982013918382292995",
  customStyle: `
    @page {
      size: A4 portrait;
      margin: 0;
    }
    .book-content__header, .book-direction, .step-btn step-btn--next{
      display: none!important;
      width: 0!important;
      height: 0!important;
    }
    .book-body.transition--next{
      padding-top: 0!important;
    }
  `,
  // cookie使用chrome插件EditThisCookie导出
  cookie: [
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "__tea_cookie_tokens_2608",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "%7B%22web_id%22%3A%227057512029028697608%22%2C%22ssid%22%3A%22624aca22-c372-4a97-a8fa-3b8c9cb620e1%22%2C%22user_unique_id%22%3A%227057512029028697608%22%2C%22timestamp%22%3A1643205080724%7D",
      "id": 1
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 1724473817,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_ga",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "GA1.2.1472235502.1643205081",
      "id": 2
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 1661488217,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_gid",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "GA1.2.727189701.1661330414",
      "id": 3
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 1756009817,
      "hostOnly": false,
      "httpOnly": false,
      "name": "_tea_utm_cache_2608",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "{%22utm_source%22:%22web_nav%22}",
      "id": 4
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 1669177817.406024,
      "hostOnly": false,
      "httpOnly": false,
      "name": "MONITOR_WEB_ID",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "5edd95f9-426c-435d-8c45-9f376b3c42ee",
      "id": 5
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "n_mh",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "DUqxw5TR4ZkQXS7qk-K3SQSdYpSH5KX4Lce-X4-qAXY",
      "id": 6
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "sessionid",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "e76a67c8bf5bab37201df690221d0980",
      "id": 7
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "sessionid_ss",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "e76a67c8bf5bab37201df690221d0980",
      "id": 8
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "sid_guard",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "e76a67c8bf5bab37201df690221d0980|1654164503|31536000|Fri,+02-Jun-2023+10:08:23+GMT",
      "id": 9
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "sid_tt",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "e76a67c8bf5bab37201df690221d0980",
      "id": 10
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "sid_ucp_v1",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "1.0.0-KGNiYWM3MTUyNGM3MjE3NTllZDgxYTZjYzkxYTYwZmYwZTU1NGMwNTIKFwiYtpC__fXtBBCXmOKUBhiwFDgCQO8HGgJsZiIgZTc2YTY3YzhiZjViYWIzNzIwMWRmNjkwMjIxZDA5ODA",
      "id": 11
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ssid_ucp_v1",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "1.0.0-KGNiYWM3MTUyNGM3MjE3NTllZDgxYTZjYzkxYTYwZmYwZTU1NGMwNTIKFwiYtpC__fXtBBCXmOKUBhiwFDgCQO8HGgJsZiIgZTc2YTY3YzhiZjViYWIzNzIwMWRmNjkwMjIxZDA5ODA",
      "id": 12
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "tt_scid",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "PnEwe4wriVKlrC0n6g6TtDTFGDBCN0y6RcfiRmU1.h3mGWeat0NCEiu4kaw0maQJf166",
      "id": 13
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "ttcid",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "97a85475bf764c18a20c811888f97c3330",
      "id": 14
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "uid_tt",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "8503f2d33b110dd4ca4fb2bcf0037a07",
      "id": 15
    },
    {
      "domain": ".juejin.cn",
      "expirationDate": 3868864873,
      "hostOnly": false,
      "httpOnly": false,
      "name": "uid_tt_ss",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "8503f2d33b110dd4ca4fb2bcf0037a07",
      "id": 16
    },
    {
      "domain": "juejin.cn",
      "expirationDate": 1692937817,
      "hostOnly": true,
      "httpOnly": false,
      "name": "tt_scid",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "GF6QeNC-JhG9F-5eyo6nzSQwe5-07.4JbWtz0bAsEMiUB0jmtRpErEb6Jz6cPVTAd9e3",
      "id": 17
    }
  ],
}
