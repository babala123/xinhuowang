<template>
	<div class="navlist">
		<div class="wrapper navbox" ref="homeWrapper">
			<ul class="content navss">
				<li class="xxs">全部</li>
				<li class="xxs" v-for="item in listsc">
					{{item.cate}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	export default {
		computed: {
			...Vuex.mapState({
				listsc: state => state.home.listsc
			})
		},
		
		updated() {
			if (!this.scrollX) {
				this.scrollX = new BScroll(this.$refs.homeWrapper, {
					scrollX: true,
				})

			}
		}
	}
</script>

<style scoped>
	.navlist {
		margin-top: .8rem;
		height: .8rem;
		width: 100%;
		background: white;
		overflow: hidden;
	}

	.navbox {
		margin-left: .36rem;
		width: 100%;
		height: .8rem;
	}

	.navss {
		
		display: flex;
		justify-content: space-between;
		width: -webkit-max-content;
		height: .8rem;
	}

	.xxs {
		width: -webkit-max-content;
		line-height: .8rem;
		font-size: .3rem;
		text-align: center;
		margin-right: .4rem;
	}
</style>
