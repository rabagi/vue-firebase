<template>
    <section v-if="tipo='section'">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        props : ['tipo']
    }
</script>

<style>

</style>

