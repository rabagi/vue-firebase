<template>
    <main>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Giovanny Ramírez Barrera</h2>
        <h5>rabagi@outlook.com</h5>
        <router-link :to="'/equipo/' + $route.params.id +'/fotos'">Fotos</router-link>
        <router-link :to="'/equipo/' + $route.params.id +'/bio'">Bio</router-link>
        <router-view></router-view>
    </main>
</template>