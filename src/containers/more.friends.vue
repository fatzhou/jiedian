<template>
  <div class="more-friends-wrap">
    <header>
      <p>可兑换金额</p>
      <div class="amount">&yen;{{balance}}</div>
      <div class="data-asy">
        <span>累计(人) {{friendsNum}}</span>
        <span>累计 &yen;{{friendsMoney}}</span>
      </div>
        <x-button :active="true" @on-click="deposit">提现</x-button>
    </header>
    <div class="section" v-if="friendList.length > 0">
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
    </div>

    <confirm title="您确定要提现吗？" v-model="depositconfirm" confirm-text="我要提现" cancel-text="取消" theme="android" content="您的推荐提现将以微信红包形式发放给您" @on-confirm="confirmDeposit">

    <confirm title="恭喜您提现成功" v-model="successdeposit" confirm-text="我了解了" cancel-text="取消" theme="android" content="系统已收到您的提现请求，将在5个工作日内以微信红包形式发放给您" @on-confirm="confirmSuccessDeposit">
  </div>
</template>
<script>
import { Confirm, Divider } from 'vux'
import { XButton } from '@/components'
import { modifyTitle, wxRegister } from 'utils'
import { apiAgentDraw, apiUserInfo, apiGetBalance, apiCheckStatus, apiFriendList } from 'api'

export default {
  data () {
    return {
      balance: '',
      friendList: [],
      depositconfirm: false,
      friendsMoney: 0,
      friendsNum: '',
      successdeposit: false
    }
  },
  created () {
    modifyTitle('查看明细')
    this.getFriendList()
  },
  methods: {
    deposit() {
      console.log("您点击了提现")
      if(this.balance < .01) {
        self.$vux.toast.text('您目前无推荐奖励，无需提现');
      } else {
        this.depositconfirm = true
      }
    },
    confirmSuccessDeposit() {
      this.successdeposit = false
    },
    confirmDeposit() {
      console.log("确实要提现")
      let self = this
      this.depositconfirm = false
      //查询余额
      apiAgentDraw().then((res) => {
        res = res.data
        if (res.errcode === 0) {
           this.successdeposit = true
           this.balance = 0
        }
      })
    },
    getFriendList () {
      apiFriendList().then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.friendList = res.data.list.map(item => {
            return {
              head: item.headimgurl.replace(/\\/, ''),
              username: item.username,
              amount: item.amount,
              time: item.time
            }
          })
          this.friendsNum = res.data.total
          this.balance = res.data.balance
          this.friendsMoney = res.data.num
        }
      })
    },
  },
  components: {
    XButton,
    Confirm
  }
}
</script>
<style lang="less">
.more-friends-wrap{
  header{
    p{
      text-align: center;
      margin-top: 24px;
      font-size: 16rpx;
    }
    .amount{
      font-size: 28rpx;
      font-weight: bold;
      text-align: center;
    }
    .data-asy{
      margin: 12px auto;
      width: 60%;
      font-size: 0;
      span{
        display: inline-block;
        text-align: center;
        font-size: 14rpx;
        color: #999;
        width: 50%;
      }
      span:first-child{
        width: 48%;
        border-right: 1rpx solid #999;
      }
    }
  }
  .section{
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    margin-top: 16px; 
    background-color: #fff;
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
}
</style>
