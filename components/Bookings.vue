<template>
    <div>
        <h1 class="font-vollkornsc text-center text-3xl mt-12 mb-8" id="termine">Termine &amp; Karten</h1>
        <BookingEntry day="Mi" :date="26" month="Jan" :sold="false" class="mb-5" />
        <BookingEntry day="Do" :date="27" month="Jan" :sold="true" class="my-5" />
        <BookingEntry day="Fr" :date="28" month="Jan" :sold="false" class="my-5" />
        <BookingEntry day="Sa" :date="29" month="Jan" :sold="true" class="my-5" />
    </div>
</template>

<script>
export default {
    name: 'Bookings',
}
</script>
