import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ClothesView from '../views/ClothesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ClothesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
