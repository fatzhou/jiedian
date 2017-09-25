<template>
  <!-- 交易记录 -->
  <div class="trade-list-wrap">
    <div class="header" v-if="list.length">
      充值 &yen;{{recharge}}&nbsp;&nbsp;&nbsp;&nbsp;提现 &yen;{{take}}
    </div>

    <div class="content" v-if="list.length">
        <div class="trade-list-view" v-for="(item, index) of list" :class="['trade-status-' + item.type]">
            <div class="trade-info">
                <div class="trade-amount" :class="[item.type==1?'deposit-style':'recharge-style']">{{item.type==1?'提现':'充值'}}金额：￥{{item.total_fee}}</div>
                <div class="status status-recharge" v-if="item.type==0">充值成功</div>
                <div class="status status-success" v-if="item.type==1&&!item.refund_status">已提现</div>
                <div class="status status-processing" v-if="item.type==1&&item.refund_status==2">处理中</div>
                <div class="status status-close" v-if="item.type==1&&item.refund_status==1">已关闭</div>
                <div class="status status-error" v-if="item.type==1&&item.refund_status==3">退款异常</div>
            </div>
            <div class="deposit-detail">
                <div class="deposit-result-area" v-if="item.flag&&item.type==1">
                    <img class="image-area" v-if="item.refund_status==1||item.refund_status==3" src="http://7xpceu.com1.z0.glb.clouddn.com/process-1.png" class="image-area"/>
                    <img class="image-area" v-else-if="item.refund_status==2" src="http://7xpceu.com1.z0.glb.clouddn.com/process-2.png" class="image-area"/>
                    <img class="image-area" v-else src="http://7xpceu.com1.z0.glb.clouddn.com/process-3.png" class="image-area" />
                    <div class="word-area">
                        <div class="word-process">
                            <div class="word-process-first active">提交成功{{item.total_fee}}元</div>
                            <div class="word-process-second">{{item.createtime}}</div>
                        </div>         
                        <div class="word-process">
                            <div class="word-process-first active">处理中</div>
                            <div class="word-process-second">预计0-5个工作日退回充值账号</div>
                        </div>         
                        <div class="word-process">
                            <div class="word-process-first">提现成功</div>
                            <div class="word-process-second">申请提现成功，请去交易明细查看</div>
                        </div>
                    </div>
                </div>
                <div class="deposit-status">
                    <div class="deposit-orderno">订单号：{{item.out_trade_no}}</div>
                    <div class="deposit-time">申请时间：{{item.createtime}}</div>
                </div>
            </div>
            <div class="display-btn" @click="toggleDisplay(index)"  v-if="!item.flag&&item.type==1">
                <i class="iconfont icon-unfold""></i>
                展开
            </div>
            <div class="display-btn" @click="toggleDisplay(index)" v-else-if="item.type==1">
                <i class="iconfont icon-fold""></i>
                收起
            </div>
        </div>
    </div>
    <no-data v-else></no-data>
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
          for(var i = 0, len = res.data.length; i < len; i++) {
            res.data[i].flag = false;
          }
          this.list = res.data
          this.recharge = res.recharge
          this.take = res.take
        } else {
          this.list = []
        }
      })
    },
    toggleDisplay(index) {
      this.list[index].flag = !this.list[index].flag;
      this.$set(this.list, index, this.list[index]);
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
    z-index: 100;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #f8f8f8;
    padding: 0 22px;
    font-size: 12px;
    .iconfont{
      float: right;
      font-size: 10px;
    }
  }
  /* item area start*/


  .content {
    margin-top: 48px;
    .trade-status-1  .amount, .trade-status-1 .section {
        color: #0085EE;
    }

    .trade-status-0  .amount, .trade-status-0  .section {
        color: #FF9800;
    }

    /* item area end*/

    /* 提现条目 */
    .trade-list-view {
        border-top: 8px solid #ececec;
        background: #fff;
        position: relative;

        .display-btn {
            position: absolute;
            bottom: 12px;
            font-size: 10px;
            color: #212121;
            line-height: 16px;
            height: 16px;
            right: 22px;

            .iconfont {
              vertical-align: middle;
            }
        }
    }


    /* 提现详情 */
    .deposit-result-area {
        overflow: hidden;
        margin: 0 22px;
        padding-top: 10px;
        border-bottom: 1px solid #ececec;

        .image-area {
            float: left;
            width: 15px;
            height: 127px;
        }

        .word-area {
            float: left;
            margin-left: 10px;
            margin-top: -4px;
        }
    }


    .word-process {
        padding-bottom: 18px;
        &:last-child {
            padding-bottom: 10px;
        }
    }

    .word-process-first {
        color: #212121;
        font-size: 12px;
        line-height: 21px;
        height: 21px;
    }

    .active {
        color: #0085ee;
    }

    .word-process-second {
        font-size: 10px;
        height: 16px;
        line-height: 16px;
        color: #616161;
    }

    /* 提现详情结束 */

    .trade-info {
        padding: 12px 22px 0px;
        overflow: hidden;
        font-size: 12px;
        line-height: 21px;
        .trade-amount {
            color: #0085ee;
            float: left;
        }
        .status {
            float: right;
            color: #FC2464;
            float: right;
            font-weight: bold;
        }
        .status-recharge {
            color: #ff9800;
        }
        .status-processing {
            color: #fc2464;
        }
        .status-success {
            color: #0085ee;
        }
        .status-close {
            color: #999;
        }
        .status-error {
            color: #ff0000;
        }
        .recharge-style {
            color: #ff9800;
        } 
        .deposit-style {
            color: #0085ee;
        }
    }

    .deposit-status {
        font-size: 10px;
        line-height: 16px;
        color: #757575;
        padding: 12px 22px;
    }    
  }

}
</style>
