import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartsView from '../views/ChartsView.vue'
import DatePicker from '../views/DatePicker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/date-picker',
    name: 'date-picker',    
    component: DatePicker
  },
  {
    path: '/charts-view',
    name: 'charts-view',
    component: ChartsView
  },
]

const router = new VueRouter({
  routes
})

export default router
