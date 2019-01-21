<template>
    <Page
        :total="pageTotal"
        :page-size="pageSize"
        :show-elevator="config.showElevator"
        :show-sizer="config.showSizer"
        :current="current"
        show-total
        @on-change="currentChange"
        @on-page-size-change="sizeChange"/>
</template>

<script>
    export default {
        name: "PageComponent",
        props: {
            current: {
                type: Number,
                default: 1
            },
            pageTotal: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            },
            config: {
                type: Object,
                default: () => {

                }
            }
        },
        methods: {
            currentChange(pageNo) {
                this.$emit('changePageNum', pageNo)
            },
            sizeChange(pageSize){
                this.$emit("changePageSize",pageSize)
            }
        }
    }
</script>

<style scoped>

</style>
