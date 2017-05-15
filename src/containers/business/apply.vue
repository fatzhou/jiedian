<template>
  <div class="business-apply-wrap">
    <div class="header">
      <div class="big-sign" :class="'big-sign-' + type">
        <i class="iconfont icon-shangjia"></i>
        <i class="iconfont icon-3"></i>
      </div>
    </div>
    <div>
      <group v-if="type === 'seller'">
        <div class="input-cell">

        </div>
        <!-- <x-input title="所在城市"></x-input>
        <x-input title="门店名称"></x-input>
        <x-input title="门店地址"></x-input>
        <x-input title="联系人姓名"></x-input>
        <x-input title="联系人电话"></x-input> -->
      </group>
      <group v-if="type === 'agent'">
        <!-- <x-input title="姓名"></x-input>
        <x-input title="联系电话"></x-input>
        <x-input title="邮箱"></x-input>
        <x-input title="城市/区域"></x-input>
        <x-input title="我的资源优势"></x-input> -->
      </group>
    </div>
  </div>
</template>
<script>
  import { Group, XInput } from 'vux';
  export default {
    components: {
      Group,
      XInput
    },
    data() {
      return {
        type: ''
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.type = this.$route.params.type
      })
    }
  }
</script>
<style media="screen" lang="less">
  .business-apply-wrap{
    .big-sign{
      width: 72px;
      height: 72px;
      line-height: 72px;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      margin: 36px auto 0;
      .iconfont{
        display: none;
        font-size: 32px;
      }
    }
    .big-sign-seller{
      color: #FF9800;
      .icon-shangjia{
        display: block;
      }
    }
    .big-sign-agent{
      color: #5B66D5;
      .icon-3{
        display: block;
      }
    }
    .input-cell{}
    /*
     vux改造样式
     */
    .weui-cell{
      padding: 10rpx 15px;
    }
    .weui-label{
      font-size: 14rpx;
      width: 10em;
    }
  }
</style>
