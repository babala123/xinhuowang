<template>
	<div class="shoes">
		<ul>
			<li v-for="(item,index) in type">
				<img :src="item.image" >
			</li>
			
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	
	export default{
		computed:{
			...Vuex.mapState({
				type:state=>state.home.type
			})
		}
			
		
	}
</script>

<style scoped  lang="scss">
	.shoes{
		position: relative;
		left: 0;
		top:1.68rem;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		ul{
			width: 100%;
			z-index: 9;
			margin-bottom: 3.3rem;
			li{
				width: 6.9rem;
				height: 4.2rem;
				margin: .25rem auto;
				img{
					width: 100%;
					height: 100%;
				}
			}
			li :nth-child(6){
				display: none;
			}
			
		}
	}
</style>
