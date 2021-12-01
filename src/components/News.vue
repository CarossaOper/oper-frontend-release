<template>
    <BlogPost :Post="latest_post"/>
    <router-link to="/blog" exact>Mehr &#8594;</router-link>
</template>

<script>

import BlogPost from './BlogPost.vue'
const axios = require("axios").default

export default {
    name: 'News',
    components: {
        BlogPost
    },

    data() {
        return {
            latest_post: {},
            loading: false
        }
    },

    async created() {
        this.latest_post = await this.getRecentPost()
    },

    watch: {
        '$route': 'getRecentPost'
    },

    methods: {
        async getRecentPost() {
            let endpoint = "/api/latest"
            this.loading = true
            try {
                const response = await axios.get(endpoint);
                console.log(response);
                return response.data.Post
            } catch (error) {
                console.error(error);
            }
            this.loading = false
        }
    }
}
</script>

<style>

p {
  font-family: 'Shippori Antique B1', sans-serif;
  font-size: 1em;
}
</style>
