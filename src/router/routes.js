const Login = () => import('@/pages/login/Login')
const Home = () => import('@/pages/home/Home')
const Product = () => import('@/pages/product/Product')

export default [
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