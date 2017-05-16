<template>
  <msg title="申请提交成功" description="您的申请已经成功提交，我们会尽快与您联系，请保持手机畅通" class="business-reply-wrap">
    <router-link slot="buttons" class="button" to='/business' tag="div">返回</router-link>
  </msg>
</template>
<script>
import { Msg } from 'vux'

export default {
  components: {
    Msg
  }
}
</script>
<style lang="less">
.business-reply-wrap{
  .weui-icon-success{
    color: #0085ee;
  }
  .button{
    width: 288px;
    height: 44px;
    background-color: #0085ee;
    color: #fff;
    text-align: center;
    line-height: 44px;
    margin: 16px auto;
    border-radius: 4rpx;
    font-size: 16rpx;
  }
}
</style>
