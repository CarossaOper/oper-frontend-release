<template>
    <div class="w-full h-screen bg-hero">

    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        props: {
            name: String
        }
    },
})
</script>

<style scoped>

.bg-hero {
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
}

</style>
