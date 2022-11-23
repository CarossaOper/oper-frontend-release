<template>
  <div class="my-auto w-fit h-fit inline-block align-middle relative mx-auto transition-all duration-200 px-4">
    <NuxtLink class="h-fit w-fit navlink text-2xl lg:text-base" :to="to">{{ label }}</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
    label: String,
    scrolled: Boolean,
  }
}
</script>

<style scoped>
.navlink::after {
    content: '';
    display: block;
    width: 0;
    height: 0.1rem;
    background: black;
    transition: width .2s;
}

.navlink:hover::after {
  width: 100%;
  transition: ease .2s;
}
</style>