<template>
  <!--租借进行中-->
  <div class="borrowing-item-wrap">
    <div class="header">
      <div class="code">订单号：{{data.ord_id}}</div>
      <div class="sign">进行中</div>
    </div>
    <div class="content">
      <div class="money">
        <div class="amount"><small>&yen;</small>{{data.amount}}</div>
        <div class="tips">产生费用</div>
      </div>
      <div class="detail">
        <p class="borrow-site">
          <label>租借时间</label>
          <span>{{data.rtime}}</span>
        </p>
        <p class="borrow-time">
          <label>租借地点</label>
          <span>{{data.rent}}</span>
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
  margin-top: 8px;
  background: #fff;
  .header{
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    .code{
      flex: 1;
      color: #757575;
      font-size: 14prx;
    }
    .sign{
      width: 40px;
      height: 20px;
      border-radius: 2px;
      background-color: #0085ee;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-size: 12rpx;
    }
  }
  .content{
    display: flex;
    height: 88px;
    .money{
      width: 88px;
      text-align: center;
    }
    .amount{
      margin-top: 8px;
      color: #0085ee;
      font-size: 32rpx;
    }
    small{
      font-size: 14rpx;
    }
    .tips{
      margin-top: -4px;
      font-size: 12px;
      color: #999;
    }
    .detail{
      flex: 1;
    }
    .borrow-site, .borrow-time{
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 14rpx;
      display: flex;
      padding-right: 16px;
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
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>
