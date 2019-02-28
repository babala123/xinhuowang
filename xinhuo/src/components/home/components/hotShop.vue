<template>
	<div class="good_box">
		<div class="title">尖货推荐</div>
		<div class="content_box">
			<a href="#/newGoods">
				<img src="https://images.xinhuo.com/5971c56e4cf0b.png">
			</a>
			<div class="tabBar  wrapper" ref="tabBar">
				<div class="content">

					<ul>
						<li v-for="(item,index) in goods">
							<img :src="item.original_img">
							<p class="text">{{item.goods_name}}</p>
							<p class="price">${{item.shop_price}}</p>
						</li>
					</ul>


				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import BScroll from 'better-scroll';
	export default {
		computed: {
			...Vuex.mapState({
				goods: state => state.home.goods
			})
		},
		// 		mounted() {
		// 			let wrapper = document.querySelector(".wrapper");
		// 			let scroll = new BScroll(wrapper);
		// 			this.scroll = new BScroll(this.$refs.tabBar, {
		// 				scrollX: true,
		// 				// click: true,
		// 			
		// 			});
		// 			console.log(this.scroll);
		// 		}
		updated() {
			if (!this.scroll) {
				this.scroll = new BScroll(this.$refs.tabBar, {
					scrollX: true
				})

			}
		},
	}
</script>

<style scoped lang="scss">
	.good_box {
		width: 100%;

		.title {
			width: 100%;
			height: .88rem;
			line-height: .88rem;
			text-align: center;
			font-size: .32rem;
			font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
			// border-bottom: .16rem solid gainsboro;
		}

		.content {
			height: 100%;
			width: max-content;

			ul {

				display: flex;
				justify-content: space-around;

				li {
					width: 2rem;
					height: 4rem;
					padding: .2rem;

					img {
						width: 2rem;
						height: 2rem;
					}

					.text {
						font-size: .24rem;
						margin-bottom: .2rem;
						text-overflow: hidden;
						height: .76rem;

					}

					.price {
						color: red;
						font-size: .3rem;
					}
				}
			}

		}

	}
</style>
