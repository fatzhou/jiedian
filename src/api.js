
import axios from 'axios'

function get (url, params) {
  return axios.get(url, { params })
}

function post (url, params) {
  return axios.post(url, { params })
}

const urls = {
  userInfo: 'http://byjiedian.com/index.php?m=byjie&a=info'
}

/**
 * 获取用户信息
 */

export function apiUserInfo () {
  return get(urls.userInfo)
}