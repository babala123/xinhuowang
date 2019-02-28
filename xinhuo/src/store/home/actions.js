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
>>>>>>> chenyu
	}
}