import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/view/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { // 默认进入首页 后面改成登陆页面
      path: '/',
      name: 'login',
      component: Login
    }, { // 首页
      path: '/home',
      name: 'home',
      component: Home
    }, { // 登录
        path: '/login',
        name: 'login',
        component: Login
    }
  ]
})
