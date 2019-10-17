// 引入接口api
import {reqSearchlist} from '../../api'
// 引入mutatinon-type
import {SEARCH_LIST} from '../mutation-type'

const state ={
	list:{}
}

const muations = {
	[SEARCH_LIST](state,list){
		state.list = list
	}
}

const actions = {
	async	getSearchList({state,commit}){
		// const {} = state
		const reuslt = await reqSearchlist()
		// commit(SEARCH_LIST)
		console.log(reuslt);
	}
}

const getters  = {

}

export default {
	state,
	muations,
	actions,
	getters
}