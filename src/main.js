/**
* time: 2019/01/08 17:15
* Editor: 毒牙
* param: mod
* desc: 门户js
*/
import Vue from 'vue'
import App from './App'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import router from './router'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import { neon, bubbles } from 'vue-canvas-effect';
import VCharts from 'v-charts'
import echarts from 'echarts'

// 引入iview
import iView from 'iview'
import Viewer from 'v-viewer'
import VueCropper from 'vue-cropper'
import VideoPlayer from 'vue-video-player'
import 'iView/dist/styles/iview.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import ajax from '@/http/apis'

import './theme.less';
import './permission'
import '@/assets/scss/main.scss'

// 引入组件
import TitleTip from '@/components/TitleTip'
import HeadCard from '@/components/HeadCard'
import TableComponent from '@/components/Table'
import PageComponent from '@/components/Page'
import MessageAlert from '@/components/MessageAlert'
import MessageTip from '@/components/MessageTip'
import PersonCard from '@/components/PersonCard'
import Cropper from '@/components/Cropper'
import ThEditor from '@/components/Editor'
import ThMarkdown from '@/components/Markdown'

// 导入语言包
import message from '@/lang'
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Viewer)
Vue.use(VueCropper)
Vue.use(VueI18n)
Vue.use(VCharts)
Vue.use(VideoPlayer);
// store
import store from './store'

// 全局组件
Vue.component(neon.name, neon);
Vue.component(bubbles.name, bubbles);
Vue.component(TitleTip.name, TitleTip)
Vue.component(HeadCard.name, HeadCard)
Vue.component(TableComponent.name, TableComponent)
Vue.component(PageComponent.name, PageComponent)
Vue.component(MessageAlert.name, MessageAlert)
Vue.component(MessageTip.name, MessageTip)
Vue.component(PersonCard.name, PersonCard)
Vue.component(Cropper.name, Cropper)
Vue.component(ThEditor.name, ThEditor)
Vue.component(ThMarkdown.name, ThMarkdown)

// 引入mockjs
require('./mock/mock.js')

// 使用语言包
const il8n = new VueI18n({
    locale: Cookies.get('language') || 'en',
    message
})

// 请求
window.ajax = ajax;
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
