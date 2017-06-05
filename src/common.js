/**
 * 动态生成 link标签 加载 iconfont
 */

(function () {
  const iconfontLink = document.createElement('link')
  iconfontLink.setAttribute('href', '//at.alicdn.com/t/font_b9z5kl8ghfh1714i.css')
  iconfontLink.setAttribute('rel', 'stylesheet')
  document.getElementsByTagName('head')[0].appendChild(iconfontLink)
})()