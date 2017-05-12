import Vue from 'vue';
import Router from 'vue-router';

import My from '@/containers/my';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/my',
      name: 'my',
      component: My,
    },
  ],
});
