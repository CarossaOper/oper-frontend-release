<template>
  <div class="min-h-[50vh] înline-block w-11/12 mx-auto relative z-20" id="sponsors">
    <div class="py-[17%] lg:py-[8%] block">
      <h1 class="font-vollkornsc text-center text-4xl mb-16 text-gray-700 font-bold underline">Unsere Unterstützer</h1>
      <swiper style='--swiper-navigation-color: black' 
        class=""
        navigation
        :pagination="{ clickable: true }"
        :modules="modules"
        :slides-per-view="1"
        :breakpoints="{ 1100: { slidesPerView: 3 } }"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :grabCursor="true"
        >

        <swiper-slide class="">
          <SponsorLogo name="/sponsors/0.jpg" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/10.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/20.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/30.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/40.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/50.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/60.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/70.jpg" />
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.swiper-button-prev {
  color: black;
}
</style>

