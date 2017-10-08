<template>
  <div id="app">
    <!--<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">-->
    <router-view class="router-view"></router-view>
     <!--</transition>-->
     <!--<spinner type="android" v-if="isLoading"></spinner>-->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Spinner } from 'vux'
import { wxRegister } from 'utils'
import './iconfont.css';

export default {
  name: 'app',
  components: {
    Spinner
  },
  data() {
    return {
      // direction: 'forward'
    }
  },
  computed: {
    ...mapState({
      direction: state => state.vux.direction,
      isLoading: state => state.vux.isLoading
    })
  },
  created() {
    // wxRegister(location.href)
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {
    ...mapActions({
      getUserInfo: 'getUserInfo'
    })
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html,body{
  background-color: #f4f4f4;
  height: 100%;
}

a{
  text-decoration: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.router-view{
  width: 100%;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.router-view .vux-tab .vux-tab-item.vux-tab-selected {
  border-bottom: 1rpx solid #0085ee;
}

  /*
    vux
  */
 .vux-x-dialog, .router-view {
    .weui-dialog__title, .weui-dialog__btn{
      font-size: 16px;
    }
    .weui-dialog__ft{
      line-height: 16px;
    }

    .weui-skin_android .weui-dialog__hd {
      font-size: 14px;
      padding: 20px 16px 10px;
      .weui-dialog__title {
        font-size: 14px;
        font-weight: bold;
        color: #000;
      }
    }

    .weui-skin_android .weui-dialog__bd{
      font-size: 13px;
      line-height: 1.5;
      padding: 0 16px;
      color: #777;
    }
    .vux-divider{
      margin: 0 auto;
      margin-top: 8px;
      &:after, &:before {
        width: 37%;
      }
    }
    .weui-dialog__ft {
      margin-top: 4px;
    }
    .weui-dialog__ft .weui-dialog__btn {
      font-size: 13px;
      text-decoration: none;
    }

 }
</style>
