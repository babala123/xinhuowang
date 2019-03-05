import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home'
import Inform from "@/components/inform/inform";
import Sell from "../components/sell/sell.vue";
import Biggun from "../components/biggun/biggun.vue"
import My from "../components/my/my.vue"
import Error from "../components/err/err.vue"
import Hot from "../components/home/components/hot.vue"
import TopGoods from "../components/home/components/topGoods"
import NewGoods from "../components/home/components/newGoods.vue"
import Secondhand from "../components/home/components/secondhand.vue"
import ShoppingCart from "../components/home/components/ shoppingCart"
import Search from "../components/home/components/search"
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{

			path: "/home",
			name: "home",
			component: Home
		},
		{
      path:"/inform",
			name: "inform",
      component:Inform
    },
		{
      path:"/sell",
			name:"sell",
      component:Sell
    },
		{
			path:"/biggun",
			name:"biggun",
			component:Biggun
		},
		{
			path:"/my",
			name:"my",
			component:My
		},
		{
			path:"/hot",
			name:"hot",
			component:Hot
		},
		{
			path:"/topGoods",
			name:"topGoods",
			component:TopGoods
		},
		{
			path:"/newGoods",
			name:"newGoods",
			component:NewGoods
		},
		{
			path:"/secondhand",
			name:"secondhand",
			component:Secondhand
		},
		
		{
			path:"/shoppingCart",
			name:"shoppingCart",
			component:ShoppingCart
		},
		{
			path:"/search",
			name:"search",
			component:Search
		},
		
		{
      path:"**",//匹配所有
      component:Error
    }
	]
})
