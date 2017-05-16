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
        <input-cell title="所在城市" placeholder="请输入城市" :value.sync="seller.city"></input-cell>
        <input-cell title="门店名称" placeholder="请输入门店名称" :value.sync="seller.shopName"></input-cell>
        <input-cell title="门店地址" placeholder="请输入门店地址" :value.sync="seller.shopAddress"></input-cell>
        <input-cell title="联系人姓名" placeholder="请输入联系人姓名" :value.sync="seller.concatName" ></input-cell>
        <input-cell title="联系电话" placeholder="请输入联系电话" class="input-cell-last" :value.sync="seller.concatMobile"></input-cell>
      </div>
      <div v-if="type === 'agent'" class="input-group">
        <input-cell title="姓名" placeholder="请输入姓名" :value.sync="agent.concatName"></input-cell>
        <input-cell title="联系电话" placeholder="请输入联系电话" :value.sync="agent.concatMobile"></input-cell>
        <input-cell title="邮箱" placeholder="请输入邮箱" :value.sync="agent.email"></input-cell>
        <input-cell title="城市/区域" placeholder="请输入城市/区域" :value.sync="agent.city"></input-cell>
        <input-cell title="我的资源优势" class="input-cell-last" disabled></input-cell>
        <x-textarea :rows="4" :max="200" placeholder="请输入资源优势" :value="agent.advantage" @input="syncAdvantage"></x-textarea>
      </div>
    </div>
    <div class="button" :class="{'button-active': canSubmit}" @click="submit">
      提交申请
    </div>
  </div>
</template>
<script>
  import { InputCell } from '@/components';
  import { Group, XInput, XTextarea } from 'vux';

  export default {
    components: {
      Group,
      InputCell,
      XInput,
      XTextarea
    },
    data() {
      return {
        type: '',
        canClick: false,
        seller: {
          city: '',
          shopName: '',
          shopAddress: '',
          concatName: '',
          concatMobile: ''
        },
        agent: {
          city:'',
          concatName: '',
          concatMobile: '',
          email: '',
          advantage: ''
        }
      }
    },
    computed: {
      canSubmit() {
        const type = this.type
        const params = this[type]
        // 判断参数是否为空
        return Object.keys(params).every((key) => {
          return params[key] != ''
        })
      }
    },
    created() {
      this.type = this.$route.params.type
    },
    mounted() {
      const type = this.type
      const params = this[type]
    },
    methods: {
      syncAdvantage(val) {
        this.agent.advantage = val
      },
      submit() {
        const type = this.type
        this.$vux.toast.show('loading')
      }
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
      padding-left: 15rpx;
      background-color: #fff;
    }
    .input-group{
      width: 100%;
    }
    
    .button{
      margin: 16rpx auto 0;
      width: 288px;
      height: 44px;
      background-color: #0085EE;
      color: rgba(255, 255, 255, .4);
      border-radius: 4rpx;
      font-size: 16rpx;
      line-height: 44px;
      text-align: center
    }
    .button-active{
      color: rgba(255, 255, 255, 1);
    }
    /*
     vux改造样式
     */
    .vux-x-textarea{
      padding-left: 0;
      padding-top: 0;
      &:before{
        border: 0;
      }
    }
  }
</style>
