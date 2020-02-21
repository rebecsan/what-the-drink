<template>
  <div class="favorites">
    <AllDrinks/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllDrinks from '@/components/AllDrinks.vue'

export default {
  name: 'Favorites',
  components: {
    AllDrinks
  }
}
</script>
