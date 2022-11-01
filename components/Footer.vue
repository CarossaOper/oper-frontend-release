<template>
  <div class="h-[15rem] w-full bg-black text-white font-noto block">
    <div class="block py-[2%]">
      <div class="flex flex-row justify-around container mx-auto pt-[1%]">
        <ul class="text-sm flex flex-col items-center">
          <li><a href="#">Nutzungsbedingungen</a></li>
          <li><a href="#">Datenschutz</a></li>
          <li><a href="#">Impressum</a></li>
        </ul>
        <!--//TODO: Weißes Logo erstellen-->
        <NuxtLink to="/">
          <img src="~~/assets/img/logo_wb_opera.png" alt="CarossaOper Logo" class="w-28">
        </NuxtLink>
        <ul class="text-sm flex flex-col items-center">
          <li><a href="#">Termine &amp; Karten</a></li>
          <li><a href="#">Neuigkeiten</a></li>
          <li><a href="#">Über Uns</a></li>
        </ul>
      </div>
      <div class="w-fit mx-auto my-5">
        <NuxtLink to="/">
          <img src="~~/assets/img/Instagram_Glyph_White.png" alt="Instagram" class="h-8 w-8">
        </NuxtLink>
      </div>
      <p class="mx-auto w-fit text-xs">© 2022 P-Seminar “Amateur meets Profis” des Hans-Carossa-Gymnasiums Landshut</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
ul a {
  text-decoration: underline;
}
</style>
