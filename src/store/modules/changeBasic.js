/**
 * Editor by duya
 * Date by 2019/1/20
 */
const basicInfo = {
    state: {
        headImg: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
        cardBg: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'
    },
    mutations: {
        CHANGE_HEAD_IMG: (state, img) => {
            state.headImg = img
        },
        CHANGE_HEAD_BG: (state, img) => {
            state.cardBg = img
        }
    },
    actions: {
        changeHeadImg({ commit }, img) {
            commit('CHANGE_HEAD_IMG', img)
        },
        changeHeadBg({ commit }, img) {
            commit('CHANGE_HEAD_BG', img)
        }
    }
}
export default basicInfo;
