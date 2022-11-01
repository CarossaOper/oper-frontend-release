<template>
  <div class="min-h-screen block bg-[#f2f2f2]" id="termine">
    <div class="py-[17%] lg:py-[8%] block">
      <h1 class="font-vollkornsc text-center text-4xl mb-16 text-gray-700 font-bold underline">Termine &amp; Karten</h1>
      <BookingEntry day="Mo" :date="23" month="Jan" :sold="false" class="mb-5" />
      <BookingEntry day="Di" :date="24" month="Jan" :sold="false" class="my-5" />
      <BookingEntry day="Mi" :date="25" month="Jan" :sold="false" class="my-5" />
      <BookingEntry day="Do" :date="26" month="Jan" :sold="true" class="my-5" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bookings',
}
</script>
