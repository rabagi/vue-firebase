//vue.js
const vm =
new Vue({
    el: 'main',
    data: {
        minimo: 5,
        busqueda: '',
        juegos: [
                {
                    titulo: 'Battlefield 1',
                    genero: "FPS",
                    puntuacion: 9
                },
                {
                    titulo: 'Civilizacion VI',
                    genero: "Estrategia",
                    puntuacion: 10
                },
                {
                    titulo: 'Resident evil 7',
                    genero: "Survival horror",
                    puntuacion: 7
                },
        ],      
    },

    computed: {
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo );
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }

   
});