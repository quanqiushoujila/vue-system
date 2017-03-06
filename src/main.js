// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
// import resource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css'
import './assets/scss/mixin.scss'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css'

Vue.use(ElementUI)
Vue.use(axios)
NProgress.configure({ showSpinner: false })
// Vue.use(resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
