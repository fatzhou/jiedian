<template>
  <div class="my-wrap">
    <div class="header">
      <img :src="img" class="avatar">
      <p class="user-name">啦啦啦</p>
    </div>
    <div class="remainder">余额 <span class="money">&yen;299.00</span></div>
    <div class="ctrl-money">
      <router-link :to="{name: 'deposit'}" class="item deposit" tag="div">
        <i class="iconfont icon-tixian"></i>提现
      </router-link>
      <router-link :to="{name: 'recharge'}" class="item recharge" tag="div">
        <i class="iconfont icon-chongzhi1"></i>充值
      </router-link>
    </div>

    <group class="group">
      <cell title="交易明细" is-link link="/my/trade">
        <i class="iconfont icon-jiaoyimingxi" slot="icon"></i>
      </cell>
      <cell title="租借记录" is-link>
        <i class="iconfont icon-dingdangdaijiekuanjilu" slot="icon"></i>
      </cell>
    </group>
    <group class="group">
      <cell title="优惠商城" is-link>
        <i class="iconfont icon-youhuishangcheng" slot="icon"></i>
      </cell>
      <cell title="推荐好友" is-link>
        <i class="iconfont icon-elite" slot="icon"></i>
      </cell>
      <cell title="推荐提成" is-link>
        <i class="iconfont icon-liwu" slot="icon"></i>
      </cell>
      <cell title="帮助中心" is-link>
        <i class="iconfont icon-information" slot="icon"></i>
      </cell>
    </group>
    <p class="contact">客服电话：<a href="tel:4000805985" class="tel">400-0805-985</a></p>
  </div>
</template>

<script>
import { Cell, Group, Alert } from 'vux';

export default {
  data() {
    return {
      show: true,
      img: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/730e0cf3d7ca7bcb63873d0db4096b63f624a810.jpg',
    };
  },
  components: {
    Cell,
    Group,
    Alert,
  },
};
</script>

<style lang="less">

@blue: #0085EE;

.my-wrap{
  .header{
    position: relative;
    height: 145px;
    background-color: #fff;
    background-image: url('../assets/artboard.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .avatar{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    overflow: hidden;

  }
  .user-name{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 16rpx;
  }
  .remainder{
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    color: #889199;
    font-size: 14rpx;
    .money{
      color: #FF8400;
    }
  }
  .ctrl-money{
    margin-top: 1rpx;
    display: flex;
    padding: 8rpx 0;
    background-color: #fff;
    font-size: 16rpx;
    border-bottom: 1rpx solid #f4f4f4;
    .item{
      display: block;
      flex: 1;
      text-align: center;
      height: 32rpx;
      line-height: 32rpx;
    }
    .deposit{
      border-right: 1px solid #f4f4f4;
    }
    .iconfont{
      color: @blue;
      margin-right: 4rpx;
    }
  }
  .group .iconfont{
    position: relative;
    top: -2rpx;
    margin-right: 4rpx;
    color: #9B9B9B;
  }
  /*
    vux
  */
  .vux-no-group-title{
    margin-top: 8rpx;
  }
  .vux-label{
    font-size: 16rpx;
  }
  .contact{
    height: 32rpx;
    line-height: 32rpx;
    color: #757575;
    text-align: center;
  }
  .tel{
    color: @blue;
  }
  .weui-cell{
    padding: 10rpx 15px;
  }
}
</style>
