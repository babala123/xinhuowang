<template>
	<div class="top">
		<div class="topLeft">
			<i class="iconfont">&#xe603;</i>
			<span>Air Jorden 13</span>
		</div>
		<div class="topRight">
			<i class="iconfont">&#xe60c;</i>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		position: fixed;
		top: 0;
		left: 0;
		padding: .2rem .35rem;
		overflow: hidden;
		padding-right: 0;
		display: flex;
		align-items: center;
		background: #fff;
		z-index: 9;
	}

	.topLeft {
		display: inline-block;
		width: 6.28rem;
		height: .56rem;
		margin-right: .3rem;
		line-height: .56rem;
		text-indent: .3rem;
		background: #e6e6e8;
		border-radius: .2rem;
		font-size: .3rem;
		color: #8a8a8b;

	}

	.topLeft>i {
		width: 100%;
		height: 100%;
		font-size: .3rem;
	}

	.topRight {
		height: .44rem;
		line-height: .44rem;
		width: .44rem;
		vertical-align: top;
	}

	.topRight>i {
		width: 100%;
		height: 100%;
		font-size: .4rem;
		color: #000;
	}
</style>
