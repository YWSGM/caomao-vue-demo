import{RECEIVE_HOMELIST,RECEIVE_HOMELIST_TWO,RECEIVE_HOMEGOODS}from '../mutation-type'
import {reqHomelist,reqHomelisttwo,reqGoods} from '../../api'

const state = {
  homelist:[],
  homelisttwo:[],
  homegood:[],
}

const mutations = {
  [RECEIVE_HOMELIST](state,homelist){
    state.homelist =homelist
  },
  [RECEIVE_HOMELIST_TWO](state,homelisttwo){
    state.homelisttwo =homelisttwo
  },
  [RECEIVE_HOMEGOODS](state,homegood){
    state.homegood =homegood
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
  },
  async getHomegood({commit}){
    const result = await reqGoods('goods')
    commit(RECEIVE_HOMEGOODS,result) 
  }
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}