<template>
    <div :class="{trans: hidden}" class="toTop">
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
    border: 2px solid black;
    cursor: pointer;
    z-index: 99;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 1s background-color 1s ease-in-out;
}

.toTop:hover{
    background-color: black;
    color: #ffffff;
}

.trans {
    opacity: 0.0;
}
</style>