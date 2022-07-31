import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/AboutView.vue'
import Registration from '../views/RegistrationForm.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
