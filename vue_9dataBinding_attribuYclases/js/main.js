//vue.js

new Vue({
    el: 'main',
    data: {

        tareas: [
            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender Vue', completado: false},
            {titulo: 'Aprender firebase', completado: false},
            {titulo: 'Dominar ES6', completado: false},
            {titulo: 'Salir a correr', completado: false},
        ],               
    },
    methods: {
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },

    computed:{
        tareasCompletadas(){
           return this.tareas.filter((tarea) => tarea.completado);
        }
    }
});