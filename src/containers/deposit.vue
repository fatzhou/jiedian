<template lang="html">
  <div class="deposit-wrap">
    
    <div class="header">
      <div class="big-sign">
        <img src="../assets/TIXIAN.png" alt="">
        <!--<i class="iconfont icon-jinbi"></i>-->
      </div>
      <p class="msg">可提现余额</p>
      <p class="amount">&yen;{{balance}}</p>
    </div>
    
<!--     <div class="content">
      <input-cell title="提现金额" placeholder="请输入提现金额" class="input-cell-last" :value.sync="amount"></input-cell>
    </div> -->
    
    <x-button :active="canClick" @on-click="preDeposit">提现</x-button>
    
    <divider>温馨提示</divider>

    <div class="tips">
      <p>1. 可提现余额是租借充电宝支付的押金和使用扣费后剩余押金的信息；</p>
      <p>2. 租借充电宝过程中无法提现；</p>
      <p>3. 提现申请成功后，预计0-5个工作日退回充值账号；</p>
      <p>4. 如有疑问，请点击“帮助中心”了解；</p>
    </div>
    <confirm title="您确定要提现吗？" v-model="show.confirm" confirm-text="我要提现" cancel-text="取消" theme="android" content="提现后如需继续使用BY街电，请重新充值押金" @on-confirm="confirmDeposit">
      
    </confirm>
  </div>
</template>

<script>
import { InputCell, XButton } from '@/components'
import { Confirm, Divider } from 'vux'
import { modifyTitle } from 'utils'
import { apiDeposit, apiUserInfo, apiGetBalance, apiCheckStatus } from 'api'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      balance: '',
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
      if (this.balance > .001) {
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
          this.balance = res.data.amount
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
      //查询是否有尚未归还的充电宝
      apiCheckStatus().then((d)=>{
        if(d.data.errcode === 0 && d.data.data.status === true) {
          //仍然有充电宝未归还
          self.$vux.toast.text("您有尚未归还的充电宝,请归还后重试");
          return false;
        } else {
          if (this.balance < .001) {
            self.$vux.toast.text("您的余额为0，无法提现");
            return 
          }
          // this.amount = this.
          this.show.confirm = true        
        }
      })
    },
    confirmDeposit() {
      let self = this
      if (!this.canClick) {
        return 
      }
      apiDeposit(0.01).then((res) => {
        console.log("提现0.01")
      // apiDeposit(this.balance).then((res) => {
        res = res.data
        if (res.errcode === 0) {
          // this.$router.push({
          //   name: 'commonReply',
          //   params: {
          //     type: 'deposit'
          //   }
          // })
          //跳转至充值成功页
          this.$router.push('depositresult');
        } else {
          self.$vux.toast.text(res.msg);
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
}
</style>
