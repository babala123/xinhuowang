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
	}
}