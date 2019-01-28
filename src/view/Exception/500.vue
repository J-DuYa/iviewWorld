<template>
    <Exception
            type="500"
            :img="Exception500"
            desc="500来蹭页面了~"
    ></Exception>
</template>

<script>
    import Exception500 from '@/assets/images/error/error-500.svg'
    import Exception from './modules/Exception'
    export default {
        name: "Exception500",
        components: { Exception },
        data() {
            return {
                Exception500: Exception500
            }
        }
    }
</script>

<style scoped>

</style>
