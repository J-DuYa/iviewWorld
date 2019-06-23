/**
 * Editor by duya
 * Date by 2019/1/20
 */
import { Message } from 'iview'
const basicInfo = {
    state: {
        headImg: 'https://avatars0.githubusercontent.com/u/34503154?s=460&v=4',
        cardBg: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'
    },
    mutations: {
        CHANGE_HEAD_IMG: (state, img) => {
            state.headImg = img
            Message.success('修改头像成功！');
        },
        CHANGE_HEAD_BG: (state, img) => {
            state.cardBg = img
            Message.success('修改卡片背景成功！');
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
