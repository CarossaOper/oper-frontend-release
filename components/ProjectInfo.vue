<template>
  <div class="h-fit">   
      <div class="hero-bg w-full"><span></span></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo'
}
</script>

<style scoped>
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