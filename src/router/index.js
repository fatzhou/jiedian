import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/business',
      name: 'business',
      component: (r) => {
        require(['@/containers/business/index.vue'], r)
      }
    },
    {
      path: '/business/apply/:type',
      name: 'businessForApply',
      component: (r) => {
        require(['@/containers/business/apply.vue'], r)
      }
    },
    {
      path: '/business/reply',
      name: 'businessForReply',
      component: (r) => {
        require(['@/containers/business/reply.vue'], r)
      }
    },
    {
      path: '/reply/:type',
      name: 'commonReply',
      component: (r) => {
        require(['@/containers/common/msg.vue'], r)
      }
    },
    {
      path: '/shop/detail',
      name: 'shopDetail',
      component: (r) => {
        require(['@/containers/shop/detail.vue'], r)
      }
    },
    {
      path: '/shop/list',
      name: 'shopList',
      component: (r) => {
        require(['@/containers/shop/list.vue'], r)
      }
    },
    {
      path:'/borrow',
      name: 'borrow',
      component: (r) => {
        require(['@/containers/borrow.vue'], r)
      }
    },
    {
      path:'/coupon',
      name: 'coupon',
      component: (r) => {
        require(['@/containers/coupon.vue'], r)
      }
    },
    {
      path:'/deposit',
      name: 'deposit',
      component: (r) => {
        require(['@/containers/deposit.vue'], r)
      }
    },
    {
      path: '/my',
      name: 'my',
      component: (r) => {
        require(['@/containers/my.vue'], r)
      }
    },
    {
      path:'/recharge',
      name: 'recharge',
      component: (r) => {
        require(['@/containers/recharge.vue'], r)
      }
    },
    {
      path:'/recommend',
      name: 'recommend',
      component: (r) => {
        require(['@/containers/recommend.vue'], r)
      }
    },
    {
      path: '/return',
      name: 'return',
      component: (r) => {
        require(['@/containers/return.vue'], r)
      }
    },
    {
      path: '/my/trade/list',
      name: 'tradeList',
      component: (r) => {
        require(['@/containers/trade/trade.list'], r)
      }
    },
    {
      path: '/my/borrow/list',
      name: 'borrowList',
      component: (r) => {
        require(['@/containers/trade/borrow.list'], r)
      }
    },
    {
      path: '/help',
      name: 'helpCenter',
      component: (r) => {
        require(['@/containers/help.center.vue'], r)
      }
    }
  ]
});

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  // store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  // store.commit('updateLoadingStatus', {isLoading: false})
  // if (process.env.NODE_ENV === 'production') {
  //   ga && ga('set', 'page', to.fullPath)
  //   ga && ga('send', 'pageview')
  // }
})

export default router
