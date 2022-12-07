<template>
  <header class="font-vollkornsc fixed w-full mt-0 mb-0 h-screen lg:h-fit z-10 nav-transition" :class="{ 'z-30': !collapsed }">
    <nav class="block h-fit mx-auto justify-between">
      <NavHomeLink class="hidden lg:flex" />
      <div class="desktop-nav hidden lg:flex bg-white lg:-mt-24">
        <NavBarDesktop :scrolled="scrolled">
          <NavLinkDesktop :scrolled="scrolled" label="Termine &amp; Karten" to="/#termine" />
          <NavLinkDesktop :scrolled="scrolled" label="Neuigkeiten" to="https://blog.carossa-oper.de/" />
          <!--<NavLinkDesktop :scrolled="scrolled" label="Über Uns" to="/about" />-->
          <NavLinkDesktop :scrolled="scrolled" label="Unsere Unterstützer" to="/#sponsors" />
          <NavLinkDesktop :scrolled="scrolled" label="Die Schule" to="https://www.carossa-gymnasium.de/" />
        </NavBarDesktop>
      </div>
      <div class="mobile-nav flex lg:hidden bg-white">
        <NavHomeLink />
        <button class="mr-4 collapsed lg:hidden inline-block w-fit h-fit my-auto ml-auto" type="button" v-on:click="extend()">
          <div :class="{ 'hamburger-open': !collapsed }" class="hamburger-div">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <NavBarMobile :class="{ 'translate-x-full': collapsed, 'translate-x-0': !collapsed }">
        <NavLinkMobile label="Termine &amp; Karten" to="/#termine" v-on:click="extend()"/>
        <NavLinkMobile label="Neuigkeiten" to="https://blog.carossa-oper.de/" v-on:click="extend()"/>
        <!--<NavLinkMobile label="Über Uns" to="/about"/>-->
        <NavLinkMobile label="Unsere Unterstützer" to="/#sponsors" v-on:click="extend()"/>
        <NavLinkMobile label="Die Schule" to="https://www.carossa-gymnasium.de/" v-on:click="extend()"/>
      </NavBarMobile>
      <div class="w-28 h-14 inline-block align-center"></div>
    </nav>
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

.translate-nav-middle {
  transform: translateX(calc(100vh / 2 - 100% / 2))
}

.translate-nav-right {
  transform: translateX(calc(100vw / 2 - (60vw / 2) - 4rem));
}

.m-nav {
  margin-right: 5rem;
  margin-left: 5rem;
}

.hamburger-div {
  width: 2rem;
  height: 1.7rem;
  position: relative;
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

.hamburger-div span:nth-child(2),
.hamburger-div span:nth-child(3) {
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