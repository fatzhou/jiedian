<template>
  <div class="map-wrap">
    <!-- 头部搜索 -->
    <div class="search-wrap">
      <div class="input-wrap">
        <i class="iconfont icon-sousuo_sousuo"></i>
        <input type="text" class="input">
      </div>
      <i class="iconfont icon-liebiao"></i>
    </div>

    <!-- 地图container -->
    <div id="container"></div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      map: {}
    }
  },
  created () {
    
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:14,
        // center: [116.397428, 39.90923]
      })
    }
  }
}
</script>
<style lang="less">
.map-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  #container{
    width: 100%;
    height: 100%;
  }
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
  .icon-liebiao{
    width: 32rpx;
    text-align: right;
    color: #fff;
    line-height: 48rpx;
  }
}
</style>
