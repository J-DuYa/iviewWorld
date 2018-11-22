<template>
    <div class="github">
        <img :src="github" class="logo"/>
        <p class="duya">毒牙</p>
        <p class="address">
            <a href="https://github.com/TreeZou/thirdWorld-vue" target="_blank">https://github.com/TreeZou/thirdWorld-vue</a>
        </p>
    </div>
</template>

<script>
    import github from '@/assets/images/github/github.jpg'
    import './index.scss'

    export default {
        name: "Github",
        data() {
            return {
                github: github
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
