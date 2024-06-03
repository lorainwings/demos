// 最后处理所有错误的中间件
export default function (err, req, res, next) {
  res.status(500).json({ code: 500, error: (err as Error).message })
}
