import {HomeData,GoodList,GoodType,CategoryList,Search} from "../../apis/home"
export default {
	async handleHomeData({commit}){
		let data = await HomeData();
		// console.log(data.data)
		commit("handleHomeData",data.data);
	},
	async handleGoodList({commit},params){
		// console.log(params)
		let data = await GoodList(params);
		// console.log(data.data.goods)
		commit("handleGoodList",data.data.goods);
	},
	async handleGoodType({commit}){
		let data = await GoodType();
		// console.log(data.data)
		
		commit("handleGoodType",data.data);
	},
	async handleCategoryList({commit}){
		let data = await CategoryList();
		// console.log(data.data)
		commit("handleCategoryList",data.data)
	},
	async handleSearch({commit},params){
		// console.log(params)
		let data = await Search();
		console.log(data.data)
	}
}