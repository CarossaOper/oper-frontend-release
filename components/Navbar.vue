<template>
    <div>
        <nav class="w-full">
            <button class="nav-toggle collapsed mx-auto xl:hidden block" type="button" v-on:click="extend">
                <svg :class="{hidden: !this.collapsed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg :class="{hidden: this.collapsed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mb-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="collapsing xl:block" :class="{hidden: this.collapsed}">
                <ul class="flex xl:flex-row flex-col justify-around font-vollkornsc text-lg">
                    <li class="mx-auto"><a href="#termine">Termine &amp; Karten</a></li>
                    <li class="mx-auto">Neuigkeiten</li>
                    <li class="mx-auto">Über Uns</li>
                    <li class="mx-auto">Unsere Unterstützer</li>
                    <li class="mx-auto">Die Schule</li>
                </ul>
            </div>
        </nav>
    </div>
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