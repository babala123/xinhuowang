export default {
	 handleHomeData(state,data){
	    state.banners = data;
		// console.log(state.banners)
	   
	},
	handleGoodList(state,params){
		state.goods = [...state.goods,...params];
		state.page++;
		 // console.log(state.goods)
	},
	 handleGoodType(state,data){
	    state.type = data;
		//删除最后一条数据
		state.type.pop();
		// console.log(state.type)
	   
	},
	handleCategoryList(state,data){
		state.list = data;
		state.childOne = data[0].child;
		state.childTwo = data[1].child;
		state.childThree= data[2].child;
		state.childFour= data[3].child;
		state.childFive= data[4].child;
		state.childSix= data[5].child;
		state.childSeven= data[6].child;
		// console.log(state.child);
		
	}
}