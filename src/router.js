import Vue from 'vue'
import Router from 'vue-router'
// import EventCreate from './views/EventCreate.vue'
// import EventList from './views/EventList.vue'
// import EventShow from './views/EventShow.vue'
import Account from './views/Account.vue'
import Expenses from './components/Expenses.vue'
import Incomes from './components/Incomes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Account
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: Expenses
    },
    {
      path: '/incomes',
      name: 'incomes',
      component: Incomes
    }
    // {
    //   path: '/event/:id',
    //   name: 'event-show',
    //   component: EventShow,
    //   props: true
    // }
  ]
})
