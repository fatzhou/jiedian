<template>
  <div class="jiedian-button" :class="{'jiedian-button-active': active}" @click="click">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    text: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      console.log(this.active, "active");
      if (this.active) {
        this.$emit('on-click')
      }
    }
  }
}
</script>
<style lang="less">
.jiedian-button{
  margin: 16px auto 0;
  width: 86%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-radius: 4px;
  background-color: #0085ee;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14rpx;
}
.jiedian-button-active{
  color: rgba(255, 255, 255, 1);
}
</style>
