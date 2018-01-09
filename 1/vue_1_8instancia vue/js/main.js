//vue.js
const vm1 =
new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',               
    },

    methods:{
        alreves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
            //vm2.mensaje = 'Test desde instancia 1';
        }
    },

    beforeUpdate(){
        console.log('BeforeUpdate', this.mensaje);
    },
    
    updated(){
        console.log('Update', this.mensaje);
    },

    computed:{
        mensajeMayusculas(){
            return this.mensaje.toUpperCase();
        }
    }
   
});

const vm2 =
new Vue({
    el: '#app',
    data: {
         mensaje: 'Instancia Vue 2',               
    }
});