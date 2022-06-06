import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JwPagination from 'jw-vue-pagination';


import Home from './components/Home.vue'
import DetailsCountries from './components/DetailsCountries.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'Home' ,component: Home },
  { path: '/countrie-selected', name: 'DetailsCountries' ,component: DetailsCountries }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
