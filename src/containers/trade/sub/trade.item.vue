<template>
  <div class="trade-list-item" :class="'trade-status-'+data.type">
    <div class="section">{{data.type === '0' ? '充值' : '提现'}}</div>
    <div class="detail">
      <p class="order-code">订单号：{{data.out_trade_no}}</p>
      <p class="order-time">{{data.createtime}}</p>
    </div>
    <div class="amount">{{data.type === '0' ? '+' : '-'}}{{data.total_fee}}元</div>
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
          code: '',
          time: '',
          amount: ''
        }
      }
    }
  }
}
</script>
<style lang="less">
.trade-list-item{
  margin-top: 8px;
  background-color: #fff;
  padding: 16px 0;
  box-sizing: border-box;
  display: flex;

  .section {
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #0085EE;
    border-right: 1px solid #E6E6E6;
    padding: 0 10px;
  }
  .detail{
    flex: 1;
    padding-left: 10px;
    line-height: 24px;
    overflow: hidden;
  }
  .order-code{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #212121;
  }
  .order-time{
    font-size: 12px;
    color: #757575;
  }
  .amount{
    text-align: center;
    height:40px;
    line-height: 40px;
    font-size: 16px;
    white-space: nowrap;
    padding: 0 10px;
  }
}
.trade-status-1 {
  .section, .amount{
    color: #0085EE;
  }
}
.trade-status-0 {
  .section, .amount{
    color: #FF9800;
  }
}
</style>
