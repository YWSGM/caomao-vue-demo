import{RECEIVE_HOMELIST}from '../mutation-type'
import {
  // reqClassfiy,
  // reqGoods,
  reqHomelist,
  //reqSearchlist
} from '../../api'

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