<template>
  <div>
    <img :src="image" alt="">
    <section>
      <h3>{{name}}</h3>
      <table>
        <tr v-for="ingredient in ingredients" :key="ingredient.name">
          <td v-if=ingredient.amount>{{ingredient.amount}}</td>
          <td v-else></td>
          <td>{{ingredient.name}}</td>
        </tr>
      </table>
      <p class="instructions">{{instructions}}</p>
    </section>
  </div>
  <!-- @click="visible = !visible" -->
  <!-- @click="expandDrink" -->
</template>

<script>
export default {
  // methods: {
  //   expandDrink () {
  //     alert('Det funkar')
  //   }
  // },
  props: {
    ingredients: Array,
    image: String,
    instructions: String,
    name: String,
  }
}
</script>
