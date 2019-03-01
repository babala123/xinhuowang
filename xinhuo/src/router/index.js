import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home'
import Inform from "@/components/inform/inform";
import Sell from "../components/sell/sell.vue";
import Biggun from "../components/biggun/biggun.vue";
import My from "../components/my/my.vue";
import Onepage from "../components/sell/components/onepage.vue";
import Twopage from "../components/sell/components/twopage.vue";
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
			component: Home
		},
		{
			path: "/inform",
			name: "inform",
			component: Inform
		},
		{
			path: "/sell",
			name: "sell",
			component: Sell,
		},
		{
			path: "/biggun",
			name: "biggun",
			component: Biggun
		},
		{
			path: "/my",
			name: "my",
			component: My
		},
		{
			path: "**", //匹配所有
			component: Err
		}
	]
})
