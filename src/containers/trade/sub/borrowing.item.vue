<template>
  <!--租借进行中-->
  <div class="borrowing-item-wrap">
    <div class="header">
      <div class="code">订单号：{{data.code}}</div>
      <div class="sign">进行中</div>
    </div>
    <div class="content">
      <div class="money">
        <div class="amount"><small>&yen;</small>{{data.money}}</div>
        <div class="tips">产生费用</div>
      </div>
      <div class="detail">
        <p class="borrow-site">
          <label>租借时间</label>
          <span>{{data.time}}</span>
        </p>
        <p class="borrow-time">
          <label>租借地点</label>
          <span>麻辣1号</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="less">
.borrowing-item-wrap{
  margin-top: 8rpx;
  background: #fff;
  .header{
    padding: 16rpx;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1rpx solid #f5f5f5;
    .code{
      flex: 1;
      color: #757575;
      font-size: 14rpx;
    }
    .sign{
      width: 40rpx;
      height: 20rpx;
      border-radius: 2rpx;
      background-color: #0085ee;
      color: #fff;
      text-align: center;
      line-height: 20rpx;
      font-size: 12rpx;
    }
  }
  .content{
    display: flex;
    height: 88rpx;
    .money{
      width: 88rpx;
      text-align: center;
    }
    .amount{
      margin-top: 8rpx;
      color: #0085ee;
      font-size: 32rpx;
    }
    small{
      font-size: 14rpx;
    }
    .tips{
      margin-top: -4rpx;
      font-size: 12rpx;
      color: #999;
    }
    .detail{
      flex: 1;
    }
    .borrow-site, .borrow-time{
      height: 44rpx;
      line-height: 44rpx;
      box-sizing: border-box;
      font-size: 14rpx;
      display: flex;
      padding-right: 16rpx;
      label{
        color: #757575;
      }
      span{
        flex: 1;
        color: #212121;
        text-align: right;
      }
    }
    .borrow-site{
      border-bottom: 1rpx solid #f5f5f5;
    }
    .borrow-time{
    }
  }
}
</style>
