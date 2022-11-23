<template>
  <div class="h-fit w-fit flex py-6 pl-6">
    <NuxtLink class="h-fit w-fit py-auto align-center " to="/">
      <img src="~~/assets/img/logo_bw_opera.png" alt="CarossaOper Logo" class="transition-all duration-200 h-12 w-auto" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    scrolled: Boolean,
  }
}
</script>