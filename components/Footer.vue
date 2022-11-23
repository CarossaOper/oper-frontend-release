<template>
  <div class="h-fit w-full bg-black text-white font-noto block bottom-0">
    <div class="block py-16">
      <div class="flex flex-row justify-around container mx-auto pt-[1%]">
        <ul class="text-sm flex flex-col items-center">
          <li class="my-1"><a href="#">Nutzungsbedingungen</a></li>
          <li class="my-1"><a href="#">Datenschutz</a></li>
          <li class="my-1"><a href="#">Impressum</a></li>
        </ul>
        <!--//TODO: Weißes Logo erstellen-->
        <NuxtLink to="/">
          <img src="~~/assets/img/logo_wb_opera.png" alt="CarossaOper Logo" class="w-28">
        </NuxtLink>
        <ul class="text-sm flex flex-col items-center">
          <li class="my-1"><a href="#">Termine &amp; Karten</a></li>
          <li class="my-1"><a href="#">Neuigkeiten</a></li>
          <li class="my-1"><a href="#">Über Uns</a></li>
        </ul>
      </div>
      <div class="w-fit mx-auto my-5">

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
