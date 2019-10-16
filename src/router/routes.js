import Home from '../pages/Home'
import Search from '../pages/Search'
import ShopCar from '../pages/ShopCar'
import Classify from '../pages/Classify'
import Personal from '../pages/Personal'
import Cart from '../pages/Cart'
export default [
	{
		path:'/home',
		component: Home
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
	{
		path:'/cart',
		component: Cart
	},
	{
		path:'/',
		redirect: '/home'
	},
]