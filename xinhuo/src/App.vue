<template>
  <div id="app">
    <router-view/>
		<Footer-com v-show = "$route.meta.flag"></Footer-com>
  </div>
</template>

<script>
import Footer from "./components/common/footer";
export default {
	
  components:{
		"Footer-com":Footer
	}
}
</script>

<style>
#app{
	height: 100%;
	width: 100%;
}
</style>
