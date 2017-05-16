<template>
  <div class="input-cell">
    <label>{{title}}</label>
    <div class="input-section" v-if="!disabled">
      <input :placeholder="placeholder" v-model="currentValue"></input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    currentValue(newVal) {
      this.$emit('update:value', newVal)
    }
  },
  created() {
    this.currentValue = this.value || ''
  },
  data() {
    return {
      currentValue: ''
    };
  }
};
</script>

<style lang="less">
.input-cell{
  display: flex;
  padding: 8rpx 15px 8px 0; 
  font-size: 14rpx;
  border-bottom: 1rpx solid #E8E8E8;
  label{
    display: block;
    width: 8em;
    color: #757575;
  }
  .input-section{
    width: 100%;
  }
  input{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 100%;
    border: 0;
  }
}
.input-cell-last{
  border: 0;
}
</style>
