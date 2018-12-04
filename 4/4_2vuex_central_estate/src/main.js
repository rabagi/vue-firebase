import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store';

new Vue({
  el: '#app',
  store,
  // o: store: store //key y value se llaman igual, solo ese especifica un identificador
  render: h => h(App)
})
