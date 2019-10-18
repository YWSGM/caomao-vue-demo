import{RECEIVE_TOPLISTGOODS}from '../mutation-type'
import {reqGood} from '../../api'

const state = {
  toplistgood:[],
}

const mutations = {
  [RECEIVE_TOPLISTGOODS](state,toplistgood){
    state.toplistgood =toplistgood
  }
}
const actions = {
  async gettoplistgood({commit}){
    const result = await reqGood('good')
    commit(RECEIVE_TOPLISTGOODS,result)
  }
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}