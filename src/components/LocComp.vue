<template>
    <v-container 
    class="container white--text d-flex flex-column align-center justify-center py-7" 
    tag="div" 
    fluid="false"
    color="primary">
        <h2 class="font-weight-light">FIND US HERE</h2>
        <div v-for="(city, cityName) in location"  class="loc-wrap mt-4 mb-10" :key="cityName">
            <div class="d-flex flex-column justify-center align-center">
                <h3 class="locTitle font-weight-medium">{{ cityName }}</h3>
                <v-divider class="divider"></v-divider>
            </div>
            <div class="d-flex justify-space-around mt-3" style="gap: 10px;">
                <div v-for="(location, index) in city" :key="index">
                    <v-card class="locationCard rounded-0 pa-4">
                        <v-img :src="require('@/assets/'+location.image)" width=448px class="rounded-0"></v-img>
                        <v-card-title class="cardTitle pa-0 pt-2 white--text font-weight-regular">{{ location.name }}</v-card-title>
                        <v-card-text class="pa-0"><p class="cardText font-weight-light">{{ location.street }}</p></v-card-text>
                        <v-card-action>
                            <v-btn :href="location.maps" target="blank" outlined color="secondary" class="rounded-0">
                                <v-icon size=20px>fa-location-dot</v-icon>
                                <span class="font-weight-light" style="text-transform: lowercase;">&nbsp; see maps</span>
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </div>
            </div>
        </div>
    </v-container>  
</template>
<script>
export default {
    data() {
        return {
            location: {
                Semarang: [
                    {
                        name: 'Anak Panah Kopi Tembalang',
                        street: 'Jl. Banjarsari Selatan No.48',
                        image: 'apk_banjarsari.jpg',
                        maps: 'https://maps.app.goo.gl/KYdGNVkQXU6wJJZf8'
                    },
                    {
                        name: 'Anak Panah Kopi',
                        street: 'Jl. MT. Haryono No.681',
                        image: 'apk_haryono.jpg',
                        maps: 'https://maps.app.goo.gl/rWaaQ841rTzvDpC48'
                    },
                    {
                        name: 'Anak Panah Kopi Bizz',
                        street: 'Jl. Hasanudin No.21',
                        image: 'apk_hasanudin.jpg',
                        maps: 'https://maps.app.goo.gl/qg4M4LXhbi4ve1xj8'
                    }
                ],
                Solo: [
                    {
                        name: 'Anak Panah Kopi Bizz Keprabon',
                        street: 'Jl. Ronggowarsito No.57',
                        image: 'apk_ronggo.jpg',
                        maps: 'https://maps.app.goo.gl/3f4QSGYpu4MJ42EYA'
                    }
                ],
                Yogyakarta: [
                    {
                        name: 'Anak Panah Kopi Bizz HOS',
                        street: 'Jl. HOS Cokroaminoto No.185',
                        image: 'apk_hos.jpg',
                        maps: 'https://maps.app.goo.gl/R6uXQTDDcmS8B3VT6'
                    }
                ]
            }
        }
    },
};
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/dm-serif-display');
    .container {
        background-color: var(--v-primary-base);
        height: auto;
    }
    h2 {
        font-size: 26px;
        color: var(--v-secondary-base);
    }
    .locTitle {
        font-size: 24px;
        font-family: 'DM Serif Display';
    }
    .loc-wrap {
        width: 80%;
    }
    .divider {
        width: 320px;
        background-color: var(--v-secondary-base);
    }
    .locationCard {
        background-color: var(--v-primary-lighten1);
    }
    .cardTitle {
        font-size: 20px;
    }
    .cardText {
        color: var(--v-secondary-base);
    }
</style> 