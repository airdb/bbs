import request from '@/common/js/request'

// 注册
export function registeredApi (data) {
  return request({
    url: '/apis/bbs/v1/user/registered',
    method: 'post',
    data
  })
}

// 登陆
export function loginApi (data) {
  return request({
    url: '/apis/bbs/v1/user/login',
    method: 'post',
    data
  })
}

// 得到用户信息
export function getUserInfoApi (params) {
  return request({
    url: '/apis/bbs/v1/user/userInfo',
    method: 'get',
    params
  })
}

// 退出登录
export function loginOutApi (params) {
  return request({
    url: '/apis/bbs/v1/user/loginOut',
    method: 'post',
    params
  })
}
