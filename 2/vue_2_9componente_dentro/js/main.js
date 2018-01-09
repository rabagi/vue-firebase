//vue.js
Vue.component('lista-tareas', {
    props: ['tareas'],
    template: `
            <div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
            </div>
            `,

});

Vue.component('tarea',{
    props: ['tarea'],
    template: `<li>{{tarea}}</li>`,
});

new Vue({
    el: 'main',
    data:{
        tareas:[
           'Finalizar seccion componentes',
           'Iniciar workflow con Vue CLi',
           'Terminar de estudiar la documentacion Vuex',
           'Seguir jugando con Vue router',
        ]
    }
});