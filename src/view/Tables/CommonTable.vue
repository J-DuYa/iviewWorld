<template>
    <div class="">
        <Card class="tableCard" :dis-hover="true">
            <TableComponent
                    :columns.sync="columns1"
                    :data.sync="data1"
                    :config.sync=config
            ></TableComponent>
            <div class="th_page mt20 pd10">
                <PageComponent
                    :pageTotal.sync="data1.length"
                    @changePageNum="changePageNum"
                    @changePageSize="changePageSize"
                />
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "CommonTable",
        data() {
            return {
                pageSize: 10,
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'center',
                        minwidth: 100,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        align: 'center',
                        key: 'age'
                    },
                    {
                        title: '班级',
                        align: 'center',
                        minwidth: 180,
                        key: 'address'
                    },
                    {
                        title: '入学时间',
                        align: 'center',
                        key: 'date'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        key: 'operation',
                        minWidth: 100,
                        fixed: 'right',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }
                                }, '显示详情'),
                                h('Button', {
                                    props: {
                                        type: 'warning',
                                        size: 'small'
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                data1: [

                ],
                config: {
                    stripe:true,
                    loading: false,
                    size: "small"
                }
            }
        },
        methods: {
          getData() {
            let data = [
                {
                    name: '毒牙君',
                    age: 18,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: 'Jay',
                    age: 24,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: 'Rose',
                    age: 30,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '柠檬君',
                    age: 26,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '张形意',
                    age: 26,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '解加杰',
                    age: 18,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: 'Fbx',
                    age: 19,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '王晓',
                    age: 18,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '王林刚',
                    age: 18,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '朱晓辉',
                    age: 18,
                    address: '三年二班',
                    date: '2014.09.01'
                },
                {
                    name: '金春阳',
                    age: 19,
                    address: '三年二班',
                    date: '2014.09.01'
                }
            ];
            this.data1 = [];
            this.config.loading = true;
            data.forEach(item => {
                this.data1.push(item)
            });
            this.config.loading = false;
          },
          changePageNum(num) {

          },
          changePageSize(pageSize) {

          },
          init() {
            this.getData();
          },
        },
        created() {
            this.getData()
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
