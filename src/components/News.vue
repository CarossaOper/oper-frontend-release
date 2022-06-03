<template>
    <BlogListing :id="latest_post._id" :title="latest_post.title" :author="latest_post.author" :short_content="shortenString(this.latest_post.content, 400)"/>
</template>

<script>

import BlogListing from './BlogListing.vue'
const axios = require("axios").default

export default {
    name: 'News',
    components: {
        BlogListing
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
            let endpoint = "http://carossa-oper.de:8081/api/latest"
            this.loading = true
            try {
                const response = await axios.get(endpoint);
                console.log(response);
                return response.data.Post
            } catch (error) {
                console.error(error);
            }
            this.loading = false
        },
        shortenString(str, strlen) {
            let truncated = str.slice(0, strlen)
            return `${truncated}...`
        }
    }
}
</script>

<style scoped>

</style>
