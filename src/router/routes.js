import Home from '../pages/Home'
import Search from '../pages/Search'
import ShopCar from '../pages/ShopCar'
import Classify from '../pages/Classify'
import Personal from '../pages/Personal'
import Cart from '../pages/Cart'
import Login from '../pages/Login/index.vue'
import emailLogin from '../pages/Login/emailLogin.vue'
import phoneLogin from '../pages/Login/phoneLogin.vue'
import Right from '../pages/Classify/Right'
import Season from '../pages/Classify/Season'

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
		path:'/shopCar/recommend',
		component: ShopCar
	},
	{
		path:'/classify',
		component: Classify,
		children:[
			{
				path:'/classify/recommend',
				component:Right
			},
			{
				path:'/classify/season',
				component:Season
			},
			{
				path:'/classify/faddish',
				component:Season
			},
			{
				path:'/classify/new',
				component:Season
			},
			{
				path:'/classify',
				redirect: '/classify/recommend'
			}
		]
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