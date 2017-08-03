<template>
  <div class="search-wrap">
    <div class="input-wrap">
      <i @click="click" class="iconfont icon-sousuo_sousuo"></i>
      <input type="text" id="map_id" :placeholder="placeholder" class="input">
    </div>
    <router-link to="/shop/list" class="to-list" v-if="toList">
      <i class="iconfont icon-liebiao"></i>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    toList: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    }
  },
  methods: {
    click() {
      this.$emit('on-click');
    }
  }
}
</script>
<style lang="less">
.search-wrap{
    padding: 0 16rpx;
    height: 48rpx;
    background-color: #000;
    display: flex;
  }
  .input-wrap{
    background-color: #fff;
    // padding: 0 16rpx;
    flex: 1;
    margin-top: 8rpx;
    height: 32rpx;
    border-radius: 8rpx;
    display: flex;
    overflow: hidden;
  }
  .input{
    flex: 1;
    height: 100%;
    border: 0;
    font-size: 18rpx;
  }
  .icon-sousuo_sousuo{
    width: 32rpx;
    text-align: center;
    line-height: 32rpx;
    font-size: 20rpx;
  }
  .to-list{
    width: 32rpx;
    text-align: right;
    color: #fff;
    line-height: 48rpx;
  }
</style>
