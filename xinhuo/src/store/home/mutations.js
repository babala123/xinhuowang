export default {
	 handleHomeData(state,data){
	    state.banners = data;
		// console.log(state.banners)
	   
	},
	handleGoodList(state,data){
		state.goods = data;
		 // console.log(state.goods)
	}
}