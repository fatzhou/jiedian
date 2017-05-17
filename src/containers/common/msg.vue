<template>
  <div class="business-reply-wrap">
    <!-- 商业申请 -->
    <msg title="申请提交成功" description="您的申请已经成功提交，我们会尽快与您联系，请保持手机畅通" v-if="type === 'business'">
      <router-link slot="buttons" to='/business'>
        <x-button text="返回" :active="true"></x-button>
      </router-link>
    </msg>

    <!-- 提现 -->
    <msg title="提现申请成功" description="您的提现申请已经成功提交，将于0~5个工作日提现到您微信零钱账户" v-if="type === 'deposit'">
      <router-link slot="buttons" to='/my'>
        <x-button text="返回" :active="true"></x-button>
      </router-link>
    </msg>

    <!-- 提现 -->
    <msg title="充值成功" description="您的账户已成功充值" v-if="type === 'recharge'">
      <router-link slot="buttons" to='/borrow'>
        <x-button text="扫码使用充电宝" :active="true"></x-button>
      </router-link>
    </msg>
  </div>
</template>
<script>
import { Msg } from 'vux'
import { XButton } from '@/components'

export default {
  components: {
    Msg,
    XButton
  },
  computed: {
    type() {
      return this.$route.params.type
    }
  }
}
</script>
<style lang="less">
.business-reply-wrap{
  .weui-icon-success{
    color: #0085ee;
  }
}
</style>

