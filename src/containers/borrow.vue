<template lang="html">
  <div class="borrow-wrap">
    <div class="logo">
      <img src="http://ob3wg7deo.bkt.clouddn.com/chongdian.png" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">点击<span>扫码借充电宝</span>，然后扫描柜机上的二维码</p>
    <x-button :active="true" class="borrow-button"  @on-click="scanQrcode">扫码借充电宝</x-button>
    <confirm title="您有充电宝未归还" v-model="backfirst" confirm-text="我了解了" theme="android" content="请先归还充电宝后重新扫码借充电宝" @on-confirm="closeBackfirstConfirm">
      
    </confirm>
  </div>
</template>

<script>
import { Divider } from 'vux'
import { XButton } from '@/components'
import { modifyTitle, wxRegister, toString } from 'utils'
import { apiGetBalance, apiScanBorrow, apiCheckStatus } from 'api'

export default {
  data() {
    return {
      name: "borrow",
      data() {
        return {
          backfirst: false
        }
      }
    };
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
    scanQrcode () {
      console.log("您点击了扫码借");

        let self = this;
         wx.scanQRCode({
          needResult: 1,
          scanType: ["qrCode","barCode"],
          success: (res)=> {
            let result = encodeURIComponent(res.resultStr);
            //查询是否在借状态
            apiCheckStatus().then((d)=>{
              if(d.data.errcode === 0 && d.data.data.status === true) {
                //仍然有充电宝未归还
                // self.$vux.toast.text("您有尚未归还的充电宝,请归还后重试");
                this.backfirst = true;
                return false;
              } else {
                this.handleCode(result);
              }
            })
          }
        });       

    },
    handleCode(shopid) {
      let self = this
      //拉取余额
      apiGetBalance().then((res) => {
        console.log(res.data, "余额接口返回");
        res = res.data
        if (res.errcode === 0) {
          if(res.data.amount > 80) {
              //扫码借
              apiScanBorrow(shopid).then((d) => {
                let data = d.data
                if (data.errcode === 0) {
                  //借成功了
                  this.$router.push({
                    name: 'commonReply',
                    params: {
                      type: 'borrow'
                    }
                  })
                } else {
                  self.$vux.toast.text(data.msg);
                }
              })                 
          } else {
            //余额不足，进入充值页面
            this.$router.push({
              name: 'recharge'
            });
          }
        } else {
          self.$vux.toast.text(res.msg);
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
      width: 100%;
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
