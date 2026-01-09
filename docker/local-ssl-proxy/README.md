# 本地 HTTPS 代理工具指南

本文档介绍如何使用 `local-ssl-proxy` 和 `mkcert` 在本地开发环境中配置 HTTPS。

---

## 工具介绍

| 工具 | 用途 |
|------|------|
| **local-ssl-proxy** | 将本地 HTTP 服务代理为 HTTPS |
| **mkcert** | 生成本地信任的 SSL 证书（浏览器无安全警告） |
| **SwitchHosts** | 图形化管理 hosts 文件 |

---

## 快速开始

### 1. 安装工具

```bash
# 安装 local-ssl-proxy
pnpm install -g local-ssl-proxy

# 安装 mkcert (macOS)
brew install mkcert
```

### 2. 创建本地 CA（首次使用）

```bash
mkcert -install
```

> [!NOTE]
> 此命令会在系统信任存储中安装本地 CA，仅需执行一次。

### 3. 生成域名证书

```bash
# 生成证书（默认文件名）
mkcert example.com

# 或指定输出路径(后面可以跟上域名, 生成的证书就是带域名, 方便管理)
mkcert -key-file ca/key.pem -cert-file ca/cert.pem example.com
```

生成文件：

- `example.com.pem` - 证书文件
- `example.com-key.pem` - 密钥文件

### 4. 启动 HTTPS 代理

```bash
# 使用自定义证书, 指定域名(一定要跟上域名, 访问页面证书才提示安全)
local-ssl-proxy --source 443 --target 80 -c ca/cert.pem -k ca/key.pem example.com
```

### 5. 配置 hosts（可选）

编辑 `/etc/hosts` 或使用 SwitchHosts：

```sh
127.0.0.1 example.local
```

> [!TIP]
> 修改 hosts 后浏览器可能有 DNS 缓存，可使用无痕模式测试或执行 `sudo dscacheutil -flushcache`。

---

## 参考链接

- [local-ssl-proxy](https://www.npmjs.com/package/local-ssl-proxy)
- [mkcert](https://github.com/FiloSottile/mkcert)
- [SwitchHosts](https://github.com/oldj/SwitchHosts)
