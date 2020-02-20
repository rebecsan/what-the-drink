<template>
  <div>
    <section v-if="drinks">
        <Drink v-for="drink in drinks" :key="drink.name" v-bind="drink"/>
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
    drinks: Array
  }
};
</script>
