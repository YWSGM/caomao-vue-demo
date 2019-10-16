import Vue from 'vue'
import routes from './routes.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
	mode:'history',
	routes
})