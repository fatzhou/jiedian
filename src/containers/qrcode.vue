<template>
  <div class="qrcode-wrap">
    <div class="content">
      <div class="title">扫一扫，关注<span style="color: #00B1E4">BY街电</span></div>
      <div class="qrcode-img">
        <img :src="imgUrl" alt="" class="qrcode">
        <i class="small-logo"></i>
      </div>
      <div class="footer">
        关注公众号成功之后，获取推荐好友权限，掌握获取<span style="color: #D12734">10%</span>提成机会
      </div>
      <p class="msg">获取借还充电宝权限</p>
    </div>
  </div>
</template>
<script>
import { apiTuijianQrcode } from 'api'
import { modifyTitle, wxRegister } from 'utils'

export default {
  data () {
    return {
      // imgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58'
      imgUrl: '',
      openid: ''
    }
  },
  created () {
    modifyTitle('分享好友挣提成');
    wxRegister(location.href)
    this.getQrcode();
    this.share();
  },
  methods: {
    getQrcode () {
      const openid = this.$route.query.openid;
      console.log('传入了openid:' + openid)
      apiTuijianQrcode(openid).then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.imgUrl = res.data.url
        }
      })
    },
    share () {
      const self = this
      console.log("调用了share")
      wx.ready(function() {
        const params = {
          title: '您的好友邀请您加入BY街电',
          desc: '免费注册BY街电，方便使用共享充电宝',
          link: `http://www.byjiedian.com/index.php/byjie/index/qrcode?id=${self.openid}`,
          imgUrl: 'http://www.byjiedian.com/static/img/logo.jpg'
        }
        wx.onMenuShareTimeline(params)
        wx.onMenuShareAppMessage(params)
        wx.onMenuShareQQ(params)
        wx.onMenuShareWeibo(params)
        wx.onMenuShareQZone(params)
      })
    }
  }
}
</script>
<style lang="less">
.qrcode-wrap{
  position: fixed;
  height: 100%;
  background-color: #00B1E4;
  .content{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 284px;
    height: 335px;
    background-color: #fff;
    border-radius: 5px;
  }
  .title{
    margin-top: 16px;
    text-align: center;
    font-size: 18rpx;
  }
  .qrcode-img{
    position: relative;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    margin: 16px auto;
    // transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
  }
  .qrcode{
    width: 100%;
    height: 100%;
  }
  .small-logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background-image: url(../assets/logo.jpg);
    background-size: 100% 100%;
  }
  .footer{
    background-color: #F9F9F9;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
    font-size: 14rpx;
  }
  .msg{
    width: 100%;
    position: absolute;
    bottom: -32px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
}
</style>
