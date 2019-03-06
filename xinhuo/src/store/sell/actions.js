import {SellBanner,SellLaunchList,SellBrandList,SellLaunchYearMonthList,SelledLaunchList,
Sellgoods,Sellgoodslike} from "../../apis/sell"
import {SellBiggun} from "../../apis/biggun"
export default {
	async getSellBannre({commit}){
		let data = await SellBanner();
		commit("getSellBannre",data);
		//console.log(data);
	},
	async getSellLaunchList({commit}){
		let data = await SellLaunchList({type:0});
		commit("getSellLaunchList",data.data);
		//console.log(data.data);
	},
	async getSelledLaunchList({commit}){
		let data = await SelledLaunchList({type:1});
		commit("getSelledLaunchList",data.data);
		//console.log(data)
	},
	async getSellBrandList({commit}){
		let data = await SellBrandList();
		commit("getSellBrandList",data);
		//console.log(data)
	},
	async getSellLaunchYearMonthList({commit}){
		let data = await SellLaunchYearMonthList();
		commit("getSellLaunchYearMonthList",data.data);
		//console.log(data.data)
	},
	async getSellBiggun({commit}){
		let data = await SellBiggun();
		commit("getSellBiggun",data.data.list);
		// console.log(data.data.list)
	},
	async getSellgoodslike({commit}){
		let data = await Sellgoodslike();
		commit("getSellgoodslike",data)
	}
}