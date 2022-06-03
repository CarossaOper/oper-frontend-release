<template>
    <div>
        <Nav/>
        <div class="container">
            <router-link to="/" exact><svg class="w-6 h-6 pt-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path></svg></router-link>
            <div class="container blog">
                <div class="divider"><h1 class="py-2">Über uns</h1></div>
                <img src="../assets/about.jpg" alt="Über Uns">
                <p class="text py-5">
                    17 Monate. 73 Wochen. Genauer gesagt 511 Tage widmet sich das P-Seminar „Amateur meets Profi"
                    des Hans-Carossa-Gymnasiums einem einzigartigen Projekt:
                    Die Carossa-Oper.
                    Wir nehmen Sie mit auf eine Reise, die uns durch die großartige Welt des Musiktheaters führt. Ein
                    Event, das nur durch das Mitwirken der gesamten Carossa-Familie - seien es ehemalige und aktuelle
                    Schüler, Lehrer oder Eltern - ermöglicht wird. Mit dieser Unterstützung im Rücken (und ehrlich gesagt
                    auch ein bisschen jugendlichem Leichtsinn) stellen wir uns dieser Mammutaufgabe.
                    Es handelt sich hierbei nicht nur um ein außergewöhnliches Projekt, sondern auch um eine
                    Herzensangelegenheit. Wir, die Q11des HCGs, waren schon ab Tag 1 von dieser Idee restlos
                    begeistert - Hoffentlich sind Sie es nun auch!
                </p>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>

import Nav from "../components/Nav.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "About",
    components: {
        Nav,
        Footer
    }
}
</script>

<style scoped>

Nav {
    background-image: url("../assets/hero-bg.jpg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
}

h1 {
    font-family: 'Oswald', sans-serif;
    color: #5482B6;
    text-transform: uppercase;
}

a {
    font-family: 'Shippori Antique B1', sans-serif;
    text-decoration: none;
    color: black;
}

svg {
    color: #5482B6;
    height: 75px;
}

img {
    display: inherit;
    width: 90%;
    height: auto;
    margin: auto;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

</style>