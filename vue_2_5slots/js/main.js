//vue.js
Vue.component('alerta',{
    props: ['tipo', 'posicion'],
    template: `
        <section class="alerta" :class="[tipo, posicion]">
            <header class="alerta_header">
                <slot name="header">
                    Hola
                </slot>                
            </header>
            <div class="alerta_contenido">
                <slot>
                    Texto test texto test.
                </slot>                
            </div>
            <footer class="alerta_footer">
                <slot name="footer">
                    texto de footer
                </slot>                
            </footer>
        </section>
    `,

});

new Vue({
    el: 'main',
   
});