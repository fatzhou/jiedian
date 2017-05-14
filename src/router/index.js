import Vue from 'vue';
import Router from 'vue-router';

import Borrow from '@/containers/borrow.vue';
import Coupon from '@/containers/coupon.vue';
import Deposit from '@/containers/deposit.vue';
import My from '@/containers/my.vue';
import Recharge from '@/containers/recharge.vue';
import Recommend from '@/containers/recommend.vue';
import Return from '@/containers/return.vue';
import Trade from '@/containers/trade.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/borrow',
      name: 'borrow',
      component: Borrow
    },
    {
      path:'/coupon',
      name: 'coupon',
      component: Coupon
    },
    {
      path:'/deposit',
      name: 'deposit',
      component: Deposit
    },
    {
      path: '/my',
      name: 'my',
      component: My,
    },
    {
      path:'/recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path:'/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/return',
      name: 'return',
      component: Return
    },
    {
      path: '/my/trade',
      name: 'trade',
      component: Trade
    }
  ],
});
