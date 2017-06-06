<template>
  <div class="shop-detail-wrap">
    <div class="header-img">
      <img src="../../assets/default.png" alt="">
    </div>
    <div class="battery-status">
      <div class="battery-img">
        <img src="" alt="">
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { modifyTitle } from 'utils'

export default {
  data() {
    return {
    }
  },
  created () {
    modifyTitle('商铺详情')
  },
  methods: {},
  components: {}
}
</script>

<style lang="less">
.shop-detail-wrap{
  .header-img{
    img{
      width: 100%;
    }
  }
}
</style>
