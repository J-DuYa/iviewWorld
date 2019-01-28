/*
 * @Author: 毒牙
 * @description 初步整理, 之后会优化请求
 * @Date: 2018-11-04 19:17:58
 * @Last Modified by: 毒牙
 * @Last Modified time: 2018-11-04 20:51:12
 */
import axios from 'axios'
import route from './../router'
import Qs from 'qs'
// 全局显示通知
import { Notice } from 'iview'

let _that = this;
// 封装通用的请求状态信息 错误请求统一管理
let http = {
    status: {
        '200': '请求成功!',
        '403': '请求超时',
        '404': '未连接到接口',
        '500': '服务器跑丢了'
    }
};

/**
* time: 2019/1/8 19:18
* Editor: 毒牙
* func: checkStatus
* param: status 状态码
* desc: check http status belongs to which type
*/
const checkStatus = (response) => {
    if(response.status === 500) {
        route.push("500")
    }
    if(response.status === 505) {
        route.push("505")
    }
    const errorText = http.status[response.status];
    Notice.error({
        title: '错误代码：' + response.status,
        desc: errorText
    });
    const error = new Error(errorText);
    error.name = response.status;
    error.response = response;
    throw error;
}

export default {
    // 普通post请求
    post(url, param) {
        console.log(param)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                params: param
            }).then((res) => {
                if(res.status === 200) {
                    resolve(res.data)
                } else {
                    checkStatus(res)
                }
            }).catch((err) => {
                throw new Error(err)
            })
        })
    },
    // 普通get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                if(res.status === 200) {
                    resolve(res.data)
                } else {
                    // 判断res.status是属于哪一种类型 慢慢完善
                    checkStatus(res)
                }
            }).catch((err) => {
                throw new Error(err)
            })
        })
    }
}
