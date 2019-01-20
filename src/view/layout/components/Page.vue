<template>
    <Content :style="{margin: '20px', background: '#f5f7f9', minHeight: '260px'}" id="th_content" class="text">
        <Scroll
            :height="screemHeight">
            <keep-alive :include="cachedViews">
                <router-view/>
            </keep-alive>
        </Scroll>
    </Content>
</template>

<script>
    export default {
        name: "Page",
        data() {
            return {
                screemHeight: null
            }
        },
        mounted: function() {

        },
        computed: {
            cachedViews() {
                return []
            }
        },
        watch: {
            screemHeight() {
                this.screemHeight = document.getElementById('th_content') ? document.getElementById('th_content').clientHeight : 1000
            }
        },
        created() {
            // 相当于一个跳槽，用来给watch进行监听
            this.screemHeight = document.getElementById('th_content') ? document.getElementById('th_content').clientHeight : 1000
        }
    }
</script>

<style scoped>

</style>
