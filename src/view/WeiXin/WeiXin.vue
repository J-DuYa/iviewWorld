<template>
    <div class="thWeixin">
        <img :src="weixin"/>
    </div>
</template>

<script>
    import weixin from '@/assets/images/login/weixin.png'
    export default {
        name: "WeiXin",
        data() {
            return {
                weixin: weixin
            }
        }
    }
</script>

<style lang="scss" scoped>
    .thWeixin {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 600px;
        }
    }
</style>
