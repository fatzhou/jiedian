<template>
  <div class="help-center-wrap">
    <div class="header">
      热门问题
    </div>
    <group>
      <cell title="1.什么是支付平台？" is-link></cell>
      <cell title="2.如何查询提现？" is-link></cell>
      <cell title="3.提现退款是否有到账通知短信？ " is-link></cell>
      <cell title="4.为何提现需要1-5个工作日？" is-link></cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  }  
}

</script>
<style lang="less">
.help-center-wrap{
  .header{
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #f6f6f6;
    padding: 0 22px;
    font-size: 12px;
    color: #616161;
    border-bottom: 1px solid #e6e6e6;
  }
  .vux-label{
    font-size: 14px;
  }
}
</style>
