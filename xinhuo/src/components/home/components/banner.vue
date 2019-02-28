<template>
	
	<div class="swiper-container banner-container" ref="bannerContainer">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(items,index) in banners">
				<img :src="items.img">
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
				banners: state => state.home.banners
			})
		},
		updated() {
			// console.log(banners)
			if (!this.swiper) {
				this.swiper = new Swiper(this.$refs.bannerContainer, {
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.banner-pagination',
					},
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.banner-container{
		padding-top:1.48rem;
	}
</style>
