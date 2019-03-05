<template>
	<div class="newGoods">
		<Ngn-com />
		<Search/>
	</div>
</template>

<script>
	import Ngn from "./ngn"
	import Search from "./search"

	export default {
		components: {
			"Ngn-com": Ngn,
			"Search": Search,


		}
	}
</script>

<style scoped lang="scss">
	.newGoods{
		width: 100%;
		height: 100%;
	}
</style>
