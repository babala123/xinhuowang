<template>
	<div class="top">
		<ul>
			<li v-for="(item,index) in message" @click="switchBar(index)">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {

		data() {
			return {
				message: ["即将发售", "最近发售"],

			}
		},
		created(){
			this.getSellLaunchList();
		},
		methods: {
			...Vuex.mapActions({
				getSellLaunchList: "home/getSellLaunchList"
			}),
			switchBar(index) {
				this.$emit("chang", index)
				this.getSellLaunchList({
					type:index,
					pages: 1,
				})
				
			},


		},
	}
</script>

<style scoped>
	.top {
		position: fixed;
		top: 0rem;
		left: 0;
		background: white;
		height: 1rem;
		width: 100%;
		border-bottom: .01rem solid lightgray;
		z-index: 5;
	}

	.top>ul {
		height: 100%;
		display: flex;
		justify-content: space-around;
	}

	.top>ul>li {
		line-height: 1rem;
		font-size: .35rem;
		color: black;
		font-family: "微软雅黑"
	}
</style>
