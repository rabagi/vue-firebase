<template>
    <main>
        <h1>Nuestro equipo: </h1>
        <router-view></router-view>
        <router-view name="bio"></router-view>
        <router-view name="fotos"></router-view>

        <hr>
    <router-link to ="/">Home</router-link>
    </main>
</template>
