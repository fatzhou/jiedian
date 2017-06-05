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
import { modifyTitle, wxRegister } from 'utils'

export default {
  data () {
    return {
      map: {}
    }
  },
  created () {
    wxRegister(location.href)
  },
  mounted () {
    this.init()
    this.getLocation()
  },
  methods: {
    init () {
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:14,
      })
    },
    getLocation () {
      const self = this
      wx.ready(() => {
        wx.getLocation({
          type: 'gcj02',
          success (res) {
            self.map.setZoomAndCenter(14, [res.longitude, res.latitude]);
            // alert(res.latitude +', '+res.longitude)
          }
        })
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
