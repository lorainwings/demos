# Vue2-Source

本库主要是一些代码片段, 用于验证 vue2 源码中的一些逻辑

## 如何使用 vscode 调试 ts 代码

### 安装核心依赖

```sh
npm i -g ts-node
```

### Vscode 新增命令窗口

使用`cmd + j`打开 `vscode` 命令行面板, 点击该面板右上角的 `+` 号

然后添加一个 `JavaScript Debug Terminal` 控制台

### 运行程序

在 `vscode` 的代码行前面打上断点后, 开始通过命令执行程序

```sh
ts-node xxx.ts
```
