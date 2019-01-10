/**
 * Editor by duya
 * Date by 2019/1/9
 */
const headTitle = {
    state: {
        title: ''
    },
    mutations: {
        CHANGE_HEAD_TITLE: (state, title) => {
            state.title = title
        }
    },
    actions: {
        changeHeadTitle({ commit }, title) {
            commit('CHANGE_HEAD_TITLE', title)
        }
    }
}
export default headTitle;
