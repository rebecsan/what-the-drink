<template>
  <div class="home">
    <RandomDrink/>
    <v-container>
      <label for="searchBox"><h3>List all drinks by first letter</h3></label>
      <v-text-field class="search" clearable v-model="searchString" name="searchBox" placeholder="Enter letter"/>
    </v-container>
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
  data () {
    return {
      drinks: null,
      helpers: new Helpers(),
      searchString: this.searchString
    }
  },
  watch: {
    searchString () {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + this.searchString)
        .then(response => response.json())
        .then(result => {
          this.drinks = result.drinks.map(this.helpers.structureRecipe)
        })
      }
    }
  }
</script>

<style scoped>
  .search {
    width: 30vw;
    margin: auto
  }
</style>
