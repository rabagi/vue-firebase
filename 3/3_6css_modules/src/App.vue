<template>
  <div>
    <!-- <h1 :class="[$style.rojo]">Hola css module</h1> -->
    <h1 :class="{[$style.subrayado] : subrayado}">Hola css module</h1>
  </div> 
</template>

<script>
export default {
  data(){
    return { subrayado: false }
  }
};
</script>

<style module>
.subrayado {
  text-decoration: underline;
}
.rojo {
  color: red;
}
</style>