// 引入接口api
import {reqSearchlist} from '../../api'
// 引入mutatinon-type
import {SEARCH_LIST} from '../mutation-type.js'

const state ={
	list:[]
}

const mutations = {
	[SEARCH_LIST](state,list){
		state.list = list
	}
}

const actions = {
	async	getSearchList({commit}){
		const result = await reqSearchlist('search')
		const list = result
		commit(SEARCH_LIST,list)
	}
}

const getters  = {

}

export default {
	state,
	mutations,
	actions,
	getters
}