<template>
	<div id="allShoes">
		<h2>全部鞋履</h2>
		<div class="wrapper">
			<div class="content tabBar" ref="tabBar">
				<mt-navbar v-model="selected">
					<mt-tab-item id="1">全部</mt-tab-item>
					<mt-tab-item id="2">篮球鞋</mt-tab-item>
					<mt-tab-item id="3">潮流鞋</mt-tab-item>
					<mt-tab-item id="4">跑步鞋</mt-tab-item>
					<mt-tab-item id="5">足球鞋</mt-tab-item>
					<mt-tab-item id="6">生活休闲鞋</mt-tab-item>
					<mt-tab-item id="7">其他</mt-tab-item>
				</mt-navbar>
			</div>
		</div>


		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul>
					<li v-for="(item,index) in goods">
						<img :src="item.original_img">
						<p class="name">{{item.goods_name}}</p>
						<p class="price">${{item.shop_price}}</p>
					</li>
				</ul>
				<!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<Basketball-com />
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<ul>
					<li v-for="(item,index) in goods">
						<img :src="item.original_img">
						<p class="name">{{item.goods_name}}</p>
						<p class="price">${{item.shop_price}}</p>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import Vuex from "vuex";
	import Vue from "vue";
	import Basketball from "./basketball"
	import {
		Navbar,
		TabItem
	} from 'mint-ui';
	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	export default {
		mounted() {
			let wrapper = document.querySelector(".wrapper");
			let scroll = new BScroll(wrapper);
			this.scroll = new BScroll(this.$refs.tabBar, {
				scrollX: true,
				// click: true,

			});
			// console.log(this.scroll);
		},

		data() {
			return {
				selected: "nini"
			}
		},
		computed: {
			...Vuex.mapState({
				goods: state => state.home.goods
			})
		},
		components: {
			"Basketball-com": Basketball,
		}
	}
</script>

<style lang="scss">
	#allShoes {
		height: 100%;
		width: 100%;
		background: #fff;

		h2 {
			height: .9rem;
			line-height: .9rem;
			width: 100%;
			color: black;
			text-align: center;
			font-size: .32rem;
			font-weight: 400;
			font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
		}

		.mint-navbar {
			width: 14.0rem;
			height: .6rem;
			margin-left: .33rem;

			.mint-tab-item {
				background: #eee;
				border-radius: .1rem;
				margin-right: .2rem;
				display: block;

				.mint-tab-item-label {
					font-size: .28rem;
				}

			}
		}

		ul {
			width: 100%;
			margin-left: .3rem;
			padding-top: .3rem;

			li {
				float: left;
				width: 3.33rem;
				height: 4.64rem;
				margin-right: .35rem;
				margin-bottom: .35rem;

				img {
					width: 3.33rem;
					height: 3.33rem;
					border: 1px solid gainsboro;
				}

				.name {
					font-size: .3rem;
					margin: .17rem;
					overflow: hidden;
					height: .74rem;
					font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
				}

				.price {
					font-size: .3rem;
					color: red;
					margin: .17rem;
					font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
				}
			}
		}

	}

	// 	mint-navbar .mint-tab-item.is-selected {
	//     color: red;
	// }

	#allShoes .mint-navbar .mint-tab-item.is-selected {
		color: #fff;
		background: red;
		border: 0;
	}
</style>
