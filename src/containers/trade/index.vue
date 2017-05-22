<template>
  <div class="trade-wrap">
    <div class="header">
      充值&yen;600 提现&yen;300 
    </div>
    <div class="content">
      <item></item>
    </div>
  </div>
</template>

<script>
import { Scroller } from 'vux'
import Item from './sub/item'

export default {
  data() {
    return {
      list: []
    };
  },
  computed: {},
  created() {
    const a = Array.from(100)
  },
  methods: {},
  components: {
    Item,
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
