// 引入接口api
import { loginWithPassword, loginWithEmail, loginWithCode, loginWithToken, logout } from "../../api";

import {
  LOGIN,
  LOGIN_WITH_PASSWORD,
  LOGIN_WITH_EMAIL,
  LOGIN_WITH_CODE,
  LOGIN_WITH_TOKEN,
  LOGOUT
} from "../mutation-type";

const state = {
  current: null
};

const mutations = {
  [LOGIN](state, current) {
    state.current = current;
    window.localStorage.setItem("token", current.token);
    console.log("login current", current);
  }
};

const actions = {
  async [LOGIN_WITH_PASSWORD]({ commit }, { phone, password }) {
    const response = await loginWithPassword(phone, password);
    if (response.code === 0) {
      const current = response.user;
      commit(LOGIN, current);
    } else {
      throw new Error(response.message);
    }
  },
  async [LOGIN_WITH_CODE]({ commit }, { phone, code }) {
    const response = await loginWithCode(phone, code);
    if (response.code === 0) {
      const current = response.user;
      commit(LOGIN, current);
    } else {
      throw new Error(response.message);
    }
  },
  async [LOGIN_WITH_EMAIL]({ commit }, { email, password }) {
    const response = await loginWithEmail(email, password);
    if (response.code === 0) {
      const current = response.user;
      commit(LOGIN, current);
    } else {
      throw new Error(response.message);
    }
  },
  async [LOGIN_WITH_TOKEN]({ commit }, token) {
    const response = await loginWithToken(token);
    if (response.code === 0) {
      const current = response.user;
      commit(LOGIN, current);
    } else {
      throw new Error(response.message);
    }
  },
  async [LOGOUT]({ commit }, token) {
    const response = await logout(token);
    if (response.code === 0) {
      commit(LOGIN, null);
    } else {
      throw new Error(response.message);
    }
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
