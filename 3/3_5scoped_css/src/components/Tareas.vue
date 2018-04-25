<template>
    <div>
        <h2>Tarea por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" 
                    @click="actualizarTarea(tarea)"
                    v-text="tarea.nombre">
                </a>
            </li>
        </ul>
        <h2>Las tareas finalizadas</h2>
        <li v-for="tarea in tareasFinalizadas">
            <a href="#"
                @click="actualizarTarea(tarea)"
                v-text="tarea.nombre">
            </a>
        </li>
    </div>
</template>
<script>
export default {
  data(){
      return {
          tareas: [
              {nombre: 'Aprender Vue.js', completado:false},
              {nombre: 'Grabar el modulo de vuex', completado:false},
              {nombre: 'Responder comentarios', completado:false},
              {nombre: 'Salir a correr para despejarme', completado:false},
              {nombre: 'Diseñar modulo de Firebase', completado:false},
              {nombre: 'Diseñar el ejercicio final', completado:false},
          ],
          finalizadas:[]
      }
  },
  methods:{
      actualizarTarea(tarea){
            return  tarea.completado = !tarea.completado;
      }
  },
  computed :{
      tareasPendientes(){
          return this.tareas.filter((tarea) => !tarea.completado);
      },
      tareasFinalizadas(){
          return this.tareas.filter((tarea) => tarea.completado);
      }
  }
}
</script>
<style scoped>
    li a{
        color: red;
    }
</style>