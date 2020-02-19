<template>
  <div>
    <section v-if="drinks">
      <div v-for='drink in drinks' :key='drink.name'>
        <img :src="drink.image" alt="">
        <h3>{{drink.name}}</h3>
        <ul>
          <template v-for="ingredient in drink.ingredients">
            <li :key="ingredient">{{ingredient}}</li>
          <template>
        </ul>
        <p>{{drink.instructions}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    drinks: Array
  }
}
</script>
