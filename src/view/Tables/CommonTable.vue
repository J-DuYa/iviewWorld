<template>
    <div class="">
        <Card class="tableCard" :dis-hover="true">
            <TitleTip title="基础表格"></TitleTip>
            <TableComponent
                    :columns.sync="columns1"
                    :data.sync="data1"
                    :config.sync=config
                    class="mt20"
            ></TableComponent>
            <div class="th_page mt20 pd10">
                <PageComponent
                    :pageTotal.sync="pageTotal"
                    @changePageNum="changePageNum"
                    @changePageSize="changePageSize"
                />
            </div>
        </Card>
        <Card class="tableCard" :dis-hover="true">
            <TitleTip title="复杂表格"></TitleTip>
            <TableComponent
                    :columns.sync="columns1"
                    :data.sync="data1"
                    :config.sync=config
                    class="mt20"
            ></TableComponent>
            <div class="th_page mt20 pd10">
                <PageComponent
                        :pageTotal.sync="pageTotal"
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
                currentPage: 1,
                pageTotal: null,
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
                        key: 'className',
                        render:(h, params) => {
                            return h('div', [
                                h('p', {
                                }, "三年" + params.row.className + "班"),
                            ])
                        }
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
                data1: [],
                config: {
                    stripe:true,
                    loading: false,
                    size: "small"
                },
            }
        },
        methods: {
          getData() {
            let data = {
                pageNum: this.currentPage,
                pageSize: this.pageSize
            };
            this.config.loading = true;
              ajax.get('/user/getUserList', {
                  ...data
              }).then(res => {
                  console.log(res)
                  if(res.success) {
                      this.data1 = res.result && res.result.dataList ? res.result.dataList : [];
                      this.pageTotal = res.result && res.result.total ? res.result.total : 0
              }
              }).catch(res => {

              })
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
