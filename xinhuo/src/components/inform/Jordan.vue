<template>
	<div class="jordan">
		<ul>
			<li v-for="(item,index) in all">
				<div>
					<img :src="item.cover" />
				</div>
				<p>{{item.title}}</p>
				<span>02月29号 09:06</span>
				<span>点赞887&nbsp&nbsp评论321</span>
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
	.jordan{
		width: 100%;
		height: 100%;
		/* background: #f5f5f5; */
	}
	.jordan ul{
		width: 100%;
		height: 0.58rem;
		
	}
	.jordan ul li:nth-of-type(2){
		display: none;
	}
	.jordan ul li img{
	
		width: 100%;
		height: 100%;
		
	}
	.jordan ul li p{
		padding:.2rem;
		font-size: .4rem;
	}
	.jordan ul li span:nth-of-type(1){
		margin-left: .2rem;
		font-size: .3rem;
		color:darkgray;
	}
	.jordan ul li span:nth-of-type(2){
		margin-left: 2.2rem;
		font-size: .3rem;
		color:darkgray;
	}
</style>
