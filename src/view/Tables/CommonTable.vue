<template>
	<div class="">
		<TitleTip title="基础表格"></TitleTip>
		<Form ref="searchInfo" :model="searchInfo" inline class="mt20">
			<FormItem label="姓名：" prop="name" :label-width="60">
				<Input v-model.trim="searchInfo.name" placeholder="请输入姓名"></Input>
			</FormItem>
			<FormItem label="班级：" prop="className" :label-width="60">
				<Input v-model.trim="searchInfo.className" placeholder="请输入班级"></Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="submitForm()">搜索</Button>
				<Button @click="resetForm('searchInfo')" style="margin-left: 8px">重置</Button>
			</FormItem>
		</Form>
		<Card class="tableCard" :dis-hover="true">
			<TableComponent
					:columns.sync="userList"
					:data.sync="userData"
					:config.sync="config"
					@chooseTr="chooseTr"
					class="mt20">
				<template slot="status" slot-scope="scope">
					<Tag type="dot" :color="scope.scope.row.status === 0 ? 'error' : 'success'">{{ scope.scope.row.status === 0 ? '留校中' : '已毕业' }}</Tag>
				</template>
				<template slot="operation" slot-scope="scope">
					<Button type="primary">编辑</Button>
					<Button type="error" @click="deleteRow(scope.scope)">删除</Button>
				</template>
			</TableComponent>
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
        selectTr: null,
        // 简单表格
        pageSize: 10,
        currentPage: 1,
        pageTotal: null,
        userList: [
          {
            title: '姓名',
            key: 'name',
            align: 'center',
            width: 200,
            fixed: 'left'
          },
          {
            title: '年龄',
            align: 'center',
            key: 'age',
            width: 120
          },
          {
            title: '班级',
            align: 'center',
            width: 300,
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
            key: 'date',
            width: 300
          },
          {
            title: '状态',
            align: 'center',
            slot: 'status',
						width: 180
          },
          {
            title: '操作',
            slot: 'operation',
            align: 'center',
						minWidth: 300
          }
        ],
        userData: [],
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
        this.getData();
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      deleteRow(row) {
        this.userData.splice(row.index, 1);
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
            this.userData = res.result && res.result.dataList ? res.result.dataList : [];
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
      showInfo() {
        // console.log(this.selectTr)
      },
      // 表格高亮操作
      chooseTr(currentRow, oldCurrentRow) {
        // console.log(currentRow, oldCurrentRow)
        this.selectTr = currentRow
      }
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
