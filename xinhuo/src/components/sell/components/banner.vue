<template>
	<div class="swiper-container banner" ref="bannerAuto">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in banner">
				<img :src="item.img">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination banner-pagination"></div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				banner: state => state.sell.sellbanner,
			})
		},
		updated() {
			if (!this.swiper) {
				this.swiper = new Swiper(this.$refs.bannerAuto, {
					autoplay: {
						disableOnInteraction: true
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
	.banner {
		margin-top: 1.8rem;
		width: 100%;
		height: 3rem;
		position: relative;
	}

	.banner>.banner-pagination {
		width: 100%;
		height: .3rem;
		position: absolute;
		bottom: .3rem;
		left: 0;
		z-index: 5;
	}
</style>
