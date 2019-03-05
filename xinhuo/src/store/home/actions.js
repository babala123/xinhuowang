<<<<<<< HEAD
<<<<<<< HEAD
import {informData,allData} from "../../apis/inform"

export default {
	async handleinformData({commit}){
		let data = await informData();
		commit("handleinformData",data);
		console.log(data.data);
	},
	async handleallData({commit}){
		let data = await allData();
		commit("handleallData",data.data);
		console.log(data);
=======
import {HomeData,GoodList} from "../../apis/home"
=======
import {HomeData,GoodList,GoodType,CategoryList,Search} from "../../apis/home"
>>>>>>> chenyu
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
<<<<<<< HEAD
>>>>>>> chenyu
=======
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
>>>>>>> chenyu
	}
}