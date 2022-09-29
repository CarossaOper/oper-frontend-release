<template>
<div class="post-wrapper">
    <div class="post-inner">
        <h1>{{title}}</h1>
        <h6>von {{authors}}</h6> 
        <article v-html="short_content"></article>
        <a :href="'http://blog.carossa-oper.de/' + slug">mehr lesen...</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'BlogListing',
    props: {
        id: String,
        slug: String,
        title: String,
        authors: String,
        short_content: String,
    }
}
</script>

<style scoped>
.post-wrapper {
    background-color: #F0F0F0;
    font-family: 'Oswald', sans-serif;
    width: 100%;
}

.post-inner {
    padding: 30px;

    display: flex;
    flex-direction: column;

    width: 100%;
    overflow: hidden;
}

h1 {
    text-transform: uppercase;
    font-weight: 200;
    color: #5482B6;
}

article {
    font-weight: 200;
    font-size: 20px;
}

a {
    text-decoration: none;
    color: #5482B6;
    font-weight: 700;
}
</style>