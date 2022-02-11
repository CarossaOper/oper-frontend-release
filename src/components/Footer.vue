<template>

<footer class="footer-container container-flex">
    <div class="container pt-3 pb-3">
        <h1 class="footer-title pt-3">Carossa Oper</h1>
        <div class="footer-content pt-3 row">
            <a class="col-5 center" href="#">Datenschutz</a>
            <a class="col-1 center social-icon" href="mailto:hcgoper@carossa-gymnasium.de"><i class="fa fa-envelope"></i></a>
            <a class="col-1 center social-icon" href="#"><i class="fa-brands fa-instagram"></i></a> 
            <a class="col-5 center" href="#">Impressum</a>        
        </div>
            <div class="center">
        <span class="copyright-text pt-5 pb-3" id="Copyright">Copyright &copy; 2021 P-Seminar Oper Hans-Carossa-Gymnasium</span>
      </div>   
    </div>
</footer>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

.footer-container {
    color: #5482B6;
    background-color: #F0F0F0;
    height: 100%;
}

.footer-title {
    text-align: center;
    font-family: "Oswald",sans-serif;
    font-weight: bold;
}

.social-icon {
    font-size: 48px;
}

.col {
    width: 100px;
}

.footer-content > a {
    color: #5482B6;
}

@media only screen and (max-width: 767px) {
   .social-icon {
       font-size: 30px;
   }
   .copyright-text {
       font-size: 15px;
   }
}
</style>