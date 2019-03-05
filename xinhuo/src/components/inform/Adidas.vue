<template>
	<div class="adidas">
		<ul>
			<li v-for="(item,index) in all">
				<div>
					<img :src="item.cover" />
				</div>
				<p>{{item.title}}</p>
				<span>02月28号 19:01</span>
				<span>点赞101&nbsp&nbsp评论909</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				all:state=>state.home.all
			})
		}
	}
</script>

<style>
	.adidas{
		width: 100%;
		height: 100%;
		/* background: #f5f5f5; */
	}
	.adidas ul{
		width: 100%;
		height: 0.58rem;
		
	}
	
	.adidas ul li img{
	
		width: 100%;
		height: 100%;
		
	}
	.adidas ul li p{
		padding:.2rem;
		font-size: .4rem;
	}
	.adidas ul li span:nth-of-type(1){
		margin-left: .2rem;
		font-size: .3rem;
		color:darkgray;
	}
	.adidas ul li span:nth-of-type(2){
		margin-left: 2.2rem;
		font-size: .3rem;
		color:darkgray;
	}
</style>
