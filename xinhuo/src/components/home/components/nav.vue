<template>
	<div class="tapbar">
		
		<ul class="tapbar_nav">
			<li v-for="(item,index) in tarBar" @click="handleTabs(index)">
					<span :class="activeIndex == index ? 'active': '' ">{{item}}</span>
					<div :class="activeIndex == index ? 'active1': '' "></div>
					
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tarBar:[
					
						"分类",
						"首页",
						"鞋履",
				],
				activeIndex:0,
			}
		},
		methods:{
			handleTabs(index){
				this.$emit("handleToggle",index)
				this.activeIndex = index;
			}
		}
	}
</script>

<style scoped >
	.tapbar{
		width: 100%;
		height: .84rem;
		position: fixed;
		left: 0;
		top: .88rem;
		border-bottom: .02rem solid #b6b6b6;
		border-top:  .02rem solid #b6b6b6;
		background: #fff;
		z-index: 9;
	} 
	.tapbar>.tapbar_nav{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.tapbar>.tapbar_nav>li>.active1{
		width:.8rem;
		height: 2px;
		background: red;
		margin-top: .05rem;
		
	}
	.tapbar>.tapbar_nav>li>.active{
		color: red;
	}
	
	.tapbar>.tapbar_nav>li>span{
		font-size: .38rem;
		/* color:orangered ; */
	}
	
</style>
