<<<<<<< HEAD
//用户相关的所有请求
import { request } from '@/utils'
//1、登录请求
// const res = await request.post('/authorizations', loginForm)
export function loginAPI(dataForm) {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: dataForm
  })

}

// const res = await request.get('/user/profile')
export function getProfileAPI() {
  return request({
    url: '/user/profile',
    method: 'GET'
  })
=======
//1、登录模块
import { request } from '@/utils/request'
//const res = await request.post('/authorizations', loginForm)
export function loginAPI(loginForm) { 
    return request({
        url: '/authorizations',
        method: 'POST',
        data: loginForm
    })
    
}
//const res = await request.get('/user/profile')

export function userInfoAPI() { 
    return request({
        url: '/user/profile',
        method: 'GET'
    })
>>>>>>> 5312469002b8c3323eb96d432406c970f6867c3a
}