// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AboutView from '../components/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Wir geben Vue ein paar Millisekunden Zeit zum Rendern
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80, // Offset für deine Sticky Navigation
          });
        }, 300); // 300ms warten, bis die HomeView geladen ist
      });
    }
    return { top: 0 }
  }
})

export default router