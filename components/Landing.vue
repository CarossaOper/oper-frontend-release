<template>
  <div class="w-full">
    <BackToTop />
    <Navbar class="mt-4 mb-6"/>
    <div class="height-full">   
        <div class="hero-bg w-full"><span></span></div>
        <Bookings />
      </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  name: 'Landing'
}
</script>

<style scoped>
.height-full {
  height: 100vh;
}
.hero-bg {
  background-image: url("@/static/hero-bg.jpeg");
  height: 100vh;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  filter: contrast(80%*100vh);
}
</style>
