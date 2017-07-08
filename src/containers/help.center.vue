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
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=1&sn=30fa2ce6f36529015d778142ee5ce3a8&chksm=ec4e8012db39090439dd1e4f2c0ddaa74ad0e899b6417071b1cef1f1c4f15e2ffcb17c5a1d75&scene=0&key=a3337ab81c300e24ee051b00c956cc453007cbe5ac4284be0c36490b67fc95aeba3a63358e7b83ccdf8d8a5aea58437bce3a1a16b76f74dc18b5f2db4192da9105c0e4be27980460792380f98962080b&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=2&sn=fb41640a49eeef996c83ee2829d0f508&chksm=ec4e8012db3909048a1e1dd43cf8afb8ca47c0a7ff06a523c76a1eefa87b401ecdab11a72e0c&mpshare=1&scene=1&srcid=0708xUyiv5S8oHe4s80gXBtw&key=5e973e5d3cae484a28bf169e2e01c692b11979b8fe45d11a93e8af398aba7f412c8868cac2451d37c8f4e8e3a7d03371c75e8aab5f4da29952ceb3f549fb7d490c140783b0d6d7da7c90a5e2fddaa235&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=3&sn=71e42773f6d645add27acf75efca8c8d&chksm=ec4e8012db3909048b4e767e01a2e526d23a6fca75d1a539973a2cf128ce7653228bd5899472&scene=0&key=e0f557c9f11098d17cce913b209fa38f4f68b86394190d46bf1499368db973f6189082c0af178803cc8296cc6f22a4e285eeb282b41632530af5d1739b7c3948e68aeab5b683c25815229f55d454ca00&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=4&sn=30961391b844970c8fde3f5a75fb3be6&chksm=ec4e8012db3909042ce233666338e995403167e91187e2f28caf3d7eae34f76999d5f6e923bd&scene=0&key=9da48b716e2737d088285b90271c09452e8776e4c1e463acdb745935d6829f610623ae413327c6a1916358d6a626b8eecea0462ae1ce779dc954b376785877d742e12ead8418b4e34a51789f24913ed5&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=5&sn=2a82cdf7f4a365ecb34badbccb44499f&chksm=ec4e8012db390904694b5fc4b6175f881f1b5b0e412ad6a9abb692cb0821b40f06f705be0b11&scene=0&key=e0f557c9f11098d1504208e4aff1e49be626205e2f818c40e93df5f3eec8af07d1cbd48912852b44a782df3bb563a77887d8d50b99838313b926c925562a0fda03d4791acad0850416c326f26a060af0&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=6&sn=ad8539aaf2257ddce6f4ef3edb046ac8&chksm=ec4e8012db3909043e325ee67cfd3dee67b885222d0542bdbdf010eba6bf41a03e15933bdab0&scene=0&key=9da48b716e2737d04fed45a86c3bf3d5636c05e949a3f34e2bdeb19113f6cd8a3372a357c9fd1c3ba322368050868b792f3f533191baa3b7d40ea3ceef81ede44b9e69c60dddd1d6a0efe50ec3182a77&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=7&sn=eee8c97fce982b74c87662313fc84510&chksm=ec4e8012db3909046b31c27de0bf03a8b79aab36b0b3185e77ba8c1fc83ee31a9af3dcb04bab&scene=0&key=e0f557c9f11098d13399a371283cedc3e520f203729d5b1f667b5c0039732db3e3c2133ef3c945e9fd56802771782c0d659ef8b9bc4af850e67620a58cef1ff558215464e0f13e4f2ef1cc85f24805c5&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6',
  'https://mp.weixin.qq.com/s?__biz=MzI5NTY4ODMwNQ==&mid=2247483660&idx=8&sn=e53ee458d200987989b56aac70f299f4&chksm=ec4e8012db390904238ec239d947b2b3fffc05a6284ee9b77eb9c37982ce518cf8ce33ef300f&scene=0&key=2b4a905e8c07cb21c22b3870e23b1c654997c6c496d111a1144cf359f076840e0f978f5d7a567edfe170e32825e3e89bb3d1ec637b7a3f700b879512960a4bce14cc3371e82a221c128d43f3d9d10ca2&ascene=0&uin=MTM4MTgwNDc2MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=7CaeTY7Pz3JecHCmfMTLLOiZDemAedvXQh3DhTz9Gsm2hn%2BKjbwsJYZ6fFAwhhw6'
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
