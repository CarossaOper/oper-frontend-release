<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand hcgred bg-light ms-4" href="#">
                Die Carossa Oper
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars fa-2x" aria-hidden="true" style="color: white;"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            News
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#termine">
                            Karten
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="">
                            Über uns
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
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style scoped>

.navbar {
    font-family: 'Oswald', sans-serif;
    background-color: black;
}

.navbar .container-fluid {
    margin-top: 1vh;
}

nav div a.hcgred {
    color: #960B0B !important;
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
    border-bottom: 2px solid #960B0B;
    transition: 0.4s;
}

nav .navbar-nav li a:hover:after {
    width: 100%;
}

</style>