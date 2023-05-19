import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleView from '../views/SingleView.vue'
import NewView from "@/views/NewView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: NewView
    },
    {
      path: '/stories/:id',
      name: 'single',
      component: SingleView
    }
  ]
})

export default router
