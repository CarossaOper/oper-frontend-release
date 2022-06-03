<template>
<div class="sponsor-wrapper">
    <div class="sponsor-row">
        <img src="../assets/sponsors/lionsclub.jpg" alt="">
        <img src="../assets/sponsors/kueffner_logo.jpg" alt="">
    </div>
    <!--<div class="sponsor-row"></div>-->
</div>
</template>

<script>
export default {
    name: 'Sponsors',
}
</script>

<style scoped>
.sponsor-wrapper {
    display: flex;
    flex-direction: column;
}

.sponsor-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px;
}

img {
    max-width: 100%;
    max-height: 100%;
}

@media only screen and (max-width: 691px) {
    .sponsor-row {
        flex-direction: column;
    }
}
</style>