<template>
    <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </Content>
</template>

<script>
    export default {
        name: "Page"
    }
</script>

<style scoped>

</style>
