<template>

    <Nav/>
    <toTop/>

    <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid"></div>
    </div>

    <div class="termin-btn center">
        <a role="button" class="btn btn-primary" href="#termine">Termine</a>
    </div>

    <div class="container termine">
        <Dates/>
    </div>

    <div class="container">
        <div class="neues">
            <h1 id="neues">News</h1>
            <News/>
        </div>
    </div>
        

    <div class="container-fluid newsletter py-5">
        <div class="container">
            <Newsletter/>
        </div>
    </div>

    <Footer/>
</template>

<script>

import Nav from "../components/Nav.vue"
import News from "../components/News.vue"
import Footer from "../components/Footer.vue"
import Dates from "../components/show-dates.vue"
import toTop from "../components/toTop.vue"
import Newsletter from "../components/Newsletter.vue"

export default {
    name: 'Home',
    components: {
        Nav,
        News,
        Footer,
        Dates,
        toTop,
        Newsletter
    }, 
}
</script>