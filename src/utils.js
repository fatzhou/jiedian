import { apiGetSign } from 'api'
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
  const json = apiGetSign(encodeURIComponent(url))
  json.then((res) => {
    alert(toString(res))
  })
}

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