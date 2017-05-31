
import axios from 'axios'

function get (url, params) {
  return axios.get(url, { params })
}

function post (url, params) {
  return axios.post(url, { params })
}

const rootUrl = 'http://byjiedian.com/index.php'

const urls = {
  userInfo: 'http://byjiedian.com/index.php?m=byjie&a=info'
}

/**
 * 获取微信jssdk签名
 * http://byjiedian.com/index.php?m=byjie&a=get_sign&url=xxx
 */
export function apiGetSign (url) {
  return get(rootUrl, {
     m: 'byjie',
     a: 'get_sign',
     url: url
  })
}

/**
 * 获取用户信息
 * http://byjiedian.com/index.php?m=byjie&a=info'
 */
export function apiUserInfo () {
  return get(rootUrl, {
    m: 'byjie',
    a: 'info'
  })
}

/**
 * 租借记录
 * http://byjiedian.com/index.php?m=byjie&a=order_list
 */

export function apiOrderList () {
  return get(rootUrl, {
    m: 'byjie',
    a: 'order_list'
  })
}