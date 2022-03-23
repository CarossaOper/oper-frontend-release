<template>
  <div class="mt-3 newsletter-container">
    <div class="pt-5 pb-5 container">
      <h1 class="mb-3 newsletter-heading">Newsletter</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          id="email"
          class="form-control"
          placeholder="E-Mail"
          aria-label="E-Mail"
          aria-describedby="newsletter-enter"
          v-model="mail"
        />
        <button class="btn btn-outline-light enter-button-outline" type="button" id="newsletter-enter" v-on:click="subscribe">
          <span class="btn-text" v-if="sub">Bestellen</span>
          <span v-else>Abbestellen</span>
        </button>
      </div>
      <div class="toggle-button-container">
        <p class="info-text">
          <span v-if="type === 0">Erhalten Sie wichtige Informationen direkt in Ihrem Postfach</span>
          <span v-else-if="type === 1">Wir freuen uns, Sie dabei zu haben! Bitte bestätigen Sie IhreE-Mail.</span>
          <span v-else-if="type === 2">Wir haben Sie aus unserem Newsletter entfernt.</span>
          <span v-else>Ein Fehler ist aufgetreten! Bitte überprüfen Sie Ihre Eingabe oderversuchen Sie es später erneut.</span>
        </p>
        <a class="toggle-button" id="toggle-button" href="javascript:;" v-on:click="sub = !sub">
          <span v-if="sub">Abbestellen &#8594;</span>
          <span v-else>Bestellen &#8594;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  name: "Newsletter",

  data() {
    return {
      sub: true,
      submitted: false,
      mail: "",
      type: 0,
    };
  },

  methods: {
    async subscribe() {
      let endpoint = "/api/newsletter";

      if (this.mail != "") {
        try {
          let res;
          if (this.sub) {
            res = await axios.post(
              endpoint,
              {},
              {
                params: {
                  mail: this.mail,
                },
              }
            );
            this.type = 1;
          } else {
            res = await axios.delete(
              endpoint,
              {},
              {
                params: {
                  mail: this.mail,
                },
              }
            );
            this.type = 2;
          }
          console.log(res);
        } catch (e) {
          this.type = 3;
        }
      } else {
        this.type = 3;
      }
    },
  },
};

</script>

<style scoped>

.newsletter-container {
  background-color: #5482b6;
  font-family: "Oswald", sans-serif;
}

.newsletter-heading {
  color: #ffffff;
}

#newsletter-enter {
  border-radius: 0 !important;
}

.form-control {
  border-radius: 0 !important;
  border-color: #ffffff;
  height: 50px;
}

.enter-button-outline {
  border-width: 3px;
  width: 120px;
}

.info-text {
  color: #ffffff;
  display: inline-block;
}

.toggle-button {
  color: #ffffff;
  float: right;
}

.toggle-button-container {
  width: 100%;
}

.btn-text {
  z-index: 1;
}

.btn:hover {
  color: #fff !important;
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
  background: #000000;
  z-index: -1;
  transition: all 0.40s;
}

.btn:hover:after {
  width: 100%;
}

@media only screen and (max-width: 767px) {
  .info-text {
    display: block;
  }

  .toggle-button {
    float: left;
  }
}
</style>