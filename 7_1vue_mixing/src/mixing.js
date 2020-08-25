export const mixin = {

    name: 'app',
    data () {
    return {
       aprender: [
         {nombre: 'inonic 3'},
         {nombre: 'Node 3'},
         {nombre: 'laravel 3'},
         {nombre: 'monho'},
         {nombre: 'Angukar'},
       ],
       nuevaTecnologia: null,
    }
  },
  methods: {
    agregarTecnologia(){
      this.aprender.unshift({
        nombre: this.nuevaTecnologia,
      });

      this.nuevaTecnologia = null;
    }
  }

}