import axios from 'axios'
import { Notify } from 'vant'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  Notify({
    message: '网络异常',
    duration: 1000
  })
  return Promise.reject(error)
})
export default instance
