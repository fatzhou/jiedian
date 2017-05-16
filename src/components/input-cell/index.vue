<template>
  <div class="input-cell">
    <label>{{title}}</label>
    <div class="input-section">
      <input :placeholder="placeholder" v-model="value"></input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: [String, Number]
  },
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="less">
.input-cell{
  display: flex;
  padding: 8rpx 15px; 
  font-size: 14rpx;
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
</style>
