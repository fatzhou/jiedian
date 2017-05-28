<template lang="html">
  <div class="borrow-wrap">
    <div class="logo">
      <img src="../assets/GUIZI.png" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">点击<span>扫码借充电宝</span>，然后扫描柜机上的二维码</p>
    <!--<div class="button">扫码借充电宝</div>-->
    <x-button :active="true" class="borrow-button">扫码借充电宝</x-button>
  </div>
</template>

<script>
import { Divider } from 'vux'
import { XButton } from '@/components'

export default {
  data() {
    return {
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
.borrow-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .logo{
    text-align: center;
    margin-top: 32px;
  }
  .divider{
    width: 50%;
    margin: 0 auto;
    font-size: 14px;
    color: #212121;
  }
  .tips{
    margin-top: 16px;
    text-align: center;
    font-size: 14px;
    span{
     color: #0085ee;
    }
  }
  .borrow-button{
    font-size: 16px;
  }
}
</style>
