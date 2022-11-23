<template>
  <div :class="{'w-[90%] mx-auto pt-28 pb-5': !scrolled, 'w-[80%] xl:w-[60%] 2xl:w-[50%] pt-9 pb-9 right-0 ml-auto': scrolled}" class="lg:flex transition-all duration-300 hidden">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    scrolled: Boolean,
  }
}

</script>