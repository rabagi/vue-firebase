import Vue from 'vue'
import App from './Tareas.vue'
import {store} from './store/store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
