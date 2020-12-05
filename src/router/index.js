import Vue from 'vue'
import VueRouter from 'vue-router'
import home_page from '../views/home_page.vue'
import fiction_ratings from '../views/fiction_ratings.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home_page',
    component: home_page
  },
  {
    path: '/fiction_ratings',
    name: 'fiction_ratings',
    component: fiction_ratings
  }
]

const router = new VueRouter({
  routes
})

export default router
