import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index'
import index1 from 'components/index1/index1'
import d3 from 'components/charts/d3'
import NotFound from '404'
import Login from 'components/login/login'
import table from 'components/table/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        { path: '/index', name: 'index', component: index1 },
        { path: '/d3', name: 'd3', component: d3 },
        { path: '/table', name: 'table', component: table }
      ]
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})
