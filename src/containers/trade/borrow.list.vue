<template>
  <!--租借记录-->
  <div class="borrow-list-wrap">
    <tab style="font-size: 14px;">
      <tab-item selected @on-item-click="onItemClick">进行中</tab-item>
      <tab-item @on-item-click="onItemClick">已完成</tab-item>
    </tab>
    
    <div class="borrowing" v-if="listType">
      <borrowing-item v-for="item in borrowingList" :data="item" :key="item.code" v-if="borrowingList.length"></borrowing-item>
      <div v-if="borrowingList.length" class="no-more"><div class="no-more-inner">没有更多数据了</div></div>
       <no-data v-if="!borrowingList.length"></no-data> 
    </div>
    <div class="borrowed" v-if="!listType && !nodata">
      <borrowed-item v-for="item in borrowedList" :data="item" :key="item.code" v-if="borrowedList.length"></borrowed-item>
      <div v-if="borrowedList.length" class="no-more"><div class="no-more-inner">没有更多数据了</div></div>
      <no-data v-if="!borrowedList.length"></no-data>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import BorrowedItem from './sub/borrowed.item'
import BorrowingItem from './sub/borrowing.item'
import NoData from '../common/nodata'
import { modifyTitle } from 'utils'
import { apiRentList } from 'api'


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
      borrowingList: [],
      borrowedList: [],
      nodata: false
    }
  },
  created () {
    modifyTitle('租借记录')
    this.getTradeList()
  },
  components: {
    Tab,
    TabItem,
    BorrowedItem,
    BorrowingItem,
    NoData
  },
  methods: {
    onItemClick() {
      this.listType = !this.listType
    },
    getTradeList () {
      apiRentList().then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.borrowingList = res.data.filter(item => {
            return item.status == 1
          })
          this.borrowedList = res.data.filter(item => {
            return item.status == 2
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
  .no-more {
      color: #bbb;
      font-size: 10px;
      line-height: 4;
      height: 40px;
      text-align: center;
      position: relative;

      .no-more-inner {
        background: #f4f4f4;
        width: 90px;
        margin: 0 auto;
        position: relative;
        z-index: 100;
      }

      &:after {
        content: "";
        height: 1px;
        position: absolute;
        width: 180px;
        left: 50%;
        top: 20px;
        margin-left: -90px;
        background: #dbdbdb;
      }
  }
</style>
