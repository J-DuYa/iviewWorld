<template>
    <Exception
        type="404"
        :img="Exception404"
        desc="404来蹭页面了~"
    ></Exception>
</template>

<script>
    import Exception404 from '@/assets/images/error/error-404.svg'
    import Exception from './modules/Exception'
    export default {
        name: "Exception404",
        components: { Exception },
        data() {
            return {
                Exception404: Exception404
            }
        }
    }
</script>

<style scoped>

</style>
