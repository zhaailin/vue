import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
import formFirst from '../components/formFirst.vue'
import formSecond from '../components/formSecond.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      redirect:'/formFirst',
      children:[{path:'/formFirst',name:'formFirst',component:formFirst},
      {path:'/formSecond',name:'formSecond',component:formSecond}]
    },
    {
      path: '/index',
      name: 'index',
      component: index
      
    }
  ]
})
