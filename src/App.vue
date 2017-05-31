<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
       <router-view class="router-view"></router-view>
     </transition>
     <spinner type="android" v-if="isLoading"></spinner>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Spinner } from 'vux'
import { wxRegister } from 'utils'

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
    wxRegister(location.href)
  },
  mounted() {
    this.$nextTick(() => {
      this.getUserInfo()
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
}

a{
  text-decoration: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
