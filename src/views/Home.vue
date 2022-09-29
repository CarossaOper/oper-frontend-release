<template>
    <Nav/>
    <toTop/>

    <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid"></div>
        <h1 class="title">Die Göttin wird modern</h1>
    </div>

    <div class="input-group termin-btn center">
        <button class="btn btn-outline-light enter-button-outline" type="button" id="newsletter-enter" v-on:click="scrollToElement('termine')">
          <span class="btn-text">Mehr</span>
        </button>
    </div>

    <div class="container termine section" id="termine">
        <div class="divider"><h1>Termine</h1></div>
        <Dates date="Date.now()" time="19:00" location="Theaterzelt Landshut" sold="false"/>
    </div>

    <div class="container news section" id="news">
        <div class="divider"><h1>News</h1></div>
        <News/>
    </div>

    <div class="container sponsors section" id="partner">
        <div class="divider"><h1>Sponsoren</h1></div>
        <Sponsors/>
    </div>

    <Newsletter/>

    <Footer/>
</template>

<script>

import Nav from "../components/Nav.vue"
import News from "../components/News.vue"
import Footer from "../components/Footer.vue"
import Dates from "../components/dates.vue"
import toTop from "../components/toTop.vue"
import Newsletter from "../components/Newsletter.vue"
import Sponsors from "../components/Sponsors.vue"

export default {
    name: 'Home',
    components: {
        Nav,
        News,
        Footer,
        Dates,
        toTop,
        Newsletter,
        Sponsors
    },
    methods: {
        scrollToElement(element) {
            document.getElementById(element).scrollIntoView({behavior: "smooth"});
        }
    }
}
history.pushState("", document.title, window.location.pathname + window.location.search);
</script>

<style scoped>
h1 {

    font-family: var(--title-font-family);
    font-weight: 700;
    color: var(--accent-color)
}

.section {
    margin-top: 10vh;
}

.jumbotron .container-fluid {
    position: absolute;
    background-image: url("../assets/hero-bg.jpeg");
    height: 100vh;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    top: 0;
    filter: contrast(80%*100vh);
}

.title {
    position: absolute;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: none;
    text-align: center;
    margin-top: 18vh;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 9vw;
    text-shadow: 0px 0px 30px rgb(84, 130, 182);
}

.termin-btn {
    position: absolute;
    top: 85vh;
    left: 0;
    right: 0;
    z-index: 1;
}

.btn {
    border-radius: 0% !important;
    width: 175px;
    height: 50px;
    border-width: 3px;
    border-color: white;
    color: white;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
}

.btn:hover {
  color: black !important;
  background-color: transparent !important;
  text-decoration: none;
}

.btn:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ffffff;
  z-index: -1;
  transition: all 0.40s;
}

.btn:hover:after {
  width: 100%;
}

.termine {
    margin-top: 100vh;
}

@media only screen and (max-width: 691px) {
    .enter-button-outline {
        box-shadow: 1px -1px 93px 57px rgba(0,0,0,0.90);
        -webkit-box-shadow: 1px -1px 93px 57px rgba(0,0,0,0.90);
        -moz-box-shadow: 1px -1px 93px 57px rgba(0,0,0,0.90);
        background: rgba(0,0,0,0.90);
    }
}

</style>