<template lang="html">
  <div class="borrow-wrap">
    <confirm title="sdfdsfdds" v-model="backfirst" confirm-text="我了解了" theme="android" content="当前充电宝桩的充电宝已全部借完，请等待其它用户归还" @on-confirm="closeLesschargerConfirm"> </confirm>    
    <div class="logo">
      <img src="http://7xpceu.com1.z0.glb.clouddn.com/Artboard.png" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">点击<span>扫码借充电宝</span>，然后扫描柜机上的二维码</p>
    <x-button :active="true" class="borrow-button"  @on-click="scanQrcode">扫码借充电宝</x-button>

    <confirm title="余额不足" v-model="lessbalance" confirm-text="去充值" theme="android" content="您余额已不足，请先充值到100元后再借" @on-confirm="closeLessbalanceConfirm"> </confirm>   

    <confirm title="您有充电宝未归还" v-model="backfirst" confirm-text="我了解了" theme="android" content="请先归还在借充电宝后再借新的充电宝" @on-confirm="closeBackfirstConfirm"> </confirm>   

    <confirm title="充电宝不足" v-model="lesscharger" confirm-text="我了解了" theme="android" content="当前充电宝桩的充电宝已全部借完或买走，请等待其它用户归还" @on-confirm="closeLesschargerConfirm"> </confirm>   

    <confirm title="恭喜您借充电宝成功" v-model="successtrade" confirm-text="我了解了" theme="android" content="您使用完充电宝后，请及时归还，系统将在1分钟内停止扣费" @on-confirm="closeSuccesstradeConfirm"> </confirm>   
  </div>
</template>

<script>
import { XButton } from '@/components'
import { Confirm, Divider } from 'vux'
import { modifyTitle, wxRegister, toString } from 'utils'
import { apiGetBalance, apiScanBorrow, apiCheckStatus } from 'api'

export default {
  data() {
    return {
        backfirst: false,
        lessbalance: false,
        lesscharger: false,
        successtrade: false,
        balance: ''
    }
  },
  created () {
    console.log("Page activated");
    modifyTitle('借充电宝');
    wxRegister(location.href);      
  },
  methods: {
    closeBackfirstConfirm() {
      this.backfirst = false;
    },
    closeLessbalanceConfirm() {
      this.lessbalance = false
      this.$router.push('recharge');
    },
    closeLesschargerConfirm() {
      this.lesscharger = false
    },
    closeSuccesstradeConfirm() {
      this.successtrade = false;
    },
    scanQrcode () {    
        let self = this;
         wx.scanQRCode({
          needResult: 1,
          scanType: ["qrCode","barCode"],
          desc: "test",
          success: (res)=> {
            let result = encodeURIComponent(res.resultStr);
            apiGetBalance().then(res => {
              res = res.data
              if (res.errcode === 0) {
                this.balance = res.data.amount
                if(this.balance > 80.0) {
                  //查询是否在借状态
                  apiCheckStatus().then((d)=>{
                    if(d.data.errcode === 0 && d.data.data.status === true) {
                      console.log("您有未归还的充电宝")
                      //仍然有充电宝未归还
                      // self.$vux.toast.text("您有尚未归还的充电宝,请归还后重试");
                      this.backfirst = true;
                      return false;
                    } else {
                      this.handleCode(result);
                    }
                  })
                } else {
                  this.lessbalance = true
                }
              }
            })
          }
        });       

    },
    handleCode(shopid) {
      let self = this
      //拉取余额
      apiScanBorrow(shopid).then((d) => {
        let data = d.data
        if (data.errcode === 0) {
          //借成功了
          this.successtrade = true;
          // this.$router.push({
          //   name: 'commonReply',
          //   params: {
          //     type: 'borrow'
          //   }
          // })
        } else {
          // self.$vux.toast.text(data.msg);
          this.lesscharger = true;
        }
      })
    }
  },
  components: {
    Divider,
    Confirm,
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
      width: 220px;
      display: block;
      margin: 0 auto;
      position: relative;
      left: -8px;
    }
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
