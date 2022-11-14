<template>
  <div class="min-h-screen block bg-[#f2f2f2]" id="termine">
    <div class="py-[17%] lg:py-[8%] block">
      <h1 class="font-vollkornsc text-center text-4xl mb-2 text-gray-700 font-bold underline">Termine &amp; Karten</h1>

      <div v-if="!sale" class="border-black border-y py-2 bg-neutral-200 mb-10">
        <div class="w-11/12 mx-auto">
          <div>

          </div>
          <h1 class="font-bold font-vollkornsc">Kartenvorverkauf</h1>
          <p class="font-noto">Leider können wir Ihnen aktuell noch keine Karten verkaufen! Kehren Sie zu einem späteren Zeitpunkt zurück oder tragen Sie sich in unseren Newsletter ein, um stets auf dem Laufenden zu bleiben.</p>
        </div>
      </div>

      <BookingEntry day="Mo" :date="23" month="Jan" :status="0" class="mb-5" />
      <BookingEntry day="Di" :date="24" month="Jan" :status="0" class="my-5" />
      <BookingEntry day="Mi" :date="25" month="Jan" :status="0" class="my-5" />
      <BookingEntry day="Do" :date="26" month="Jan" :status="0" class="my-5" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bookings',
  props: {
    sale: Boolean,
  }
}
</script>
