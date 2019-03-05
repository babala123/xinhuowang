<template>
	<div class="clssifyTwo">
		<div class="header">
			<p>Jordan</p>
			<span>全部 &nbsp;></span>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,index) in childFive">
					<img :src="item.image" >
					<span>{{item.mobile_name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				childFive:state=>state.home.childFive,
			})
		}
	}
</script>

<style scoped lang="scss">
	.clssifyTwo{
		width: 5.4rem;
		height: 100%;
		overflow: hidden;
		overflow-y: auto;
		.header{
			width:5rem;
			height: 1rem;
			line-height: 1rem;
			margin: 0 auto;
			border-bottom: 2px solid #b6b6b6;
			font-size: .29rem;
			font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
			display: flex;
			justify-content: space-between;
			p{
				color: gray;
			}
			span{
				color: red;
			}
		}
		.content{
			width:5rem;
			margin: 0 auto;
			ul{
				width: 5rem;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li{
					width: 1.4rem;
					height: 1.98rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: .3rem 0;
					// text-align: center;
					img{
						width: 1.2rem;
						height: 1.2rem;
						display: inline-block;
					}
					span{
						display: inline-block;
						width:1.4rem;
						 height: .7rem;
						 font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
						 color: #999;
					}
				}
			}
		}
	}
	</style>