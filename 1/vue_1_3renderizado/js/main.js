//vue.js
const vm =
new Vue({
    el: 'main',
    data: {
        laborales:["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        tareas: [
            {nombre: 'hacer compra', prioridad : 'baja'},
            {nombre: 'aprender vue', prioridad : 'alta'},
            {nombre: 'Ir al gym', prioridad : 'media'},
        ],
        persona:{
            nombre: 'Juan',
            profesion: 'dev',
            ciudad: 'Valencia'
        },

    }
});