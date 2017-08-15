/**
 * 动态生成 link标签 加载 iconfont
 */

(function () {
  const iconfontLink = document.createElement('link')
  iconfontLink.setAttribute('href', '//at.alicdn.com/t/font_378571_ma8ezejqjk7yzaor.css')
  iconfontLink.setAttribute('rel', 'stylesheet')
  document.getElementsByTagName('head')[0].appendChild(iconfontLink)
})()