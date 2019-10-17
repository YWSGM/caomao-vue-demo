import Home from '../pages/Home'
import Search from '../pages/Search'
import Classify from '../pages/Classify'
import Personal from '../pages/Personal'
import Cart from '../pages/Cart'
import Login from '../pages/Login/index.vue'
import Detail from '../pages/Detail'
import emailLogin from '../pages/Login/emailLogin.vue'
import phoneLogin from '../pages/Login/phoneLogin.vue'
import Right from '../pages/Classify/Right'
import Season from '../pages/Classify/Season'
import Faddish from '../pages/Classify/Faddish'
import HeaderSearch from '../pages/HeardSearch'

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
		path:'/search',
		component: Search
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
				component:Faddish
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
		path:'/detail',
		component: Detail
	},
	{
		path:'/cart',
		component: Cart
	},
	{
		path:'/homesearch',
		component: HeaderSearch
	},
	{
		path:'/',
		redirect: '/home'
	},
]