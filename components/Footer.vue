<template>
    <div class="w-full bg-black py-8 text-white font-noto">
        <div class="flex flex-row justify-around container mx-auto mt-3">
            <ul class="text-xs flex flex-col items-center">
                <li><a href="#">Nutzungsbedingungen</a></li>
                <li><a href="#">Datenschutz</a></li>
                <li><a href="#">Impressum</a></li>
            </ul>
            <NuxtLink to="/">
                <img src="../static/logo_wb_opera.png" alt="CarossaOper Logo" class="w-28">
            </NuxtLink>
            <ul class="text-xs flex flex-col items-center">
                <li><a href="#">Termine &amp; Karten</a></li>
                <li><a href="#">Neuigkeiten</a></li>
                <li><a href="#">Über Uns</a></li>
            </ul>
        </div>
        <div class="w-fit mx-auto my-5">
            <NuxtLink to="/">
                <img src="../static/Instagram_Glyph_White.png" alt="Instagram" class="h-8 w-8">
            </NuxtLink>
        </div>
        <p class="mx-auto w-fit text-xs">© 2022 P-Seminar “Amateur meets Profis” des Hans-Carossa-Gymnasiums Landshut</p>
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
