const Home = ()=>import ('../pages/Home')
const Search = ()=>import ('../pages/Search')
const Classify = ()=>import ('../pages/Classify')
const Personal = ()=>import ('../pages/Personal')
const Cart = ()=>import ('../pages/Cart')
const Login = ()=>import ('../pages/Login/index.vue')
const Detail = ()=>import ('../pages/Detail')
const Right = ()=>import ('../pages/Classify/Right')
const Season = ()=>import ('../pages/Classify/Season')
const Faddish = ()=>import ('../pages/Classify/Faddish')
const HeaderSearch = ()=>import ('../pages/HeardSearch')
const Purchase = ()=>import ('../pages/Purchase/Purchase.vue')
const Content = ()=>import ('../pages/Search/content')
const TopList = ()=>import ('../pages/Toplist')
const Seadetail = ()=>import ('../pages/Seadetail/Seadetail.vue')

export default [{
		path: '/home',
		component: Home
	},
	{
		path:'/toplist',
		component:TopList
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/search',
		component: Search,
		children:[
			{
				path:'/search/searchrecommend',
				component:Content
			},
			{
				path:'/search/searchgoodthing',
				component:Content
			},
			{
				path:'/search/searchexchange',
				component:Content
			},
			{
				path:'/search/searchexchoose',
				component:Content
			},
			{
				path:'/search/searchunboxing',
				component:Content
			}
		]
	},
	{
		path: '/seadetail',
		component: Seadetail
	},
	{
		path: '/classify',
		component: Classify,
		children: [{
				path: '/classify/recommend',
				component: Right
			},
			{
				path: '/classify/season',
				component: Season
			},
			{
				path: '/classify/faddish',
				component: Faddish
			},
			{
				path: '/classify/new',
				component: Season
			},
			{
				path: '/classify/living',
				component: Season
			},
			{
				path: '/classify/costume',
				component: Faddish
			},
			{
				path: '/classify/food',
				component: Season
			},
			{
				path: '/classify/person',
				component: Faddish
			},
			{
				path: '/classify/son',
				component: Faddish
			},
			{
				path: '/classify/run',
				component: Faddish
			},
			{
				path: '/classify/appliances',
				component: Faddish
			},
			{
				path: '/classify/summer',
				component: Faddish
			},
			{
				path: '/classify',
				redirect: '/classify/recommend'
			},
		]
	},
	{
		path: '/personal',
		component: Personal
	},
	{
		path: '/detail',
		component: Detail,
	},
	{
		path: '/purchase',
		component: Purchase
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/homesearch',
		component: HeaderSearch
	},
	{
		path: '/',
		redirect: '/home'
	},
]