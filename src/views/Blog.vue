<template>
    <Nav/>
    <div class="container blog">
        <h1 class="py-5">Blog</h1>
        <ul>
            <li v-for="post in posts.slice().reverse()" :key="post._id">
                <BlogListing :id="post._id" :title="post.title" :date="post.date" :short_content="post.content.substr(0, 100).concat('...')"/>
            </li>
        </ul>
        <a href="#">&#8592; Home</a>
    </div> 
</template>

<script>

const axios = require("axios").default

import Nav from "../components/Nav.vue"
import BlogListing from '../components/BlogListing.vue'

async function getPosts (endpoint) {
    console.log(`Retrieving posts from ${endpoint}`)
    try {
        const response = await axios.get(endpoint);
        console.log(response.data.blog);
        return response.data.blog
    } catch (error) {
        console.error(error);
    }
}

export default {
    name: "Blog",
    components: {
        Nav,
        BlogListing,
    },
    data() {
        return {
            posts: []
        }
    },
    async created() {
        this.posts = await getPosts("/api/blog")
        console.log(this.posts)
    }
}
</script>

<style scoped>

h1 {
    font-family: 'Oswald', sans-serif;
    color: #960B0B;
}

ul {
    list-style: none;
}

li {
    margin-bottom: 50px;
}

a {
    font-family: 'Shippori Antique B1', sans-serif;
    text-decoration: none;
    color: black;
}

</style>