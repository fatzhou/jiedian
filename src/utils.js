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

