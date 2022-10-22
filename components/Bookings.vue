<template>
    <div>
        <h1 class="font-vollkornsc text-center text-3xl mt-12 mb-8" id="termine">Termine &amp; Karten</h1>
        <BookingEntry day="Mo" :date="23" month="Jan" :sold="false" class="mb-5" />
        <BookingEntry day="Di" :date="24" month="Jan" :sold="false" class="my-5" />
        <BookingEntry day="Mi" :date="25" month="Jan" :sold="false" class="my-5" />
        <BookingEntry day="Do" :date="26" month="Jan" :sold="true" class="my-5" />
    </div>
</template>

<script>
export default {
    name: 'Bookings',
}
</script>
