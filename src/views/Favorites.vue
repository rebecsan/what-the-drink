<template>
  <div class="favorites">
    <Drink v-for="drink in favorites" :key="drink.id" v-bind="drink"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Drink from "@/components/Drink.vue";

export default {
  name: 'Favorites',
  components: {
    Drink
  },
  computed: {
    favorites() {
      return this.$store.state.favorites.values()
    }
  }
}
</script>
