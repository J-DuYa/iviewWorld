import Vuex from "vuex";
import Vue from 'vue'
import getters from './getters'

// state
import headTitle from './modules/getHeadTitle'
import themeColor from './modules/changeTheme'
import basicInfo from './modules/changeBasic'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        headTitle,
        themeColor,
        basicInfo
    },
    getters
})

export default store
