# 毒牙的vue代码世界

> 在茫茫人海中，你只给别人杯水般的帮助，对别人来说都是无法比拟的。 谢谢那些帮助过我的好人😝

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

> 账号: admin 密码: 123456  

### 整体架构
- vue  前端使用的语言框架
- ES6  
- vue-i18n  语言化处理
- mockJs  mockJs模拟后台接口
- axios  http请求
- nprogress 加载页面进度条
- paper  
- vuex  管理store
- vue-router vue路由
- iview  前端ui框架
- js-cookie  cookie
- vue-canvas-effect  canvas动画第三方插件
- vue-echarts 流程图
- echart 流程图
- vue-video-player 视频播放 
- codemirror 代码编辑器
- showdown markdom编辑器
- vue-quill-editor 富文本编辑器

### 实现的功能
  > 后期统计

## 项目启动

1、 添加依赖
npm install
 
2、 服务默认启动在 localhost:8080(可以在/config/index.js中修改端口号)
npm run dev

* 下面是额外的shell命令（了解就行）
  > 1、对象打包 ---> 根目录 下的dist文件夹 npm run build  
  > 2、启动unit测试 npm run unit  
  > 3、启动e2e测试 npm run e2e  
  > 4、启动所有测试 npm test  

> 我们的目标 ---> 先搞起来   
> 理想：第三方世界，让世界更美好！  

项目图片：
 <p align="center">
  <img width="900" src="https://treezou.github.io/thirdWorld-vue/src/assets/images/program/login.png">
 </p>
 
 <p>
   <img width="400" src="https://treezou.github.io/thirdWorld-vue/src/assets/images/program/home.png">
   <img width="400" src="https://treezou.github.io/thirdWorld-vue/src/assets/images/program/dashbroad.png">
 </p>
 
  <p align="center">
   <img width="900" src="https://treezou.github.io/thirdWorld-vue/src/assets/images/program/basicInfo.png">
  </p>
   <p align="center">
     <img width="900" src="https://treezou.github.io/thirdWorld-vue/src/assets/images/program/video.png">
   </p>

### 那河畔中的金柳，是夕阳中的新娘；波光里的艳影，在我心头荡漾。-- 徐志摩《再别康桥》

> 只身一人，默默街头走，身无人，旁无物，只剩无尽暗默，倔强不回头，永远不回首。  

***部分地方講解***  
```
    proxyTable: {
      // 配置代理
      '/api': {
        target: '自己後台的地址', // 改成自己的IP地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 這一步是選擇的 但是最好加一下防止和自己的其他系統接口衝突
        }
      }
    },
```
  
```
    host: 'localhost', // can be overwritten by process.env.HOST // 要想IP地址訪問要將自己的地址改成自己IP地址
    port: 8080, //  這裡修改成自己想要的端口號（不要和後台重複）
```

> 提示   封装的HTTP请求只是初始的状态， 之后需要进一步的封装  封装的http请求的目录在：/src/http/apis.js文件夹下 

> 状态机(初步)
  
|状态|状态精灵提示|
|:---|:---|
|200|请求成功|
|403|接口超时|
|404|未连接到接口|
|500|服务器跑丢了|

vue具有RESTful模式的路由。
RESTful作为一种架构风格，是一种设计风格而不是一个标准，只提供了一组设计原则和约束条件，它主要用于客户端和服务器端交互的`桥梁`。基于这种风格设计的应用可以`更简洁、更有层次、更易于`实现缓存等机制。
### Vue的路由vue-router@3.0+
vue-router在vue中充当一个非常强大的角色。通过vue-router，vue可以更加方便的进行路由控制。开发者可以通过`vue-router+Vue`实现一个强大的单页面的应用。
> Vue脚手架搭建项目的指令：`vue init webpack 项目名称`  
 
 基础路由的构成
