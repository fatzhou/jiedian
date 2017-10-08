<template>
  <div class="return-wrap">
    <div class="logo">
      <img src="http://ob3wg7deo.bkt.clouddn.com/chongdian.png" alt="">
    </div>
    <divider class="divider">使用方法</divider>
    <p class="tips">1.点击<span>扫码购买充电宝</span>，扫描柜机上的二维码支付购买。</p>
    <p class="tips">2.充电宝售价&yen;80/台</p>
    <x-button :active="true" class="return-button" @on-click="scanBuy">扫码购买充电宝</x-button>
  </div>
</template>

<script>
import { Divider } from 'vux'
import { XButton } from '@/components'
import { modifyTitle, wxRegister, toString } from 'utils'
import { apiGetBalance, apiScanBuy, apiCheckStatus } from 'api'

export default {
  data() {
    return {
      "name": "buy"
    };
  },
  created() {
    modifyTitle('买充电宝');

    wxRegister(location.href);  
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    scanBuy () {
      wx.ready(()=>{
         wx.scanQRCode({
          needResult: 1,
          scanType: ["qrCode","barCode"],
          success: (res)=> {
            let result = res.resultStr;
                    let index = result.indexOf('shopid=');
        if(index > -1) {
          result = result.slice(index + 'shopid='.length);
        }

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
      console.log("获得店铺ID" + shopid);
      let self = this
      //拉取余额
      apiGetBalance().then((res) => {
        console.log(res.data, "余额接口返回");
        res = res.data
        if (res.errcode === 0) {
          if(res.data.amount > 80) {
              //扫码买
              apiScanBuy(shopid).then((res) => {
                res = res.data
                if (res.errcode === 0) {
                  //借成功了
                  this.$router.push({
                    name: 'commonReply',
                    params: {
                      type: 'buy'
                    }
                  })
                } else {
                  self.$vux.toast.text(res.msg).show();
                }
              })                
          } else {
            //余额不足，进入充值页面
            self.$vux.toast.text("您的余额不足，请先充值");
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
.return-wrap{
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
    padding: 0 16px;
    font-size: 14rpx;
    span{
     color: #00A282;
    }
  }
  .return-button{
    background-color: #00A282;
    font-size: 16px;
  }
}
</style>
