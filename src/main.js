import Vue from 'vue';
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	router
})