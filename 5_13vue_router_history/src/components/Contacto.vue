<template>
    <section>
        <h2>Contacto</h2>
        <p>Contactarme ... </p>
        <!-- <h5>{{ $route.params.newsletter }}</h5> -->
        <h5>{{ newsletter }}</h5>
        <!-- <template v-if="$route.params.newsletter === 'true'"> -->
        <!-- <template v-if="newsletter === 'true'"> -->
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
    props: ['newsletter']
}
</script>