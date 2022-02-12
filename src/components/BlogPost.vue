<template>
<div></div>
</template>

<script>

export default {
    name: 'BlogPost',
    props: {
        Post: {
            _id: Number,
            title: String,
            author: String,
            date: String,
            content: String,
        }
    }
}

</script>

<style scoped>

</style>
