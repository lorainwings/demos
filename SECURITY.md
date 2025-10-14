# 安全配置说明

## 敏感信息处理

本项目中的敏感配置信息（如API密钥、数据库连接字符串等）应该通过环境变量或配置文件进行管理，而不是直接硬编码在源代码中。

### 企业微信配置示例

对于 `code-snippets/htmls/qywx/index.html` 文件中的企业微信配置，请按以下方式处理：

1. **创建环境变量配置文件**（不要提交到Git）：
```bash
# .env 文件
CORP_ID=your_actual_corp_id
CORP_SECRET=your_actual_corp_secret  
AGENT_ID=your_actual_agent_id
```

2. **在代码中使用环境变量**：
```javascript
const CONFIG = {
  CORP_ID: process.env.CORP_ID || 'YOUR_CORP_ID',
  CORP_SECRET: process.env.CORP_SECRET || 'YOUR_CORP_SECRET',
  AGENT_ID: process.env.AGENT_ID || 'YOUR_AGENT_ID'
};
```

3. **添加到 .gitignore**：
```
.env
*.env
config/local.js
```

## 已处理的安全问题

- ✅ 2024-10-14: 从Git历史中移除了企业微信的敏感配置信息
- ✅ 使用 `git filter-branch` 重写了历史记录
- ✅ 强制推送了清理后的历史到远程仓库

## 最佳实践

1. **永远不要**将敏感信息硬编码在源代码中
2. **使用**环境变量或安全的配置管理系统
3. **定期检查**代码中是否有意外泄露的敏感信息
4. **使用**工具如 `git-secrets` 或 `truffleHog` 扫描敏感信息
5. **如果发现敏感信息已提交**，立即使用本文档中的方法清理历史

## 紧急响应

如果发现敏感信息被意外提交：

1. 立即更改相关的密钥/密码
2. 使用 `git filter-branch` 或 BFG 清理历史
3. 强制推送清理后的历史
4. 通知相关团队成员更新本地仓库
