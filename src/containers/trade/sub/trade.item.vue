<template>
  <div class="trade-list-item" :class="'trade-status-'+data.type">
    <div class="section">{{data.type === 1 ? '充值' : '提现'}}</div>
    <div class="detail">
      <p class="order-code">订单号：{{data.code}}</p>
      <p class="order-time">{{data.time}}</p>
    </div>
    <div class="amount">{{data.type === 1 ? '+' : '-'}}{{data.amount}}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          type: 2,
          code: '198213231',
          time: '17.01.01 23:01:12',
          amount: '+100.00'
        }
      }
    }
  }
}
</script>
<style lang="less">
.trade-list-item{
  margin-top: 8rpx;
  background-color: #fff;
  padding: 16rpx 0;
  box-sizing: border-box;
  display: flex;
  border: solid #e6e6e6;
  border-width: 1rpx 0 1px 0;
  .section{
    width: 75rpx;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
    font-size: 16rpx;
    color: #0085EE;
    border-right: 1rpx solid #E6E6E6;
  }
  .detail{
    flex: 1;
    padding: 0 16px;
  }
  .order-code{
    font-size: 14rpx;
    color: #212121;
  }
  .order-time{
    font-size: 12rpx;
    color: #757575;
  }
  .amount{
    width: 75px;
    text-align: center;
    height:40rpx;
    line-height: 40rpx;
    font-size: 16rpx;
  }
}
.trade-status-1{
  .section, .amount{
    color: #0085EE;
  }
}
.trade-status-2{
  .section, .amount{
    color: #FF9800;
  }
}
</style>
