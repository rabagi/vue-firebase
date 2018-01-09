//vue.js

Vue.component('elegir-ganador', {
    props: ['listado'],
    //2a opcion y  3a opcion
    //template: '#elegir-ganador-template',
    //1a opcion
    // template: `<div>
    //             <h1 v-if="ganador">El ganador es {{ganador}}</h1>
    //             <template v-else>
    //                 <h1>Participantes</h1>
    //                 <ul>
    //                     <li v-for="persona in listado">{{persona}}</li>
    //                 </ul>
    //             </template>
    //             <button class="btn btn-primary" @click="elegirGanador"> Elegir ganador</button>
    //             </div>
    //             `,
    methods: {
        elegirGanador(){
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random()*cantidad));
            this.ganador = this.participantes[indice-1];
        }       
    },

    data(){
        return {
            ganador: false,
            participantes: this.listado,
           
        }
    },
});

new Vue({
    el: 'main',
    data: {
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ]
    }
});