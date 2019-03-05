<template>
	<div class="nike">
		<ul>
			<li v-for="(item,index) in all">
				<div>
					<img :src="item.cover" />
				</div>
				<p>{{item.title}}</p>
				<span>02月28号 11:05</span>
				<span>点赞146&nbsp&nbsp评论251</span>
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
	.nike{
		width: 100%;
		height: 100%;
		/* background: #f5f5f5; */
	}
	.nike ul{
		width: 100%;
		height: 0.58rem;
		
	}
	.nike ul li:nth-of-type(2){
		display: none;
	}
	.nike ul li:nth-of-type(3){
		display: none;
	}
	.nike ul li img{
	
		width: 100%;
		height: 100%;
		
	}
	.nike ul li p{
		padding:.2rem;
		font-size: .4rem;
	}
	.nike ul li span:nth-of-type(1){
		margin-left: .2rem;
		font-size: .3rem;
		color:darkgray;
	}
	.nike ul li span:nth-of-type(2){
		margin-left: 2.2rem;
		font-size: .3rem;
		color:darkgray;
	}
</style>
