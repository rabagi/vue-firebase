//vue.js
const vm =
new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo',
        nuevaTarea: null,
        tareas: [
                {
                    titulo: 'Aprender vue.js',
                    prioridad: true,
                    antiguedad: 23
                },
                {
                    titulo: 'Aprender Es6',
                    prioridad: true,
                    antiguedad: 135
                },
                {
                    titulo: 'Publicar algo',
                    prioridad: false,
                    antiguedad: 378
                },
        ],      
    },

    methods:{
        agregarTarea(){
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea = null;
        }
    },

    computed: {
        mensajeAlreves(){
            return this.mensaje.split('').reverse().join('');
        },

        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad);
        }
    }
});