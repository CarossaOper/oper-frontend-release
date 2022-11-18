<template>
  <p class="text-white font-vollkornsc font-black text-8xl px-5 text-shadow word-spacing-break text-center">
    {{ title }}
  </p>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: String
  },
})
</script>

<style scoped>

.text-stroke {
  -webkit-text-stroke: 0.3rem white
}
.text-shadow {
  text-shadow: 0px 0px 20px black
}
</style>
