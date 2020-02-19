<template>
  <div class="about">
    <h1>What the drink</h1>
    <AllDrinks/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllDrinks from '@/components/AllDrinks.vue'

export default {
  name: 'About',
  components: {
    AllDrinks
  }
}
</script>
