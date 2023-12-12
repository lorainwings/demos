/**
 * 普通应用级开发配置
 */
/* module.exports = {
  presets: [
    [
      '@babel/env',
      {
        // targets覆盖.browserslistrc
        // targets: { browsers: ['iOS >= 9', 'Android >= 4.4', 'last 2 versions', '> 0.2%', 'not dead'] },
        corejs: 3,
        useBuiltIns: 'usage',
        modules: false
      }
    ]
  ],
  plugins: [
    // 添加 transform-runtime 插件
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        regenerator: false
      }
    ]
  ]
}; */

/**
 * 第三方npm库开发配置
 */
module.exports = {
  plugins: [
    // 添加 transform-runtime 插件
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        // corejs: 3,
        // 关闭 @babel/preset-env 默认的 Polyfill 注入
        useBuiltIns: false,
        modules: false
      }
    ]
  ]
}
