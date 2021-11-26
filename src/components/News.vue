<template>
    <BlogPost :Post="latest_post"/>
</template>

<script>

import BlogPost from './BlogPost.vue'

export default {
    name: 'News',
    components: {
        BlogPost
    },
    data() {
        return {
            latest_post: {
                id: 0,
                title: '',
                author: '',
                date: '',
                content: '',
                meta: {
                    views: 0
                }
            }
        }
    },
    created() {
        this.latest_post = {
            id: 1,
            title: 'Lorem ipsum dior',
            author: 'Louis Karan',
            date: '20/11/2021',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            meta: {
                views: 10
            }
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
