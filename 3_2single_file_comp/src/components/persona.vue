<template>
</template>

<script>
    import axios from 'axios';
    export default{
        mounted(){
            axios.get('https://randomuser.me/api/')
            .then((respuesta) =>{
                this.persona = respuesta.data.results[0];
            })
        },
        data(){
            return {
                persona: null,
            }
        },
        

    }
</script>

<style>
</style>