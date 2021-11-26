<template>
    <div class="container blog-entry">
        <div class="info d-flex">
            <p>{{Post.author}}</p>
            <p>{{Post.date}}</p>
        </div> 
        <h2 class="highlight-bold">{{Post.title}}</h2> 
        <p>{{Post.content}}</p>
        <p class="highlight-bold">{{Post.meta.views}} Aufrufe</p>
        <router-link :to="'/blog/'+ Post.id" exact>Mehr &#8594;</router-link>
    </div>
</template>

<script>

export default {
    name: 'BlogPost',
    props: {
        Post: {
            id: Number,
            title: String,
            author: String,
            date: String,
            content: String,
            meta: {
                views: {
                    type: Number,
                    default: 0
                }
            }
        }
    }
}

</script>

<style scoped>
.highlight-bold {
    font-family: 'Oswald', sans-serif;
    color: #960B0B;
}

.blog-entry .info p {
    margin-right: 1em;
}

router-link {
    font-family: 'Shippori Antique B1', sans-serif;
}

</style>
