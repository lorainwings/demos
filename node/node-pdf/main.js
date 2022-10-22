/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-24 20:31:55
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-25 12:52:48
 * @FilePath: /demos/node/node-juejin/main.js
 * @Description: 小册下载器
 */

// Puppeteer API Docs
// https://pptr.dev/api/puppeteer.waitforoptions.waituntil/
const path = require('path')
const { launch } = require('puppeteer')
const { series } = require('async')
const { promises: fs } = require('fs')
const defaultConfig = require('./jxc.config')

module.exports = class Downloader {
  constructor(c) {
    const home = process.env.HOME || process.env.USER_PROFILE
    const config = this.load(c)
    const userDirectory = path.resolve(home, config.userDataDirectory)
    this.config = {
      ...config,
      ...c,
      link: c.link || config.link,
      range: c.range ? c.range.split('-') : '',
      userDirectory,
      saveDirectory: process.cwd()
    }
    this.browser = null
    this.page = null
    this.pdfOpts = {
      preferCSSPageSize: true,
      printBackground: true
      // displayHeaderFooter: true
    }
  }

  load(options) {
    const { config } = options
    if (config) {
      if (typeof config === 'string')
        return require(`${process.cwd()}/${config}`)
      return require(process.cwd() + '/jxc.config.js')
    }
    return defaultConfig
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
    const dop = {
      userDataDir: this.config.userDirectory,
      executablePath: this.config.browserDirectory
    }

    const opts = this.config.openDebug
      ? {
          devtools: true, // 调试选项: 开启调试
          dumpio: true, // 调试选项: 输出到控制台
          defaultViewport: { width: 1680, height: 1050 }
        }
      : { headless: true }

    this.browser = await launch({ ...dop, ...opts })
    this.page = await this.browser.newPage()
  }

  async removeNode(args) {
    const popup = document.querySelector(args.selectors.popupClose)
    if (popup) popup.click()
    const style = document.createElement('style')
    style.innerHTML = args.customStyle
    document.head.appendChild(style)
  }

  async open() {
    await this.page.setCookie(...this.config.cookie)
    await this.page.goto(this.config.link, { waitUntil: 'networkidle0' })
    await this.page.evaluate(this.removeNode, this.config)
  }

  async debug() {
    if (!this.config.openDebug) return
    this.page.on('console', (msg) => console.log('PAGE LOG:', msg.text()))
    await this.page.evaluate(() => console.log(`url is ${location.href}`))
  }

  async intercept() {
    if (!(this.config.blocklist ?? []).length) return
    this.page.on('request', async (request) => {
      const url = request.url()
      if (url.some((u) => this.config.blocklist.includes(u))) {
        console.log('监测到阻止文件:', url)
        request.abort()
      } else {
        request.continue()
      }
    })
  }

  async getName(elem, index) {
    const sn = index + 1
    const selector = `${this.config.selectors.sectionList}:nth-child(${sn}) ${this.config.selectors.titleText}`
    const title = await elem.$eval(selector, (el) =>
      el.innerText.replace(/\s+/g, '\\$&')
    )
    return `${sn}.${title}`
  }

  async download() {
    return new Promise(async (resolve, reject) => {
      const doms = await this.page.$$(this.config.selectors.sectionList)

      const handle = async (elem, inx, next) => {
        try {
          const name = await this.getName(elem, inx)
          await elem.evaluate((b) => b.click())
          await Promise.allSettled([
            this.page.waitForNavigation({ timeout: 1000 }),
            this.page.waitForNetworkIdle({ idleTime: 500 }),
            this.page
              .waitForSelector(this.config.selectors.waitFor, { timeout: 500 })
              .catch((e) => e)
          ])
          await this.page.emulateMediaType('screen')
          await this.page.pdf({
            ...this.pdfOpts,
            path: `${path.join(this.config.saveDirectory)}/${name}.pdf`
          })
          console.log('打印完成:', name)
        } catch (e) {
          console.log('发生错误:', e)
        }
        next()
      }

      let handles = doms.map((item, inx) => (cb) => handle(item, inx, cb))
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
    await this.intercept()
    await this.open()
    await this.debug()
    await this.download()
    await this.close()
  }
}
