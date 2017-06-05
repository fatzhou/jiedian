<template>
  <div>
    <input type="file" @change="uploadImg">
    <button @click="log">点击</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img: ''
    }
  },
  methods: {
    log () {
      console.log(this.img)
    },
    uploadImg (e) {
      const self = this
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = function () {
        self.img = reader.result
      }
    }
  }
}
</script>
