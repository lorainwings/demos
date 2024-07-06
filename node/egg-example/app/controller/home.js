const Controller = require('egg').Controller

// 每个控制器必须继承自Controller
class HomeController extends Controller {
  async index() {
    // 设置响应体数据
    this.ctx.body = 'Hello world'
  }
}

module.exports = HomeController
