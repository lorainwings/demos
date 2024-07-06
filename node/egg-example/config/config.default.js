exports.keys = '934be149-0aa9-483c-b895-0aeda9d538b4' // Cookie 安全字符串, 也就是SessionSecret等等

// 添加 view 配置项
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
