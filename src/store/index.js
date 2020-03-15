import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favorites: new Map(),
    newSearchString: '',
    searchString: ''
  },
  mutations: {
    TOGGLE_FAVORITE (state, drink) {
      if (state.favorites.has(drink.id)) {
        state.favorites.delete(drink.id)
      } else {
        state.favorites.set(drink.id, drink)
      }
    },
    setNewSearchString(state, newSearchString) {
      state.newSearchString = newSearchString
    },
    setSearchString(state, searchString) {
      state.searchString = searchString
    }
  },
  actions: {
    toggleFavorite (context, drink) {
      context.commit('TOGGLE_FAVORITE', drink)
    }
  },
})

export default store