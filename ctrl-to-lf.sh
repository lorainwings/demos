#!/bin/bash

# 查找所有 CRLF 换行符的文件，排除 node_modules 目录
echo "查找所有 CRLF 换行符的文件（跳过 node_modules)..."
crlf_files=$(grep -Ilr $'\r' . --exclude-dir=node_modules)

if [ -z "$crlf_files" ]; then
  echo "没有找到包含 CRLF 换行符的文件。"
  exit 0
fi

# 输出找到的文件列表
echo "以下文件包含 CRLF 换行符："
echo "$crlf_files"

# 使用 Prettier 将找到的文件转换为 LF
echo "正在将 CRLF 换行符转换为 LF..."
for file in $crlf_files; do
  npx prettier --write "$file" --end-of-line lf
done

echo "转换完成！所有 CRLF 换行符已改为 LF。"
