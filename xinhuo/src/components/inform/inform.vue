<template>
	<div id="app-in">
		<Header-com @handleToggle="toggle" />
		<Lswiper-com/>
		<Component :is="com"></Component>
		<!-- aaaa -->
		<router-view />
		<!-- <Header-com></Header-com>
		<All-com></All-com>
		<Jordan-com></Jordan-com>
		<Nike-com></Nike-com>
		<Adidas-com></Adidas-com>
		<VANS-com></VANS-com>
		<Converse-com></Converse-com> -->
		<!-- <Swiper-com></Swiper-com> -->
		<!-- <Body-com></Body-com> -->
	</div>
</template>

<script>
	import Vuex from "vuex";
	import Lswiper from "./lswiper";
	import Header from "./header";
	import All from "./all";
	import Jordan from "./Jordan";
	import Nike from "./Nike";
	import Adidas from "./Adidas";
	import VANS from "./VANS";
	import Converse from "./Converse";
	// 	
	// 	import Swiper from "./inform/swiper";
	// 	import Body from "./inform/body";
	export default {
		components: {
			"Header-com": Header,
			"Lswiper-com": Lswiper,
			"All-com": All,
			"Jordan-com": Jordan,
			"Nike-com": Nike,
			"Adidas-com": Adidas,
			"VANS-com": VANS,
			"Converse-com": Converse
		},
		data() {
			return {
				com: "All-com"
			}
		},
		created(){
			this.handleinformData();
			this.handleallData();
		},
		computed:{
			...Vuex.mapState({
				state:store=>state.home
			}),

		},
		methods: {
			toggle(params) {
				switch (params) {
					case 0:
						this.com = "All-com";
						break;
					case 1:
						this.com = "Jordan-com";
						break;
					case 2:
						this.com = "Nike-com";
						break;
					case 3:
						this.com = "Adidas-com";
						break;
					case 4:
						this.com = "VANS-com";
						break;
					case 5:
						this.com = "Converse-com";
						break;
					default:
						this.com = "Home-com";
				}
			},
			...Vuex.mapActions({
				handleinformData:"home/handleinformData"
			}),
			...Vuex.mapActions({
				handleallData:"home/handleallData"
			})
		}
	}
</script>

<style>
	#app-in {
		width: 100%;
		height: 100%;
	}
</style>
