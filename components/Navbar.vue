<template>
    <header
      class="flex fixed w-full mt-0 mb-0 bg-white justify-between px-4 md:px-12 transition-all duration-200"
      :class="{'flex-row': row, 'flex-col': !row, 'items-center': row}"
    >
        <div class="w-fit py-8">
            <NuxtLink to="/">
                <img src="../static/logo_bw_opera.png" alt="CarossaOper Logo" class="h-12 md:h-" :style="{ height: logo_height + 'px'  }">
            </NuxtLink>
        </div>
        <div>
            <nav class="relative">
                <button class=" right-5 nav-toggle collapsed mx-auto md:hidden block" type="button" v-on:click="extend">
                  <div :class="{open: !this.collapsed}" id="nav-icon3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                    <!----<svg :class="{hidden: !this.collapsed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg :class="{hidden: this.collapsed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>-->
                </button>
                <ul 
                class="fixed justify-center font-vollkornsc
                  left-0
                  right-0
                  min-h-screen
                  px-4
                  space-y-4
                  bg-white
                  text-black
                  transform
                  transition
                  duration-300
                  md:relative md:flex md:min-h-0 md:px-0 md:mt-0 md:space-y-0 md:translate-x-0 
                  text-sm
                  xl:text-lg
                  "
                  :class="{'translate-x-full': collapsed, 'translate-x-0': !collapsed}" 
                  :style="{ fontSize: font_size + 'px'  }"
                  >
                    <li class="py-4 md:mx-auto" :class="{'px-5': row}" v-on:click="extend"><a href="#termine">Termine &amp; Karten</a></li>
                    <li class="py-4 md:mx-auto" :class="{'px-5': row}"><a href="https://blog.carossa-oper.de/">Neuigkeiten</a></li>
                    <li class="py-4 md:mx-auto" :class="{'px-5': row}"><NuxtLink to="/about">Über Uns</NuxtLink></li>
                    <li class="py-4 md:mx-auto" :class="{'px-5': row}" v-on:click="extend"><a>Unsere Unterstützer</a></li>
                    <li class="py-4 md:mx-auto" :class="{'px-5': row}"><a href="https://www.carossa-gymnasium.de/">Die Schule</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!----<div>
        <nav class="w-full">
            <button class="nav-toggle collapsed mx-auto xl:hidden block" type="button" v-on:click="extend">
                <svg :class="{hidden: !this.collapsed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg :class="{hidden: this.collapsed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mb-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
        </nav>
    </div>-->
</template>



<script>
export default {
  name: 'Navbar',
  data() {
    return {
      collapsed: true,
      font_size: 18,
      logo_height: 48,
      y_latch_row: 200,
      row: false,
    }
  },
  beforeMount() {
    if(window.innerWidth > 1280) this.row = false
    else this.row = true
  },
  mounted() {
    window.addEventListener("scroll", this.scroll)
  },
  unmounted() {
    windows.removeEventListener("scroll", this.scroll)
  },
  methods: {
    extend() {
      this.collapsed = !this.collapsed
    },
    scroll() {
      if (window.innerWidth > 1280) {
        let font_bs = {y: 50, s: 18}
        let font_be = {y: 200, s: 15}
        let logo_bs = {y: 50, s: 48}
        let logo_be = {y: 200, s: 32}
        // linear function y = mx + t with scrollY as the x value and the font size as y
        this.font_size = this.lin(font_bs, font_be)
        this.logo_height = this.lin(logo_bs, logo_be)

        if(window.scrollY > this.y_latch_row) this.row = true
        else if (window.scrollY < this.y_latch_row) this.row = false

        console.log('y: ' + window.scrollY + ' | size: ' + this.font_size)
      }
    },
    lin(bs, be) {
      let offset = be.s - (be.s-bs.s)/(be.y-bs.y)*be.y 
      let val = (be.s-bs.s)/(be.y-bs.y)*window.scrollY + offset
      // only define the function for [be.s; bs.s]
      if (val < be.s) val = be.s
      else if (val > bs.s) val = bs.s
      
      return val
    }
  }
}

</script>
<style scoped>
#nav-icon3 {
  width: 25px;
  height: 20px;
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
#nav-icon3 span{
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: rgb(0, 0, 0);
  border-radius: 3px;
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

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 8px;
}

#nav-icon3 span:nth-child(4) {
  top: 16px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>