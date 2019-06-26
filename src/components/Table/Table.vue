<template>
	<Table
			highlight-row
			:columns="columns"
			:data="data"
			:stripe="config.stripe"
			:loading="config.loading"
			:size="config.size"
			@on-current-change="handleRowChange">
		<template v-for="item in columns" slot-scope="{ row, index }" :slot="item.slot">
			<slot :name="item.slot" :scope="{ row, index }"></slot>
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

      }
    }
  }
</script>

<style scoped>

</style>
