import { createRouter, createWebHistory } from 'vue-router'

//Views
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

//Layouts
import baseLayout from '../layouts/baseLayout.vue'
import customLayout from '../layouts/customLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {layout: customLayout}
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {layout: baseLayout}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {layout: baseLayout}
    }
  ]
})

export default router
