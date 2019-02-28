<template>
	<div class="category">
		<ul class="category_item">
			<li >
				<a href="#/newGoods">
					<i class="iconfont">&#xe611;</i>
					<span>新货</span>
				</a>
			</li>

			<li>
				<a href="#/topGoods">
					<i class="iconfont">&#xe611;</i>
					<span>尖货</span>
				</a>
			</li>

			<li>
				<a href="#/hot">
					<i class="iconfont">&#xe611;</i>
					<span>热卖</span>
				</a>
			</li>


			<li>
				<a href="#/secondhand">
					<i class="iconfont">&#xe512;</i>
					<span>二手鞋</span>
				</a>
			</li>



			<li>
				<a href="#/clssify">
					<i class="iconfont">&#xe512;</i>
					<span>全部分类</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped >
	.category {
		width: 100%;
		height: 1.8rem;
		border-bottom: .16rem solid gainsboro;
	}

	.category>.category_item {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content:space-around;
	}
	.category>.category_item>li,.category>.category_item>li>a{
	    width: 100%;
	    height: 100%;
	}
	.category>.category_item>li>a{
	   display: flex;
	   flex-direction: column;
	   justify-content: center;
		align-items: center;
	}
	.category>.category_item >li>a>i{
	     font-size: .52rem
	 }
	
	.category>.category_item>li>a>span{
	     font-size: .28rem;
	 }
	/* .category >li:nth-of-type(5)>a>i{
		font-weight: 700;
	} */
</style>
