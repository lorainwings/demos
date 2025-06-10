# build stage
FROM node:hydrogen-alpine3.21 as build-stage

WORKDIR /app

COPY package.json .

COPY *.lock .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:hydrogen-alpine3.21 as production-stage

COPY --from=build-stage /app/dist /app

COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install --production

# deploy stage
FROM nginx:latest as deploy-stage

COPY --from=production-stage /app/dist /usr/share/nginx/html

EXPOSE 8080

# 启动 nginx 服务
CMD ["nginx", "-g", "daemon off;"]
