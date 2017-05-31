<template lang="html">
  <div class="recharge-wrap">
    <div class="header">
      <div class="big-sign">
        <img src="../assets/ZHU.png" alt="">
        <!--<i class="iconfont icon-cunqianguan"></i>-->
      </div>
      <p class="msg">需支付押金</p>
      <p class="amount">&yen;100.00</p>
      <div class="reminds">充电宝自带充电线支持
        <i class="iconfont icon-apple"></i>
        <i class="iconfont icon-andriod"></i>
        <i class="iconfont icon-shujuxian"></i>(Type-C)
      </div>
    </div>

    <x-button :active="true" @on-click="recharge">确认支付</x-button>
    <p class="recharge-tips">点击支付表示已阅读并同意<span>使用条款</span>和<span>充值协议</span></p>

    <divider>温馨提示</divider>

    <div class="tips">
      <p>1. 归还充电宝之后，用户可以查看支付押金和使用扣费后剩余押金的信息；</p>
      <p>2. 充电宝借出后，15分钟后开始扣费，1小时收费1元，每天最高收费8元。</p>
    </div>
  </div>
</template>

<script>
import { XButton } from '@/components'
import { Divider } from 'vux';

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    recharge() {
      this.$router.push({
        name: 'commonReply',
        params: {
          type: 'recharge'
        }
      })
    }
  },
  components: {
    XButton,
    Divider
  }
};
</script>

<style lang="less">
.recharge-wrap{
  .header{
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .big-sign{
    margin: 32px auto 0;
    text-align: center;
    width: 64px;
    height: 64px;
    .iconfont{
      color: #FFC502;
      font-size: 48px;
    }
  }
  .msg{
    margin-top: 8px;
    text-align: center;
    color: #212121;
  }
  .amount{
    margin: 6px 0;
    text-align: center;
    color: #0085EE;
    font-size: 32px;
  }
  .reminds{
    border-top: 1px solid #F2F2F2;
    text-align: center;
    height: 64rpx;
    line-height: 64rpx;
    font-size: 12px;
    color: #757575;
    .iconfont{
      color: #757575;
      margin-right: 2px;
    }
    .icon-apple{
      font-size: 18px;
    }
    .icon-andriod{
      position: relative;
      top: 1px;
    }
    .icon-shujuxian{
      position: relative;
      top: 1px;
    }
  }
  .recharge-tips{
    margin-top: 8px;
    text-align: center;
    color: #999;
    span{
      color: #0085ee;
    }
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
  .vux-divider{
    margin-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
