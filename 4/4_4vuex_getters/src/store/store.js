import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        tareas: [
            {nombre: 'Aprender vue routing', completado: false},
            {nombre: 'Organizar lecciones restantes', completado: false},
            {nombre: 'Grabar lecciones mini curso ', completado: false},
            {nombre: 'Preparar landing', completado: false},
            {nombre: 'Diseñar acciones de marketing', completado: false},
        ]
    },

    getters:{
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    }
});