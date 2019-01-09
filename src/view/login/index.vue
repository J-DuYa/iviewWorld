<template>
    <div class="t_Login">
        <!--<canvas id="triangle-lost-in-space" resize="true"></canvas>-->
        <neon-effect :options="options"></neon-effect>
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

<script>
    import t_background from '@/assets/images/login/background.jpg'
    export default {
        name: "Login",
        data() {
            return {
               loginInfo: {
                   username: "",
                   password: ""
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
                    console.log(res)
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
