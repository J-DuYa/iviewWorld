<template>
    <Content :style="{margin: '20px', background: '#f5f7f9', minHeight: '260px'}" id="th_content" class="text">
        <Scroll
            :height="screemHeight">
            <keep-alive :include="cachedViews">
                <transition name="slide-fade" mode="out-in" @after-leave="afterLeave">
                    <router-view/>
                </transition>
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
        methods: {
            afterLeave () {
                window.scrollTo(0, 0)
            }
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

<style lang="scss" scoped>
    .slide-fade-enter-active {
        transition: all .2s ease;
    }
    .slide-fade-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
