import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ClassiFication from '@/components/ClassiFication'
import Mine from '@/components/Mine'
import ShoppingCart from '@/components/ShoppingCart'
import Search from '@/components/Search'
import FootPrint from '@/components/FootPrint'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classification',
      name: 'ClassiFication',
      component: ClassiFication
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/footprint',
      name: 'FootPrint',
      component: FootPrint
    }
  ]
})
