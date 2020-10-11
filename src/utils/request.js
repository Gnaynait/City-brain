/*
 * @Author: your name
 * @Date: 2020-08-19 13:45:17
 * @LastEditTime: 2020-08-19 17:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \safe\src\utils\request.js
 */
import axios from 'axios'
// 创建 axios 实例
const service = axios.create({
  baseURL: '', // api base_url
  timeout: 60000, // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    let data = error.response.data
    switch (error.response.status) {
      case 403:
        console.error({
          message: '系统提示',
          description: '拒绝访问',
          duration: 4,
        })
        break
      case 500:
        break
      case 404:
        console.error({
          message: '系统提示',
          description: '很抱歉，资源未找到!',
          duration: 4,
        })
        break
      case 504:
        console.error({ message: '系统提示', description: '网络超时' })
        break
      case 401:
        console.error({
          message: '系统提示',
          description: '未授权，请重新登录',
          duration: 4,
        })
        break
      default:
        console.error({
          message: '系统提示',
          description: data.message,
          duration: 4,
        })
        break
    }
  }
  return Promise.reject(error)
}

const responseFun = (data) => {
  if (data && data.message && data.message.indexOf('at ') > -1) {
    let index = data.message.indexOf('at ')
    data.message = data.message.substring(0, index)
  }
  return data
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params,
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use((response) => {
  return responseFun(response.data)
}, err)

export default service
