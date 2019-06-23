import Router from './router'
import routers from '@/components/MenuRouter'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import store from '@/store'

NProgress.configure({ showSpinner: false });

Router.beforeEach(async (to, from, next) => {
    NProgress.start()

    if(!to.name) {
        next({ path: '/404' })
    }

    if(to.name === 'login') {
        // console.log("进入登录页面, 清空所有关联数据");
    }
    routers && routers.map((item, index) => {
        if( item.hasChild ) {
            item.child && item.child.map((child, childIndex) => {
                if( child.menuUrl === to.name ) store.dispatch('changeHeadTitle', child.title)
            })
        } else {
            if(item.menuUrl === to.name) {
                store.dispatch('changeHeadTitle', item.title)
            }
        }
    })
    next()
})

Router.afterEach(() => {
    NProgress.done()
})
