import request from '@/common/js/request'

// 创建问题
export function createQuestionApi (data) {
  return request({
    url: '/apis/bbs/v1/question/create',
    method: 'post',
    data
  })
}

// 编辑问题
export function updateQuestionApi (data) {
  return request({
    url: '/apis/bbs/v1/question/update',
    method: 'put',
    data
  })
}

// 删除问题
export function deleteQuestionApi (id) {
  return request({
    url: `/apis/bbs/v1/question/delete/${id}`,
    method: 'delete'
  })
}

// 创建文章
export function createArticleApi (data) {
  return request({
    url: '/apis/bbs/v1/article/create',
    method: 'post',
    data
  })
}

// 编辑文章
export function updateArticleApi (data) {
  return request({
    url: '/apis/bbs/v1/article/update',
    method: 'put',
    data
  })
}

// 删除文章
export function deleteArticleApi (id) {
  return request({
    url: `/apis/bbs/v1/Article/delete/${id}`,
    method: 'delete'
  })
}
