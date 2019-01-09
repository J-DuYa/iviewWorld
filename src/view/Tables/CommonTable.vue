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
                     :config.sync="config"
                    :pageTotal.sync="pageTotal"
                    :pageSize.sync="pageSize"
                    @changePageNum="changePageNum"
                    @changePageSize="changePageSize"
                />
            </div>
        </Card>
        <Card class="tableCard" :dis-hover="true">
            <TitleTip title="复杂表格"></TitleTip>
            <TableComponent
                    :columns.sync="complexForm"
                    :data.sync="complexData"
                    :config.sync=complexConfig
                    class="mt20"
            ></TableComponent>
            <div class="th_page mt20 pd10">
                <PageComponent
                        :config.sync="complexConfig"
                        :pageTotal.sync="complexPageTotal"
                        :pageSize.sync="complexPageSize"
                        @changePageNum="changeComplexPageNum"
                        @changePageSize="changeComplexPageSize"
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
                // 简单表格
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
                    showElevator: true,
                    loading: false,
                    size: "small"
                },

                // 复杂表格
                complexPageSize: 10,
                complexCurrentPage: 1,
                complexPageTotal: null,
                complexForm: [
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
                complexData: [],
                complexConfig: {
                    stripe:true,
                    loading: false,
                    showElevator: true,
                    size: "small"
                },
            }
        },
        methods: {
            // 简单表格
          getData() {
            let data = {
                pageNum: this.currentPage,
                pageSize: this.pageSize
            };
            this.config.loading = true;
              ajax.get('/user/getUserList', {
                  ...data
              }).then(res => {
                  if(res.success) {
                      this.data1 = res.result && res.result.dataList ? res.result.dataList : [];
                      this.pageTotal = res.result && res.result.total ? res.result.total : 0
              }
              }).catch(res => {

              });
            this.config.loading = false;
          },

          changePageNum(num) {
              this.currentPage = num;
              this.getData();
          },

          changePageSize(pageSize) {
              this.pageSize = pageSize;
              this.getData();
          },

          // 复杂表格
          getComplexData() {
              let data = {
                  pageNum: this.complexCurrentPage,
                  pageSize: this.complexPageSize
              };
              this.complexConfig.loading = true;
              ajax.get('/user/getUserList', {
                  ...data
              }).then(res => {
                  if(res.success) {
                      this.complexData = res.result && res.result.dataList ? res.result.dataList : [];
                      this.complexPageTotal = res.result && res.result.total ? res.result.total : 0
                  }
              }).catch(res => {

              });
              this.complexConfig.loading = false;
          },

            changeComplexPageNum(num) {
                this.complexCurrentPage = num;
                this.getComplexData();
            },

            changeComplexPageSize(val) {
                this.complexPageSize = val;
                this.getComplexData();
            },
          init() {
            this.getData();
            this.getComplexData()
          },
        },
        created() {
            this.getData()
            this.getComplexData()
        }
    }
</script>

<style lang="scss">
.tableCard {
    &.ivu-card {
        border: none;
    }
}
</style>
