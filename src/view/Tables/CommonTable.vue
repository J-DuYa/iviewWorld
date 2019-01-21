<template>
    <div class="">
        <TitleTip title="基础表格"></TitleTip>
        <Form ref="searchInfo" :model="searchInfo" inline :label-width="80" class="mt20">
            <FormItem label="姓名：" prop="name">
                <Input v-model.trim="searchInfo.name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="班级：" prop="className">
                <Input v-model.trim="searchInfo.className" placeholder="请输入班级"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submitForm()">搜索</Button>
                <Button @click="resetForm('searchInfo')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
        <Card class="tableCard" :dis-hover="true">
            <TableComponent
                    :columns.sync="columns1"
                    :data.sync="data1"
                    :config.sync=config
                    class="mt20"
            ></TableComponent>
            <div class="th_page mt20 pd10">
                <PageComponent
                     :config.sync="config"
                     :current.sync="currentPage"
                    :pageTotal.sync="pageTotal"
                    :pageSize.sync="pageSize"
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
                searchInfo: {
                    name: "",
                    className: ""
                },
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
            }
        },
        methods: {
          // 搜索
          submitForm() {
              this.currentPage = 1;
              this.pageSize = 10;
              this.getData()
          },
          // 重置表单
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          // 简单表格
          getData() {
            let data = {
                pageNum: this.currentPage,
                pageSize: this.pageSize,
                ...this.searchInfo
            };
            this.config.loading = true;
              ajax.get('/user/getUserList', {
                  ...data
              }).then(res => {
                  if(res.success) {
                      this.data1 = res.result && res.result.dataList ? res.result.dataList : [];
                      this.pageTotal = res.result && res.result.total ? res.result.total : 0
                  }
                  setTimeout(() => {
                      this.config.loading = false;
                  }, 500)
              }).catch(res => {

              });
          },
          changePageNum(num) {
              this.currentPage = num;
              this.getData();
          },

          changePageSize(pageSize) {
              this.pageSize = pageSize;
              this.getData();
          },
          init() {
            this.getData()
          },
        },
        created() {
            this.getData()
        }
    }
</script>

<style lang="scss">
.tableCard {
    &.ivu-card {
        border: none;
        background: rgb(245, 247, 249);
    }
}
</style>
