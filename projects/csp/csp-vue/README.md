# CSP-Vue 项目

这是一个简单的Vue项目，用于测试内容安全策略（CSP）下的PDF预览功能。

## 项目结构

```
csp-vue/
├── public/           # 静态资源目录
│   └── sample.pdf    # 示例PDF文件
├── src/              # 源代码目录
│   ├── assets/       # 资源文件
│   │   └── main.css  # 全局样式
│   ├── components/   # 组件目录
│   │   └── PdfPreview.vue  # PDF预览组件
│   ├── App.vue       # 主组件
│   └── main.js       # 入口文件
├── index.html        # HTML入口文件
├── vite.config.js    # Vite配置
├── package.json      # 包依赖
└── nginx.conf        # Nginx配置
```

## 开发

```bash
# 安装依赖
npm install

# 本地开发服务
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run serve
```

## 技术栈

- Vue 3
- Vite
- pdf-vue3 (用于PDF预览)

# CSP 策略导致 PDF 预览失败的复现与解决方案

## 问题描述

在使用 pdf-vue3 组件预览 PDF 文件时，由于 CSP 策略限制，导致以下错误：

1. `Refused to create a worker from 'blob:...' because it violates the following Content Security Policy directive: "script-src * 'unsafe-inline' 'unsafe-eval'"`
2. `Refused to load the script 'data:application/javascript;base64,...' because it violates the following Content Security Policy directive: "script-src * 'unsafe-inline' 'unsafe-eval'"`

这是因为 pdf-vue3 组件（底层使用 pdfjs）在加载 PDF 时会创建 Web Worker 和加载 data URI 格式的脚本，但现有的 CSP 策略不允许这些操作。

## 复现步骤

1. 安装依赖并构建项目
```bash
npm install
npm run build
```

2. 使用带有问题 CSP 策略的 Nginx 配置启动 Docker
```bash
docker-compose up -d
```

3. 访问 http://localhost:8080 即可看到 PDF 加载失败

## 解决方案

修改 Nginx 配置中的 CSP 策略，添加 `blob:` 和 `data:` 到 `script-src` 中，并添加 `worker-src blob:` 指令：

```
add_header Content-Security-Policy "default-src 'self'; script-src * blob: data: 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; worker-src blob:";
```

要应用修复的配置，可以执行：
```bash
cp nginx-fixed.conf nginx.conf
docker-compose restart
```

## 问题原因分析

1. pdf-vue3 组件底层使用 PDF.js 库进行 PDF 渲染
2. PDF.js 使用 Web Worker 来实现 PDF 解析的多线程处理
3. Worker 脚本通过 blob URL 和 data URI 加载
4. 默认的 CSP 策略不允许这些类型的脚本来源

## 参考资料

- [MDN Web 安全：CSP 策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)
- [PDF.js 官方文档](https://mozilla.github.io/pdf.js/)
