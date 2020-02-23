import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favorites: new Set(),
  },
  mutations: {
    TOGGLE_FAVORITE (state, id) {
      if (state.favorites.has(id)) {
        state.favorites.delete(id)
      } else {
        state.favorites.add(id)
      }
    }
  },
  actions: {
    toggleFavorite (context, id) {
      context.commit('TOGGLE_FAVORITE',id)
    }
  },
})

export default store