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
    padding: 0 16px;
    height: 48px;
    background-color: #000;
    display: flex;
  }
  .input-wrap{
    background-color: #fff;
    // padding: 0 16px;
    flex: 1;
    margin-top: 8px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
  }
  .input{
    flex: 1;
    height: 100%;
    border: 0;
    font-size: 18px;
  }
  .icon-sousuo_sousuo{
    width: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 20px;
  }
  .to-list{
    width: 32px;
    text-align: right;
    color: #fff;
    line-height: 48px;
  }
</style>
