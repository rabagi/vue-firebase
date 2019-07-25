<template>
    <main>
        <h1>Home</h1>
        <router-link :to="'/equipo/'+id">Equipo</router-link>
    </main>
</template>

<script>
    export default{
        data(){
            return {
                id: 'rabagi'
            }
        }
    }
</script>