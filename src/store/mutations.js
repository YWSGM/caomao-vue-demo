/* 直接操作组件中数据的方法 */
import {SEARCH_LIST} from './mutation-type'
export default {
	[SEARCH_LIST](state,lists){
		state.lists = lists
	}
}