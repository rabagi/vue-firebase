//vue.js
Vue.component('autor',{
    props: ['nombre', 'edad'],
    computed:{
        normal(){
            return this.nombre.toUpperCase();
        }
    },
    mounted(){
        // las props son accesibles desde this (proxy)
        //console.log(this.nombre);        
        console.log(typeof this.edad);
    },
    template: `<div>
                    <h1>{{nombre}}</h1>
                    <button class="btn btn-primary" @click="cambiarProp">Cambiar prop</button>
                </div>`,
    methods: {
        cambiarProp(){
            this.nombre = this.nombre.toUpperCase();
        }
    },

});

new Vue({
    el: 'main',
    data: {
        autor: 'Juan andres',
    },
});