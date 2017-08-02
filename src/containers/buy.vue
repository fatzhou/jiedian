<template>
  <div class="return-wrap">
    <div class="logo">
      <img src="../assets/scanbuy.jpg" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">1.点击<span>扫码购买充电宝</span>，扫描柜机上的二维码支付购买。</p>
    <p class="tips">2.充电宝售价&yen;80/台</p>
    <x-button :active="true" class="return-button">扫码购买充电宝</x-button>
  </div>
</template>

<script>
import { Divider } from 'vux'
import { XButton } from '@/components'

export default {
  data() {
    return {
      "name": "buy"
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    Divider,
    XButton
  }
};
</script>

<style lang="less">
.return-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .logo{
    text-align: center;
    margin-top: 32px;
    img{
      width: 350rpx;
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
    padding: 0 16px;
    font-size: 14rpx;
    span{
     color: #00A282;
    }
  }
  .return-button{
    background-color: #00A282;
    font-size: 16rpx;
  }
}
</style>
