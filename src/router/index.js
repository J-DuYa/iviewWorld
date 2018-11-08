import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/view/login'
import TLayout from '@/view/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      { // 登录
        path: '/login',
        name: 'login',
        component: Login
      }, { // home页面
          path: '/',
          name: 'index',
          component: TLayout,
          redirect: 'home',
          children: [
              { // 登录
                  path: '/home',
                  name: 'home',
                  component: Home
              }
          ]
      }

  ]
})
