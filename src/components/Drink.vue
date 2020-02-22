<template>
  <div>
    <img :src="image">
    <section>
      <h3>{{name}}</h3>
        <v-btn text icon color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
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
</template>

<script>
export default {
  // methods: {
  //   likeDrink () {
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
