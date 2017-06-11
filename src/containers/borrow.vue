<template lang="html">
  <div class="borrow-wrap">
    <div class="logo">
      <!--<img src="../assets/GUIZI.png" alt="">-->
      <img src="../assets/elect.jpg" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">点击<span>扫码借充电宝</span>，然后扫描柜机上的二维码</p>
    <!--<div class="button">扫码借充电宝</div>-->
    <x-button :active="true" class="borrow-button" @on-click="scanQrcode">扫码借充电宝</x-button>
  </div>
</template>

<script>
import { Divider } from 'vux'
import { XButton } from '@/components'
import { modifyTitle, wxRegister, toString } from 'utils'

export default {
  data() {
    return {
    };
  },
  created () {
    modifyTitle('借充电宝')
    wxRegister(location.href)
  },
  methods: {
    scanQrcode () {
      wx.scanQRCode({
        needResult: 1,
        scanType: ['qrCode'],
        success (res) {
          alert(toString(res))
        }
      })
    }
  },
  components: {
    Divider,
    XButton
  }
};
</script>

<style lang="less">
.borrow-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .logo{
    text-align: center;
    margin-top: 32px;
    img{
      width: 200rpx;
    }
  }
  .divider{
    width: 50%;
    margin: 0 auto;
    font-size: 14rpx;
    color: #212121;
  }
  .tips{
    margin-top: 16px;
    text-align: center;
    font-size: 14rpx;
    span{
     color: #0085ee;
    }
  }
  .borrow-button{
    font-size: 16rpx;
  }
}
</style>
