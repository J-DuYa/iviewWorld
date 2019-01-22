<template>
    <Table
         highlight-row
        :columns="columns"
        :data="data"
        :stripe="config.stripe"
        :loading="config.loading"
        :size="config.size"
        @on-current-change="handleRowChange">
        <template v-for="item in columns" slot-scope="{ row, index }" slot="operation">
            <Button type="primary" size="small" style="margin-right: 5px" @click="showInfo(row)">详情信息</Button>
            <Button type="error" size="small" style="margin-right: 5px" @click="deleteItem(row, index)">删除</Button>
            <!-- 后期根据自己需求添加 -->
        </template>
    </Table>
</template>

<script>
    export default {
        name: "TableComponent",
        props: {
            data: {
                type: Array,
                default: () => {}
            },
            columns: {
                type: Array,
                default: () => {}
            },
            config: {
                type: Object,
                default: () => {
                    return {
                        stripe: false,
                        loading: false,
                        size: "small"
                    }
                }
            }
        },
        methods: {
            handleRowChange(currentRow, oldCurrentRow) {
                // console.log(currentRow)
                // console.log(oldCurrentRow)
                // this.$emit('chooseTr', currentRow, oldCurrentRow)
            },
            showInfo(obj) {
                console.log(obj)
            },
            deleteItem(obj, index) {
                console.log(obj)
                this.$emit('remove', obj, index)
            }
        }
    }
</script>

<style scoped>

</style>
