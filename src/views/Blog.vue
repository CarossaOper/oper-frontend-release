<template>
    <div>
        <Nav/>

        <div class="container blog">
            <router-link to="/" exact><svg class="w-6 h-6 pt-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path></svg></router-link>
            <div class="divider"><h1 class="py-2">News</h1></div>
            <ul>
                <li v-for="post in posts.slice().reverse()" :key="post._id">
                    <BlogListing :id="post._id" :title="post.title" :author="post.author" :short_content="shortenString(post.content, 400)"/>
                </li>
            </ul>
        </div>

        <Footer/>
    </div>
</template>

<script>

const axios = require("axios").default

import Nav from "../components/Nav.vue"
import BlogListing from '../components/BlogListing.vue'
import Footer from "../components/Footer.vue"

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
        Footer
    },
    data() {
        return {
            posts: []
        }
    },
    async created() {
        this.posts = await getPosts("http://localhost:8081/api/blog")
        console.log(this.posts)
    },
    methods: {
        shortenString(str, strlen) {
            let truncated = str.slice(0, strlen)
            return `${truncated}...`
        }
    }
}
</script>

<style scoped>

Nav {
    background-image: url("../assets/hero-bg.jpeg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
}

svg {
    color: #5482B6;
    height: 75px;
}

h1 {
    font-family: 'Oswald', sans-serif;
    color: #5482B6;
    text-transform: uppercase;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
}

a {
    font-family: 'Shippori Antique B1', sans-serif;
    text-decoration: none;
    color: black;
}

</style>