<template>
  <div>
    <section v-if="drinks">
      <img :src="drinks[0].strDrinkThumb" alt="">
      <h3>{{drinks[0].strDrink}}</h3>
      <ul>
        <li>{{drinks[0].strIngredient1 + ' ' + drinks[0].strMeasure1}}</li>
      </ul>
      <p>{{drinks[0].strInstructions}}</p>
    </section>
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
