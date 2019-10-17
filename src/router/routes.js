import Home from '../pages/Home'
import Search from '../pages/Search'
import ShopCar from '../pages/ShopCar'
import Classify from '../pages/Classify'
import Personal from '../pages/Personal'
import Login from '../pages/Login/index.vue'
// import Detail from '../pages/Detail'

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
		path:'/shopCar',
		component: ShopCar
	},
	{
		path:'/classify',
		component: Classify
	},
	{
		path:'/personal',
		component: Personal
	},
	// {
	// 	path:'/detail',
	// 	component: Detail
	// },
	{
		path:'/',
		redirect: '/home'
	},
]