<template>
	<div class="homeWrapper">
		<Banner />
		<Category />
		<NewGoodShop />
		<HotShop />
		<AllShoes />
	</div>
</template>

<script>
	import Banner from "./banner"
	import Vuex from "vuex"
	import Category from "./category"
	import NewGoodShop from "./newGoodShop"
	import HotShop from "./hotShop"
	import AllShoes from "./allShoes"
	
	
	export default {
		components: {
			"Banner": Banner,
			"Category": Category,
			"NewGoodShop": NewGoodShop,
			"HotShop": HotShop,
			"AllShoes": AllShoes,
		},
		created() {
			// this.handleHomeData();
			this.handleGoodList();
		},
		methods: {
			...Vuex.mapActions({
				// handleHomeData: "home/handleHomeData",
				handleGoodList: "home/handleGoodList"
			}),
		}
	}
</script>

<style>
</style>
