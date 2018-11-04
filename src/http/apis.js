
import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

Vue.prototype.axios = axios
Vue.prototype.qs = Qs

// post请求
export function post(url, paramObj) {
    this.axios.post(url, this.qs.stringify(paramObj), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        console.log('请求成功！');
        console.log(res);
    }).catch((err) => {
        console.log(err);
    }).bind(this);
}

// get请求
export function get() {
    this.axios.get(url, this.qs.stringify(paramObj), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        console.log('请求成功！');
        console.log(res);
    }).catch((err) => {
        console.log(err);
    }).bind(this);
}