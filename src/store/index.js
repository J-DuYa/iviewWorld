import Vuex from "vuex";
import Vue from 'vue'
import getters from './getters'

// state
import headTitle from './modules/getHeadTitle'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        headTitle
    },
    getters
})

export default store
