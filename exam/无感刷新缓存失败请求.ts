import axios from "axios"

type TCallback = (newToken: string) => void

const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

const setRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token)
}

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken')
}

const removeToken = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

const instance = axios.create({ baseURL: '/api' })


/** ---------------------------------------------------------------------------- */


let isRefreshing = false  // 是否正在刷新token

let callbacks: Array<TCallback> = [] // 失效后同时发送请求的容器 -- 缓存接口

// 刷新 token 后, 将缓存的接口重新请求一次
function onAccessTokenFetchedAgain(newToken) {
  callbacks.forEach(callback => {
    callback(newToken)
  })
  // 清空缓存接口
  callbacks = []
}

// 添加缓存接口
function addCallbacks(callback) {
  callbacks.push(callback)
}

// 响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      console.log(response.data.message)
    }
    return response.data
  },
  error => {
    /**
     * 将未授权接口缓存起来。retryOriginalRequest 这个 Promise 函数很关键，它一直处于等待状态。
     * 只有当token刷新成功后，onAccessTokenFetched 这个函数执行了回调函数，返回了 resolve 状态
     */
    if (error.response && error.response.status === 403) {
      // 获取当前的请求
      let config = error.response.config
      //
      const retryOriginalRequest = new Promise(resolve => {
        addCallbacks(newToken => {
          // 表示用新的token去替换掉原来的token
          config.headers.Authorization = newToken
          resolve(instance.request(config)) // 调用resolve请求队列里面接口
        })
      })
      // 无感刷新Token
      if (!isRefreshing) {
        isRefreshing = true
        instance.post('/token/refresh', { refreshToken: getRefreshToken() }).then(response => {  // 用refreshToken获取新的token
          let accessToken = response.data.accessToken
          let refreshToken = response.data.refreshToken
          setAccessToken(accessToken)
          setRefreshToken(refreshToken)
          onAccessTokenFetchedAgain(accessToken)
        }).catch(() => {
          // 刷新token错误跳转到登陆页面
          removeToken()
          history.replaceState('', '', '/login')
        }).finally(() => {
          isRefreshing = false
        })
      }
      return retryOriginalRequest // 将token过期期间请求的接口包装成promise返回，等待刷新token后重新请求
    } else {
      console.log(error.response.data.message)
      return Promise.reject(new Error(error.message || 'Error'))
    }
  }
)
