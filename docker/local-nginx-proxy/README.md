# 本地开发环境 Docker 配置

使用 Docker + Nginx 代理本地 Vite 开发服务器，模拟域名访问。

## 快速开始

### 1. 修改 hosts 文件（首次使用）

```bash
# Mac/Linux
echo "127.0.0.1 dev.yourdomain.com" | sudo tee -a /etc/hosts

# Windows (以管理员身份运行)
# 编辑 C:\Windows\System32\drivers\etc\hosts
```

### 2. 启动服务

```bash
# 进入 docker 目录
cd docker

# 启动本地开发服务器（在项目根目录另开终端）
npm run dev

# 启动 Nginx 容器
docker-compose up -d

# 访问
open http://dev.yourdomain.com
```

### 3. 常用命令

```bash
# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down

# 重启 Nginx（修改配置后）
docker-compose restart nginx
```

## 配置说明

### 修改域名

编辑 `nginx/nginx.conf`，修改 `server_name`：

```nginx
server_name your-domain.com localhost;
```

### 修改端口

默认代理到 `5173` 端口，如需修改编辑 `nginx/nginx.conf`：

```nginx
proxy_pass http://host.docker.internal:3000;
```

### 启用 HTTPS（可选）

1. 安装 mkcert 并生成证书：

```bash
brew install mkcert
mkcert -install
mkcert dev.yourdomain.com
mv dev.yourdomain.com*.pem ./nginx/certs/
```

2. 取消 `nginx/nginx.conf` 中 HTTPS server 块的注释

3. 重启容器：`docker-compose restart`

## 目录结构

```
docker/
├── docker-compose.yml    # Docker Compose 配置
├── nginx/
│   ├── nginx.conf        # Nginx 配置
│   └── certs/            # HTTPS 证书目录
└── README.md             # 本文档
```

## 注意事项

⚠️ 此方案仅用于本地开发调试，**无法用于微信 JSSDK 真实功能测试**（微信服务器无法访问本地）。

如需测试微信 JSSDK：
1. 使用 Mock 方案模拟 API
2. 或部署到真实服务器
