<template>
  <div id="app">
    <img src="./assets/logo.png" width="100">

    <form @submit.prevent="agregarTecnologia">
    <input v-model="nuevaTecnologia"
      type="text"
      placeholder="Tecnologia a aprender"
    >  
    </form>
    <ul>
      <li v-for="tecnologia in aprender" :key="tecnologia.id">
        {{ tecnologia.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mixin} from './mixing.js';
export default {
    created(){
      console.log("created desde el compoinente");
      this.saludar();
    },
  mixins: [mixin],
  methods:{
    saludar(){
      alert("hola desde el componente");
    }
  }
}
</script>


