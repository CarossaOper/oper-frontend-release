<template>
    <Nav/>
    <div class="container blog">
        <h1 class="py-5">Blog</h1>
        <ul>
            <li v-for="post in posts.slice().reverse()" :key="post.id">
                <BlogListing :id="post.id" :title="post.title" :date="post.date" :short_content="post.content.substr(0, 100).concat('...')"/>
            </li>
        </ul>
        <a href="#">&#8592; Home</a>
    </div> 
</template>

<script>

import Nav from "./components/Nav.vue"
import BlogListing from './components/BlogListing.vue'

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
    created() {
        this.posts = [
            {
                id: 1,
                title: 'Lorem ipsum dior',
                author: 'Louis Karan',
                date: '20/11/2021',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                meta: {
                  views: 10
                }        
            },
            {
                id: 2,
                title: 'Lorem ipsum dior 2',
                author: 'Louis Karan',
                date: '23/11/2021',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                meta: {
                  views: 10
                }
            }
        ] 
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