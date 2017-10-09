
import axios from 'axios'

function get (url, params) {
  return axios.get(url, { params })
}

function post (url, params) {
  return axios.post(url, params)
}

const rootUrl = 'http://www.byjiedian.com/index.php/byjie'

const urls = {
  userInfo: 'http://byjiedian.com/index.php?m=byjie&a=info'
}

/**
 * 获取微信jssdk签名
 * http://byjiedian.com/index.php?m=byjie&a=get_sign&url=xxx
 */
export function apiGetSign (url) {
  return get(rootUrl + '/get_sign', {
     url: url
  })
}

/**
 * 获取用户信息
 * http://byjiedian.com/index.php?m=byjie&a=info'
 */
export function apiUserInfo () {
  return get(rootUrl + '/info')
}

/**
 * 状态查询
 */
export function apiCheckStatus() {
  return get(rootUrl + '/scan_lending')
}

/**
 * 扫码借
 */
export function apiScanBorrow(shopid) {
  return get(rootUrl + '/borrow', {
    shopid: shopid
  })
}

/**
 * 扫码买
 */
export function apiScanBuy(shopid) {
  return get(rootUrl + '/buy_imei', {
    shopid: shopid
  })
}

/**
 * 租借记录
 * http://byjiedian.com/index.php?m=byjie&a=order_list
 */

export function apiOrderList () {
  return get(rootUrl + '/order_list')
}

/**
 * 交易明细
 * 
 */

export function apiTradeList () {
  return get(rootUrl + '/trade_list')
}

/**
 * 获取周边店铺地址位置及信息
 * http://byjiedian.com/index.php?m=byjie&a=get_pos 
 */
export function apiNearShop (lat, lng) {
  return get(rootUrl + '/get_posi', {
    lat,
    lng
  })
}

/**
 * 押金充值100
 * https://byjiedian.com/index.php?m=byjie&a=get_pay
 */
export function apiRecharge () {
  return get(rootUrl + '/get_pay')
}

/**
 * 检查支付状态
 * http://www.byjiedian.com/index.php/byjie/check_pay/B062310826794157237386948
 */
export function apiCheckPay (order_no) {
  return get(rootUrl + '/check_pay', {
    order_no
  })
}

/**
 * 退款提现
 * http://www.byjiedian.com/index.php/byjie/check_pay/B062310826794157237386948
 */
export function apiDeposit (amount) {
  return get(rootUrl + '/refund', {
    amount
  })
}

/**
 * 获取店铺详情
 * http://www.byjiedian.com/index.php/byjie/check_pay/B062310826794157237386948
 */
export function apiShopDetail (id) {
  return get(rootUrl + '/get_shop', {
    id
  })
}

/**
 * 获取当前余额
 */
export function apiGetBalance () {
  return get(rootUrl + '/get_balance')
}

/**
 * 推荐好友列表
 */
export function apiFriendList () {
  return get(rootUrl + '/get_agent_trade')
}

/**
 * 推荐提现
 */
export function apiAgentDraw () {
  return get(rootUrl + '/agent_draw')
}

/**
 * 推荐二维码
 */
export function apiTuijianQrcode (openid) {
  return get(rootUrl + '/get_qrcode', {
    openid: openid
  })
}

/**
 * 租借记录
 */
export function apiRentList () {
  return get(rootUrl + '/rent_list')
}