<template>

    <Nav/>
    <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid"></div>
    </div>

    <div class="termin-btn center">
        <a role="button" class="btn btn-primary" href="#termine">Termine</a>
    </div>

    <div class="container-fluid svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L40,144C80,128,160,96,240,69.3C320,43,400,21,480,42.7C560,64,640,128,720,149.3C800,171,880,149,960,122.7C1040,96,1120,64,1200,48C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </div>
    <div class="container termine">
        <h1 id="termine">Aufführungen</h1>
        <div class="container termine-cards center"> 
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-text center mt-1">Aufführung 1</h5>
                            <h4 class="card-title center my-5">28.03.2023</h4>
                            <h5 class="card-text center my-1">20:00</h5>
                            <h5 class="card-text  center mb-1"><a href="https://goo.gl/maps/YcvvHn1efG4maWy98"><i class="fa fa-map-marker mx-1" aria-hidden="true"></i>Theaterzelt Landshut</a></h5>
                            <div class="center mt-4">
                                <button class="btn btn-primary"><i class="fa fa-ticket" aria-hidden="true"></i> Tickets</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-text center mt-1">Aufführung 2</h5>
                            <h4 class="card-title center my-5">29.03.2023</h4>
                            <h5 class="card-text center my-1">20:00</h5>
                            <h5 class="card-text  center mb-1"><a href="https://goo.gl/maps/YcvvHn1efG4maWy98"><i class="fa fa-map-marker mx-1" aria-hidden="true"></i>Theaterzelt Landshut</a></h5>
                            <div class="center mt-4">
                                <button class="btn btn-primary"><i class="fa fa-ticket" aria-hidden="true"></i> Tickets</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-text center mt-1">Aufführung 3</h5>
                            <h4 class="card-title center my-5">30.03.2023</h4>
                            <h5 class="card-text center my-1">20:00</h5>
                            <h5 class="card-text center mb-1"><a href="https://goo.gl/maps/YcvvHn1efG4maWy98"><i class="fa fa-map-marker mx-1" aria-hidden="true"></i>Theaterzelt Landshut</a></h5>
                            <div class="center mt-4">
                                <button class="btn btn-primary"><i class="fa fa-ticket" aria-hidden="true"></i> Tickets</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

export default {
    name: 'Home',
    components: {
        Nav,
        News,
        Footer
    }
}
</script>