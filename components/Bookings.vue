<template>
  <div class="min-h-screen block bg-[#f2f2f2]" id="termine">
    <div class="py-[17%] lg:py-[8%] block">
      <h1 class="font-vollkornsc text-center text-3xl mb-2 text-gray-700 font-bold underline">Termine &amp; Karten</h1>

      <div v-if="!sale" class="border-black border-y py-2 bg-neutral-200 mb-10">
        <div class="w-11/12 mx-auto">
          <div>

          </div>
          <h1 class="font-bold font-vollkornsc w-fit mx-auto">Kartenvorverkauf beginnt in</h1>
          <h1 class="font-noto text-3xl font-bold mx-auto w-fit my-3" id="countdown">{{timestring}}</h1>
          <p class="font-noto mx-auto w-fit">am 12.12.2022 um 18.00</p>
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
  },
  data () {
    return {
      timestring: '',
    }
  },
  methods: {
    countdown() {
      var target = new Date("Dec 12, 2022 18:00:00").getTime();
      setInterval(() => {
        var seconds = Math.floor((target - Date.now()) / 1000);
        var delta_hours = Math.floor(seconds/(60*60));
        var delta_minutes = Math.floor((seconds-(delta_hours*60*60))/60);
        var delta_seconds = Math.floor(seconds-(delta_hours*60*60)-(delta_minutes*60));
        this.timestring = `${String(delta_hours).padStart(2, '0')}h ${String(delta_minutes).padStart(2, '0')}min ${String(Math.floor(seconds-(delta_hours*60*60)-(delta_minutes*60))).padStart(2, '0')}s`;
      }, 1000);
    },
  },
  beforeMount() {
    this.countdown();
  }
}
</script>
