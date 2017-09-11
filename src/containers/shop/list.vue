<template>
  <!--附近网点 列表-->
  <div class="shop-list-wrap">
    <map-search :to-list="false"></map-search>
    <div class="shop-list">
      <shop-item v-for="item, index in shopList" :item="item" :index="index" @on-click="goDetail"></shop-item>
    </div>
  </div>
</template>
<script>
import { MapSearch } from '@/components'
import ShopItem from './sub/shop.item'
import { apiNearShop } from 'api'
import { modifyTitle, wxRegister } from 'utils'
export default {
  data () {
    return {
      lat: 0,
      long: 0,
      shopList: []
    }
  },
  created() {
    modifyTitle("网点列表");
    wxRegister(location.href);
  },
  mounted() {
    wx.ready(()=>{
      //获取经纬度
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success:  (res)=> {
            this.lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            this.long = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            this.getShopList();            
        }
      });
    });
  },
  methods: {
    getShopList() {
      apiNearShop(this.lat, this.long).then((res) => {
        this.shopList = res.data.data;
        console.log(res.data.data, "shoplist")
      })
    },
    goDetail (id) {
      console.log(arguments)
      this.$router.push({
        name: 'shopDetail',
        params: {
          id: id
        }
      })
    }
  },
  components: {
    MapSearch,
    ShopItem
  }
}
</script>
<style lang="less">

</style>
