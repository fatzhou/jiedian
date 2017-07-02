<template>
  <div>
    推荐二维码
    <img :src="src" alt="">
  </div>
</template>
<script>
import { apiTuijianQrcode } from 'api'
export default {
  data () {
    return {
      src: ''
    }
  },
  created () {
    this.getQrcode()
  },
  methods: {
    getQrcode () {
      apiTuijianQrcode().then(res => {
        res = res.data
        if (res.errcode === 0) {
          this.src = res.data.url
        }
      })
    }
  }
}
</script>
