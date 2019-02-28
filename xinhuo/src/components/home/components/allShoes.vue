<template>
	<div class="allShoes">
		<h2>全部鞋履</h2>
		<el-tabs type="card">
			<el-tab-pane label="全部" name="first">全部</el-tab-pane>
			<el-tab-pane label="篮球" name="second">篮球</el-tab-pane>
			<el-tab-pane label="潮流" name="third">潮流</el-tab-pane>
			<el-tab-pane label="跑步" name="fourth">跑步</el-tab-pane>
			<el-tab-pane label="休闲鞋" name="five">潮流</el-tab-pane>
			<el-tab-pane label="足球" name="six">跑步</el-tab-pane>
			<el-tab-pane label="其他" name="serven">跑步</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.allShoes {
		height: 100%;
		width: 100%;
		background: #fff;
		.el-tabs__nav-scroll {
			// width:5rem;
			border: 0;
			.el-tabs__item {
				font-size: 0.33rem;
				width: 1.86rem;
				height: .6rem;
				line-height: .6rem;
				text-align: center;
				background: #eee;
				border-radius: .14rem;
				margin-right: .12rem;
				
			}
			.is-active{
				color: #fff;
				background: red;
			}
		}
		h2 {
			height: .9rem;
			line-height: .9rem;
			width: 100%;
			color: black;
			text-align: center;
			font-size: .32rem;
			font-weight: 400;
			font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
		}

	}
	.el-tabs--card>.el-tabs__header .el-tabs__nav {
	border: 0;
	border-bottom: 0;
}

</style>
