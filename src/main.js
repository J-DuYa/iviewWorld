import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iview
import iView from 'iview'
import 'iView/dist/styles/iview.css'
import ajax from '@/http/apis'

import './theme.less';
import '@/assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(iView)

// 请求
window.ajax = ajax;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
