<template>
    <div class="">
        <Card class="tableCard" :dis-hover="true">
            <Table :columns="columns1" :data="data1"></Table>
            <div class="th_page mt20 pd10">
                <Page :total="data1.length" show-elevator show-total />
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "CommonTable",
        data() {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name',
                        minwidth: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        fixed: 'right',
                        minwidth: 180,
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    /*.tableCard.ivu-card {*/
        /*border: none;*/
    /*}*/
.tableCard {
    &.ivu-card {
        border: none;
    }
}
</style>
