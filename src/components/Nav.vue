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
                            <router-link class="nav-link" to="/ueber" exact>
                                Über uns
                            </router-link>
                        </li>

                        <li class="nav-item px-2">
                            <router-link class="nav-link" to="/" v-on:click="scrollToElement('termine')">
                                Termine
                            </router-link>
                        </li>

                        <li class="nav-item px-2">
                            <router-link to="/blog" class="nav-link" exact>
                                News
                            </router-link>
                        </li>
                            
                        <li class="nav-item px-2">
                            <router-link class="nav-link" to="/" v-on:click="scrollToElement('partner')">
                                Sponsoren
                            </router-link>
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
    font-weight: 500;
    font-family: var(--title-font-family);
}

nav .navbar-nav li a {
    font-size: 1.5em;
    position: relative;
    color: #FFFFFF !important;
    transition: text-shadow 0.3s ease;
}

nav .navbar-nav li a:hover {
    text-shadow: 0px 0px 10px white;
    transition: text-shadow 0.3s ease;
}


/*-------Mobile navbar--------*/
@media only screen and (max-width: 991.5px) {
    .offcanvas {
        background-color: rgb(0, 0, 0) !important;
    }
}
</style>