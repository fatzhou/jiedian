<template>
  <!--已完成租借-->
  <div class="borrowed-item-wrap">
    <div class="header">
      <div class="code">订单号：{{data.code}}</div>
      <div class="sign">已完成</div>
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
        <p class="return-site">
          <label>归还时间</label>
          <span>{{data.time}}</span>
        </p>
        <p class="borrow-site">
          <label>归还地点</label>
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
.borrowed-item-wrap{
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
      font-size: 14px;
    }
    .sign{
      width: 40px;
      height: 20px;
      border-radius: 2px;
      background-color: #bdbdbd;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
  }
  .content{
    display: flex;
    height: 176px;
    .money{
      width: 88px;
      text-align: center;
    }
    .amount{
      margin-top: 48px;
      color: #0085ee;
      font-size: 32px;
    }
    small{
      font-size: 14px;
    }
    .tips{
      margin-top: -4px;
      font-size: 12px;
      color: #999;
    }
    .detail{
      flex: 1;
    }
    .borrow-site, .borrow-time, .return-site, .return-time{
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 14px;
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
    .borrow-site, .borrow-time, .return-site,{
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>
