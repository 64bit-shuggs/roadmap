import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/views/Contact.vue'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
