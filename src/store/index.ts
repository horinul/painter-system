import Vue from 'vue';
import Vuex from 'vuex';
// import { loginApi, valiApi } from '@/login'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userID: ''
  },
  mutations: {
    setUserID(state, payload) {
      state.userID = payload
    }
  },
  actions: {
    async toLogin({ commit }, { account, password }) {
      // let res = await loginApi(account, password)
      // commit('setAccount', res.account)
      // commit('setIdentity', res.identity)
      // commit('setToPeople', res.toPeople)
      // localStorage['token'] = res.token
      // return res
    },
    async valiApi({ commit }) {
      // const res = await valiApi()
      // commit('setAccount', res.account)
      // commit('setIdentity', res.identity)
      // commit('setToPeople', res.toPeople)
      // localStorage['token'] = res.token
      // return res
    }
  },
  modules: {
  },
});
