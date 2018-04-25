<template>
  <div>
    <elemento tipo="main">Hola mundo main</elemento>
    <elemento tipo="section">Hola mundo section</elemento>
    <elemento tipo="div">Hola mundo div</elemento>
    <elemento tipo="footer">Hola mundo footer</elemento>
  </div>
</template>

<script>
import elemento from './components/elemento.vue';
export default {
  components: {elemento}
}
</script>

<style>
</style>
