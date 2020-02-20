<template>
  <div class="home">
    <h1>What the drink</h1>
    <RandomDrink/>
    <input v-model="searchString" placeholder="Skriv in bokstav">
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
          console.log(this.drinks)
        })
      }
    }
  }
</script>
