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
              }, { // weixin
                  path: '/weixin',
                  name: 'weixin',
                  component: () => import('@/view/WeiXin/WeiXin')
              }
          ]
      }, { // 404
          path: '/404',
          name: '404',
          component: TLayout,
          redirect: 'Exception404',
          children: [
              { // 异常404
                  path: '/Exception404',
                  name: 'Exception404',
                  component: () => import('@/view/Exception/404')
              }
          ]
      }, { // 500
          path: '/500',
          name: '500',
          component: TLayout,
          redirect: 'Exception500',
          children: [
              { // 异常500
                  path: '/Exception500',
                  name: 'Exception500',
                  component: () => import('@/view/Exception/500')
              }
          ]
      }, { // 505
          path: '/505',
          name: '505',
          component: TLayout,
          redirect: 'Exception505',
          children: [
              { // 异常505
                  path: '/Exception505',
                  name: 'Exception505',
                  component: () => import('@/view/Exception/505')
              }
          ]
      }

  ]
})
