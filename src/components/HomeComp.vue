<template>
    <v-container
    class="container white--text d-flex flex-column align-center justify-center mt-n5" 
    tag="div" 
    fluid="false">
        <div class="lineVertical"></div>
        <div class="my-4 d-flex flex-column align-center justify-center">
            <span class="moto mb-n6 font-weight-light">BREWING BEST COFFEE IN TOWN</span>
            <h1 class="titleContent font-weight-medium">Anak Panah</h1>
            <h1 class="titleContent font-weight-medium mt-n12">Kopi</h1>    
        </div>
        <div class="lineVertical"></div>
    </v-container>
</template>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/dm-serif-display');
    .container {
        height: 100vh;
    }
    .lineVertical {
        height: 240px;
        border: 1px solid var(--v-secondary-base);
        width: 1px;
    }
    .titleContent {
        font-family: 'DM Serif Display';
        font-size: 100px;
    }
    .moto {
        font-size: 26px;
        color: var(--v-secondary-base);
    }
</style>