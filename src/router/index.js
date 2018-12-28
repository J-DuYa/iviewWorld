import Vue from 'vue'
import Router from 'vue-router'
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
          redirect: 'github',
          children: [
              { // 主页
                  path: '/home',
                  name: 'home',
                  component: () => import('@/view/Home')
              }, { // 个人信息页面
                  path: '/basicInfo',
                  name: 'basicInfo',
                  component: () => import('@/view/BasicInfo')
              }, { // github地址
                  path: '/github',
                  name: 'github',
                  component: () => import('@/view/Github')
              }, { // 不同table
                  path: '/commonTable',
                  name: 'commonTable',
                  component: () => import('@/view/Tables/CommonTable')
              }

          ]
      }

  ]
})
