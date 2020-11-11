import request from '../utils/request'

export const getBanner = () => {
  return request({
    url: '/api/comic_v2/getproad?',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 123
    }
  })
}
export const getIndexRecomment = () => {
  return request({
    url: '/api/comic_v2/customerview?',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      viewtype: 1
    }
  })
}
