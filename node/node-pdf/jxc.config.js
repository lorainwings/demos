/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-24 20:46:01
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-25 12:56:34
 * @FilePath: /demos/node/node-pdf/jxc.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  openDebug: false,
  browserDirectory:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  userDataDirectory: '.puppeteer_cache/user_data',
  // 要下载小册的阅读链接
  link: '',
  customStyle: `
    @page {
      size: A4 portrait;
      margin: 0;
    }
    .book-summary,
    .book-content__header,
    .book-direction,
    .step-btn step-btn--next,
    .dark-mode-notification,
    .article-catalog {
      display: none!important;
      width: 0!important;
      height: 0!important;
    }
    .book-body.transition--next{
      padding-top: 0!important;
    }
    .book-content{
      margin-left: 0!important;
    }
  `,
  // cookie使用chrome插件EditThisCookie导出
  cookie: [],
  selectors: {
    // 需要打印的页面是否加载完成, 等待该选择器内容渲染
    waitFor: '.section-content',
    // 需要打印的列表元素(多个)
    sectionList: '.section-list>.section',
    // 需要打印的页面的文件title的选择器(用作pdf名字)
    titleText: 'span.title-text',
    // 关闭页面的弹窗
    popupClose: '.masker .close-btn'
  },
  // 阻止的请求列表
  blocklist: []
}
