import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEncontrado.vue';

import {store} from './store';

export const routes = [
 
    {path: '/', component: Home, name: 'home'},
    {path: '/prueba', alias: '/otraprueba', redirect: { name: 'home' }, component: Home},

    {path: '/equipo/:id', component: Equipo, children: [
        {path: '', components: {
            default: Usuario,
            bio: UsuarioBio,
            fotos: UsuarioFotos
        }, name: 'equipo'}
    ]},
    {   beforeEnter: ((to, from, next)=> {
            console.log("Acceso a ruta contacto");
            next(store.state.auth);
        }),
        path: '/contacto', component: Contacto, 
        meta: { privado: true},
        name: 'contacto', 
        props: { newsletter: true }
    },
    {path: '*', component: NoEncontrado}

];