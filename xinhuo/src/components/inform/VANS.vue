<template>
	<div class="vans">
		<ul>
			<li v-for="(item,index) in all">
				<div>
					<img :src="item.cover" />
				</div>
				<p>{{item.title}}</p>
				<span>02月28号 13:59</span>
				<span>点赞996&nbsp&nbsp评论993</span>
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
	.vans{
		width: 100%;
		height: 100%;
		/* background: #f5f5f5; */
	}
	.vans ul{
		width: 100%;
		height: 0.58rem;
		
	}
	.vans ul li:nth-of-type(2){
		display: none;
	}
	.vans ul li img{
	
		width: 100%;
		height: 100%;
		
	}
	.vans ul li p{
		padding:.2rem;
		font-size: .4rem;
	}
	.vans ul li span:nth-of-type(1){
		margin-left: .2rem;
		font-size: .3rem;
		color:darkgray;
	}
	.vans ul li span:nth-of-type(2){
		margin-left: 2.2rem;
		font-size: .3rem;
		color:darkgray;
	}
</style>
