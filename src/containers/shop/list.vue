<template>
  <!--附近网点 列表-->
  <div class="shop-list-wrap">
    <map-search :to-list="false"></map-search>
    <div class="shop-list">
      <shop-item v-for="item in shopList" :data="item"></shop-item>
    </div>
  </div>
</template>
<script>
import { MapSearch } from '@/components'
import ShopItem from './sub/shop.item'
import { Random } from 'mockjs'

const shopList = Array.from({length: 20}).map((v, i) => {
  return {
    name: Random.cword(4, 15),
    distance: Random.integer(1, 1100) + 'm',
    borrowNum: Random.integer(0, 10),
    return: Random.integer(0, 10),
    isOnline: Random.boolean(),
    address: Random.county(true) + Random.cword(3, 10)
  }
})

export default {
  data () {
    return {
      shopList: shopList
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
