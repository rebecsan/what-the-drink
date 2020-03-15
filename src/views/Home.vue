<template>
  <div class="home">
    <v-container v-if="$route.params.newSearchString === undefined">
      <RandomDrink/>
      <label for="searchBox"><h3>Search for drinks by name, letter(s) or number</h3></label>
      <v-text-field class="search" clearable v-model="searchString" name="searchBox" placeholder="Search"/>
    </v-container>
    <router-view v-else/>
    <AllDrinks :drinks="drinks"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RandomDrink from '@/components/RandomDrink.vue'
import AllDrinks from '@/components/AllDrinks.vue'
import Helpers from '@/Helpers.js'

export default {
  name: 'Home',
  components: {
    AllDrinks,
    RandomDrink
  },
  computed: {
    searchString: {
      get() {
        return this.$store.state.searchString
      },
      set(searchString) {
        this.$store.commit('setSearchString', searchString)
      }
    }
  },
  data () {
    return {
      drinks: null,
      helpers: new Helpers(),
    }
  },
    watch: {
    searchString (str) {
      let queryPrefix = 's'
      if (str.length === 0) {
        this.drinks = []
        return
      }
      else if (str.length === 1) {
        queryPrefix = 'f'
      }
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?'+ queryPrefix + '=' + str)
        .then(response => response.json())
        .then(result => {
          if (result.drinks != null) {
            this.drinks = result.drinks.map(this.helpers.structureRecipe)
          }
          else {
            this.drinks = []
          }
        })
    }
  }
}
</script>
