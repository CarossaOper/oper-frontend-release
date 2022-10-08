<template>
  <div class="w-full">
    <BackToTop />
    <nuxt-img class="mt-5 ml-5 max-h-20" src="/logo_bw_opera.png" alt="Die Carossa Oper Logo"/>
    <div class="container mx-auto">
      <Navbar class="mt-4 mb-6"/>
      <div class="hero-bg"><span></span></div>
      <Bookings />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.hero-bg {
  background-image: url("@/static/hero-bg.jpeg");
  height: 80vh;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  filter: contrast(80%*100vh);
}
</style>
