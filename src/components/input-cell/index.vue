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
    placeholder: {
      type: String,
      default: ""
    },
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
  padding: 10rpx 15px 10px 0; 
  font-size: 14rpx;
  border-bottom: 1px solid #E8E8E8;
  label{
    display: inline-block;
    width: 8em;
    color: #757575;
    height: 22px;
    line-height: 22px;
  }
  .input-section{
    width: 100%;
  }
  input{
    display: inline-block;
    width: 100%;
    height: 22px;
    line-height: 22px;
    border: 0;
  }
}
.input-cell-last{
  border: 0;
}
</style>
