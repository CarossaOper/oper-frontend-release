<template>
    <div class="termin">
        <div class="termin-content">
            <div class="date">
                <h4 class="center">SO</h4>
                <h2 class="center">19</h2>
                <h4 class="center">FEB</h4>
            </div>
            <div class="info">
                <div class="info-line">
                    <span class="br"><i class="fa-solid fa-location-dot"></i>Theaterzelt Landshut</span>
                    <span><i class="fa-solid fa-clock"></i>19:00</span>
                </div>
                <div class="main">
                    <div class="text-wrapper">
                        <h2>Die Göttin wird modern</h2>
                        <p class="description">Von Burkhard Lutz & Bernhard Werthmann</p>
                    </div>
                    <a class="tickets btn">
                        <span><i class="fa-solid fa-ticket"></i> Karten kaufen</span>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>

.br {
    border-right: 1px solid #5F5F5F;   
}

.termin-content {
    background: #F0F0F0;
    display: flex;
    max-width: 100%;
    overflow:hidden;
}

.date {
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 100px;
    position: relative;

    border-right: 1px solid #5F5F5F;
}

.date h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    color: #5482B6;
}

.date h4 {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
}

.info {
    margin: 30px 30px 30px 0;
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;

    /*justify-content: space-around;*/
}

.main h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
    color: #5482B6;
    text-transform: uppercase;
    margin-bottom: 0;
}

.main {
    display: flex;
    flex-direction: row;
    width: 100%;

    margin-top: 12px;
}

.tickets {
    border-radius: 0% !important;
    position: relative;

    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;

    width: 200px;
    height: 50px;

    text-decoration: none;
    color: #5482B6;

    border-color: #5482B6;
    border-width: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
}

.info-line {
    display: flex;
    flex-direction: row;
    width: 100%;
    color: #5F5F5F;
}

.info-line span {
    padding-right: 10px;
    margin-right: 10px;
}

.info-line i {
    margin-right: 5px;
}

.description {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;

    margin-top: 15px;
}

@media only screen and (max-width: 767px) {
    .container {
        width: 100% !important;
        padding: 0;
    }

    .date {
        margin: 10px;
        padding: 10px;
        width: 50px;
    }
    
    .info {
        margin: 20px 10px 20px 0;
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 100%;

        margin-top: 1px;
    }

    .info-line {
        flex-direction: row;
    }

    .tickets {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0;
        width: 100%;
    }

    .text-wrapper {
        margin: 10px 10px 10px 0;
    }

    .description {
        margin-top: 10px;
    }
}

</style>

<script>
export default {
    name: "Dates",
    props: {
        Presentation: {
            date: Date,
            time: String,
            location: String,
            sold: Boolean,
        }
    },
    methods: {
        weekday(date) {
            const days = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]
            return days[date.getDay()]
        },
        monthString(date) {
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
            return months[date.getMonth()];
        },
        daydate(date) {
            return date.getUTCDate()
        }
    }
}
</script>