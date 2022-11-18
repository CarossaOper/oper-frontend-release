<template>
  <div class="float-left w-full">
    <div class="py-[3vh] w-fit">
      <NuxtLink class="navlink w-fit text-[3vh]" :to="to">{{ label }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
    label: String,
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