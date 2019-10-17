import Home from '../pages/Home'
import Search from '../pages/Search'
import Classify from '../pages/Classify'
import Personal from '../pages/Personal'
import Cart from '../pages/Cart'
import Login from '../pages/Login/index.vue'
import emailLogin from '../pages/Login/emailLogin.vue'
import phoneLogin from '../pages/Login/phoneLogin.vue'

export default [
	{
		path:'/home',
		component: Home
	},
	{
		path:'/login',
		component: Login
	},
	{
		path:'/phoneLogin',
		component: phoneLogin
	},
	{
		path:'/emailLogin',
		component: emailLogin
	},
	{
		path:'/search',
		component: Search
	},
	{
		path:'/classify',
		component: Classify
	},
	{
		path:'/personal',
		component: Personal
	},
	{
		path:'/cart',
		component: Cart
	},
	{
		path:'/',
		redirect: '/home'
	},
]