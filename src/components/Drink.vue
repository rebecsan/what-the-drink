<template>
  <div>
    <img :src="image" alt="">
    <h3>{{name}}</h3>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.name"><span>{{ingredient.name}}</span> <span v-if=ingredient.amount>{{ingredient.amount}}</span></li>
    </ul>
    <p>{{instructions}}</p>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: Array,
    image: String,
    instructions: String,
    name: String,
  }
}
</script>