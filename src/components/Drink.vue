<template>
  <div>
    <img :src="image" alt="">
    <h3>{{name}}</h3>
    <ul>
        <li v-for="ingredient in ingredients" :key="ingredient.name">{{ingredient.name + ' ' + ingredient.amount}}</li>
    </ul>
    <p>{{instructions}}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.ingredients)
  },
  props: {
    ingredients: Array,
    image: String,
    instructions: String,
    name: String,
  }
}
</script>