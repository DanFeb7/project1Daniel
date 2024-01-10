<template>
    <v-container class="container white--text d-flex flex-column align-center justify-center py-7" tag="div" fluid=false>
        <span class="menuComment font-weight-light">INDULGENCE</span>
        <h2 class="menuTitle font-weight-regular mt-n2">Menu</h2>
        <div v-for="(category, categoryName) in menu" class="menuWrap mt-8 text-center" :key="categoryName">
            <span v-if="categoryName === 'coffee'" class="menuRecTitle font-weight-light">RECOMENDATION COFFEE</span>
            <span v-else-if="categoryName === 'food'" class="menuRecTitle font-weight-light">RECOMENDATION FOOD</span>
            <div class="menuList d-flex mt-6">
                <div v-for="(menu, index) in category" class="text-center mb-14" :key="index" style="width: 40%;">
                    <h3 class="menuName font-weight-medium mb-2">{{ menu.name }}</h3>
                    <p class="font-weight-thin">{{ menu.desc }}</p>
                    <p class="menuPrice mt-n1 font-weight-medium">{{ menu.price }}</p>
                </div>
            </div>
        </div>
        <v-btn class="rounded-0 pa-5 mt-10" href="https://drive.google.com/file/d/1bR98xU8ePsppCtQFibd7XvP6NFqrPx7W/view" target="blank" outlined color="secondary">
            <span class="font-weight-light">VIEW FULL MENU</span>
        </v-btn>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                menu: {
                    coffee: [
                        {
                            name: 'Americano',
                            desc: 'a robust and flavorful blend of espresso',
                            price: '23k'
                        },
                        {
                            name: 'Coldbrew Apple Cider',
                            desc: 'a harmonious blend of crisp apple notes and rich coffee undertones',
                            price: '35k'
                        }
                    ],
                    food: [
                        {
                            name: 'Loco Moco',
                            desc: 'Hawaiian rice bowl with a burger patty, fried egg, and savory gravy.',
                            price: '40k'
                        },
                        {
                            name: 'APK Fried Rice',
                            desc: 'APK special signature fried rice',
                            price: '35k'
                        }
                    ]
                }
            }
        },
    }
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/dm-serif-display');
    .container {
        background: url('../assets/menu.jpg') no-repeat center center fixed;
    }
    .menuTitle {
        font-family: 'DM Serif Display', serif;
        font-size: 38px;
    }
    .menuComment {
        font-size: 20px;
        color: var(--v-secondary-base);
    }
    .menuWrap {
        width: 80%;
    }
    .menuList {
        justify-content: space-around;
    }
    .menuRecTitle {
        font-size: 16px;
        color: var(--v-secondary-base);
    }
    .menuName {
        font-size: 22px;
    }
    .menuPrice {
        color: var(--v-secondary-base);
    }
</style>