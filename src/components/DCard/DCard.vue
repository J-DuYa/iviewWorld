<template>
	<Card class="d-card">
		<header>
			<h3 slot="title">{{title}}</h3>
			<slot name="operation"></slot>
		</header>
		<section class="d-card-ctn">
			<slot name="content"></slot>
		</section>
	</Card>
</template>

<script>
  export default {
    name: "DCard",
		props: {
      title: {
        type: String,
				default: "卡片区域"
			}
		},
		data() {
      return {

			}
		}
  }
</script>

<style lang="less" scoped>
@import "../../theme";
.d-card {
	/*padding: 10px;*/
	border-radius: 5px;
	/deep/ .ivu-card-body {
		padding: 0;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 10px;
		height: 30px;
		background: @primary-color;
		color: @white!important;
		h3 {
			font-size: 16px;
			font-weight: bold;
		}
	}
	.d-card-ctn {
		padding: 20px 10px;
	}
}
</style>