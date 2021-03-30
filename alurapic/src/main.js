import Vue from 'vue'
import App from './App.vue'
// importando módulo Vue Resource
import VueResource from 'vue-resource';
// importando o Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';

// importando Diretiva
import './directives/Transform'

// registrando o view resource
Vue.use(VueResource);
// registrando o view router
Vue.use(VueRouter);


// Utilizando o VueRouter para receber o objetos rotas
const router = new VueRouter({
  routes,
  mode: 'history',
});



new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
