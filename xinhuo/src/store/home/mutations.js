export default {
<<<<<<< HEAD
	handleinformData(state,data){
		state.banner=data.data
	},
	handleallData(state,data){
		state.all=data.list
=======
	 handleHomeData(state,data){
	    state.banners = data;
		// console.log(state.banners)
	   
	},
	handleGoodList(state,data){
		state.goods = data;
		 // console.log(state.goods)
>>>>>>> chenyu
	}
}