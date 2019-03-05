<template>
	<div class="sall">
		<Top-com @chang="change"></Top-com>
		<List-com></List-com>
		<Banner-com></Banner-com>
		<Component :is="which"></Component>

	</div>

</template>

<script>
	import Vuex from "vuex";
	import Top from "./components/top";
	import List from "./components/list";
	import Banner from "./components/banner";
	import Onepage from "./components/onepage";
	import Twopage from "./components/twopage";
	export default {
		data() {
			return {
				which: "Onepage-com"
			}
		},
		components: {
			"Top-com": Top,
			"List-com": List,
			"Banner-com": Banner,
			"Onepage-com": Onepage,
			"Twopage-com": Twopage,
		},
		created() {
			this.getSellBannre();
			this.getSelledLaunchList();
			this.getSellBrandList();
			this.getSellLaunchYearMonthList();
			//this.getSellLateList()
		},
		methods: {
			change(index) {
				switch (index) {
					case 0:
						this.which = "Onepage-com";
						break;
					case 1:
						this.which = "Twopage-com";
						break;
				}
			},

			//轮播图
			...Vuex.mapActions({
				getSellBannre: "home/getSellBannre"
			}),
			//品牌logo
			...Vuex.mapActions({
				getSellBrandList: "home/getSellBrandList"
			}),

			//即将发售的日期
			...Vuex.mapActions({
				getSellLaunchYearMonthList: "home/getSellLaunchYearMonthList"
			}),
			//已发售的商品
			...Vuex.mapActions({
				getSelledLaunchList: "home/getSelledLaunchList"
			})
		},
		computed: {
			...Vuex.mapState({
				state: state => state.home
			})
		},
	}
</script>

<style scoped>
	.sell {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
</style>
