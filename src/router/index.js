import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import productApp from '../views/product-app.vue'
import storeDetails from '../components/store-details.cmp.vue';
import productPreview from '../components/product-preview.cmp.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: productApp
  },{
    path:'/details/:storeId',
    component:storeDetails
  },
  {
    path:'/product/:productId',
    component:productPreview
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },

  // {
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
