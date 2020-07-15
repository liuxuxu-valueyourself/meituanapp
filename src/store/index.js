import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address:'南京',
    userName:'靓仔'
  },
  mutations: {
    ChangeAddress (state,payload) {
      // 变更状态
      state.address = payload;
    },
    ChangeUserName(state,payload) {
      state.userName = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
