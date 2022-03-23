<template>
    <div class="post">
        <h1>{{Post.title}}</h1>
        <div class="d-flex flex-row flex-wrap justify-content-between">
            <h4>von {{Post.author}}</h4>
            <h4>{{Post.date}}</h4>
        </div>
        <article v-html="Post.content">
        </article>
    </div>
</template>

<script>

export default {
    name: 'BlogPost',
    props: {
        Post: {
            _id: Number,
            title: String,
            author: String,
            date: String,
            content: String,
        }
    }
}

</script>

<style scoped>
.post  {
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
}

h1 {
    color: #5482B6;
}

article {
    font-size: 20px;
}
</style>
