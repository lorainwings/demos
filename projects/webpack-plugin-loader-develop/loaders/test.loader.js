module.exports = function (source) {
  // 参数
  console.log(this.query)
  return source.replace(/name/gi, this.query.name)
}

