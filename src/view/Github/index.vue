<template>
    <div class="github">
        <viewer :images="headerImage ? headerImage.split(',') : []">
            <img :src="headerImage" class="logo"/>
        </viewer>
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
                headerImage: github
            }
        },
        // created() {
        //   console.log(this.headerImage)
        // }
    }
</script>

<style lang="scss" scoped>

</style>
