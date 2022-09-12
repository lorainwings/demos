// ==UserScript==
// @name         常用技术blog清爽模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lorain
// @match        *://blog.csdn.net/*/article/details/*
// @match        *://juejin.im/post/*
// @match        *://juejin.cn/post/*
// @match        *://www.jianshu.com/p/*
// @match        *://github.com/*/issues/*
// @match        *://segmentfault.com/a/*
// @match        *://www.cnblogs.com/*/p/*
// @match        *://www.cnblogs.com/*/articles/*
// @match        *://zhuanlan.zhihu.com/p/*
// @match        *://www.zhihu.com/question/*
// @match        *://wizardforcel.gitbooks.io/*
// @match        *://stackoverflow.com/questions/*
// @match        *://medium.com/javascript-in-plain-english/*
// @match        *://www.alloyteam.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        none
// @connect *
// ==/UserScript==

(function () {
  "use strict";
  $(function () {
    $(document.head).append(`
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
            <style>
                code{
                    white-space: pre-wrap !important;
                }
                .fmt pre, .tui-editor-contents pre{
                    max-height: inherit;
                }
                #___control_btn{
                    position:fixed;
                    right:0;
                    top:0;
                    z-index:9999;
                    cursor:pointer;
                    width:27px;
                    height:27px;
                }
                #__insert_btn{
                    font-size:24px;
                    color: #1ab394
                }
                #__insert_btn.control_btn_error{
                    font-size: 12px;
                    white-space:nowrap;
                    color: #fff;
                    background-color: #0084ff;
                    border-radius:12px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
            </style>
        `);

    $(document.body).append(`
        <div id="___control_btn"><div id="__insert_btn" class="fa fa-save fa-2x"></div></div>`);

    window.addEventListener(
      "error",
      (err) => {
        console.log("捕获到错误:", err);
        if (/font-awesome/gi.test(err.target.href)) {
          $("#__insert_btn").text("保存").addClass("control_btn_error");
        }
      },
      true
    );

    const addSavePlugin = (style, fn) => {
      $("#___control_btn").delegate("div#__insert_btn", "click", function () {
        console.log("=======charule");
        if (fn) fn();
        $(this).hide();
        $(document.head).append(style);
        window.print();
      });
      $("pre").each(function () {
        const height = this.scrollHeight;
        this.style.cssText = `height:${height}px !important; max-height:inherit;`;
      });
    };

    const csdn = (() => {
      if (!/article\/details/gi.test(location.href)) return;
      const style = `
            <style>
                #mainBox{
                    display: flex;
                    justify-content: center;
                    width: 100% !important;
                }
                main{
                    width:80% !important;
                    margin-left:-100px";
                }
                #toolBarBox,
                .comment-box,
                .template-box,
                .left-toolbox,
                #csdn-toolbar,
                .recommend-box
                {
                   display:none !important
                }
            </style>`;
      addSavePlugin(style);
    })();
    const juejin = (() => {
      if (!/juejin/gi.test(location.href)) return;
      const style = `
            <style>
                .main-header.main-header.visible,
                .article-suspended-panel.article-suspended-panel,
                .article-suspended-panel.article-suspended-panel,
                .suspension-panel.suspension-panel,
                .article-banner,
                .footer-author-block,
                .action-box.action-bar,
                .main-area.recommended-area.shadow,
                .action-box.action-bar,
                .main-header-box
                {
                   display:none !important;
                   opacity: 0;
                   width: 0;
                   height: 0;
                   visibility: hidden
                }
            </style>`;
      addSavePlugin(style);
    })();
    const jianshu = (() => {
      if (!/jianshu\.com/gi.test(location.href)) return;
      const style = `
            <style>
                header, footer, aside, ._3Pnjry,.ant-back-top{
                   display:none !important;
                }
            </style>`;
      addSavePlugin(style);
    })();
    const github = (() => {
      if (!/github\.com/gi.test(location.href)) return;
      const style = `
            <style>
                header.Header.js-details-container,
                .bg-gray-light.pt-3.hide-full-screen.mb-5,
                .flex-auto.text-right.d-block.d-md-none,
                div.gh-header-actions.mt-0.mt-md-2.mb-3.mb-md-0,
                #___control_btn{
                    display: none !important;
                }
            </style>`;
      addSavePlugin(style);
    })();
    const segment = (() => {
      if (!/segmentfault\.com/gi.test(location.href)) return;
      const style = `
            <style>
                nav#sf-header,
                .functional-area-left.sticky-top.d-none.d-xl-flex,
                .col-12.col-xl-auto,
                #fixedTools,
                #___control_btn,
                #footer,
                .d-block.d-sm-none.fix-bottom-action-wrap,
                .recommend-list-wrap{
                    display: none !important;
                }
            </style>`;
      addSavePlugin(style);
    })();
    const medium = (() => {
      if (!/medium\.com/gi.test(location.href)) return;
      const style = `
            <style>
            .tj.ev.np.no.aj.tm.nu.nx,
            nav.s.t.u.v.w.c.x.y.z{
               display:none !important
            }
            </style>`;
      addSavePlugin(style);
    })();
    const zhihu = (() => {
      if (!/zhihu\.com/gi.test(location.href)) return;
      const style = `
            <style>
            .Post-SideActions,
            .RichContent-actions.is-fixed,
            .ColumnPageHeader-Wrapper,
            .CornerButtons,
            .Recommendations-Main,
            header,
            .CornerButtons,
            .QuestionHeader-main.QuestionHeader-footer-main,
            .QuestionHeader-side,
            .Sticky,
            .ContentItem-actions.Sticky.RichContent-actions,
            .ModalWrap,
            .ModalLoading-content{
               display:none !important
            }
            .Question-mainColumn{
                width:100%;
            }
            .Question-sideColumn{
                width:0;
            }
            </style>`;
      addSavePlugin(style, () => {
        $("button.Button.QuestionRichText-more.Button--plain").click();
      });
    })();
    const cnblogs = (() => {
      if (!/cnblogs\.com/gi.test(location.href)) return;
      const style = `
            <style>
            /* html, body{
                background: #d2d8de;
            } */
            #top_nav,
            #header,
            #topMnu,
            #sidebar,
            #sideBar,
            #post_detail
            small,
            #div_digg,
            #page_begin_html{
               display:none !important
            }
            #container div#warpper{
                display: flex;
                justify-content: center;
            }
            #wrapper #content{
                margin-right: 0;
                width: 90%;
            }
            #main{
                display: flex;
                justify-content: center;
            }
            #mainContent{
                margin-left: 0;
                margin-right: 0;
            }
            #mainContent .forFlow{
              margin: 0;
            }
            </style>`;
      addSavePlugin(style);
    })();

    const gitbooks = (() => {
      if (!/gitbooks/gi.test(location.href)) return;
      const style = `
            <style>
            .book .book-body, .book .book-body .body-inner{
                position: static;
            }
            .fa.fa-angle-right,.fa.fa-angle-left, .book .book-header{
               display:none !important;
            }
            </style>`;
      addSavePlugin(style);
    })();

    const stackoverflow = (() => {
      if (!/stackoverflow/gi.test(location.href)) return;
      const style = `
            <style>
            header.top-bar, #left-sidebar, #sidebar, #post-form, .site-footer--container, .aside-cta{
               display:none !important;
            }
            </style>`;
      addSavePlugin(style);
    })();

    const alloyteam = (() => {
      if (!/alloyteam/gi.test(location.href)) return;
      const style = `
            <style>
            #comments,.bshare-custom.icon-medium-plus,.toolbar,#dynamic-to-top,#sidebar,#alloy{
               display:none !important;
            }
            </style>`;
      addSavePlugin(style);
    })();
  });
  // Your code here...
})();
