import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iview
import iView from 'iview'
import 'iView/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
