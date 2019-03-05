<template>
	<div class="twopage">
		<ul>
			<li v-for="(item,index) in twosell">
				<div class="imgbox">
					<img :src="item.main_image">
				</div>
				<div class="goodsinfor">{{item.title}}</div>
				<div class="goodspri">${{item.price}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				twosell:state=>state.home.twosell
			})
		}
	}
</script>

<style scoped>
	.twopage{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		padding: .15rem;
		margin-bottom: 1rem;
	}
	.twopage>ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.twopage>ul>li{
		width: 49.5%;
		padding:.15rem;
		background: white;
		margin-bottom: .15rem;
	}
	.twopage>ul>li>.imgbox{
		width: 3.2rem;
		height: 3.2rem;
		margin-bottom: .1rem;
	}
	.twopage>ul>li>.imgbox>img{
		width: 100%;
		height: 100%;
	}
	.twopage>ul>li>.goodsinfor{
		font-size: .27rem;
		margin-bottom: .1rem;
	}
	.twopage>ul>li>.goodspri{
		font-size: .27rem;
		color: #fe5a5a;
	}
</style>
