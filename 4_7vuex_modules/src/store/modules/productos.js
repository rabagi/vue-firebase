const productos = [
        {nombre: 'stream link', precio:50},
        {nombre: 'steam controller', precio:59},
        {nombre: 'axiom link', precio:17}
];

const mutations = {
    anadirProducto: (state, producto) => productos.unshift(producto),
};

export default {
    state: productos,
    mutations,

};
