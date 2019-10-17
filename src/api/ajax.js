import axios from 'axios'
import qs from 'qs'
import store from '../store'
import {Toast} from 'mint-ui'
import router from '../router'
axios.interceptors.request.use(config => {
  // const {
  //   method,
  //   data
  // } = config
  // if (method.toUpperCase() === 'POST' && data instanceof Object) {
  //   //将地址变为urlincodingd的方式
  //   config.data = qs.stringify(data)
  // }
  //判断接口是否需要token
  // if(config.headers.needToken){
  //   const token = store.state.user.token
  //   if(!token){
  //     const error = new Error('没有token，请重新登录')
  //     error.status = 401
  //     throw error
  //   }else{
  //     config.headers['Authorization']=token
  //   }
  // }
  return config
})
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log(error)
 // 请求的错误---没有token
//  if(!error.response){
//   if(error.status===401){
//     // 判断当前的路由的路径是不是login,如果不是就该跳转到login
//     if(router.currentRoute.path!=='/login'){
//       Toast(error.message)
//       // 跳转到login
//       router.replace('/login')
//     }
//   }
// }else{
//   // 响应的时候token过期了,或者没有资源的时候就会报错
//   const status=error.response.status
//   if(status===401){
//     // 提示过期了
//     Toast(error.response.data.message)

//     // 重置用户信息
//     //store.dispatch('resetUser')
    
//     // 重新登录---跳转到login
//     router.replace('/login')

//   }else if(status===404){
//     // 没有资源
//     Toast('没有资源')
//   }else{
//     // 请求失败了
//     Toast('请求错误'+error.message)
//   }
// }
// 中断错误消息
  return new Promise(() => {})
})
export default axios
