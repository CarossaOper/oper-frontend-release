<template>
    <div :class="{trans: hidden}" @click="scrollToTop()" class="toTop">
        <i class="fa fa-chevron-up center" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    name: "toTop",
    data() {
        return {
            hidden: true,
        }
    },
    created() {
        window.addEventListener("scroll", this.scroll)
    },
    unmounted() {
        window.removeEventListener("scroll", this.scroll)
    },
    methods:  {
        scroll() {
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