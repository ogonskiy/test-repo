import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Services from '@/components/services/Services'
import ServiceItem from '@/components/services/ServiceItem'
import ServiceForHim from '@/components/services/ServiceForHim'
import ServiceForHer from '@/components/services/ServiceForHer'
import ServiceForBoth from '@/components/services/ServiceForBoth'
import Contacts from '@/components/Сontacts'
import Feedback from '@/components/Feedback'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      children: [{
        path: 'he',
        name: 'ServiceForHim',
        component: ServiceForHim
      },
      {
        path: 'she',
        name: 'ServiceForHer',
        component: ServiceForHer
      },
      {
        path: 'both',
        name: 'ServiceForBoth',
        component: ServiceForBoth
      }]
    },
    {
      path: '/:id',
      name: 'ServiceItem',
      component: ServiceItem
    }
  ]
})
