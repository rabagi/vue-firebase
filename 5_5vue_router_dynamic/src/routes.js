import Home from './components/home.vue';
import Contacto from './components/contacto.vue';
import Usuario from './components/Usuario.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/usuario/:id', component: Usuario}
    
];

