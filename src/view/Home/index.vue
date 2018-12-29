<template>
    <div class="th_home homeBg" :style="backgroundObj">
        <p class="text-center th_home_title">第三方世界</p>
    </div>
</template>

<script>
    import background from '@/assets/images/login/background.jpg'
    export default {
        name: "Home",
        data() {
            return {
                backgroundObj: {
                    backgroundImage: 'url(' + background + ')'
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
