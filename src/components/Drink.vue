<template>
  <div class="drink">
    <img :src="image">
    <section>
      <h3>{{name}}</h3>
        <v-btn @click="toggleLike" :class="{active: isFavorite}" text icon large>
          <v-icon>{{ myIcon.name }}</v-icon>
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
  computed: {
    isFavorite() {
      return this.$store.state.favorites.has(this.id)
    },

  },
  data() {
    return {
      myIcon: {
        name: 'mdi-heart',
        color: 'default'
      }
    }
  },
  methods: {
    toggleLike () {
      this.$store.dispatch('toggleFavorite', {
        id: this.id,
        image: this.image,
        ingredients: this.ingredients,
        instructions: this.instructions,
        name: this.name,
      })
      this.isFavorite = !this.isFavorite
    }
  },
  props: {
    id: Number,
    image: String,
    ingredients: Array,
    instructions: String,
    name: String,
  },
}
</script>

<style scoped>
  button.active > v-icon {
    color: darkred;
  }
</style>
