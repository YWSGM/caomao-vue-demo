/* 间接操作组件中数据的方法 */
import {reqSearchlist} from '../api'
import {SEARCH_LIST} from './mutation-type'
export default {
	async	getSearchList({commit}){
		const result = await reqSearchlist('search')
		const list = result
		console.log(list);
		commit(SEARCH_LIST,list)
	}
}