<template>
  <div class="h-fit w-fit mx-auto my-auto">
    <img class="max-h-[5rem] max-w-[70%] my-auto mx-auto" :src="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
}
</script>

<style scoped>

</style>
