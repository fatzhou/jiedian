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
    <div class="function-area">
        <div class="bottom-btn bottom-btn-borrow" @click="goBorrowPage">
          <img src="../../assets/scan-borrow.png" alt="">
        </div>
        <div class="bottom-btn bottom-btn-buy" @click="goBuyPage">
          <img src="../../assets/scan-buy.png" alt="">
        </div>
    </div>
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
      zoom: 13,
      showLoading: false
    }
  },
  created () {
    wxRegister(location.href);
  },
  mounted () {
    this.init();
    this.getLocation();
  },
  methods: {
    goBorrowPage() {
      this.$router.push({
        name: 'borrow'
      });
    },
    goBuyPage() {
      this.$router.push({
        name: 'buy'
      });
    },
    init () {
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: this.zoom,
      })
    },
    getLocation () {
      const self = this;
      console.log("Are you ready？？?")
      wx.ready(() => {
        console.log("I am ready");
        wx.getLocation({
          type: 'gcj02',
          success (res) {
            console.log(res, "getLocation返回结果");

            self.show = true
            self.showLoading = false
            self.map.setZoomAndCenter(this.zoom, [res.longitude, res.latitude])
            //获取门店信息
            apiNearShop(res.latitude, res.longitude).then((res) => {
              const data = res.data.data || [];
              console.log(data, "附近门店信息");
              data.forEach((m) => {
                let marker = new AMap.Marker({
                  icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                  position: [m.lng, m.lat],
                  title: m.name,
                  map: self.map
                })
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
<style lang="less" scoped>
.map-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  #container{
    width: 100%;
    height: 100%;
  }
}

.function-area {
  width: 80%;
  margin-left: 10%;
  position: absolute;
  bottom: 30px;
  .bottom-btn {
    width: 50%;
    float: left;

    img {
      width: 100%;
    }
  }  
}




</style>
