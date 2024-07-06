/* Egg.js应用中的路由配置模块 */

module.exports = app => {
  const { router, controller } = app;


  // 配置路由规则
  router.get('/', controller.home.index)

  router.get('/news', controller.news.list)
}
