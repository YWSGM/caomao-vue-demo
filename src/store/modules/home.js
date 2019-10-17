import{RECEIVE_HOMELIST}from '../mutation-type'
import {reqHomelist} from '../../api'

const state = {
  homelist:[]
}
const mutations = {
  [RECEIVE_HOMELIST](state,homelist){
    state.homelist =homelist
  }
}
const actions = {
  async getHomelist({commit}){
    const result = await reqHomelist('homelist')
    console.log(result)
    
    commit(RECEIVE_HOMELIST,result)
  }
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}