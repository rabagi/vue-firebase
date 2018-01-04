//vue.js
Vue.component('candidato',{
    // props: ['nombre', 'correoe', 'img'],
    props:{
        nombre: {
            type: [String, Array], //null es de cualquier tipo
            required: true,
        },
        correoe: {
            type: String,
            default: 'g@g.com',
        },
        img: String,
        location: {
            type: Object,
            default(){
                return {
                    ciudad: 'Lzc',
                }
            }
        },
    },
    template: `#candidato-template`,

});

new Vue({
    el: 'main',
    mounted(){
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {

        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }

    }
});