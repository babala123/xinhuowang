<template>
	<div class="basketball">
		<ul>
			<li v-for="(item,index) in goods">
				<img :src="item.original_img">
				<p class="name">{{item.goods_name}}</p>
				<p class="price">${{item.shop_price}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from "vue";
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				goods: state => state.home.goods,
				
			})
		},
		updated() {
			// console.log(goods)
		}
	}
</script>

<style scoped lang="scss">
	.basketball {
		width: 100%;
		height: 100%;

		ul {
			width: 100%;
			// margin: .1rem;
			background: red;
// 			padding-top: .3rem;

// 
			li {
				float: left;
				width: 3.73rem;
				height: 4.99rem;
				border: 0.1rem solid whitesmoke;
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
</style>
