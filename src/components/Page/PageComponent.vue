<template>
    <Page
        :total="pageTotal"
        :page-size="pageSize"
        :show-elevator="config.showElevator"
        :show-sizer="config.showSizer"
        show-total
        @on-change="$emit('changePageNum')"
        @on-page-size-change="$emit('changePageSize')"/>
</template>

<script>
    export default {
        name: "PageComponent",
        props: {
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
        data() {
          return {

          }
        },
        methods: {

        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
