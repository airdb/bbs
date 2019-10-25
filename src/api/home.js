import request from '@/common/js/request'

// 得到技术频道列表
export function getTechSquareApi (params) {
  return request({
    url: '/apis/bbs/v1/square/list',
    method: 'get',
    params
  })
}

// 得到轮播列表
export function getCarouselApi (params) {
  return request({
    url: '/apis/bbs/v1/carousel/getAll',
    method: 'get',
    params
  })
}

// 获取通知
export function getNoticesApi () {
  return request({
    url: '/apis/bbs/v1/notices/get',
    method: 'get'
  })
}

// 得到文章列表
export function getArticleListApi (params) {
  return request({
    url: 'apis/bbs/v1/Article/getList',
    method: 'get',
    params
  })
}

// 获取文章详情
export function getArticleInfoApi (id) {
  return request({
    url: `apis/bbs/v1/Article/getRow/${id}`,
    method: 'get'
  })
}
