<template>
  <div class="guide">
    <img class="top-banner" src="../assets/guide/top-banner.png">
    <div class="borrow-guide guide-info">
      <img class="title" src="../assets/guide/borrow-title.png">
      <ul>
        <li>
          <i class="no">1</i>
          <div class="content">
            <p>支付押金，扫码二维码租借充电宝，操作成功会有语音提示，请及时取走弹出的充电宝</p>            
          </div>
        </li>
        <li>
          <i class="no">2</i>
          <div class="content">
            <p>使用完毕，按照如图1所示归还充电宝，轻微按压保证归还到位，听到归还成功语音提示则说明成功归还。</p>
          </div>
        </li>
      </ul>
      <div class="desc-img">
         <img class="recharge-box" src="../assets/guide/recharge-box.png">
        <p>图1 归还充电宝</p> 
      </div>
    </div>
    <div class="use-guide guide-info">
      <img class="title" src="../assets/guide/use-title.png">
      <ul>
        <li>
          <i class="no">1</i>
          <div class="content">
            <p>在充电宝两侧凹槽里抠出对应充电头充电手机。</p>
            <div class="desc-image">
              <img class="phone-hub" src="../assets/guide/phone-hub.png">   
              <p>图2 充电宝两侧凹槽充电头</p>         
            </div>            
          </div>
        </li>
        <li>
          <i class="no">2</i>
          <div class="content">
            <p class="no-margin">其中一条线为iPhone/安卓端两用接口。</p>
            <p class="no-margin">充电宝自带一根多功能充电线：分正反两面</p>
            <p class="no-margin">iPhone：充电时，此面朝上（如图3）</p>
            <p class="no-margin">安卓：有金属片一面朝上，有些安卓头需要金属片朝下（如图4）。</p>   
            <div class="desc-image">
              <img class="iphone-hub" src="../assets/guide/hub-hub.png">
              <p>图3 iPhone接口</p>
            </div>             
            <div class="desc-image">
              <img class="android-hub" src="../assets/guide/iphone-hub.png">
              <p>图4 安卓接口</p>
            </div>         
          </div>
        </li>
        <li>
          <i class="no">3</i>
          <div class="content">
            <p>另外一接口为Type-C接口（如图5）。适用于宽口Type-C充电接口的手机，如华为手机等。</p>
            <div class="desc-image">
              <img src="../assets/guide/hub.png">
              <p>图5 Type-C接口</p>
            </div>
          </div>
        </li>
        <li>
          <i class="no">4</i>
          <div class="content">
            <p>充电宝可以智能检测负载，自动输出充电。如果使用过程有接触接口之后没有充电现象，请检查接口接触是否正确或者到位。</p>
          </div>          
        </li>
      </ul>
    </div>
    <div class="guide-info">
      <img class="title" src="../assets/guide/trade-title.png" />
      <ul>
        <li>
          <i class="no">1</i>
          <div class="content">
            <p>在用户中心的租界纪录里面可以查看正在执行和已完成的租界消费情况。</p>
            <div class="desc-image">
              <img class="borrow-guide" src="../assets/guide/borrow-guide.png" />
            </div>
          </div>
        </li>
        <li>
          <i class="no">2</i>
          <div class="content">
            <p>在用户中心的提现里面可以提现余额，建议不要反复性的充值和提现，方便您下次使用。</p>
            <div class="desc-image">
              <img class="trade-guide" src="../assets/guide/trade-guide.png" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="guide-info">
      <img class="title" src="../assets/guide/recommend-title.png"></img>
      <div class="content no-left">
        <p class="little-padding">
          把个人推荐二维码推荐好友或者陌生人关注，对像必须是未关注平台的新用户。可以拿到推荐关注成功的新用户消费的税后10%的佣金，在平台提交提现之后，经过公司审核通过并以红包形式发放。
        </p>
        <div class="desc-image">
          <img class="recommend-guide" src="../assets/guide/recommend-guide.png">
        </div>
      </div>          
    </div>
    <div class="footer">
      <p class="tel">客服电话：<a href="tel:4000805985" class="tel">400-0805-985</a></p>
      <p class="copyright">感谢您对BY街电的理解和支持</p>
    </div>
  </div>
</template>
<script>
  import { modifyTitle } from 'utils'
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    created() {
      modifyTitle('使用说明')
    }
  };
</script>

<style type="text/css" scoped lang="less">
  .guide {
    .top-banner {
      display: block;
      width: 340px;
    }
    .guide-info {
      text-align: center;
      margin-bottom: 20px;
      .title {
        height: 28px;
        margin: 24px auto;
      }
      .little-padding {
        padding: 0 20px;
        color: #616161;
        font-size: 12px;
        line-height: 21px;
      }
      ul {
        text-align: left;
        li {
          overflow: hidden;
          padding-left: 6px;
          .no {
            float: left;
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-style: normal;
            text-align: center;
            border-radius: 50%;
            background: #677DFF;
            color: #fff;
            font-size: 10px;
            margin: 0 12px;
          }
          .content {
            float: left;
            margin-top: -4px;
            width: 260px;
            margin-right: 14px;
            &.no-left {
              width: 300px;
            }
            p {
              color: #161616;
              font-size: 12px;
              line-height: 21px;
              margin-bottom: 12px;
              &.no-margin {
                margin-bottom: 0;
              }
            }
            .desc-image {
              text-align: center;
              margin-bottom: 10px;
              margin-top: 10px;
              position: relative;
              left: -23px;
              &:last-child {
                padding-bottom: 20px;
              }
              img {
                display: block;
                margin: 0 auto;
                &.phone-hub {
                  width: 129px;
                }
                &.iphone-hub {
                  width: 221px;
                }
                &.android-hub {
                  width: 217px;
                }
                &.borrow-guide, &.trade-guide, &.recommend-guide {
                  width: 179px;
                  padding: 12px 0;
                }
              }
              p {
                color: #8e8e8e;
                font-size: 9px;
                line-height: 13px;
              }
            }
          }
        }
      }
      .recommend-guide {
        display: block;
        width: 179px;
        padding: 12px 0;
        margin: 0 auto;
      }
      .desc-img {
        margin-bottom: 20px;
        img {
          display: block;
          margin: 10px auto;
          &.recharge-box {
            width: 168px;
          }
        }
        p {
          color: #8e8e8e;
          font-size: 9px;
          line-height: 13px;
        }
      }
    }
    .footer {
      border-top: 1px solid #e5e5e5;
      padding: 24px 0;
      text-align: center;
      font-size: 12px;
      line-height: 21px;
      .tel {
        color: #677def;
      }
      .copyright {
        color: #8e8e8e;
      }
    }
  }
</style>
