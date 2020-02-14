<template>
  <div class="home">
    <h1>What the drink</h1>
    <RandomDrink/>
  </div>
</template>

<script>
// @ is an alias to /src
import RandomDrink from '@/components/random-drink.vue'

export default {
  name: 'Home',
  components: {
    RandomDrink
  }
}
</script>
