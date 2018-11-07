<template>
    <div class="t_Login">
        <div class="t_login_form">
            <div class="login_title">第三方世界后台管理系统</div>
            <Form ref="loginInfo" :model="loginInfo" :label-width="60">
                <FormItem label="账号：" prop="username">
                    <Input type="text" v-model="loginInfo.username"></Input>
                </FormItem>
                <FormItem label="密码：" prop="password">
                    <Input type="password" v-model="loginInfo.password"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="loginSubmit()" long>登 录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
import t_background from '@/assets/images/login/background.jpg'

<script>
    export default {
        name: "Login",
        data() {
            return {
               loginInfo: {
                   username: "",
                   password: ""
               },
            }
        },
        methods: {
            // 登录
            loginSubmit() {

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
        background: url("./../../assets/images/login/background.jpg") no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
        .t_login_form {
            margin: 220px auto 0;
            padding: 40px;
            width: 330px;
            height: auto;
            background: #0f7eb3;
            box-shadow: 0 0 1px 3px #ddd,0 0 3px 5px #f2f2f2;
            .login_title {
                margin-bottom: 10px;
                width: 100%;
                height: 60px;
                line-height: 60px;
                font-size: 18px;
                font-weight: bold;
                letter-spacing: 1.5px;
                color: #fff;
            }
            .ivu-form .ivu-form-item-label {
                color: #fff;
            }
        }
    }
</style>