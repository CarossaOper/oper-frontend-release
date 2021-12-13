<template>
    <nav :class="{trans: transparent}" class="navbar sticky-top navbar-expand-lg">
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
    name: "Nav",
    data() {
        return {
            transparent: false,
            lastscrollpos: 0,
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
            let pos = window.scrollY;
            if (pos - this.lastscrollpos > 0) {
                console.log("Transparent");
                this.transparent = true;
            } else {
                console.log("Not")
                this.transparent = false;
            }
            this.lastscrollpos = pos;
        }
    }
}
</script>

<style scoped>

.navbar {
    transition: opacity 1s ease-in-out;
    font-family: 'Oswald', sans-serif;
    background: rgba(0, 0, 0, 1.0);
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

.trans {
    opacity: 0.0;
}

</style>