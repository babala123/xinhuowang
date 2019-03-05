<template>
	<div class="newGoodsNav">
			<div class="search-head">
				<router-link to="/home">
					<p>
						< </p>
				</router-link>
				 <p> 新货到店</p>
				 <router-link to="/shoppingCart">
					<i class="iconfont">&#xe60c;</i>
				</router-link>
			</div>
			<div class="search-nav">
				<ul>
					<router-link to="/search">
						<li class="active">推荐</li>
					</router-link>
					
					|
					<li>价格</li>
				</ul>
			</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	.newGoodsNav {
		border-bottom: 1px solid #b6b6b6;
		height: 1.82rem;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: #fff;
		z-index: 13;
		.search-head {
			height: .8rem;
			line-height: .8rem;
			display: flex;
			justify-content: space-between;
			margin: 0 .3rem;


			p {
				display: block;
				font-size: .42rem;
				text-align: center;
				font-family: “Helvetica Neue”, Helvetica, STHeiTi, Arial, sans-serif;
			}

			i {
				font-size: .44rem
			}
		}

		.search-nav {
			width: 100%;
			height: .44rem;
			margin: .3rem 0;

			ul {
				width: 100%;
				height: .4rem;
				display: flex;
				justify-content: center;
				font-size: .44rem;
				align-items: center;

				li {
					width: 3.6rem;
					height: .43rem;
					text-align: center;
					font-size: .32rem;
					border-right: .03rem solid #b6b6b6;
				}

				.active {
					color: red;
				}

				li:last-child {
					border: 0;
				}
			}
		}

	}
</style>