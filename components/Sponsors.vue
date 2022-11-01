<template>
  <div class="h-[50vh] block w-11/12 mx-auto" id="sponsors">
    <div class="py-[17%] lg:py-[8%] block">
      <h1 class="font-vollkornsc text-center text-4xl mb-16 text-gray-700 font-bold underline">Unsere Unterstützer</h1>
      <Swiper style='--swiper-navigation-color: black' 
      class="-z-10" 
        :centeredSlides="true" :navigation="true"
        :modules="modules" :slides-per-view="1" :breakpoints="{1100: {slidesPerView: 3}}"
        :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange" :loop="true"
        :grabCursor="true" 
        >

        <swiper-slide class="">
          <SponsorLogo name="/sponsors/Hubauer.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/Biller.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/Hitzler-Ingenieure.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/Hubauer.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/Biller.png" />
        </swiper-slide>
        <swiper-slide class="">
          <SponsorLogo name="/sponsors/Hitzler-Ingenieure.png" />
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper';

import "swiper/css";

import "swiper/css/navigation";

// Now you can use Swiper

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {

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

