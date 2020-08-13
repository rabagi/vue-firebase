<template>
    <section>
        <h2>Contacto</h2>
        <p>Contactarme ... </p>
        <h5>{{ newsletter }}</h5>
        <pre>{{ numero }}</pre>
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Email</label>
                <input type="email" placeholder="Correo electronico" id="correoe">
            </form>
        </template>
    </section>
</template>
<script>
export default {
    props: ['newsletter'],
    data(){
        return {
            numero: null,
        }
    },
    beforeRouteEnter: ((to, from, next)=> {
        console.log('antes de entrar...');
        setTimeout( (vm)=>{
            next((vm) => {
                vm.numero = Math.floor(Math.random() * 1000);
            });
                        
        }, 2000);
    }),
}
</script>