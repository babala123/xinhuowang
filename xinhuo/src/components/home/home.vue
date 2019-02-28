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





	export default {
		components: {
			"Top": Top,
			"Nav": Nav,
			"Shoes": Shoes,
			"Clsiify": Clsiify,
			"Homepage": Homepage,

		},
		data() {
			return {
				com: "Homepage",
			}
		},
		created() {
			this.handleHomeData();
		},
		methods: {
			...Vuex.mapActions({
				handleHomeData: "home/handleHomeData",
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
						click: true
					});
					// console.log(this.scroll);
				}
// 		mounted() {
// 			this.scroll = new BScroll(this.$refs.box, {
// 				// pullUpLoad: true,
// 				click: true,
// 				scrollY: true,
// 			});
// 
// 		}
	



	// 		mounted(){
	// 			//11张轮播图
	// 			this.$axios.get("/api/index.php/Mobile/Index/getBanner",)
	// 			.then((data)=>{
	// 				//this.getBanner=data;
	// 				//console.log(data.img)
	// 				for(var i=0;i<=10;i++){
	// 					getBanner.push(data[i].img);
	// 				}
	// 				// getBanner = this.getBanner
	// 			});
	// 			//新店到货、尖货推荐、热卖、二手鞋
	// 			this.$axios.get("/api/index.php/Mobile/Index/getGoodsList",)
	// 			.then((data)=>{
	// 				this.goodslist = data;
	// 				// console.log(this.goodslist)
	// 			});
	// 			//全部鞋履
	// 			this.$axios.get("/api/index.php/Mobile/Index/getShoesList",)
	// 			.then((data)=>{
	// 				this.shoesList = data;
	// 				// console.log(this.shoesList)
	// 			});
	// 			//分类
	// 			this.$axios.get("/api/index.php/Mobile/Index/getCategoryList",)
	// 			.then((data)=>{
	// 				this.categoryList = data;
	// 				// console.log(this.categoryList)
	// 			});
	// 			//鞋履
	// 			this.$axios.get("/api/index.php/Mobile/Index/getGoodsType",)
	// 			.then((data)=>{
	// 				this.goodsType = data;
	// 				// console.log(this.goodsType)
	// 			});
	// 		}
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
