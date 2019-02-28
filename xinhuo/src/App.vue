<template>
  <div id="app">
    <router-view/>
		<Footer-com></Footer-com>
		

  </div>
</template>

<script>
import Footer from "./components/common/footer";

// import Header from "./components/inform/header";
export default {
  components:{
		"Footer-com":Footer,
		// "Inform-com":Inform
		// "Header-com":Header,
	}
}
</script>

<style>
#app{
	height: 100%;
	width: 100%;
}
</style>
