import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favorites from '../views/Favorites.vue'
import Search from '../components/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    component: Home,
    meta: {
      title: 'Drinks | Home'
    },
    name: 'Home',
    path: '/',
    children: [
      {
        component: Search,
        name: 'Search',
        path: '/search/:newSearchString'
      }
    ]
  },
  {
    component: Favorites,
    name: 'Favorites',
    meta: {
      title: 'Drinks | Favorites'
    },
    path: '/favorites'
  }
]

const router = new VueRouter({
  routes
})

export default router
