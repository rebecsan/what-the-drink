import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favorites: new Set(),
    favArr: []
  },
  mutations: {
    TOGGLE_FAVORITE (state, drink) {
      if (state.favorites.has(drink.id)) {
        state.favorites.delete(drink.id)
        state.favArr = state.favArr.filter(d => d.id != drink.id)
      } else {
        state.favorites.add(drink.id)
        state.favArr.push(drink)
      }
    }
  },
  actions: {
    toggleFavorite (context, drink) {
      context.commit('TOGGLE_FAVORITE',drink)
    }
  },
})

export default store