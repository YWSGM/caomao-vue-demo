import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入Header
import Header from './components/Header/Header.vue'
Vue.config.productionTip = false

// 注册成全局组件(公共组件)
Vue.component(Header.name, Header)


new Vue({
	el:'#app',
	components: {
		App
	},
	template:'<App/>',
	router
})