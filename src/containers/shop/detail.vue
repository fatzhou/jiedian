<template>
  <!--pages/shopdetail/shopdetail.wxml-->
  <div class="shop-detail-wrap"> 
    <image src="/assets/default.png" class="header-img"></image>
    <div class="borrow-back">
      <image src="/assets/_chongdian.png"></image>
      <div class="borrow">
        <i class="icon-borrow">借</i>可借 <b>{{shopInfo.borrow}}</b>
      </div>
      <div class="back">
        <i class="icon-return">还</i>已还 <b>{{shopInfo.back}}</b>
      </div>
    </div>
    <div class="name-section">
      <span class="name-section-name">
        {{shopInfo.name}}
      </span>
      <span class="name-section-contact" bindtap="makePhoneCall">联系我<i class="iconfont icon-phone"></i></span>
    </div>

    <div class="detail-section">
      <div class="small-section">
        <i class="iconfont icon-dingwei"></i>
        <div class="content">{{shopInfo.address}}</div>
        <span class="small-section-gothere">到这去<i class="iconfont icon-daohang"></i></span>
      </div>
      <div class="small-section">
        <i class="iconfont icon-clock"></i>
        <div class="content">营业时间：{{shopInfo.time}}</div>
      </div>
      <div class="small-section">
        <i class="iconfont icon-money"></i>
        <div class="content">人均消费：{{shopInfo.cost}}元 </div>
      </div>
      <div class="small-section">
        <i class="iconfont icon-iconset0499"></i>
        <div class="content">充电箱位置：{{shopInfo.position}}
          <span class="state state-on" wx:if="{{shopInfo.online == 1}}">
            设备在线
          </span>
          <span class="state state-off" wx:else>
            设备离线
          </span>
        </div>
      </div>
    </div>
    
    <div class="btn-group">
      <div class="bottom-btn bottom-btn__borrow" bindtap="scanBorrow">
        借充电宝
      </div>
      <div class="bottom-btn bottom-btn__buy" bindtap="scanBorrow">
        买充电宝
      </div>
    </div>
    
  </div>

</template>

<script>
import { modifyTitle } from 'utils'
import { apiShopDetail } from 'api'

export default {
  data() {
    return {
      shopInfo: {}
    }
  },
  created () {
    modifyTitle('商铺详情')
  },
  mounted() {
    let id = this.$route.params.id;
    console.log("店铺id:" + id);
    //获取店铺详情
    apiShopDetail(id).then((res) => {
      console.log(res)
      this.shopInfo = res.data;
    })
  },
  methods: {},
  components: {}
}
</script>

<style lang="less" scoped>
.page{
  height: 100%;
}
.shop-detail-wrap{
  background-color: #f4f4f4;
  height: 100%;
}
.header-img{
  width: 100%;
}

.borrow-back{
  height: 152rpx;
  background-color: #fff;
  display: flex;
}
.borrow-back image {
  width: 96rpx;
  height: 96rpx;
  margin: 28rpx 0 0 80rpx;
}
.borrow-back .borrow, .borrow-back .back{
  flex: 1;
  padding: 0 64rpx;
  box-sizing: border-box;
  line-height: 152rpx;
  font-size: 14px;
  text-align: center;
}
.borrow-back .borrow{
  position: relative;
}
.borrow-back .borrow b{
  color: #0085EE;
  font-weight: bold;
}
.borrow-back .back b{
  color: #00A282;
  font-weight: bold;
}
.icon-borrow, .icon-return{
  display: inline-block;
  width: 28rpx;
  height: 28rpx;
  border: 1px solid;
  text-align: center;
  line-height: 28rpx;
  font-style: normal;
  margin-right: 4px;
  font-size: 12px;
}
.icon-borrow{
  border-color: #0085EE;
  color: #0085EE;
}
.icon-return{
  border-color: #00A282;
  color: #00A282;
}

.borrow-back .borrow:after{
  content: " ";
  position: absolute;
  top: 28rpx;
  right: 0;
  width: 1px;
  height: 96rpx;
  border-right: 1px solid #f7f7f7;
}


.name-section{
  margin-top: 8px;
  display: flex;
  padding: 8px 16px;
  background-color: #fff;
  font-size: 14px;
}
.name-section-name{
  flex: 1;
}
.name-section-contact{
  color: #999999;
}

.detail-section{
  margin-top: 8px;
  background-color: #fff;
  overflow: hidden;
}

.small-section{
  padding: 12px 0;
  display: flex;
  position: relative;
  height: 32rpx;
  line-height: 32rpx;
}
.small-section .iconfont{
  width: 120rpx;
  text-align: center;
}
.small-section .content{
  flex: 1;
  font-size: 14px;
}
.small-section:after{
  position: absolute;
  bottom: -3rpx;
  left: 120rpx;
  content: " ";
  height: 1px;
  width: 100%;
  border-top: 1px solid #E5E5E5;
}

.icon-daohang, .icon-phone{
  color: #0085EE;
}

.small-section-gothere{
  color: #999999;
  font-size: 14px;
  margin-right: 32rpx;
}

.state{
  display: inline-block;
  height: 32rpx;
  line-height: 32rpx;
  padding: 0 8rpx;
  border-radius: 16rpx;
  color: #fff;
  font-size: 12px;
}
.state-on{
  background-color: #FF9800;
}
.state-off{
  background-color: #E44545;
  padding: 2rpx 12rpx;
  float: right;
  margin-right: 16px;
}

.btn-group{
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.bottom-btn{
  flex: 1;
  height: 80rpx;
  background-color: #0085EE;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  font-size: 14px;
}
.bottom-btn__buy{
  background-color: #00A282
}
</style>
