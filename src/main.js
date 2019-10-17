import Vue from 'vue'
import router from './router'
// 引入store
import store from './store'

import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

import App from './App.vue'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入Header
import Header from './components/Header/Header.vue'
// 引入Header
import Footer from './components/Footer/Footer.vue'
Vue.config.productionTip = false

// 注册成全局组件(公共组件)
Vue.component(Header.name, Header)
// 注册成全局组件(公共组件)
Vue.component(Footer.name, Footer)

new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	router,
	store
})