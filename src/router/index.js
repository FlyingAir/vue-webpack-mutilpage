import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/goodslist',
    name: 'goodslist',
    component: require('../pages/GoodsList/index/app.vue'),
  }, {
    path: '/goodslist/goodsEdit',
    name: 'goodsEdit',
    component: require('../pages/GoodsEditReview/index/app.vue'),
  }, {
    path: '/goodslist/goodsReview',
    name: 'goodsReview',
    component: require('../pages/GoodsEditReview/index/app.vue'),
  }, {
    path: '*',
    redirect: '/goodslist'
  }]
})
