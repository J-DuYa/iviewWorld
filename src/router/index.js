import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import TLayout from '@/view/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      { // 登录
        path: '/',
        name: 'login',
        component: Login
      }, { // home页面
          path: '/index',
          name: 'index',
          component: TLayout,
          redirect: 'home',
          children: [
              { // 主页
                  path: '/home',
                  name: 'home',
                  component: () => import('@/view/Home')
              }, { // 个人信息页面
                  path: '/basicInfo',
                  name: 'basicInfo',
                  component: () => import('@/view/BasicInfo')
              }, { // 视频空间
                  path: '/video',
                  name: 'video',
                  component: () => import('@/view/Video')
              }, { // github地址
                  path: '/github',
                  name: 'github',
                  component: () => import('@/view/Github')
              }, { // 不同table
                  path: '/commonTable',
                  name: 'commonTable',
                  component: () => import('@/view/Tables/CommonTable')
              }, { // 仪表仪
                  path: '/dashbroad',
                  name: 'dashbroad',
                  component: () => import('@/view/Charts/Dashbroad')
              }, { // 控制台
                  path: '/console',
                  name: 'console',
                  component: () => import('@/view/Charts/Console')
              }, { // 调色板
                  path: '/palette',
                  name: 'palette',
                  component: () => import('@/view/Palette')
              }, { // markdom
                  path: '/markdomEditor',
                  name: 'markdomEditor',
                  component: () => import('@/view/Editors/Markdom')
              }, { // 富文本编辑器
                  path: '/editor',
                  name: 'editor',
                  component: () => import('@/view/Editors/Editor')
              }, { // 代码编辑器
                  path: '/codeEditor',
                  name: 'codeEditor',
                  component: () => import('@/view/Editors/CodeEditor')
              }

          ]
      }

  ]
})
