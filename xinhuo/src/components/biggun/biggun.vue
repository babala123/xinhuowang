<template>
	<div class="biggun">
		<Header-com></Header-com>
		<div class="wrapper navbox" ref="bigWrapper">
			<div class="content">
				<Username-com></Username-com>
			</div>
		</div>

	</div>
</template>

<script>
	import Vuex from "vuex";
	import Header from "./components/header";
	import Username from "./components/username";
	import BScroll from "better-scroll";
	export default {
		components: {
			"Header-com": Header,
			"Username-com": Username,
		},
		created() {
			this.getSellBiggun();
		},
		computed: {
			...Vuex.mapState({
				state: state => state.sell
			}),
		},
		watch: {
			state: {
				handler() {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.bigWrapper,{
							click:true,
							tap:true,
						});
					}
				},
				deep: true
			}
		},
		methods: {
			...Vuex.mapActions({
				getSellBiggun: "sell/getSellBiggun"
			})
		},
	}
</script>

<style scoped>
	.biggun,.navbox {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
</style>
