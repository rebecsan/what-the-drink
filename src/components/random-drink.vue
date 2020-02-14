<template>
  <div>
    <img v-if="drinks" :src="drinks[0].strDrinkThumb" alt="">
    <h3 v-if="drinks">{{drinks[0].strDrink}}</h3>
  </div>
</template>

<script>
export default {
  name: 'randomDrink',
  created () {
    this.fetchRandomDrink()
  },
  data () {
    return {
      drinks: null
    }
  },
  methods: {
    fetchRandomDrink () {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(result => {
          this.drinks = result.drinks
          console.log(this.drinks)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
