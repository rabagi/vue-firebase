//vue.js
Vue.component('lista-tareas', {
    template:`
            <div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea" :key="tarea.id"></tarea>
                </ul>
                <hr>
            </div>
    `,
    data(){
        return {
            tareas: [
                'Finalizar seccion componentes',
                'Iniciar workflow con Vue CLi',
                'Terminar de estudiar la documentacion Vuex',
                'Seguir jugando con Vue router',
            ]
        }
    },
});

Vue.component('tarea', {
    props: ['tarea'],
    template: `<li>{{tarea}}</li>`,
});

Vue.component('contacto', {
    template: `<div><a href="mailto:rabagi@g.com">rabagi@g.com</a><hr></div>`,
});

Vue.component('bio',{

    template: `<div><p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivia un hidalgo de los de lanza en astillero, adarga antigua, rocin flaco y galgo corredor</p></div>`,

});

new Vue({
    el: 'main',
    data:{
        seleccionado: 'lista-tareas'
    }
});