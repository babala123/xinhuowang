import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home'
import Inform from "@/components/inform/inform";
import Sell from "../components/sell/sell.vue";
import Biggun from "../components/biggun/biggun.vue";
import My from "../components/my/my.vue";
import Onepage from "../components/sell/components/onepage.vue";
import Twopage from "../components/sell/components/twopage.vue";
import Userlist from "../components/biggun/userlist.vue";
import Goods from "../components/sell/goods.vue";
import Err from "../components/err/err.vue";


Vue.use(Router)

export default new Router({
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{

			path: "/home",
			name: "home",
			component: Home,
			meta:{
				flag:true
			}
		},
		{
			path: "/inform",
			name: "inform",
			component: Inform,
			meta:{
				flag:true
			}
		},
		{
			path: "/sell",
			name: "sell",
			component: Sell,
			meta:{
				flag:true
			}
		},
		{
			path: "/goods",
			name: "goods",
			component: Goods,
			meta:{
				flag:false
			}
		},
		{
			path: "/biggun",
			name: "biggun",
			component: Biggun,
			meta:{
				flag:true
			}
		},
		{
			path: "/userlist",
			name: "userlist",
			component: Userlist,
			meta:{
				flag:false
			}
		},
		{
			path: "/my",
			name: "my",
			component: My,
			meta:{
				flag:true
			}
		},
		{
			path: "**", //匹配所有
			component: Err
		}
	]
})
