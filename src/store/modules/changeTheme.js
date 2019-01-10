/**
 * Editor by duya
 * Date by 2019/1/11
 */
const themeColor = {
    state: {
        color: ''
    },
    mutations: {
        CHANGE_THEME_COLOR: (state, color) => {
            state.color = color

        }
    },
    actions: {
        changeThemeColor({ commit }, color) {
            commit('CHANGE_THEME_COLOR', color)
        }
    }
}
export default themeColor;
