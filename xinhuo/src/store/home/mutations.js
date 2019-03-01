export default {
	getSellBannre(state,data){
		state.banner = data.data
	},
	getSellLaunchList(state,data){
		state.onsell = data.list
	},
	getSellBrandList(state,data){
		state.logo = data.data
	},
	getSellLaunchYearMonthList(state,data){
		state.onsellgoods = data.data
	}
}