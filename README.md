# 第三方世界

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

> [线上访问地址](http://212.64.54.51)  
> 账号: admin 密码: 123456  
> 一个有梦想的vue项目

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
- VCharts   流程图
- vue-video-player 视频播放 

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

### 合作人
> 毒牙（Jimmery）, mayben0t

***<span style="color: blue"> 如果对你<span style="color: red">有用</span>，或者你认为本项目<span style="color: red">有所价值</span>，请为我们的项目点个<span style="color: red">Star</span></span>***



