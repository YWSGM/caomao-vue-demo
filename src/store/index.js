// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";

// 声明使用
Vue.use(Vuex);

// 引入暴露文件
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// 引入模块文件
import Search from "./modules/Search";
import Home from "./modules/home";
import classify from "./modules/classify";
import Current from "./modules/Current";
import toplist from "./modules/toplist";
import shopCar from "./modules/shopCar";
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    Search,
    Home,
    classify,
    Current,
    toplist,
    shopCar
  }
});
