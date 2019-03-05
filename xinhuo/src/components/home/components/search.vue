<template>
	<div class="search">
		<Ngn-com />
		<div class="first">
			<img src="https://images.xinhuo.com/5ae1a684d8d37.">
		</div>
		<div class="two">
			<Basketball/>
		</div>
	</div>
</template>

<script>
	import Ngn from "./ngn"
	import Basketball from "./basketball"
	export default {
		components: {
			"Ngn-com": Ngn,
			"Basketball": Basketball,
			


		}
	}
</script>

<style scoped lang="scss">
	.first {
		position: absolute;
		top: 1.84rem;
		left: 0;
	}
	.two{
		position: absolute;
		top:5.0rem;
		left: 0;
	}
</style>
