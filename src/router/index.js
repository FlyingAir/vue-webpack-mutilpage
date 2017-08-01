import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index/goodslist',
    name: 'goodslist',
    component: require('../pages/GoodsList/index/app.vue'),
  },
  {
    path: '/index/goodsEdit',
    name: 'goodsEdit',
    component: require('../pages/GoodsEditReview/index/app.vue'),
  },{
    path: '/index/goodsReview',
    name: 'goodsReview',
    component: require('../pages/GoodsEditReview/index/app.vue'),
  },{
    path: '*',
    redirect: '/index/goodslist'
  }
  ]
})
