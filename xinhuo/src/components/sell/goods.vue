<template>
	<div class="goods">
		<div class="nav">
			<ul>
				<li class="iconfont" @click="togoback()">&#xe6c3;</li>
				<li class="iconfont">
					<router-link to="/home">
						&#xe63d;
					</router-link>
				</li>
			</ul>
		</div>
		<div class="swiper-container banner" ref="autoimg">
			<div class="swiper-wrapper bannerbox">
				<div class="swiper-slide bannerimg" v-for="(item,index) in imgs">
					<img :src="item.Img">
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination banner-pagination"></div>
		</div>
		<div class="launch-info">
			<p class="launch-title">Air Jordan 4 NRG "White Pizzeria"</p>
			<p class="price">￥<span data-v-878ee9e8="">190.00</span></p>
			<div class="time grey"><span data-v-878ee9e8=""></span>正式:2019年4月1日(星期一)</div>
			<div class="sn grey"><span data-v-878ee9e8=""></span>货号: AQ3816-063</div>
		</div>
		<div class="pagelist">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="用户管理" name="first">
					<div  v-for ="(item,index) in imgs">
						<img :src="item.Img">
					</div>
				</el-tab-pane>
				<el-tab-pane label="配置管理" name="second">
					<div>
						<img src="../../assets/yanyu.png">
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>



	</div>
</template>

<script>
	import Vuex from "vuex";
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	export default {
		data() {
			return {
				 activeName: 'first',
				imgs: [
					{
						Img: "https://images.xinhuo.com/5c0e24e74e066.jpg"
					},
					{
						Img: "https://images.xinhuo.com/5c0e24e77f07e.jpg"
					},
					{
						Img: "https://images.xinhuo.com/5c0e24e9aa038.jpg"
					}
				]
			}
		},
		created() {
			this.getSellgoodslike()
		},
		methods: {
			...Vuex.mapActions({
				getSellgoodslike: "sell/getSellgoodslike"
			}),
			togoback() {
				this.$router.back();
			},
			handleClick(tab, event) {}
		},
		watch: {
			...Vuex.mapState({
				goodslick: state => state.sell.goodslick,
				state: state => state.sell
			}),
		},
		mounted() {
			if (!this.swiper) {
				this.swiper = new Swiper(this.$refs.autoimg, {
					autoplay: {
						disableOnInteraction: false
					},

					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
						paginationType: 'custom',
					},
				})
			}
		}
	}
</script>

<style scoped>
	.goods {
		height: 100%;
		width: 100%;
		background: #F5F5F5;
	}

	.goods>.nav {
		width: 100%;
		height: .8rem;
		background: white;
		border-bottom: .02rem solid #dcdcdc;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
	}

	.goods>.nav>ul {
		display: flex;
		justify-content: space-between;
	}

	.goods>.nav>ul>li {
		margin: .2rem .35rem 0 .35rem;
		font-size: .32rem;
		font-weight: 600;
	}

	.goods>.nav>ul>li:nth-of-type(2) {
		font-size: .4rem;
		margin: .14rem .35rem 0 .35rem;
	}

	.goods>.banner {
		margin-top: .8rem;
		width: 100%;
		height: 5rem;
	}

	.goods>.banner>.bannerbox>.bannerimg {
		width: 100%;
		height: 5rem;
		position: relative
	}

	.goods>.banner>.bannerbox>.bannerimg>img {
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	
	.launch-info{
		padding: .3rem;
		background: #fff;
		margin-bottom: .25rem;
	}
	
	.launch-info>.launch-title{
		font-size: .35rem;
		color: #333;
	}
	
	.launch-info>.price {
		margin-bottom: .3rem;
		margin-top: .25rem;
		color: #fe0000;
		font-size: .35rem;
	}
	
	.launch-info>.grey {
		width:100%;
		height: .8rem;
		background: #f5f5f5;
		line-height: .8rem;
		color: #666;
		font-size: .3rem;
		margin-bottom: .25rem;
	}
	
	.launch-info>.grey>span {
		background: #000;
		margin: .3rem;
		display: inline-block;
		width: .1rem;
		height: .1rem;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	
	
	
	
	
	
	
	
	
</style>
