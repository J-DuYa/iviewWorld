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

            },
            deleteItem(obj, index) {
                this.$emit('remove', obj, index)
            }
        }
    }
</script>

<style scoped>

</style>
