<template>

<Nav />

<div v-if="loading" class="loading-status d-flex justify-content-center">
    <div class="spinner-border my-5" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</div>

<div class="container my-5">
    <BlogPost :Post="post"/>

    <router-link to="/blog" exact>&#8592; Zurück</router-link> 
</div>

<Footer/>

</template>

<script>
import Nav from "../components/Nav.vue"
import BlogPost from "../components/BlogPost.vue"
import Footer from "../components/Footer.vue"

const axios = require("axios").default

export default {
    name: "Post",
    components: {
        Nav,
        BlogPost,
        Footer
    },

    data() {
        return {
            post: null,
            loading: false,
        }
    },

    watch: {
        '$route': 'getPost'
    },
    
    async created() {
        this.post = this.getPost()
    },

    methods: {
        async getPost() {
            let endpoint = `/api/post/${this.$route.params.id}`
            this.loading = true
            try {
                let response = await axios.get(endpoint);
                console.log(response.data.Post[0])
                this.post = response.data.Post[0]
            } catch (error) {
                console.error(error);
            }
            this.loading = false
        }
    }
}
</script>

<style scoped>

.spinner-border {
    width: 5rem;
    height: 5rem;
}

a {
    text-decoration: none;
    color: black;
    font-family: 'Shippori Antique B1', sans-serif;
}

Footer {
    Width: 100%;
    bottom: 0;
}

</style>