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
    <map-search @on-click="searchAreas" placeholder="搜索位置查找附近充电宝"></map-search>
    <a href="javascript:;" @click="goRechargePage" class="recharge">
      <img src="../../assets/recharge.tips.jpg">
    </a>
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
      position: {
        long: 0,
        lat: 0
      },
      show: true,
      zoom: 14,
      showLoading: false
    }
  },
  created () {
    modifyTitle("附近网点");
    wxRegister(location.href);
  },
  mounted () {
    this.init();
  },
  methods: {
    goRechargePage() {
      this.$router.push({
        name: "recharge"
      })
    },
    searchAreas() {
      wx.openLocation({
          latitude: this.position.lat, // 纬度，浮点数，范围为90 ~ -90
          longitude: this.position.long, // 经度，浮点数，范围为180 ~ -180。
          name: 'aaaa', // 位置名
          address: 'bbbb', // 地址详情说明
          scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: 'cccc' // 在查看位置界面底部显示的超链接,可点击跳转
      });
    },
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
        zoom: this.zoom
      })


      // this.map.on('hotspotclick',(e)=>{
      //     this.map.poiOnAMAP({//在高德地图打开POI展示页面
      //         name:e.name,
      //         location:e.lnglat,
      //         id:e.id
      //     })
      // })

      AMap.plugin(['AMap.ToolBar','AMap.Scale', 'AMap.Autocomplete', 'AMap.PlaceSearch'], ()=>{//异步
          var toolbar = new AMap.ToolBar();
          this.map.plugin(toolbar);

          var scale = new AMap.Scale();
          this.map.addControl(scale);

          //实例化Autocomplete
          var autoOptions = {
              city: "", //城市，默认全国
              input: "map_id"
          };

          var autocomplete = new AMap.Autocomplete(autoOptions);

          var placeSearch = new AMap.PlaceSearch({
                city: '',
                map: this.map
          })

          AMap.event.addListener(autocomplete, "select", (e)=>{
              console.log(e)
              if(e.poi.location) {
                this.position.lat = e.poi.location.lat;
                this.position.long = e.poi.location.lng;                
              } 
              //TODO 针对选中的poi实现自己的功能
              placeSearch.search(e.poi.name);
              //拉取附近门店信息
              this.getShopsByLocation(this.position.lat, this.position.long);
          }); 
      })
    },
    getShopsByLocation(lat, long) {
      let self = this;
      console.log(long, lat, "getLocation返回结果1");
      self.show = true
      self.showLoading = false
      self.map.setZoomAndCenter(this.zoom, [long, lat])
      this.position.long = long;
      this.position.lat = lat;
      //获取门店信息
      apiNearShop(lat, long).then((res) => {
        const data = res.data.data || [];
        console.log(data, "附近门店信息");
        data.forEach((m) => {
          let marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [m.lng, m.lat],
            title: m.name,
            map: self.map
          })

          // marker.markOnAMAP({
          //     position: marker.getPosition(),
          //     name: m.name//name属性在移动端有效
          // })
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

.recharge {
    display: block;
    width: 100%;
    position: absolute;
    top: 55px;
    z-index: 1000;

    img {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
  }


</style>
