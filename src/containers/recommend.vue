<template lang="html">
  <div class="recommend-wrap">
    <div class="header">
      <img src="../assets/recommend.png" alt="">
      <div class="board" @click="toggleShare">
        <!--<p class="tips">成功邀请好友，可获得<strong>10%</strong>的租借金额</p>-->
        <!--<x-button :active="true" @on-click="toggleShare">马上邀请好友，赚现金</x-button>-->
      </div>
    </div>

    <div class="section">
      <div class="title">
        <span class="text">活动细则</span>
      </div>
      <div class="content">
        <p>1. 推荐好友扫一扫，关注“BY街电”</p>
        <p>2. 通过推荐路径关注BY街电公共号的所有好友，可以提成10%租借消费金额</p>
      </div>
    </div>

    <div class="section" v-if="showFriends">
      <div class="title">
        <span class="text">已成功邀请{{friendNum}}位好友关注</span>
      </div>
      <div class="content">
        <ul class="friends">
          <li class="friend" v-for="friend in friendList" :key="friend.id">
            <i class="avatar">
              <img :src="friend.head" alt="">
            </i>
            <div class="detail">
              <p class="name">{{friend.username}}</p>
              <p class="time">{{friend.time}}</p>
            </div>
            <div class="amount">
              &yen;{{friend.amount}}
            </div>
          </li>
        </ul>
      </div>
      <router-link tag="p" class="check-more" :to="{ name: 'morefriends'}">
        查看更多明细>
      </router-link>
    </div>
    <div class="section" v-if="!showFriends">
      <div class="title">
        <span class="text">赶快推荐好友使用！</span>
      </div>
    </div>

    <div class="share-mask" v-if="showShare" @click="toggleShare"></div>
  </div>
</template>

<script>
import { XButton } from '@/components'
import { modifyTitle, wxRegister } from 'utils'
import { apiFriendList, apiUserInfo } from 'api'

export default {
  data() {
    return {
      friendList: [],
      showShare: false,
      openid: '',
      showFriends: false
    }
  },
  created () {
    modifyTitle('推荐好友')
    wxRegister(location.href)
    this.getOpenid()
    this.getFriendList()
    this.share()
  },
  methods: {
    toggleShare() {
      this.showShare = !this.showShare
    },
    getOpenid () {
      apiUserInfo().then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.openid = res.data.openid
        }
      })
    },
    getFriendList () {
      apiFriendList().then(res => {
        res = res.data
        if (res.errcode === 0 && res.data.list) {
          const _list = res.data.list.map(item => {
            return {
              head: item.headimgurl.replace(/\\/, ''),
              username: item.username,
              amount: item.amount,
              time: item.time
            }
          })
          this.showFriends = true
          this.friendNum = res.data.total
          this.friendList = _list.slice(0, 5)
        } else {
          this.showFriends = false
        }
      })
    },
    share () {
      const self = this
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
  },
  components: {
    XButton
  }
}
</script>

<style lang="less">
.recommend-wrap{
  background-color: #fff;
  padding-bottom: 20px;
  height: 100%;
  .header{
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      position: relative;
      top: -7px;
    }
    .board{
      position: absolute;
      bottom: 7px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 118px;
      // background-color: #EDF4FE;
      border-radius: 4px 4px 0 0;
    }
    .tips{
      height: 32px;
      line-height: 48px;
      text-align: center;
      font-size: 14rpx;
    }
    strong{
      font-size: 16rpx;
      color: #FF8400;
    }
  }
  .section{
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    margin-top: 16px; 
    .title{
      position: relative;
      height: 20px;
      background-image: url(../assets/line.png);
      background-size: 100% 40%;
      background-repeat: no-repeat;
      background-position-y: 50%;
    }
    .text{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      background-color: #fff;
      padding: 0 16px;
      line-height: 20px;
      color: #0085EE;
      font-size: 16rpx;
      white-space: nowrap;
    }
    .content{
      padding: 16px 0;
      font-size: 14rpx;
      color: #212121;
    }
    .friend{
      height: 48px;
      display: flex;
      margin-bottom: 16px;
    }
    .avatar{
      display: block;
      width: 48px;
      height: 48px;
      border-radius: 4px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .detail{
      flex: 1;
      margin-left: 12px;
      p{
        height: 24px;
        line-height: 24px;
      }
      .name{
        color: #212121;
        font-size: 15rpx;
      }
      .time{
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    
    .amount{
      width: 80rpx;
      text-align: right;
      line-height: 48px;
      font-size: 16rpx;
    }
  }
  .check-more{
    width: 100%;
    text-align: right;
    color: #0085EE;
    text-decoration: underline;
    font-size: 14rpx;
  }
  .share-mask{
    position: fixed;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/share.png);
    background-size: 100% 100%;
  }
}
</style>
