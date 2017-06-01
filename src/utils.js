import { apiGetSign } from 'api'
/**
 * 1.类型检测与转换
 */

/**
 * 『null』 严格检测
 */
export function isNull (value) {
  return value === null
}

/**
 * 『undefined』 严格检测
 */
export function isUndefined (value) {
  return value === undefined
}

/**
 * 『未定义』检测
 */
export function isUndef (value) {
  return value === null || value === undefined
}

/**
 * 『已定义』 严格检测
 */
export function isDef (value) {
  return value !== null && value !== undefined
}
/**
 * 『true』 严格检测
 */
export function isTrue (value) {
  return value === true
}
/**
 * 『false』 严格检测
 */
export function isFalse (value) {
  return value === false
}

/**
 * 『数字或字符串』严格检测
 */
export function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * 『非空对象』 检测
 */
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

const _toString = Object.prototype.toString
/**
 * object 严格检测
 */
export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

/**
 * regExp检测
 */
export function isRegExp (RegExp) {
  return _toString.call(RegExp) === '[object RegExp]'
}

/**
 * 转换字符串
 */
export function toString (value) {
  return value == null
  ? ''
  : typeof value === 'object'
    ? JSON.stringify(value)
    : String(value)
}

/**
 * 转换数字
 */
export function toNumber (value) {
  const n = parseFloat(value)
  return isNaN(n) ? value : n
}

/**
 * 2. 数组类操作
 */

/**
 * 原数组中移出某元素
 */
export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * 去重
 */
export function unique (arr) {
  if (typeof Set !== 'undefined') {
    return [...new Set(arr)]
  }
}

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
 * 获取当前时间 默认格式 2017-05-24 01:12:31
 */
export function now() {
  const now = new Date()
  
  const y = now.getFullYear()
  let mon = unshift0(now.getMonth() + 1)
  let d = unshift0(now.getDate())
  let h = unshift0(now.getHours())
  let min = unshift0(now.getMinutes())
  let s = unshift0(now.getSeconds())

  /**
   * 补0
   * @param {*} string
   */
  function unshift0(s) {
    if (parseInt(s) < 10) {
      return '0' + s
    }
    return s
  }

  return `${y}-${mon}-${d} ${h}:${min}:${s}`
}

/**
 * 微信注册url
 */
export function wxRegister (url) {
  const json = apiGetSign(base64encode(url))
  json.then((res) => {
    const data = res.data
    const config = {
      debug: true,
      appId: data.appId,
      timestamp: data.timestamp+'',
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: ['onMenuShareTimeline']
    }
    wx.config(config)
  })
}

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
/**
 * base64编码
 * @param {Object} str
 */
function base64encode(str){
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}