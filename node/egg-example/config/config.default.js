exports.keys = '934be149-0aa9-483c-b895-0aeda9d538b4' // Cookie 安全字符串, 也就是SessionSecret等等

// 添加 view 配置项
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = [
  'robot'
];

// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i
  ]
};
