<template>
	<div class="dy-table">
		<div class="o_area">
			<span class="o_title">{{config.name ? config.name : "数据列表"}}</span>
			<Button type="primary" @click="exportExcel" v-if="config.isHasExcel"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
			<slot name="btns"></slot>
		</div>
		<Table
				highlight-row
				:columns="columns"
				:data="data"
				:stripe="config.stripe"
				:loading="config.loading"
				:size="config.size"
				:ref="refName"
				@on-current-change="handleRowChange">
			<template v-for="item in columns" slot-scope="{ row, index }" :slot="item.slot">
				<slot :name="item.slot" :scope="{ row, index }"></slot>
			</template>
		</Table>
	</div>
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
      refName: {
        type: String,
				default: "dyTb"
			},
      config: {
        type: Object,
        default: () => {
          return {
            stripe: false,
            loading: false,
            size: "small",
            isHasExcel: true
          }
        }
      },
			excelConfig: {
        type: Object,
				default: () => {
				  return {
            filename: "毒牙" + new Date().toLocaleTimeString()
					}
				}
			}
    },
    methods: {
      handleRowChange (currentRow, oldCurrentRow) {

      },
      exportExcel () {
        this.$refs[this.refName].exportCsv({
          ...this.excelConfig
        });
			}
    }
  }
</script>

<style lang="less" scoped>
.dy-table {
	.o_area {
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.o_title {
			font-size: 16px;
			color: #333;
			font-weight: bold;
			letter-spacing: 1px;
		}
	}
}
</style>
