<template>
<div class="sponsor-wrapper">
    <div class="sponsor-row">
        <img src="../assets/microsoft.png" alt="">
        <img src="../assets/github.png" alt="">
        <img src="../assets/google.png" alt="">
    </div>
    <div class="sponsor-row">
        <img src="" alt="">
        <img src="../assets/bmw.png" alt="">
        <img src="../assets/hcg.png" alt="">
    </div>
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
    max-height: 100px;
}

@media only screen and (max-width: 691px) {
    .sponsor-row {
        flex-direction: column;
    }
}
</style>