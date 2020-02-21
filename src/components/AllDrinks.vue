<template>
  <div>
    <section v-if="drinks" class="results">
        <Drink v-for="drink in drinks" :key="drink.name" v-bind="drink"/> <!-- v-bind without ....... -->
    </section>
  </div>
</template>

<script>
import Drink from "@/components/Drink.vue";

export default {
  components: {
    Drink
  },
  props: {
    drinks: Array // Get all props from Drink.vue
  }
};
</script>
