import { createRouter, createWebHistory } from 'vue-router'
import Tickets from "../components/Tickets/Tickets.vue"
import Settings from "../components/Settings/Settings.vue"

const routes = [
  { path: '/', redirect: '/tickets' },
  { path: '/tickets', component: Tickets },
  { path: '/settings', component: Settings }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
