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
  'use strict';
  // Your code here...
  const style = () => {
    const s = `<style>
          .JD_header, .JD_footer, #wrapper-pay-epub{
              display:none !important;
          }
          .page_container {
              width: 90% !important;
          }
      </style>
      `
    document.head.innerHTML += s;
  }
  const load = () => {
    const max = 50;
    let count = 0;
    return new Promise((r) => {
      const loading = () => {
        const mode = document.compatMode;
        const el = ~mode.indexOf('css1') ? document.documentElement : document.body;
        const ph = el.scrollHeight;
        const st = el.scrollTop;
        const ch = el.clientHeight;
        el.scrollTop = ph;
        count++;
        setTimeout(() => {
          if (st + ch >= ph || count === max) {
            r();
            return;
          }
        }, 2000);
      }
      loading();
    });
  }
  const removeJs = () => {
    const sc = document.querySelectorAll('script');
    sc.forEach(s => {
      s.parentNode.removeChild(s);
    });
  }
  const ask = () => {
    const r = window.confirm('是否需要下载当前文章?');
    if(!r) return;
    window.print();
  }

  const main = async () => {
    await load();
    removeJs();
    style();
    ask();
  }

  main();
});

