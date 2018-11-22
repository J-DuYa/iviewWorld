# 第三方世界

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

> 线上访问地址: http://212.64.54.51
> 一个有梦想的vue项目

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



