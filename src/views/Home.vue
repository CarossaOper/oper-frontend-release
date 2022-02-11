<template>
    <Nav/>
    <toTop/>

    <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid"></div>
    </div>

    <div class="termin-btn center">
        <a class="btn" @click="scrollToElement('termine')">
            <span>Mehr</span>
        </a>
    </div>

    <div class="container termine" id="termine">
        <div class="divider"><h1>Termine</h1></div>
        <Dates date="Date.now()" time="19:00" location="Theaterzelt Landshut" sold="false"/>
    </div>
    
    <!--<Footer/>-->
</template>

<script>

import Nav from "../components/Nav.vue"
//import News from "../components/News.vue"
//import Footer from "../components/Footer.vue"
import Dates from "../components/dates.vue"
import toTop from "../components/toTop.vue"
//import Newsletter from "../components/Newsletter.vue"

export default {
    name: 'Home',
    components: {
        Nav,
        //News,
        //Footer,
        Dates,
        toTop,
        //Newsletter
    },
    methods: {
        scrollToElement(element) {
            document.getElementById(element).scrollIntoView({behavior: "smooth"});
        }
    }
}
</script>

<style scoped>
h1 {
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    color:#5482B6;
}

.jumbotron .container-fluid {
    position: absolute;
    background-image: url("../assets/hero-bg.jpg");
    height: 100vh;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    top: 0;
}

.termin-btn {
    position: absolute;
    top: 90vh;
    left: 0;
    right: 0;
    z-index: 1;
}

.btn {
    border-radius: 0% !important;
    width: 175px;
    height: 50px;
    border-width: 5px;
    border-color: white;
    color: white;

    font-family: 'Oswald', sans-serif;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
}

.btn:hover {
    background-color: #5482B6;
}

.termine {
    margin-top: 100vh;
}

@media only screen and (max-width: 691px) {
    .btn {
        background-color: #5482B6;
    }
}
</style>