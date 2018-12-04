<template>
  <h1>Hola , soy {{nombre}} {{apellidos}} y me dedico a {{profesion}}</h1>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    //primera forma
    // computed: {
    //   nombre(){
    //     return this.$store.state.nombre;
    //   }
    // }
    //segunda forma
    // computed: mapState({
    //   nombre: (state) => state.nombre,
    //   apellidos: (state) => state.apellidos,
    // })

    computed: mapState(['nombre', 'apellidos', 'profesion', 'ciudad']),

  }
</script>