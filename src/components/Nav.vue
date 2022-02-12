<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-end">

            <button id="toggler" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars fa-2x" aria-hidden="true" style="color: white;"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            
                <div class="offcanvas-header">
                    <button class="navbar-toggler me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-solid fa-xmark fa-2x" aria-hidden="true" style="color: white;"></span>
                    </button>
                </div>

                <div class="offcanvas-body">
                    <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                Über uns
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="javascript:;" v-on:click="scrollToElement('termine')">
                                Termine
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="">
                                News
                            </a>
                        </li>
                            
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                Partner
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    methods: {
        scrollToElement(element) {
            document.getElementById(element).scrollIntoView({behavior: "smooth"});
            //document.getElementById("toggler").click();
        }
    }
}
</script>

<style scoped>

.navbar {
    text-transform: uppercase;
    font-weight: 100;
    font-family: 'Oswald', sans-serif;
}

.navbar .container-fluid {
    margin-top: 1vh;
}

nav div a.hcgred {
    color: #5482B6 !important;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
    font-size: 2rem;
}

nav .navbar-nav li a {
    font-size: 1.5em;
    position: relative;
    color: #FFFFFF !important;
}

nav .navbar-nav li a:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 2px solid #5482B6;
    transition: 0.4s;
}

nav .navbar-nav li a:hover:after {
    width: 100%;
}

/*-------Mobile navbar--------*/
@media only screen and (max-width: 991.5px) {
    .offcanvas {
        background-color: rgb(0, 0, 0) !important;
    }
}
</style>