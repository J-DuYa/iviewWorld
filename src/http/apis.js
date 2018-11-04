/*
 * @Author: 毒牙 
 * @description 初步整理, 之后会优化请求
 * @Date: 2018-11-04 19:17:58 
 * @Last Modified by: 毒牙
 * @Last Modified time: 2018-11-04 20:51:12
 */
import axios from 'axios'
import Qs from 'qs'

let _that = this;
// 封装通用的请求状态信息 错误请求统一管理
let http = {
    status: {
        '200': '请求成功!'
    }
};

export default {
    // post
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                params: Qs.stringify(param)
            }).then((res) => {
                if(res.status == '200') {
                    resolve(res.data)
                } else {

                }
            }).catch((err) => {
                reject(err);
            })
        })
    },
    // get
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                if(res.status == '200') {
                    resolve(res.data)
                } else {

                }
            }).catch((err) => {
                reject(err);
            })
        })
    }
}