```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({  //实例化一个路由对象
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```
在它原有的基础上动一下，是的代码更加的简洁
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')  // 改变引入的方式，减少引入组件的不便
    }
  ]
})
```
当然在很多时候路由都是公用的一个页面可以提供给不同的角色参数使用。

 1. 可以通过组件封装；
 2. 可以通过路由配置（动态路由）；
 > 动态路由在相同路由之间切换是不会有history的变化所以 浏览器的返回键不会如愿以尝的返回你想返回的页面。
 
> 动态路由的变化可以通过`watch`监听得到，也可以通过vue-router的beforeRouteUpdate进行监听。
> 
通过`watch`监听
```
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```
或

通过vue-router的beforeRouteUpdate进行监听
```
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // 当路由发生改变...
    // 不要忘记使用next()
  }
}
```

 
 vue-router导航守卫经常用到的情况之一就是：`登录权限验证`和`组件内部内容权限的验证`，只有当用户`满足一定的条件`才能进行`登录`和`进行部分内容的访问和操作`。当然，如果路由route`寻找不到页面`的时候，应用通常需要返回`404页面`以告诉用户当前访问的页面不存在，这样你的应用的用户感知会更加的`好`。
 
 > 通常使用通配符`*`来配置404页面的`访问`，当然通配符必须`配置在所有路由的后面`，以保证路由展示正确。

> 如果要配置500页面，可以使用```$route.push({ path: '500' })```进行访问

### 进阶版导航守卫
> “导航”表示路由正在发生改变

vue-router总共有三个全局守卫，分别是：`beforeEach`, `beforeResolve`, `afterEach`。
`beforeEach`:
```
const router = new Router({ ... })
router.beforeEach((to, from, next) => {
	// to 将要进入的页面
	// from 即将离开的页面
	// next 必须配置的 next(false)路由跳转; next({ path: `跳转路由的path值` })
	// TODO
})
```
`beforeResolve`:
```
const router = new Router({...})
router.beforeResolve((to, from, next) => {
	// 跟beforeEach类似
	// 区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
})
```
`afterEach`:
```
const router = new Router({...})
router.afterEach((to, from) => {
	// to 进入的页面
	// from 进入前的页面
})
```

### 组件内守卫
组件内守卫同样也有三个：`beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`

* beforeRouteEnter
```
export default {
	name: '...',
	beforeRouteEnter(to, from, next) {
		// 不能使用this， 因为该组件在这时候还没有实例化
	}
}
```
* beforeRouteUpdate
```
export default {
	name: '...',
	beforeRouteUpdate(to, from, next) {
		// 能使用this，组件此时已经被实例化 
		//当前路由被复用的时候调用，例如：/user/:id => // /user/1 and /user/2
	}
}
```
* beforeRouteLeave
```
export default {
	name: '...',
	beforeRouteLeave(to, from, next) {
		// 即将离开当前路由时触发
		// 能使用this，组件此时已经被实例化 
	}
}
```
```
/**
--> 导航被触发。
--> 在失活的组件里调用离开守卫。
--> 调用全局的 beforeEach 守卫。
--> 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
--> 在路由配置里调用 beforeEnter。
--> 解析异步路由组件。
--> 在被激活的组件里调用 beforeRouteEnter。
--> 调用全局的 beforeResolve 守卫 (2.5+)。
--> 导航被确认。
--> 调用全局的 afterEach 钩子。
--> 触发 DOM 更新。
--> 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
*/
```

### 路由过渡
* transition
```
<transition name=`自己配置值`> // 有`slide`, `fade`等等
	<router-view></router-view>
</transition>
```

## vue生命周期（在这个周期内，this都可以调用）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190227102933930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MDIzMTE2,size_16,color_FFFFFF,t_70)  

`循序排列` 开始 ---> 结束
* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed

### 成长
2019
  
毒牙，你忘却了什么？你什么都没有，还期望别人对你有所牵挂，学习的同时， 记得品味一下生活。有时候，选择很多，但是都不是你的，这或许就是命。这也可以改变，因为世界在变，人亦在改变，好的变坏的，坏的变好的，幸福会变质，情感会变味，这都是可能的，要懂得自己想要的，要懂得权衡：拾取和舍弃。但这一切都是你自己的选择，保持初心，对家人保持真诚与关心。对朋友，要做一个合理的听众。

> 一无所有，不会虚言假语，这个世界会不会不善待你？谁知道，你不能改变世界，但你能改变自己，善待家人，对热爱保持初心，融入世界，保持自己的看法，接纳合理的见解，这便是成熟的标志（可能吧）。

### 合作人
> 毒牙（duya）

***<span style="color: blue"> 如果对你<span style="color: red">有用</span>，或者你认为本项目<span style="color: red">有所价值</span>，请为我们的项目点个<span style="color: red">Star</span></span>***



