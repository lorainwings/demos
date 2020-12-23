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
// @match        *://wizardforcel.gitbooks.io/*
// @match        *://medium.com/javascript-in-plain-english/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $(function () {
        const insertCtrl = (style) => {
            const control = `
            <div id="___control_btn" style="width:20px;height:20px;position:fixed;right:0;top:0;z-index:9999">
                <div id="btn" 
                    style="border:none;\
                    border-radius:50%;\
                    display:flex;\
                    align-items:center;\
                    justify-content:center;\
                    width:100%;\
                    height:100%;\
                    cursor:pointer"
                >
                    &times;
                </div> 
            </div>`
            const normal = `
            <style>
                code{
                    white-space: pre-wrap !important;
                }
                .fmt pre, .tui-editor-contents pre{
                    max-height: inherit;
                }
            </style>`
            $(document.body).append(control);
            $('#___control_btn').delegate('div#btn', 'click', function () {
                $(this).hide();
                $(document.head).append(style + normal);
                window.print();
            })
            $("pre").each(function () {
                const height = this.scrollHeight;
                this.style.cssText = `height:${height}px !important; max-height:inherit;`
            });
        }

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
                .left-toolbox{
                    display:none
                }
            </style>`;
            insertCtrl(style);
        })()
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
                .action-box.action-bar{
                    display:none;
                }
            </style>`;
            insertCtrl(style);
        })()
        const jianshu = (() => {
            if (!/jianshu\.com/gi.test(location.href)) return;
            const style = `
            <style>
                header, footer, aside, ._3Pnjry,.ant-back-top{
                    display:none;
                }
            </style>`;
            insertCtrl(style)
        })()
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
            insertCtrl(style);
        })()
        const segment = (() => {
            if (!/segmentfault\.com/gi.test(location.href)) return;
            const style = `
            <style>
                nav#sf-header,
                .functional-area-left.sticky-top.d-none.d-xl-flex,
                .col-12.col-xl-auto,
                #fixedTools,
                #___control_btn{
                    display: none !important;
                }
            </style>`;
            insertCtrl(style);
        })()
        const medium = (() => {
            if (!/medium\.com/gi.test(location.href)) return;
            const style = `
            <style>
            .tj.ev.np.no.aj.tm.nu.nx,
            nav.s.t.u.v.w.c.x.y.z{
                display:none
            }
            </style>`
            insertCtrl(style);
        })()
        const zhihu = (() => {
            if (!/zhuanlan\.zhihu\.com/gi.test(location.href)) return;
            const style = `
            <style>
            .Post-SideActions, 
            .RichContent-actions.is-fixed,
            .ColumnPageHeader-Wrapper,
            .CornerButtons,
            .Recommendations-Main{
                display:none
            }
            </style>`
            insertCtrl(style);
        })()
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
                display:none
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
            </style>`
            insertCtrl(style);
        })()

        const gitbooks = (() => {
            if (!/gitbooks/gi.test(location.href)) return;
            const style = `
            <style>
            .book .book-body, .book .book-body .body-inner{
                position: static;
            }
            .fa.fa-angle-right,.fa.fa-angle-left, .book .book-header{
                display:none;
            }
            </style>`
            insertCtrl(style);
        })()
    });
    // Your code here...
})();