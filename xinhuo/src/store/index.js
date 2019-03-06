import Vue from "vue";
import Vuex from "vuex";
import sell from "./sell";
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};

const store = new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
	modules:{
		sell
	}
})



export default store;