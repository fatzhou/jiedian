<template>
  <!-- 交易记录 -->
  <div class="trade-list-wrap">
    <div class="header" v-if="list.length">
      充值 &yen;{{recharge}} 提现 &yen;{{take}}
    </div>
    <div class="content" v-if="list.length">
      <item :data="item" v-for="item in list" :key="item.code"></item>
    </div>
    <no-data v-if="!list.length"></no-data>
  </div>
</template>

<script>
import { Scroller } from 'vux'
import Item from './sub/trade.item'
import { modifyTitle } from 'utils'
import { apiTradeList } from 'api'
import NoData from '../common/nodata'

const time = utils.now()
const list = Array.from({length: 20}).map((v, i) => {
      const type = i % 2 + 1
      return {
        type,
        code: i,
        time,
        amount: i * 100
      }
    })

export default {
  data() {
    return {
      list: [],
      recharge: '',
      take: ''
    };
  },
  created() {
    modifyTitle('交易记录')
    this.getTradeList()
  },
  methods: {
    getTradeList () {
      // this.list = list;
      apiTradeList().then((res) => {
        res = res.data
        if (res.errcode === 0 && res.data) {
          this.list = res.data
          this.recharge = res.recharge
          this.take = res.take
        } else {
          this.list = []
        }
      })
    }
  },
  components: {
    Item,
    Scroller,
    NoData
  }
};
</script>

<style lang="less">
.trade-list-wrap{
  overflow: hidden;
  .header{
    position: fixed;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #f8f8f8;
    padding: 0 22px;
    font-size: 14rpx;
    .iconfont{
      float: right;
      font-size: 20rpx;
    }
  }
  .content{
    margin-top: 56px;
  }
}
</style>
