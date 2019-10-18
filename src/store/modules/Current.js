// 引入接口api
import { loginWithPassword } from "../../api";

import {LOGIN, LOGIN_WITH_PASSWORD} from '../mutation-type'

const state = {
  current: null
};

const mutations = {
  [LOGIN](state, current) {
    state.current = current;
  }
};

const actions = {
  async [LOGIN_WITH_PASSWORD]({ commit }, { phone, password }) {
    const response = await loginWithPassword(phone, password);
    const current = response.user;
    commit(LOGIN, current);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
