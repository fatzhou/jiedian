import Vue from 'vue';
import Vuex from 'vuex'
import vux from './vux'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vux
  }
})
