import request from '@/common/js/request'

// 获取标签类型
export function getTagTypeApi (params) {
  return request({
    url: '/apis/bbs/v1/TagType/getAll',
    method: 'get',
    params
  })
}

// 获取所有标签
export function getTagApi (params) {
  return request({
    url: '/apis/bbs/v1/Tag/getAll',
    method: 'get',
    params
  })
}
