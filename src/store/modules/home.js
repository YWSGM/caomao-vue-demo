import{RECEIVE_HOMELIST,RECEIVE_HOMELIST_TWO}from '../mutation-type'
import {reqHomelist,reqHomelisttwo} from '../../api'

const state = {
  homelist:[],
  homelisttwo:[]
}
const mutations = {
  [RECEIVE_HOMELIST](state,homelist){
    state.homelist =homelist
  },
  [RECEIVE_HOMELIST_TWO](state,homelisttwo){
    state.homelisttwo =homelisttwo
  }
}
const actions = {
  async getHomelist({commit}){
    const result = await reqHomelist('homelist')
    commit(RECEIVE_HOMELIST,result)
  },
  async getHomelisttwo({commit}){
    const result = await reqHomelisttwo('homelisttwo')
    commit(RECEIVE_HOMELIST_TWO,result)
  }
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}