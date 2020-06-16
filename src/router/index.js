import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Example from '../components/Example.vue'
import TodoPage from '../components/TodoPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/example',
    name: 'example',
    component: Example 
  },
  {
    path: '/todos',
    name: 'TodoPage',
    component: TodoPage 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
