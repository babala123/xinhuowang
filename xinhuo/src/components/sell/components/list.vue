<template>
	<div class="list">
		<div class="logo" @click = "listlogo()">
			<p>品牌</p>
			<div v-show="flag">
				<img src="../../../assets/bottom.jpg">
			</div>
			<div v-show="!flag">
				<img src="../../../assets/top.jpg">
			</div>
		</div>
		<div class="data" @click = "listdata()">
			<p>日期</p>
			<div v-show="alt">
				<img src="../../../assets/bottom.jpg">
			</div>
			<div v-show="!alt">
				<img src="../../../assets/top.jpg">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
		data(){
			return {
				flag:true,
				alt:true
			}
		},
		methods:{
			listlogo(){
				this.flag = !this.flag;
			},
			listdata(){
				this.alt = !this.alt;
			}
		}
	}
</script>

<style scoped>
	.list{
		position: fixed;
		top: 1rem;
		left: 0;
		background: white;
		height: .8rem;
		width:100% ;
		display: flex;
		justify-content: space-around;
		z-index: 5;
	}
	.list>.logo,.list>.data{
		width: 50%;
		height: 100%;
		display: flex;
		padding-left: 20%;
		align-items: center;
	}
	.list>.logo>p,.list>.data>p{
		font-size: .3rem;
		color: black;
		font-family:"微软雅黑"
	}
	.list>.logo>div>img,.list>.data>div>img{
		width: .2rem;
		height: .2rem;
	}
</style>
