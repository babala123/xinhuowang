<template>
	<div class="wrapper" ref="tabBar">
		
		<ul class="content">
			<li v-for="(item,index) in tabBar">
				<a href="##" @click="handleToggle(index)">
					<span>{{item}}</span>
				</a>
		<!-- 		{{item}} -->
			</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
    // let scroll = new BScroll('.wrapper')

// import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)


	export default{
		data(){
				
			return{
				tabBar:["全部","Jordan","Nike","Adidas","VANS","Converse"]
			}
		},
		methods:{
			handleToggle(index){
				this.$emit("handleToggle",index)
			}
		},
		updated(){
			if(!this.scroll){
				this.scroll=new BScroll(this.$refs.tabBar,{scrollX:true})
			}
		}
	}
</script>

<style lang="">
	.wrapper{
		width: 100%;
		height: .88rem;
		background: #f5f5f5;
		position: fixed;
		left: 0;
		top: 0;
	}
	.wrapper ul{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}
	.wrapper ul li,.wrapper ul li a{
		width: 100%;
		height: 100%;
	}
	.wrapper ul li a{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		
	}
	.wrapper ul li a span{
		display: block;
		font-size: .25rem;
	}
</style>
