export default {
	handleinformData(state,data){
		state.banner=data.data
	},
	handleallData(state,data){
		state.all=data.list
	}
}