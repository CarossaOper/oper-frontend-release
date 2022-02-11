<template>
    <div class="container">
        <h1 class="center">D: Ein Fehler ist aufgetreten</h1>
        <p class="center">Leider konnten wir die von Ihnen angeforderte Seite nicht finden.</p>
        <router-link class="center" to="/" exact>Zurück zur Hauptseite</router-link>
    </div>    
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style scoped>

.container {
    margin-top: 30vh;
}

h1 {
    font-family: 'Oswald', sans-serif;
    color: #960B0B;
}

a {
    color: #960B0B;
    font-size: 1.5rem;
}
</style>