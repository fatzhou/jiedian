<template>
  <!--租借进行中-->
  <div class="borrow-item-wrap borrowing-item-wrap">
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
        <p class="borrow-info borrow-site">
          <label>租借时间</label>
          <span>{{data.rtime}}</span>
        </p>
        <p class="borrow-info borrow-time">
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
@lineHeight: 34px;
.borrow-item-wrap{
  margin-top: 8px;
  background: #fff;
  .header{
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    .code{
      flex: 1;
      color: #757575;
      font-size: 10px;
      line-height: @lineHeight;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sign{
      padding: 0 8px;
      height: 16px;
      line-height: 16px;
      margin-top: 9px;
      border-radius: 2px;
      background-color: #0085ee;
      color: #fff;      
      font-size: 10px;
    }
  }
  .content{
    display: flex;
    .money{
      width: 88px;
      text-align: center;
    }
    .amount{
      color: #0085ee;
      font-size: 18px;
      line-height: 1;
      margin-top: 14px;
    }
    small{
      font-size: 12px;
    }
    .tips{
      font-size: 10px;
      height: 22px;
      line-height: 22px;
      color: #999;
    }
    .detail{
      flex: 1;
    }
    .borrow-info {
      height: @lineHeight;
      line-height: @lineHeight;
      box-sizing: border-box;
      font-size: 10px;
      display: flex;
      padding-right: 16px;
      border-bottom: 1px solid #f5f5f5;
      &:last-child {
        border: none;
      }
      label{
        color: #757575;
      }
      span{
        flex: 1;
        color: #212121;
        text-align: right;
      }
    }

  }
}
</style>
