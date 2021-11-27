<template>
    <div class="container">
        <p>{{date}}</p>
        <h3>{{title}}</h3>
        <p>{{short_content}}</p>
        <router-link :to="'/blog/' + id" exact>Weiter &#8594;</router-link>
    </div>
</template>

<script>
export default {
    name: 'BlogListing',
    props: {
        id: Number,
        title: String,
        date: String,
        short_content: String,
    }
}
</script>

<style scoped>

h3 {
    font-family: 'Oswald', sans-serif;
    color: #960B0B;
}

a {
    text-decoration: none;
    color: black;
    font-family: 'Shippori Antique B1', sans-serif;
}

</style>