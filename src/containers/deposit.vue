<template lang="html">
  <div class="deposit-wrap">
    
    <div class="header">
      <div class="big-sign">
        <img src="../assets/TIXIAN.png" alt="">
        <!--<i class="iconfont icon-jinbi"></i>-->
      </div>
      <p class="msg">可提现余额</p>
      <p class="amount">&yen;{{amount}}</p>
    </div>
    
    <div class="content">
      <input-cell title="提现金额" placeholder="请输入提现金额" class="input-cell-last" :value.sync="amount"></input-cell>
    </div>
    
    <x-button :active="canClick" @on-click="preDeposit">提现</x-button>
    
    <divider>温馨提示</divider>

    <div class="tips">
      <p>1. 可提现余额是租借充电宝支付的押金和使用扣费后剩余押金的信息；</p>
      <p>2. 租借充电宝过程中无法提现；</p>
      <p>3. 提现申请成功后，预计0-5个工作日退回充值账号；</p>
      <p>4. 如有疑问，请点击“帮助中心”了解；</p>
    </div>
    <confirm title="确认提现" v-model="show.confirm" @on-confirm="confirmDeposit">
      确认提现{{amount}}吗？该操作不可撤销
    </confirm>
  </div>
</template>

<script>
import { InputCell, XButton } from '@/components'
import { Confirm, Divider } from 'vux'
import { modifyTitle } from 'utils'
import { apiDeposit, apiUserInfo, apiGetBalance } from 'api'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      amount: '',
      show: {
        confirm: false
      },
      user: {}
    }
  },
  created () {
    modifyTitle('提现')
    this.getBalance()
  },
  computed: {
    canClick() {
      if (this.amount !== '') {
        return true
      }
      return false
    },
  },
  methods: {
    getBalance () {
      apiGetBalance().then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.amount = res.data.amount
        }
      })
    },
    getUserInfo () {
      apiUserInfo().then((res) => {
        res = res.data
        if (res.errcode === 0) {
          this.user = res.data
        }
      })
    },
    preDeposit () {
      if (isNaN(this.amount)) {
        alert('请输入合法提现金额')
        return
      }
      if (this.amount > 200) {
        alert('提现金额不能超过余额')
        return 
      }
      this.show.confirm = true
    },
    confirmDeposit() {
      if (!this.canClick) {
        return 
      }
      apiDeposit(this.amount).then((res) => {
        res = res.data
        if (res.errcode === 0) {
          this.$router.push({
            name: 'commonReply',
            params: {
              type: 'deposit'
            }
          })
        } else {
          alert(res.errmsg)
        }
      })
    }
  },
  components: {
    InputCell,
    XButton,
    Confirm,
    Divider
  }
};
</script>

<style lang="less">
.deposit-wrap{
  .header{
    width: 100%;
    height: 196px;
    background-color: #fff;
    overflow: hidden;
  }
  .big-sign{
    margin: 32px auto 0;
    text-align: center;
    width: 64px;
    height: 64px;
    .iconfont{
      font-size: 48rpx;
    }
  }
  .msg{
    margin-top: 8px;
    text-align: center;
    color: #212121;
    font-size: 16rpx;
  }
  .amount{
    margin-top: 12px;
    text-align: center;
    color: #0085EE;
    font-size: 32rpx;
  }
  .content{
    padding-left: 15px;
    margin-top: 8px;
    background-color: #fff;
  }
  .tips{
    padding: 0 16px;
    color: #999999;
    p{
      margin-top: 4px;
    }
  }
  /*
    vux
  */
  .weui-dialog__title, .weui-dialog__btn{
    font-size: 16rpx;
  }
  .weui-dialog__ft{
    line-height: 1.2rem;
  }
  .weui-dialog__bd{
    font-size: 16rpx;
    padding: 0.2em 1.6em;
  }
  .vux-divider{
    margin-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
