<template>
  <!--租借记录-->
  <div class="borrow-list-wrap">
    <tab>
      <tab-item selected @on-item-click="onItemClick">进行中</tab-item>
      <tab-item @on-item-click="onItemClick">已完成</tab-item>
    </tab>

    <div class="borrowing" v-if="listType">
      <borrowing-item v-for="item in borrowingList" :data="item" :key="item.code"></borrowing-item>
    </div>
    <div class="borrowed" v-if="!listType">
      <borrowed-item v-for="item in borrowedList" :data="item" :key="item.code"></borrowed-item>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import BorrowedItem from './sub/borrowed.item'
import BorrowingItem from './sub/borrowing.item'

const time = utils.now()
const list = Array.from({ length: 20 }).map((v, i) => {
  return {
    code: Math.random(1000000),
    money: Math.round(Math.random() * 100),
    time
  }
})

export default {
  data() {
    return {
      // true 租借中  false 已完成
      listType: true,
      borrowingList: list,
      borrowedList: list
    }
  },
  components: {
    Tab,
    TabItem,
    BorrowedItem,
    BorrowingItem
  },
  methods: {
    onItemClick() {
      this.listType = !this.listType
    }
  }
}
</script>
<style lang="less">
.borrow-list-wrap{

}
</style>
