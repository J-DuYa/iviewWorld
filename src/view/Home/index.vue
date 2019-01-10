<template>
    <div class="th_home homeBg">
        <bubbles-effect :options="options"></bubbles-effect>
        <p class="text-center th_home_title" style="z-index: 9999">第三方世界</p>
    </div>
</template>

<script>
    import background from '@/assets/images/login/background.jpg'
    export default {
        name: "Home",
        data() {
            return {
                options: {
                    color: '#5F9EA0', //气泡颜色
                    radius: 15, //气泡半径
                    densety: 0.3, // 气泡密度 越大越密集(建议不要大于1)
                    clearOffset: 0.5 // 气泡消失距离[0-1] 越大越晚消失
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.homeBg {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .th_home_title {
        font-size: 50px;
        color: purple;
    }
}
</style>
