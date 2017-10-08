<template>
  <div class="help-center-wrap">
    <div class="header">
      热门问题
    </div>
    <group>
      <cell title="1.BY街电支持哪些接口类型手机充电?" is-link :link="links[0]"></cell>
      <cell title="2.如何租借充电宝?" is-link :link="links[1]"></cell>
      <cell title="3.是否支持一个人借多个充电宝? " is-link :link="links[2]"></cell>
      <cell title="4.如何归还充电宝?" is-link :link="links[3]"></cell>
      <cell title="5.为什么提示归还失败?" is-link :link="links[4]"></cell>
      <cell title="6.用户押金" is-link :link="links[5]"></cell>
      <cell title="7.提现为何需要1-5个工作日?" is-link :link="links[6]"></cell>
      <cell title="8.如何确认提现到帐?" is-link :link="links[7]"></cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
const links = [
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=1&amp;sn=342960494a39d97b18446af404e64db5&amp;chksm=ec4e8013db390905ab06218206c9faffe7af034855696663a8eb40b4fc81a2fb45ca8ecf66b1#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=2&amp;sn=247144138267eb9e3ac021c0b90d9619&amp;chksm=ec4e8013db3909057407ad709079ddbfd28363a7f4f2de5e0f438780957bf510ff085f06ac03#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=3&amp;sn=27e07baed6c03cde131eb9023986a147&amp;chksm=ec4e8013db390905d41de41491884a843eabe6ed57cc287e0250a5243f0bb5da547f7c0899b6#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=4&amp;sn=784612cee86e9455ffaaa04c8229561d&amp;chksm=ec4e8013db390905099354a9f9e25e93879d2fb4d221b4ec01ca7639c220e90b608845b59eb7#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=5&amp;sn=64ebd063b3c186545180943bb6eb6ae0&amp;chksm=ec4e8013db39090597a5c33a247dbda2d1976951b6a5e34cd498d28872f0601f09fa3a99d701#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=6&amp;sn=5bd7fa15d4d888fd3f54e85e02887766&amp;chksm=ec4e8013db39090525b57f789ddbbc1382697b88b7a182abc87692a8301259a2e8f6f2e05da1#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=7&amp;sn=4d3e2589c5ff6adc308178b9e90c55d8&amp;chksm=ec4e8013db3909051956aa83f9b062eb170715d32801eab41cf99ee1132f8ffa380c3e78f5db#rd',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&amp;mid=2247483661&amp;idx=8&amp;sn=3dc1747168bad409246ab1d5a18bcdae&amp;chksm=ec4e8013db390905f970c7a31e8cca0e632f5c3850185a5d53ca1be075994a3742e4a8980b30#rd'
]
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      links: links
    }
  }
}

</script>
<style lang="less">
.help-center-wrap{
  .header{
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #f6f6f6;
    padding: 0 22px;
    font-size: 12rpx;
    color: #616161;
    border-bottom: 1px solid #e6e6e6;
  }
  .vux-label{
    font-size: 14rpx;
  }
}
</style>
