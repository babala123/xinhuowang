export default {
	getSellBannre(state,data){
		state.sellbanner = data.data
	},
	getSellLaunchList(state,data){
		state.onsell = data.list
	},
	
	getSelledLaunchList(state,data){
		state.twosell = data.list
	},
	getSellBrandList(state,data){
		state.logo = data.data
	},
	getSellLaunchYearMonthList(state,data){
		state.onsellgoods = data.data
	},
	getSellBiggun(state,data){
		state.username = data
		//console.log(state.username[0].list)
	}
}