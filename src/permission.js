import Router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

// 进入页面之前
function permission() {

}

Router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

Router.afterEach(() => {
    NProgress.done()
})
