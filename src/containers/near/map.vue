<template>
  <div class="map-wrap" v-show="show">
    <!-- 头部搜索 -->
    <!--<div class="search-wrap">
      <div class="input-wrap">
        <i class="iconfont icon-sousuo_sousuo"></i>
        <input type="text" class="input">
      </div>
      <i class="iconfont icon-liebiao"></i>
    </div>-->
    <map-search></map-search>

    <!-- 地图container -->
    <div id="container"></div>
    <loading v-model="showLoading"></loading>
  </div>
</template>
<script>
import { modifyTitle, wxRegister, toString } from 'utils'
import { Loading } from 'vux'
import { MapSearch } from '@/components'
import { apiNearShop } from 'api'

export default {
  data () {
    return {
      map: {},
      show: true,
      showLoading: false
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
            self.show = true
            self.showLoading = false
            self.map.setZoomAndCenter(12, [res.longitude, res.latitude])
            apiNearShop(res.latitude, res.longitude).then((res) => {
              const markers = res.data
              
              markers.forEach((m) => {
                let marker = new AMap.Marker({
                  icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                  position: [m.lng, m.lat]
                })
                marker.setMap(self.map)
              })
            })
          }
        })
      })
    }
  },
  components: {
    Loading,
    MapSearch
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
}
</style>
