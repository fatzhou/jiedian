import Vue from 'vue';
import Vuex from 'vuex'
import vux from './vux'
import user from './user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vux,
    user
  }
})
