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
  },
  modules: {
  },
});
