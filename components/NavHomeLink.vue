<template>
  <div class="h-fit w-fit flex p-5">
    <NuxtLink class="h-fit w-fit py-auto align-center " to="/">
      <img src="~~/assets/img/logo_bw_opera.png" alt="CarossaOper Logo" class="transition-all duration-200 h-12" />
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