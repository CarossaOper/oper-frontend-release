<template>
    <div :class="{trans: hidden}" @click="scrollToTop()" class="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'BackToTop',
    data() {
        return {
            hidden: true,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scroll)
    },
    unmounted() {
        windows.removeEventListener("scroll", this.scroll)
    },
    methods:  {
        scroll() {
            console.log(this.hidden + ' | y: ' + window.scrollY)
            if (window.scrollY > 300) {
                this.hidden = false;
            } else {
                this.hidden = true;
            }
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.toTop {
    position: fixed;
    width: 40px;
    height: 40px;
    right: 1vw;
    bottom: 2vh;
    border: 2px solid #000000;
    cursor: pointer;
    z-index: 99;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1s background-color 1s ease-in-out;
}
.toTop:hover{
    background-color:#000000;
    color: #ffffff
}
.trans {
    opacity: 0.0;
}
</style>