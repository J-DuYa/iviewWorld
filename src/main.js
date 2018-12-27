import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iview
import iView from 'iview'
import 'iView/dist/styles/iview.css'
import ajax from '@/http/apis'

import './theme.less';
import './permission'
import '@/assets/scss/main.scss'

// 引入组件
import TitleTip from '@/components/TitleTip'
import HeadCard from '@/components/HeadCard'

Vue.config.productionTip = false
Vue.use(iView)

// store
import store from './store'

// 全局组件
Vue.component(TitleTip.name, TitleTip)
Vue.component(HeadCard.name, HeadCard)

// 请求
window.ajax = ajax;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
