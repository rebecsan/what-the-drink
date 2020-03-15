<template>
  <div>
    <v-container>
      <label for="searchBox"><h3>Search for drinks by name, letter(s) or number</h3></label>
      <v-text-field @keydown.enter.prevent="changeURL(newStr)" class="search" clearable name="searchBox" placeholder="Search" v-model="newSearchString"/>
    </v-container>
    <AllDrinks :drinks="drinks"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllDrinks from '@/components/AllDrinks.vue'
import Helpers from '@/Helpers.js'

export default {
  name: 'Search',
  beforeMount() {
    this.setTitle()
  },
  components: {
    AllDrinks
  },
  computed: {
    newSearchString: {
      get() {
        return this.$store.state.newSearchString
        // this.$route.params.newSearchString
      },
      set(newSearchString) {
        this.$store.commit('setNewSearchString', this.$route.params.newSearchString)
      }
    }
  },
  created () {
    this.searchDrinks(this.$route.params.newSearchString)
  },
  data () {
    return {
      drinks: null,
      helpers: new Helpers(),
      newStr: this.newSearchString
    }
  },
  methods: {
    changeURL (newStr) {
      alert(this.str)
      this.str = newStr
      // this.$router.push({path: this.str})
      this.$router.push({name: 'Search', params: this.str})
    },
    setTitle () {
      document.title = 'Drinks | ' + this.newSearchString
    },
    searchDrinks (str) {
      let queryPrefix = 's'
      if (str.length === 0) {
        this.drinks = []
        return
      }
      else if (str.length === 1) {
        queryPrefix = 'f'
      }
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?'+ queryPrefix + '=' + str)
        .then(response => response.json())
        .then(result => {
          if (result.drinks != null) {
            this.drinks = result.drinks.map(this.helpers.structureRecipe)
          }
          else {
            this.drinks = []
          }
          this.router.push({name: 'Search', params: str})
        })
    }  
  },
  updated() {
    this.setTitle()
  },
  watch: {
    newSearchString: {
      immediate: true,
      handler: "searchDrinks"
    }
  }
}
</script>
