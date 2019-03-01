<template>
	<div class="home-banner">home</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{

			}
		},
		created(){
			this.handleHomeData();
		},
		methods:{
			...Vuex.mapActions({
				handleHomeData:"home/handleHomeData"
			})
		}
		
	}
</script>

<style>
</style>
