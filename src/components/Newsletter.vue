<template>
    <h1 class="mb-5 newsletter-heading">Newsletter</h1>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="E-Mail" aria-label="E-Mail" aria-describedby="newsletter-enter" v-model="mail">
        <button class="btn btn-outline-light" type="button" id="newsletter-enter" v-on:click="subscribe">
            <span v-if="sub">Bestellen</span>
            <span v-else>Abbestellen</span>
        </button>
    </div>
    <p class="info-text">
        <span v-if="type === 0">Erhalten Sie wichtige Informationen direkt in Ihrem Postfach</span>
        <span v-else-if="type === 1">Wir freuen uns, Sie dabei zu haben! Bitte bestätigen Sie Ihre E-Mail.</span>
        <span v-else>Ein Fehler ist aufgetreten! Bitte versuchen Sie es später erneut.</span>
    </p>
    <a href="javascript:;" v-on:click="sub=!sub">
        <span v-if="sub">Abbestellen &#8594;</span>
        <span v-else>Bestellen &#8594;</span>
    </a>
</template>

<script>
const axios = require("axios").default

export default {
    name: "Newsletter",

    data() {
        return {
            sub: true,
            submitted: false,
            mail: "",
            type: 0,
        }
    },

    methods: {
        async subscribe() {
            let endpoint = "/api/newsletter"
            let body = { mail: this.mail, }

            try {
                let res;
                if (this.sub) {
                    res = await axios.post(endpoint, body)
                } else {
                    res = await axios.delete(endpoint, body)
                }
                console.log(res)
            } catch (e) {
                this.type = 2
            } 
        }
    }
}
</script>