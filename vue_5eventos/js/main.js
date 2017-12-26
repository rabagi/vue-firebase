//vue.js
const vm =
new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
           
            'aprender vue',
            'Aprender ES6',
            'publicar algo todos los dias'
        ],      
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});