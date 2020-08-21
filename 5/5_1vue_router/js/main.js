//quien vive en cada ruta?
const home = Vue.component('Home',{
    template: '<h2>Portada</h2>',

});

const contacto = Vue.component('Contacto',{
    template: '<h2>Contacto</h2>',
    
});

///plano de destino con sus rutas
const routes  = [
    {path: '/', component: home},
    {path: '/contacto', component: contacto},
];

//instanciar el componente enrutador
const router = new VueRouter({
    routes: routes,
});

new Vue({
    router: router,
    el: 'main',
});