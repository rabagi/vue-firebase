<template>
    <section>
    <h2>Contacto</h2>
    <button @click="volverHome()">regresar a home</button>
    </section>
</template>

<script>
    export default{
        created(){
            setTimeout(()=> this.$router.push('/'), 1000)
        },
        methods:{
            volverHome(){
                this.$router.push('/', ()=> console.log('ruta cambiada')); 
            }
        }
    }
</script>