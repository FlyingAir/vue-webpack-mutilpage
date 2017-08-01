import Vue from 'vue'
import App from './app'
import $ from 'jquery'
import "../../../assets/reset.css"
import ElementUI from 'element-ui'
import "element-ui/lib/theme-default/index.css"

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  components: { App }
}).$mount('app')
