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

const base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

/**
 * base64编码
 * @param {Object} str
 */
export function base64encode(str){
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


/**
 * base64解码
 * @param {Object} str
 */
export function base64decode(str){
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        }
        while (i < len && c1 == -1);
        if (c1 == -1) 
            break;
        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        }
        while (i < len && c2 == -1);
        if (c2 == -1) 
            break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61) 
                return out;
            c3 = base64DecodeChars[c3];
        }
        while (i < len && c3 == -1);
        if (c3 == -1) 
            break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) 
                return out;
            c4 = base64DecodeChars[c4];
        }
        while (i < len && c4 == -1);
        if (c4 == -1) 
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
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