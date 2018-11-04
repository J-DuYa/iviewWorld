/*
 * @Author: 毒牙 
 * @description 初步整理, 之后会优化请求
 * @Date: 2018-11-04 19:17:58 
 * @Last Modified by: 毒牙
 * @Last Modified time: 2018-11-04 20:38:25
 */
import axios from 'axios'
import Qs from 'qs'

export default {
    // post
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                params: Qs.stringify(param)
            }).then((res) => {
                resolve(res.data)
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
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            })
        })
    }
}