import { createRouter, createWebHistory } from 'vue-router'
import { productStore } from '../stores/ProductStore'
import HomeView from '../views/HomeView.vue'
import SingleProduct from '../views/Product/SingleProduct.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'
import Verify from '@/views/Auth/Verify.vue'
import { userStore } from '../stores/UserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'singleProduct',
      component: SingleProduct,
      beforeEnter: (to, from) => {
        const product = productStore()
        if (product.productData == null && to.name !== 'home') {
          return from
        }
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/verify-email',
      name: 'verify',
      component: Verify,
      beforeEnter: (to, from) => {
        const auth = userStore()
        if (auth.getuser  == null && to.name !== 'verify') {
          return from
        }
      },
    }
  ]
})


export default router
