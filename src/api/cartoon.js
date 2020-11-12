import request from '../utils/request'

import { format } from '@/utils/apiHelp'

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
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad?',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 125
    }
  })
}
export const getTypesList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2?',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}

export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank?',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
export const getVipList = (pageno = 1, pagesize = 50, special) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2?',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      pageno,
      pagesize,
      special
    })
  })
}

export const getHotSearch = () => {
  return request({
    url: '/api/comic/hotsearch?',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      appType: 8
    }
  })
}

export const searchIndex = (name) => {
  return request({
    url: '/api/comic_v2/searchindex',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2
    }
  })
}
export const searchResult = (name) => {
  return request({
    url: '/api/comic_v2/searchbookauthor?',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2,
      pageno: 1,
      pagesize: 100
    }
  })
}
