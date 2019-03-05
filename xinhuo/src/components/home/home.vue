<template>
	<div class="home-banner">
		<Top />
		<div class="wrapper homeWrapper" ref="box" style="height:12rem">
			<div class="content"> 
				<Nav @handleToggle="toggle" />
				<component :is="com"></component>
		</div>
		</div> 
	</div>
</template>

<script>
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	import Top from "./components/top"
	import Nav from "./components/nav"
	import Clsiify from "./components/clssify"
	import Shoes from "./components/shoes"
	import Homepage from "./components/homepage"
	// import Basketball from "./components/basketball"
	export default {
		computed: {
			...Vuex.mapState({
				state:state=>state.home,
				page: state => state.home.page,
				goods:state=>state.home.goods,
				type:state=>state.home.type,
				list:state=>state.home.list,
				pages: state => state.home.pages,
			})
		},
		components: {
			"Top": Top,
			"Nav": Nav,
			"Shoes": Shoes,
			"Clsiify": Clsiify,
			"Homepage": Homepage,

		},
		watch: {
			goods(newVal, oldVal) {
				//重新计算content高度
				this.scroll.refresh();

				//数据加载完毕允许进行下次加载
				this.scroll.finishPullUp();
			}
		},
		data() {
			return {
				com: "Homepage",
			}
		},
		created() {
			this.handleHomeData();
			this.handleGoodList(this.page);
			this.handleGoodType();
			this.handleCategoryList();
			this.handleSearch();
		},
		methods: {
			...Vuex.mapActions({
				handleHomeData: "home/handleHomeData",
				handleGoodList: "home/handleGoodList",
				handleGoodType: "home/handleGoodType",
				handleCategoryList:"home/handleCategoryList",
				handleSearch:"home/handleSearch",
			}),
			toggle(params) {
				switch (params) {
					case 0:
						this.com = "Clsiify";
						break;
					case 1:
						this.com = "Homepage";
						break;
					case 2:
						this.com = "Shoes";
						break;
					default:
						this.com = "Homepage";
				}
			}
		},
		mounted() {
			let wrapper = document.querySelector(".wrapper");
			let scroll = new BScroll(wrapper);
			this.scroll = new BScroll(this.$refs.box, {
				scrollY: true,
				click: true,
				pullUpLoad: true,
			});

			this.scroll.on("pullingUp", () => {
				if (this.page <= 13) {
					this.handleGoodList(this.page);
				}
			})
			// console.log(this.scroll);
		}
	}
</script>

<style>
	.home-banner {
		height: 100%;
		width: 100%;
	}

	.homeWraper {
		height: 100%;
	}
</style>
