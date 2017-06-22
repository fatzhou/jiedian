import { apiGetSign } from 'api'
import { base64encode } from './lang'
import { jsApiList } from '../config'
/**
 * 修改微信title
 */
export function modifyTitle (title) {
  if (navigator.userAgent.indexOf('Android') == -1) {
    const iframe = document.createElement('iframe')
    const body = document.body

    iframe.setAttribute('src', '/isLive')
    iframe.style.position = 'absolute'
    iframe.style.top = '-100000px'

    iframe.addEventListener('load', function load () {
      setTimeout(() => {
        iframe.removeEventListener('load', load)
        body.removeChild(iframe);
      })
    })

    body.appendChild(iframe)
  }
  document.title = title
}

/**
 * 微信jssdk
 * 微信注册url
 */
export function wxRegister (url) {
  const json = apiGetSign(base64encode(url))
  json.then((res) => {
    const data = res.data
    const config = {
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp+'',
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: jsApiList
    }
    wx.config(config)
  })
}