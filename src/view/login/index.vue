<template>
    <div class="t_Login">
        <!--<canvas id="triangle-lost-in-space" resize="true"></canvas>-->
        <neon-effect :options="options"></neon-effect>
        <div class="t_login_form">
            <Form ref="loginInfo" :model="loginInfo" :label-width="60">
                <FormItem label="账号：" prop="username">
                    <Input type="text" size="large" v-model="loginInfo.username"></Input>
                </FormItem>
                <FormItem label="密码：" prop="password">
                    <Input type="password" size="large" v-model="loginInfo.password"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" size="large" @click="loginSubmit()" long>登 录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
               loginInfo: {
                   username: "admin",
                   password: "123456"
               },
                options: {
                    len: 30, //五边形的单边长度
                    count: 66, //多少线重叠
                    rate: 20, //速度 越小越快
                    dieChance: 0.05, //单次绘画失败进行重绘的几率
                    sparkChance: 0.1, //[0,1] 越大画出的五边形越多重
                    sparkDist: 10, //闪烁点的距离
                    sparkSize: 2,//闪烁点的大小
                    contentLight: 60, // [0,100] 色块的亮度
                    shadowToTimePropMult: 6, //五边形的内环阴影大小
                    bgColorArr: [0, 0, 0] //背景色数组
                }
            }
        },
        methods: {
            // 登录
            loginSubmit() {
                // 测试跳转页面的方法
                ajax.post('/sso/login', {
                    ...this.loginInfo
                }).then(res => {
                    if(res.success) {
                        this.$router.push({
                            name: 'index'
                        });
                    }
                }).catch(err => {
                    throw new Error(err)
                })
            }
        },
        created() {

        }
    }
</script>

<style lang="scss">
    .t_Login {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        /*background: url("./../../assets/images/login/background.jpg") no-repeat;*/
        background-attachment: fixed;
        background-size: 100% 100%;
        .t_login_form {
            margin: 15% auto 0;
            width: 400px;
            height: auto;
            .login_title {
                margin-bottom: 20px;
                color: red;
                font-size: 20px;
            }
            .ivu-form .ivu-form-item-label {
                color: #fff;
            }
            .ivu-input-large, .ivu-btn {
                width: 240px;
            }
            .ivu-input-large {
                padding: 15px 10px;
            }
        }
    }
</style>
