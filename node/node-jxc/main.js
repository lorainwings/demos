/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-24 20:31:55
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-25 12:52:48
 * @FilePath: /demos/node/node-juejin/main.js
 * @Description: 小册下载器
 */
const path = require('path')
const { launch } = require('puppeteer');
const { series } = require('async')
const { promises: fs } = require('fs')
const config = require('./jxc.config')

module.exports = class Downloader {
  constructor(c) {
    const home = process.env.HOME || process.env.USER_PROFILE
    const userDirectory = path.resolve(home, config.userDataDirectory)
    this.config = {
      ...config,
      ...c,
      range: c.range ? c.range.split('-') : '',
      userDirectory,
      saveDirectory: process.cwd()
    }
    this.browser = null
    this.page = null
    this.pdfOpts = {
      preferCSSPageSize: true,
      printBackground: true,
      // displayHeaderFooter: true
    }
  }

  async check() {
    try {
      const info = await fs.stat(this.config.userDirectory)
      if (!info.isDirectory()) {
        await fs.mkdir(this.config.userDirectory, { recursive: true })
      }
    } catch (e) {
      await fs.mkdir(this.config.userDirectory, { recursive: true })
    }
  }

  async launch() {
    this.browser = await launch({
      headless: true,
      /* devtools: true, // 调试选项: 开启调试
      dumpio: true, // 调试选项: 输出到控制台
      defaultViewport: { width: 1680, height: 1050 }, */
      userDataDir: this.config.userDirectory,
      executablePath: this.config.browserDirectory
    });
  }

  async removeNode(args) {
    const btn = document.querySelector('masker .close-btn')
    if (btn) await this.page.click('masker .close-btn')
    const style = document.createElement('style')
    style.innerHTML = args.customStyle
    document.head.appendChild(style)
  }

  async open() {
    this.page = await this.browser.newPage()
    await this.page.setCookie(...this.config.cookie)
    await this.page.goto(this.config.link, { waitUntil: 'networkidle0' })
    await this.page.evaluate(this.removeNode, this.config)
  }

  async download() {
    return new Promise(async (resolve, reject) => {
      const doms = await this.page.evaluate(() => {
        const title = document.querySelector('.book-content__header .title').innerText.trim()
        const [elements] = document.querySelectorAll('.section-list');
        return [...elements.children].map((el, index) => {
          const cls = `section-c-${index}`
          const name = el.querySelector('span.title-text').innerText.replace(/\s+/g, '\\$&')
          el.classList.add(cls)
          return { cls: `.${cls}`, name: `${index + 1}.${name}.pdf` }
        })
      })
      const handle = async ({ cls, name }, next) => {
        try {
          await this.page.click(cls)
          await this.page.waitForTimeout(1000)
          await this.page.waitForSelector('.section-content', { timeout: 500 }).catch(e => e);
          await this.page.emulateMediaType('screen');
          await this.page.pdf({
            ...this.pdfOpts,
            path: `${path.join(this.config.saveDirectory)}/${name}`
          })
          console.log("打印完成:", name);
        } catch (e) {
          console.log("发生错误:", e);
        }
        next()
      }
      let handles = doms.map((item) => (cb) => handle(item, cb))
      if (this.config.range) handles = handles.slice(...this.config.range)
      series(handles, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
  }

  async close() {
    await this.browser.close()
  }

  async start() {
    await this.check()
    await this.launch()
    await this.open()
    await this.download()
    await this.close()
  }

}
