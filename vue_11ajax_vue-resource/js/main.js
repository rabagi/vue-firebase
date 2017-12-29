//vue.js
const vm =
new Vue({
    el: 'main',
    mounted(){
       this.cargarPersonas();
    },
    data:{
        personas: []
    },
    methods:{
        cargarPersonas(){
            this.$http.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                   //console.log(respuesta);
                   this.personas = respuesta.body.results;
                });          
        }
    }

});