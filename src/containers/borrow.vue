<template lang="html">
  <div class="borrow-wrap">
    <div class="logo">
      <img src="http://ob3wg7deo.bkt.clouddn.com/chongdian.png" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">点击<span>扫码借充电宝</span>，然后扫描柜机上的二维码</p>
    <x-button :active="true" class="borrow-button"  @on-click="scanQrcode">扫码借充电宝</x-button>
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
      name: "borrow"
    };
  },
  created () {
    console.log("Page activated");
    modifyTitle('借充电宝');

    wxRegister(location.href);      
  },
  methods: {
    scanQrcode () {
      wx.ready(()=>{
         wx.scanQRCode({
          needResult: 1,
          scanType: ["qrCode","barCode"],
          success: (res)=> {
            let result = res.resultStr;
            let index = res.resultStr.indexOf('shopid=');
            if(index > -1) {
              result = res.resultStr.slice(index + 'shopid='.length);
              console.log(result);
            }
            //查询是否在借状态
            apiCheckStatus().then((d)=>{
              if(d.data.errcode === 0 && d.data.data.status === true) {
                //仍然有充电宝未归还
                self.$vux.toast.text("您有尚未归还的充电宝,请归还后重试");
                return false;
              } else {
                this.handleCode(result);
              }
            })
          }
        });       
      })
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
              apiScanBorrow(shopid).then((res) => {
                res = res.data
                if (res.errcode === 0) {
                  //借成功了
                  this.$router.push({
                    name: 'commonReply',
                    params: {
                      type: 'borrow'
                    }
                  })
                } else {
                  self.$vux.toast.text(res.msg);
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
      width: 350px;
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
