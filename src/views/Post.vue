<template>

<Nav />

<BlogPost />

</template>

<script>
import computed from "vue"
import useRoute from "vue-router"

import Nav from "../components/Nav.vue"
import BlogPost from "../components/BlogPost.vue"

async function getPost(endpoint) {
    try {
        const response = await axios.get(endpoint);
        console.log(response.data);
        return response.data.post
    } catch (error) {
        console.error(error);
    }
}

export default {
    name: "Post",
    components: {
        Nav,
        BlogPost
    },

    async setup() {
        const route = useRoute()
        const post = computed(() => {
            await getPost(`/api/post/${route.params.id}`)
        })
    }
}
</script>

<style scoped>

</style>