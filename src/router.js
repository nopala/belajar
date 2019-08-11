import Vue from 'vue'
import Router from 'vue-router'

//halaan
import Home from './views/Home.vue'
import Lokasi from './views/login.vue'
import Todo from './views/todo.vue'
import profile from './views/profileAliceBTR.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/profile',
      name : 'profile',
      component : profile
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lks',
      name: 'lokasi',
      component: Lokasi
    },
    {
      path : '/todo',
      name : 'todo',
      component : Todo
    },
  ]
})
