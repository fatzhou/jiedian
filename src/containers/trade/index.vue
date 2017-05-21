<template>
  <div class="trade-wrap">
    <div class="header">
      充值&yen;600 提现&yen;300 
    </div>
    <scroller
      lock-x
      scrollbar-y
      use-pullup
      use-pulldown
      @on-pullup-loading="loadMore" 
      @on-pulldown-loading="refresh" 
      v-model="status" 
      ref="scroller"
    >
      <div>
        <item :data="data" v-for="data in list"></item>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller } from 'vux'
import Item from './sub/trade.list'

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    ListItem,
    Scroller
  }
};
</script>

<style lang="less">
.trade-wrap{
  .header{
    height: 48px;
    line-height: 48px;
    background-color: #f6f6f6;
    padding: 0 22rpx;
  }
}
</style>
