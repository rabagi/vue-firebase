<template>
  <div id="app">
    <h2>Welcome</h2>
    <section>
      <button @click="cambiar">Cambiar auth</button>
      <router-view></router-view>
    </section>    
  </div>
</template>

<script>
import{mapMutations} from 'vuex';
export default {
  methods: mapMutations(['cambiar'])
}
</script>

<style>

</style>
