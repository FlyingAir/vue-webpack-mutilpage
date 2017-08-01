import Vue from 'vue'
import App from './app'
import $ from 'jquery'
import "../../../assets/reset.css"
import ElementUI from 'element-ui'
import "element-ui/lib/theme-default/index.css"
import router from '../../../router/index.js'

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  components: { App }
}).$mount('app')
