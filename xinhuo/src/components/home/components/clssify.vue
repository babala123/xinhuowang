<template>
	<div class="clssify">
		<el-tabs :tab-position="tabPosition">
			<el-tab-pane label="Jordan">
			<ClssifyOne/>
			</el-tab-pane>
			<el-tab-pane label="Nike">
			<ClssifyTwo/>
			</el-tab-pane>
			<el-tab-pane label="Adidas">
			<ClssifyThree/>
			</el-tab-pane>
			<el-tab-pane label="Vans"> 
			<Clssifyfour/>
			</el-tab-pane>
			<el-tab-pane label="Converse">
				<ClssifyFive/>
			</el-tab-pane>
			<el-tab-pane label="Reebok">
				<ClssifySix/>
			</el-tab-pane>
			<el-tab-pane label="New Balance">
				<ClssifySeven/>
			</el-tab-pane>
			<el-tab-pane label="Puma">1</el-tab-pane>
			<el-tab-pane label="Asics">1</el-tab-pane>
			<el-tab-pane label="LiNing">1</el-tab-pane>
		</el-tabs>

	</div>
</template>

<script>
	import Vue from "vue"
	import ClssifyOne from "./clssifyOne"
	import ClssifyTwo from "./clssifyTwo"
	import ClssifyThree from "./ClssifyThree"
	import Clssifyfour from "./clssifyfour"
	import ClssifyFive from "./clssifyFive"
	import ClssifySix from "./clssifySix"
	import ClssifySeven from "./clssifySeven"
	export default {
		components:{
			"ClssifyOne":ClssifyOne,
			"ClssifyTwo":ClssifyTwo,
			"ClssifyThree":ClssifyThree,
			"Clssifyfour":Clssifyfour,
			"ClssifyFive":ClssifyFive,
			"ClssifySix":ClssifySix,
			"ClssifySeven":ClssifySeven,
			
			
		},
		data() {
			return {
				tabPosition: 'left'
			};
		}
	};
</script>

<style lang="scss">
	.clssify {

		position: relative;
		left: 0;
		top: 1.68rem;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;

		.el-tabs--left .el-tabs__header {
			float: left;
			margin-bottom: 0;
			margin-right: 10px;
			width: 1.8rem;

			.el-tabs__item {
				text-align: center;
				height: 1rem;
				width: 2rem;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				line-height: 1rem;
				font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
				list-style: none;
				font-size: .31rem;
				color: #999;
				position: relative;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;

				.is-active{
					color: red;
					border: 1px solid red;
				}
			}
		}

	}
</style>
