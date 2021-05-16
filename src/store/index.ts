import Vue from 'vue';
import Vuex from 'vuex';
// import { loginApi, valiApi } from '@/login'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logintToken: ''
  },
  mutations: {
    setLogintToken(state, payload) {
      state.logintToken = payload
    }
  },
  actions: {
  },
  modules: {
  },
});
