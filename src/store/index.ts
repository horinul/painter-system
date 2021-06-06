import Vue from 'vue';
import Vuex from 'vuex';
// import { loginApi, valiApi } from '@/login'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logintToken: '',
    isUser: null
  },
  mutations: {
    setLogintToken(state, payload) {
      state.logintToken = payload
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
