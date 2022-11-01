module.exports = (req, res) => {
  // 这里可以根据 params 动态返回数据
  const { url, method, params } = req
  return {
    code: '0',
    action: '',
    message: '__________________请求成功了!@##@',
    url: '',
    data: { url: 'https://passport.jumei.com/i/mobile/login?redirect=' }
  }
}

