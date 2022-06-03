<template>
    <BlogListing :slug="latest_post.slug" :title="latest_post.title" :authors="latest_post.authors" :short_content="latest_post.shortContent"/>
</template>

<script>

import BlogListing from './BlogListing.vue'
import GhostContentAPI from '@tryghost/content-api'

class Post {
    constructor(slug, title, shortContent, authors, lastEditTime) {
        this.slug = slug;
        this.title = title;
        this.shortContent = shortContent;
        this.authors = authors;
        this.lastEditTime = lastEditTime;
    }
}

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '6ee0111f27186d49b8f7484183',
  version: "v5.0"
});

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
        let posts = await this.getRecentPost().then(result => result)
        let post = posts[0]
        let authors = post.authors
        let authorsAsString = ""
        authors.forEach(author => {
            authorsAsString += "" + author.name
        });
        this.latest_post = new Post(post.slug, post.title, this.shortenString(post.html, 400), authorsAsString, post.created_at);
    },

    watch: {
        '$route': 'getRecentPost'
    },

    methods: {
        async getRecentPost() {
            return api.posts.browse({limit: 1, include: 'tags,authors'})
            .catch((err) => {
                console.error(err);
            });
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
