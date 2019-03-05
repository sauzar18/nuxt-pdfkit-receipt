import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const state = () => ({
  csrfToken: null
})
export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.cookies) {
      commit('SET_CSRF_TOKEN', req.csrfToken())
    }
  }
}
