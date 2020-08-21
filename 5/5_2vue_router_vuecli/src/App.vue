<template>
  <section>
    <h1>Rutas con vue</h1>
        <router-link to="/">Portada</router-link>
        <router-link to="/contacto">Portada</router-link>
    <hr>
       
        <router-view></router-view>
  </section>
  
</template>

<script>
export default {

}
</script>