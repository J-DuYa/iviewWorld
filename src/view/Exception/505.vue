<template>
    <Exception
            type="505"
            :img="Exception505"
            desc="505来蹭页面了~"
    ></Exception>
</template>

<script>
    import Exception505 from '@/assets/images/error/error-505.svg'
    import Exception from './modules/Exception'
    export default {
        name: "Exception505",
        components: { Exception },
        data() {
            return {
                Exception505: Exception505
            }
        }
    }
</script>

<style scoped>

</style>
