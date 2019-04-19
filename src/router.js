import Vue from 'vue'
import Router from 'vue-router'
// import EventCreate from './views/EventCreate.vue'
// import EventList from './views/EventList.vue'
// import EventShow from './views/EventShow.vue'
import LoginPage from './views/LoginPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: LoginPage
    },
    // {
    //   path: '/event/:id',
    //   name: 'event-show',
    //   component: EventShow,
    //   props: true
    // }
  ]
})
