import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iview
import iView from 'iview'
import 'iView/dist/styles/iview.css'
import post from '@/http/apis'
import get from '@/http/apis'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
