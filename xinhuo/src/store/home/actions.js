import {HomeData,GoodList} from "../../apis/home"
export default {
	async handleHomeData({commit}){
		let data = await HomeData();
		// console.log(data.data)
		commit("handleHomeData",data.data);
	},
	async handleGoodList({commit}){
		let data = await GoodList();
		//console.log(data.data.goods)
		commit("handleGoodList",data.data.goods);
	}
}