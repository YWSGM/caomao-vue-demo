// 引入接口api
// 引入mutatinon-type
import {RECEIVE_SELECTGOOD} from '../mutation-type.js'

const state ={
  selectGood:{}
}

const mutations = {
	[RECEIVE_SELECTGOOD](state,good){
    state.selectGood = good
  }
}

const actions = {

}

const getters  = {

}

export default {
	state,
	mutations,
	actions,
	getters
}