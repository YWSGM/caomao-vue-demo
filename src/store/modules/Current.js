// 引入接口api
import { loginWithPassword } from "../../api";

const state = {
  current: null
};

export const LOGIN = "LOGIN";

const mutations = {
  [LOGIN](state, current) {
    state.current = current;
  }
};

const actions = {
  async loginWithPassword({ commit }, { phone, password }) {
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
