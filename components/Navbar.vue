<template>
    <header class="flex md:block fixed w-full mt-0 mb-0 bg-white justify-between items-center px-4 md:px-12 transition-all duration-200">
        <div class="w-full py-8">
            <a>
                <img src="../static/logo_bw_opera.png" alt="CarossaOper Logo" class="h-12 md:h-">
            </a>
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
                  :class="{'translate-x-full': collapsed, 'translate-x-0': !collapsed}">
                    <li class="py-4 md:mx-auto"><a href="#termine">Termine &amp; Karten</a></li>
                    <li class="py-4 md:mx-auto"><a>Neuigkeiten</a></li>
                    <li class="py-4 md:mx-auto"><a>Über Uns</a></li>
                    <li class="py-4 md:mx-auto"><a>Unsere Unterstützer</a></li>
                    <li class="py-4 md:mx-auto"><a>Die Schule</a></li>
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
        }
    },
    methods: {
        extend() {
            this.collapsed = !this.collapsed
        },
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