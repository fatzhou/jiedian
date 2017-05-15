// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import Icon from 'vue-awesome/components/Icon';
import FastClick from 'fastclick';

import App from './App';
import router from './router';
import store from './store';

FastClick.attach(document.body);
Vue.config.productionTip = false;

Vue.component('icon', Icon);

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
