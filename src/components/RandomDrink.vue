<template>
  <div>
    <section v-if="drinks" id="randomDrink">
      <Drink v-bind='drinks[0]'/>
    </section>
  </div>
</template>

<script>
import Drink from '@/components/Drink.vue'
import Helpers from '@/Helpers.js'

export default {
  components: {
    Drink
  },
  name: 'randomDrink',
  created () {
    this.fetchRandomDrink()
  },
  data () {
    return {
      drinks: null,
      helpers: new Helpers()
    }
  },
  methods: {
    fetchRandomDrink () {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(result => {
          this.drinks = result.drinks.map(this.helpers.structureRecipe)
          console.log(this.drinks)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 40vh;
  }
</style>
