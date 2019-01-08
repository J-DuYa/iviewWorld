<template>
    <Table
        :columns="columns"
        :data="data"
        :stripe="config.stripe"
        :loading="config.loading"
        :size="config.size"
    ></Table>
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
        }
    }
</script>

<style scoped>

</style>
