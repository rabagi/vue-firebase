//vue.js
Vue.component('mis-tareas',{
    props: ['listado'],
    template: `#mis-tareas-template`
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            {titulo: 'Salir a correr'},
            {titulo: 'Recojer casa'},
            {titulo: 'Aprender vue'},
            {titulo: 'Ir a gimnasio'},
            {titulo: 'Leer cada dia'},
        ]
    }
});