<template>
<BlogListing/>
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

<style scoped>

</style>
