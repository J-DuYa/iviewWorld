import Router from './router'
import routers from '@/components/MenuRouter'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

// 进入页面之前
function permission() {

}

Router.beforeEach((to, from, next) => {
    NProgress.start()
    console.log(to);
    console.log(from);
    if(!to.name) {
        next({ path: '/' })
    }

    if(to.name === 'login') {
        console.log("进入登录页面, 清空所有关联数据");
    }
    routers && routers.map((item, index) => {
        if( item.hasChild ) {
            item.child && item.child.map((child, childIndex) => {
                if( child.menuUrl === to.name ) console.log(child.title)
            })
        } else {
            if(item.menuUrl === to.name) {
                console.log(item.title)
            }
        }
    })
    next()
})

Router.afterEach(() => {
    NProgress.done()
})
