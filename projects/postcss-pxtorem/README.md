# 字体调整脚本使用说明

## 问题背景

项目在 `postcss.config.cjs` 中配置了 `postcss-plugin-px2rem` 的 `propBlackList: ['font-size', 'line-height']`，导致这两个属性不会被转换为 rem 单位，与 750px 设计稿的屏幕宽度不匹配。

## 解决方案

### 方案1：修改 PostCSS 配置（推荐）

直接修改 `postcss.config.cjs` 文件，注释掉 `propBlackList` 配置：

```javascript
'postcss-plugin-px2rem': {
  rootValue: 75,
  // propBlackList: ['font-size', 'line-height'], // 注释掉这行
  exclude: /node_modules|vant/,
  minPixelValue: 2
}
```

### 方案2：使用字体调整脚本

如果必须保持当前配置，可以使用提供的脚本来手动调整字体大小。

## 脚本功能

脚本会自动：

1. 扫描所有 `.vue`、`.scss`、`.css` 文件
2. 查找 `font-size` 和 `line-height` 属性
3. 将 px 值乘以 2（因为 750px 设计稿需要 2 倍大小）
4. 排除 `@mixin text-base` 中的字体设置
5. 生成详细的调整报告

## 使用方法

### 安装依赖

确保已安装必要的依赖：

```bash
npm install postcss postcss-scss
```

### 运行脚本

#### 执行字体调整

```bash
npm run font:adjust
```

#### 查看调整效果（不实际修改文件）

```bash
npm run font:adjust:dry-run
```

#### 直接运行脚本

```bash
node ./scripts/simple-font-adjustment.mjs
```

## 脚本配置

可以在 `scripts/simple-font-adjustment.mjs` 中修改以下配置：

```javascript
const CONFIG = {
  // 需要处理的文件扩展名
  extensions: ['.vue', '.scss', '.css'],
  // 需要排除的目录
  excludeDirs: ['node_modules', 'dist', '.git', '.cursor'],
  // 需要调整的属性
  targetProps: ['font-size', 'line-height'],
  // 调整倍数（750px 设计稿需要 2 倍大小）
  multiplier: 2,
  // 最小像素值（小于此值的不调整）
  minPixelValue: 2
}
```

## 输出文件

脚本执行后会生成：

- 控制台日志：显示处理进度和结果
- `font-adjustment-report.md`：详细的调整报告

## 注意事项

### 1. 备份文件

执行脚本前建议备份相关文件，以防意外情况。

### 2. 排除规则

脚本会自动排除：

- `@mixin text-base` 中的字体设置
- 小于 `minPixelValue` 的 px 值
- `node_modules`、`dist` 等目录

### 3. 测试验证

调整完成后，请在不同设备上测试字体显示效果，确保调整后的字体大小在各种屏幕尺寸下都能正常显示。

### 4. 版本控制

建议在 Git 中创建新分支来执行调整，便于回滚和代码审查。

## 常见问题

### Q: 脚本执行失败怎么办？

A: 检查是否安装了必要的依赖，确保有足够的文件读写权限。

### Q: 如何撤销调整？

A: 使用 Git 回滚到调整前的版本，或者手动恢复备份文件。

### Q: 可以调整其他属性吗？

A: 可以修改 `CONFIG.targetProps` 数组来添加其他需要调整的属性。

### Q: 调整倍数可以自定义吗？

A: 可以修改 `CONFIG.multiplier` 值来设置不同的调整倍数。

## 技术实现

脚本使用正则表达式解析 CSS 规则，避免了复杂的 PostCSS 解析器依赖，提高了执行效率。主要功能包括：

- 智能识别 Vue 文件中的 `<style>` 标签
- 精确匹配 CSS 属性和值
- 安全地替换 px 值
- 生成详细的调整报告

## 联系支持

如果遇到问题或有改进建议，请联系开发团队。
