import {HomeData} from "../../apis/home"
import {SellBanner,SellLaunchList,SellBrandList,SellLaunchYearMonthList,} from "../../apis/sell"
export default {
	async handleHomeData(){
		let data = await HomeData();
		//console.log(data.data);
	},
	async getSellBannre({commit}){
		let data = await SellBanner();
		commit("getSellBannre",data);
		console.log(data);
	},
	async getSellLaunchList({commit}){
		let data = await SellLaunchList();
		commit("getSellLaunchList",data.data);
		console.log(data.data);
	},
	async getSellBrandList({commit}){
		let data = await SellBrandList();
		commit("getSellBrandList",data);
		console.log(data)
	},
	async getSellLaunchYearMonthList({commit}){
		let data = await SellLaunchYearMonthList();
		commit("getSellLaunchYearMonthList",data.data);
		console.log(data.data)
	},
}