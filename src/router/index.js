import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/business',
      name: 'business',
      component: r => require.ensure([], () => r(require('@/containers/business/index.vue')), 'business')
    },
    {
      path: '/business/apply/:type',
      name: 'businessForApply',
      component: r => require.ensure([], () => r(require('@/containers/business/apply.vue')), 'businessForApply')
    },
    {
      path: '/business/reply',
      name: 'businessForReply',
      component: r => require.ensure([], () => r(require('@/containers/business/reply.vue')), 'businessForReply')
    },
    {
      path: '/reply/:type',
      name: 'commonReply',
      component: r => require.ensure([], () => r(require('@/containers/common/msg.vue')), 'commonReply')
    },
    {
      path: '/shop/detail',
      name: 'shopDetail',
      component: r => require.ensure([], () => r(require('@/containers/shop/detail.vue')), 'shopDetail')
    },
    {
      path: '/shop/list',
      name: 'shopList',
      component: r => require.ensure([], () => r(require('@/containers/shop/list.vue')), 'shopList')
    },
    {
      path:'/borrow',
      name: 'borrow',
      component: r => require.ensure([], () => r(require('@/containers/borrow.vue')), 'borrow')
    },
    {
      path:'/coupon',
      name: 'coupon',
      component: r => require.ensure([], () => r(require('@/containers/coupon.vue')), 'coupon')
    },
    {
      path:'/deposit',
      name: 'deposit',
      component: r => require.ensure([], () => r(require('@/containers/deposit.vue')), 'deposit')
    },
    {
      path: '/my',
      name: 'my',
      component: r => require.ensure([], () => r(require('@/containers/my.vue')), 'my')
    },
    {
      path:'/recharge',
      name: 'recharge',
      component: r => require.ensure([], () => r(require('@/containers/recharge.vue')), 'recharge')
    },
    {
      path:'/recommend',
      name: 'recommend',
      component: r => require.ensure([], () => r(require('@/containers/recommend.vue')), 'recommend')
    },
    {
      path: '/return',
      name: 'return',
      component: r => require.ensure([], () => r(require('@/containers/return')), 'return')
    },
    {
      path: '/my/trade/list',
      name: 'tradeList',
      component: r => require.ensure([], () => r(require('@/containers/trade/trade.list')), 'tradeList')
    },
    {
      path: '/my/borrow/list',
      name: 'borrowList',
      component: r => require.ensure([], () => r(require('@/containers/trade/borrow.list')), 'borrowList')
    },
    {
      path: '/help',
      name: 'helpCenter',
      component: r => require.ensure([], () => r(require('@/containers/help.center.vue')), 'helpCenter')
    },
    {
      path: '/map',
      name: 'map',
      component: r => require.ensure([], () => r(require('@/containers/near/map.vue')), 'map')
    }
  ]
});

// const history = window.sessionStorage
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0
// history.setItem('/', 0)

// router.beforeEach(function (to, from, next) {
//   // store.commit('updateLoadingStatus', {isLoading: true})

//   const toIndex = history.getItem(to.path)
//   const fromIndex = history.getItem(from.path)

//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       store.commit('updateDirection', {direction: 'forward'})
//     } else {
//       store.commit('updateDirection', {direction: 'reverse'})
//     }
//   } else {
//     ++historyCount
//     history.setItem('count', historyCount)
//     to.path !== '/' && history.setItem(to.path, historyCount)
//     store.commit('updateDirection', {direction: 'forward'})
//   }

//   if (/\/http/.test(to.path)) {
//     let url = to.path.split('http')[1]
//     window.location.href = `http${url}`
//   } else {
//     next()
//   }
// })

// router.afterEach(function (to) {
  // store.commit('updateLoadingStatus', {isLoading: false})
  // if (process.env.NODE_ENV === 'production') {
  //   ga && ga('set', 'page', to.fullPath)
  //   ga && ga('send', 'pageview')
  // }
// })

export default router
