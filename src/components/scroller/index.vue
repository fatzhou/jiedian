<template>
  <scroller
      lock-x
      scrollbar-y
      use-pullup
      use-pulldown
      @on-pullup-loading="pullup" 
      @on-pulldown-loading="pulldown" 
      v-model="status" 
      ref="scroller"
  >
    <slot></slot>
  </scroller>
</template>
<script>
import { Scroller } from 'vux'

export default {
  props: {
    fetch: Function,
    end: Boolean,
    page: Number,
    handleFetch: Boolean
  },
  methods: {
    /*
     从上滑  刷新
    */
    pulldown() {
      
    },
    /*
     从下滑 加载更多
    */
    pullup() {

    }
  },
  components: {
    Scroller
  }
}
</script>
<style lang="less">

</style>
