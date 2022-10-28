<template>
  <header class="font-vollkornsc fixed w-full mt-0 mb-0 h-screen lg:h-fit">
    <div class="mx-auto flex flex-wrap p-5 bg-white items-center flex-col md:flex-row justify-between">
      <div class="block">
        <NuxtLink class="title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <img src="../static/logo_bw_opera.png" alt="CarossaOper Logo"
            :class="{ 'h-14': !this.scrolled, 'h-14 lg:h-12': this.scrolled }" class="nav-transition">
        </NuxtLink>
      </div>
      <button class=" right-5 collapsed ml-auto lg:hidden block" type="button" v-on:click="extend">
        <div :class="{'hamburger-open': !this.collapsed}" class="hamburger-div">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>  
      <ul :class="{'w-full lg:w-fit lg:translate-x-0 lg:mt-0': this.scrolled, 'lg:mt-32 lg:w-[80%] lg:-translate-x-[12%]': !this.scrolled,
          'translate-x-full': collapsed, 'translate-x-0': !collapsed}" 
          class="lg:flex w-full nav-transition nav-transition mt-8 hidden">
        <li :class="{ 'lg:mx-5': this.scrolled }" class="mx-auto my-8">
          <NuxtLink class="text-2xl lg:text-base" to="/#termine">Termine &amp; Karten</NuxtLink>
        </li>
        <li :class="{ 'lg:mx-5': this.scrolled }" class="mx-auto my-8">
          <a class="text-2xl lg:text-base" href="https://blog.carossa-oper.de/">Neuigkeiten</a>
        </li>
        <li :class="{ 'lg:mx-5': this.scrolled }" class="mx-auto my-8">
          <NuxtLink class="text-2xl lg:text-base" to="/about">Über Uns</NuxtLink>
        </li>
        <li :class="{ 'lg:mx-5': this.scrolled }" class="mx-auto my-8">
          <a class="text-2xl lg:text-base">Unsere Unterstützer</a>
        </li>
        <li :class="{ 'lg:mx-5': this.scrolled }" class="mx-auto my-8">
          <a class="text-2xl lg:text-base" href="https://www.carossa-gymnasium.de/">Die Schule</a>
        </li>
      </ul>
    </div>
    <ul :class="{'translate-x-full': collapsed, 'translate-x-0': !collapsed}" 
          class="lg:hidden w-full nav-transition block nav-transition pl-5 pt-8 bg-white h-screen">
        <li class="mx-auto my-8" v-on:click="extend">
          <NuxtLink class="text-2xl lg:text-base" to="/#termine">Termine &amp; Karten</NuxtLink>
        </li>
        <li class="mx-auto my-8" v-on:click="extend">
          <a class="text-2xl lg:text-base" href="https://blog.carossa-oper.de/">Neuigkeiten</a>
        </li>
        <li class="mx-auto my-8" v-on:click="extend">
          <NuxtLink class="text-2xl lg:text-base" to="/about">Über Uns</NuxtLink>
        </li>
        <li class="mx-auto my-8" v-on:click="extend">
          <a class="text-2xl lg:text-base">Unsere Unterstützer</a>
        </li>
        <li class="mx-auto my-8" v-on:click="extend">
          <a class="text-2xl lg:text-base" href="https://www.carossa-gymnasium.de/">Die Schule</a>
        </li>
      </ul>
  </header>
</template>



<script>
export default {
  name: 'Navbar',
  data() {
    return {
      collapsed: true,
      scrolled: false,
      font_size: 18,
      logo_height: 48,
      y_latch_row: 200,
      row: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 80) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    extend() {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>

<style scoped>
.nav-transition {
  transition: all 400ms ease;
}

.m-nav {
  margin-right: 5rem;
  margin-left: 5rem;
}

.hamburger-div {
  width: 2rem;
  height: 2.5rem;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.hamburger-div span {
  display: block;
  position: absolute;
  height: 0.2rem;
  width: 100%;
  background: black;
  border-radius: 0.5rem;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.hamburger-div span:nth-child(1) {
  top: 0px;
}

.hamburger-div span:nth-child(2), .hamburger-div span:nth-child(3) {
  top: 0.7rem;
}

.hamburger-div span:nth-child(4) {
  top: 1.4rem;
}

.hamburger-open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.hamburger-open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger-open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.hamburger-open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>