// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon';
import FastClick from 'fastclick';
import App from './App';
import router from './router';

FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.component('icon', Icon);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
