// 引入接口api
// 引入mutatinon-type
import {
	RECEIVE_SELECTGOOD,
	ADD_GOOD_COUNT,
	REDUCE_GOOD_COUNT,
	ADD_SHOP_CAR,
	DELETE_GOOD
} from '../mutation-type.js'

const state = {
	selectGood: {},
	carGoods: []
}

const mutations = {
	[RECEIVE_SELECTGOOD](state, good) {
		state.selectGood = good
	},
	[ADD_GOOD_COUNT](state, {good}) {
			good.count++

	},
	[REDUCE_GOOD_COUNT](state, {
		good
	}) {
		if (good.count > 0) {
			good.count--
			if(good.count===0){
        state.carGoods.splice(state.carGoods.indexOf(good),1)
      }
		}
	},
	[ADD_SHOP_CAR](state) {
		const index = state.carGoods.findIndex((item) => {
			window.console.log(state);
			return item.id === state.selectGood.id
		})
		window.console.log(typeof index, index);
		if (index == -1) {
			state.carGoods.push(state.selectGood)
		} else {
			state.carGoods[index].count++
		}
	},
	[DELETE_GOOD](state,good){
		state.carGoods.splice(state.carGoods.indexOf(good),1)
	}
}
const actions = {
	updateGoodCount({
		commit
	}, {
		isAdd,
		good
	}) {
		if (isAdd) {
			commit(ADD_GOOD_COUNT, {
				good
			})
		} else {
			commit(REDUCE_GOOD_COUNT, {
				good
			})
		}
	},
	addShopCar({
		commit
	}) {
		commit(ADD_SHOP_CAR)
	},
	deleteGood({commit},good){
		commit(DELETE_GOOD,good)
	}
}

const getters={
  // // 总数量
  // totalCount(state){
  //   return state.carGoods.reduce((pre,good)=>pre+good.count,0)
  // },
  //总价格
  totalPrice(state){
    return state.carGoods.reduce((pre,good)=>pre+good.count*good.price,0)
  },
}

export default {
	state,
	mutations,
	actions,
	getters
}