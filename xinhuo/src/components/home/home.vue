<template>
	<div class="home-banner">home
		<!-- <ul>
			<li v-for="(item,index) in getBanner">
				<img src="item[index]">
			</li>
		</ul> -->
		<h2>lalallalala</h2>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
// 				getBanner:[],
// 				goodslist:"",
// 				shoesList:"",
// 				categoryList:"",
// 				goodsType:"",
				//Img:"https://images.xinhuo.com/5c30098c74880.png"
			}
		},
		created(){
			this.handleHomeData();
		},
		methods:{
			...Vuex.mapActions({
				handleHomeData:"home/handleHomeData"
			})
		}
		
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
</style>
