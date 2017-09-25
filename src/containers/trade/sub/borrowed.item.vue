<template>
  <!--已完成租借-->
  <div class="borrow-item-wrap borrowed-item-wrap">
    <div class="header">
      <div class="code">订单号：{{data.ord_id}}</div>
      <div class="sign">已完成</div>
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
        <p class="borrow-info return-site">
          <label>归还时间</label>
          <span>{{data.btime}}</span>
        </p>
        <p class="borrow-info borrow-site">
          <label>归还地点</label>
          <span>{{data.back}}</span>
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
.borrowed-item-wrap.borrow-item-wrap {
  .header{
    .sign{
      background-color: #bdbdbd;
    }
  }
  .content {
    .money {
      .amount {
        margin-top: 48px;
      }      
    }
  }
}
</style>
