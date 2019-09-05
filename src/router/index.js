import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Product from '@/pages/product/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      Login: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
