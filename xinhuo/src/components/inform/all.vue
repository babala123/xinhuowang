<template>
	<div class="all">
		<ul>
			<li v-for="(item,index) in all">
				<div>
					<img :src="item.cover" />
				</div>
				<p>{{item.title}}</p>
				<span>02月28号 17:21</span>
				<span>点赞312&nbsp&nbsp评论113</span>
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
	.all{
		width: 100%;
		height: 100%;
		/* background: #f5f5f5; */
	}
	.all ul{
		width: 100%;
		height: 0.58rem;
		
	}

	.all ul li img{
	
		width: 100%;
		height: 100%;
		
	}
	.all ul li p{
		padding:.2rem;
		font-size: .4rem;
	}
	.all ul li span:nth-of-type(1){
		margin-left: .2rem;
		font-size: .3rem;
		color:darkgray;
	}
	.all ul li span:nth-of-type(2){
		margin-left: 2.2rem;
		font-size: .3rem;
		color:darkgray;
	}
</style>
