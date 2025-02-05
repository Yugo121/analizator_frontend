import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/charts/ChartView.vue'
import OrdersView from '@/views/charts/OrdersView.vue'
import CouriersView from '@/views/charts/CouriersView.vue'
import MarketsView from '@/views/charts/MarketsView.vue'
import ProductsView from '@/views/charts/ProductsView.vue'
import ClientsView from '@/views/charts/ClientsView.vue'
import MarginCalcView from '@/views/MarginCalcView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/chart/:chartType', component: ChartView, props: true },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: "/clients",
      name: "clients",
      component: ClientsView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/couriers',
      name: 'couriers',
      component: CouriersView
    },
    {
      path: '/markets',
      name: 'markets',
      component: MarketsView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/marginCalc',
      name: 'marginCalc',
      component: MarginCalcView
    }
    ],
})

export default router
