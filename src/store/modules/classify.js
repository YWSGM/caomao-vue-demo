// 引入接口api
import {reqClassfiy} from '../../api'
// 引入mutatinon-type
import {LASSIFY_LIST} from '../mutation-type.js'

const state ={
	lists:[]
}

const mutations = {
	[LASSIFY_LIST](state,lists){
		state.lists = lists
	}
}

const actions = {
	async	getClassify({commit}){
		const result = await reqClassfiy('classify')
		const lists = result
		commit(LASSIFY_LIST,lists)
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