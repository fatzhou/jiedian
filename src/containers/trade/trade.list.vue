<template>
  <!-- 交易记录 -->
  <div class="trade-list-wrap">
    <div class="header">
      充值 &yen;600 提现 &yen;300
    </div>
    <div class="content">
      <item :data="item" v-for="item in list" :key="item.code"></item>
    </div>
  </div>
</template>

<script>
import { Scroller } from 'vux'
import Item from './sub/trade.item'

const time = utils.now()
const list = Array.from({length: 20}).map((v, i) => {
      const type = i % 2 + 1
      return {
        type,
        code: i,
        time,
        amount: i * 100
      }
    })

export default {
  data() {
    return {
      list: list
    };
  },
  created() {
  },
  methods: {},
  components: {
    Item,
    Scroller
  }
};
</script>

<style lang="less">
.trade-list-wrap{
  overflow: hidden;
  .header{
    position: fixed;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #f6f6f6;
    padding: 0 22px;
    font-size: 14rpx;
    border-bottom: 1px solid #e6e6e6;
    .iconfont{
      float: right;
      font-size: 20rpx;
    }
  }
  .content{
    margin-top: 52px;
  }
}
</style>
