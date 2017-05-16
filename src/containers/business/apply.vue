<template>
  <div class="business-apply-wrap">
    <div class="header">
      <div class="big-sign" :class="'big-sign-' + type">
        <i class="iconfont icon-shangjia"></i>
        <i class="iconfont icon-3"></i>
      </div>
      <p class="msg">{{type === 'seller' ? '商家' : '代理商'}}合作申请</p>
    </div>
    <div class="content">
      <div v-if="type === 'seller'" class="input-group">
        <input-cell title="所在城市" placeholder="请输入城市" :value="city"></input-cell>
        <input-cell title="门店名称" placeholder="请输入门店名称"></input-cell>
        <input-cell title="门店地址" placeholder="请输入门店地址"></input-cell>
        <input-cell title="联系人姓名" placeholder="请输入联系人姓名"></input-cell>
        <input-cell title="联系人电话" placeholder="请输入联系人电话"></input-cell>
        <x-input :value="test"></x-input>
      </div>
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
  import { InputCell } from '@/components';
  import { Group, XInput } from 'vux';

  export default {
    components: {
      Group,
      InputCell,
      XInput
    },
    data() {
      return {
        type: '',
        city: '深圳',
        test: 'ca'
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
    .header{
      .msg{
        margin-top: 16px;
        text-align: center;
        font-size: 16rpx;
      }
    }
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
    .content{
      margin-top: 16rpx;
      border: solid #E8E8E8;
      border-width: 1rpx 0 1px 0; 
      background-color: #fff;
    }
    .input-group{
      width: 100%;
    }
    
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
