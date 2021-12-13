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
            
            <!--Vue js dynamic section-->
            <News/>
        </div>
    </div>
        

    <div class="container-fluid newsletter py-5">
        <div class="container">
            <h1 class="mb-5 newsletter-heading">Newsletter</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="E-Mail" aria-label="E-Mail" aria-describedby="newsletter-enter">
                <button class="btn btn-outline-light" type="button" id="newsletter-enter"><!--<i class="fa fa-arrow-right"></i>-->Bestellen</button>
            </div>
            <p class="normal-text">Erhalten Sie wichtige Informationen direkt in Ihrem Postfach</p>
            <a href="#">Abbstellen &#8594;</a>
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

export default {
    name: 'Home',
    components: {
        Nav,
        News,
        Footer,
        Dates,
        toTop
    }, 
}
</script>