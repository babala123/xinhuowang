// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/js/flexble"
import store from "./store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(ElementUI);
Vue.use(MintUI);

Vue.config.productionTip = true

// axios.interceptors.request.use((config)=>{
// 	if(config.method == "get"){
// 		config.params = config.data
// 	}else if(config.method == "post"){
// 		config.data = qs.stringify(config.data)
// 	}
// 	
// 	return config
// })
// 
// 
// axios.interceptors.response.use((res)=>{
// 	if(res.status == 200){
// 		
// 		return res.data.data
// 	}
// 	
// 	return res
// })
// 
// 
// 
// 
// 
// Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
