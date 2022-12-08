<template>
  <div class="h-fit w-full bg-black text-white font-noto block bottom-0">
    <div class="block py-16">
      <div class="flex flex-col-reverse lg:flex-row justify-around container mx-auto pt-[1%]">
        <ul class="text-sm flex flex-col items-center">
          <li class="my-1"><a href="/nutzung">Nutzungsbedingungen</a></li>
          <li class="my-1"><a href="#">Datenschutz</a></li>
          <li class="my-1"><a href="/impressum">Impressum</a></li>
        </ul>
        <NuxtLink to="/" class="mx-auto">
          <img src="~~/assets/img/logo_bw.png" alt="CarossaOper Logo" class="w-20">
        </NuxtLink>
        <ul class="text-sm flex flex-col items-center">
          <li class="my-1"><a href="/#termine">Termine &amp; Karten</a></li>
          <li class="my-1"><a href="https://blog.carossa-oper.de/">Neuigkeiten</a></li>
          <!--//TODO: Change this once About us is available-->
          <li class="my-1"><a href="https://blog.carossa-oper.de/">Über Uns</a></li>
        </ul>
      </div>
      <div class="w-fit mx-auto my-5">

      </div>
      <p class="mx-auto w-fit text-xs text-center">© 2022 P-Seminar “Amateur meets Profis” des Hans-Carossa-Gymnasiums Landshut</p>
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
