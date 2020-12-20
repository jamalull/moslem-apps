import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Atasan from '../views/AtasanPage.vue'
import Bawahan from '../views/BawahanPage.vue'
import Aksesoris from '../views/AksesorisPage.vue'
import Hijab from '../views/HijabPage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/atasan',
    name: 'categoryatasan',
    component: Atasan
  },
  {
    path: '/bawahan',
    name: 'categorybawahan',
    component: Bawahan
  },
  {
    path: '/aksesoris',
    name: 'categoryaksesoris',
    component: Aksesoris
  },
  {
    path: '/hijab',
    name: 'categoryhijab',
    component: Hijab
  }
]

const router = new VueRouter({
  routes
})

export default router
