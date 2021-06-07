import Vue from 'vue';
import Vuex from 'vuex';
// import { loginApi, valiApi } from '@/login'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginToken: null,
    isUser: null
  },
  mutations: {
    setLoginToken(state, payload) {
      state.loginToken = payload
    },
    setIsUser(state, payload) {
      state.isUser = payload
    }
  },
  actions: {
  },
  modules: {
  },
});
