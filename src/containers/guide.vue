<template>
  <div class="guide">
    <img class="top-banner" src="../assets/guide/top-banner.png">
    <div class="borrow-guide">
      <img class="borrow-title" src="../assets/guide/borrow-title.png">
      <ul>
        <li><p>支付押金，扫码二维码租借充电宝，操作成功会有语音提示，请及时取走弹出的充电宝</p></li>
        <li><p>使用完毕，按照如图1所示归还充电宝，轻微按压保证归还到位，听到归还成功语音提示则说明成功归还。</p></li>
      </ul>
      <img src="../assets/guide/recharge-box.png">
    </div>
    <div class="use-guide">
      <img src="../assets/guide/use-title.png">
      <ul>
        <li>
          <p>在充电宝两侧凹槽里抠出对应充电头充电手机</p>
          <img src="../assets/guide/phone-hub.png">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { modifyTitle } from 'utils'

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created() {
    modifyTitle('使用说明')
  }
}
</script>

<style type="text/css" scoped lang="less">
  .guide {

  }
</style>
