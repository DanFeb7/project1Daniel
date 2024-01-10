<template>
  <v-app>
    <v-app-bar class="navbar {'onScroll': !view.topOfPage} d-flex align-center justify-center" app :color="view.navBackColor" :elevation="view.elevateVar">
        <a href=""><span class="menu mx-16 font-weight-light">HOME</span></a>
        <a href="#location"><span class="menu mx-16 font-weight-light">LOCATION</span></a>
        <v-img src="./assets/apk_logo.png" contain height=50px></v-img>
        <a href="#menu"><span class="menu mx-16 font-weight-light">MENU</span></a>
        <a href="#contact"><span class="menu mx-16 font-weight-light">CONTACT</span></a>
    </v-app-bar>
    <v-main>
      <HomeComp/> 
      <LocComp id="location"/> 
      <MenuComp id="menu"/>
    </v-main>
    <v-footer class="pt-8 pb-1" app absolute color="primary" padless id="contact">
      <v-container class="d-flex justify-start align-center" style="width: 100%; gap: 100px;">
        <div style="width: 700px;">
          <v-img src="./assets/footer_img.jpg" height=700px contain></v-img>
        </div>
        <div>
          <span class="footerComment">CONNECT WITH US</span>
          <h2 class="footerTitle font-weight-medium mt-n2 mb-3">Get In Touch</h2>
          <span class="footerText font-weight-light">We value your feedback! Share your experience with Anak Panah Kopi and help us grow. <br> Your insights are arrows that guide us toward a better coffee journey.</span> <br>
          <p class="footerText font-weight-light mt-4">Feel free to drop us a message and let's brew success together!</p>
          <v-form ref="form">
            <input class="inputForms pa-2 mb-3" type="text" placeholder="Name"> <br>
            <input class="inputForms pa-2 mb-3" type="email" placeholder="Email"> <br>
            <textarea class="inputForms pa-2 mb-4" style="height: 120px; max-height: 120px;" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <v-btn class="rounded-0" outlined color="secondary" width="180px">
              <span class="textBtn font-weight-light">SEND</span>
            </v-btn>
          </v-form>
        </div>
    </v-container>
    <v-container class="d-flex justify-space-between pa-1 mt-6" style="width: 60%;">
      <div class="d-flex align-center justify-start" style="width: 50%; gap: 20px;">
        <div style="width: 60px;">
          <v-img src="./assets/apk_logo.png" contain height=40px></v-img>
        </div>
        <span class="footerLogoText">Anak Panah Kopi</span>
      </div>
      <div class="d-flex align-center justify-end" style="width: 50%; gap: 28px;">
        <a href="http://instagram.com/anakpanahkopi" target="_blank" rel="noopener noreferrer">
          <v-icon :color="isHover.instagram ? 'secondary' : 'accent'" size=28px @mouseover="isHover.instagram=true" @mouseleave="isHover.instagram=false">
            fab fa-instagram 
          </v-icon>
        </a>
        <a href="wa.me/628987588850" target="_blank" rel="noopener noreferrer">
          <v-icon :color="isHover.wa ? 'secondary' : 'accent'" size=28px @mouseover="isHover.wa=true" @mouseleave="isHover.wa=false">
            fab fa-whatsapp
          </v-icon>
        </a>
        <a href="https://linktr.ee/AnakPanahKopi" target="_blank" rel="noopener noreferrer">
          <v-icon :color="isHover.link ? 'secondary' : 'accent'" size=26px @mouseover="isHover.link=true" @mouseleave="isHover.link=false">
            fa-link 
          </v-icon>
        </a>
      </div>
    </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import HomeComp from './components/HomeComp';
import LocComp from './components/LocComp';
import MenuComp from './components/MenuComp';

export default {
  name: 'App',

  components: {
    HomeComp,
    LocComp,
    MenuComp
  },

  data: () => ({
    isHover: {
      instagram: false,
      wa: false,
      link: false,
    },
    view: {
      topOfPage: true,
      navBackColor: 'transparent',
      elevateVar: "0",
    },
  }),

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollPosition = window.pageYOffset || window.scrollY;
      if (scrollPosition > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
        this.view.navBackColor = 'primary';
        this.elevateVar = "4";
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
        this.view.navBackColor = 'transparent';
        this.elevateVar = "0";
      }
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.cdnfonts.com/css/dm-serif-display');
  @import url('https://fonts.cdnfonts.com/css/montserrat');
  * {
    font-family: 'Montserrat';
  }
  .v-application {
    background: url('./assets/coffeBrew.jpg') no-repeat center center fixed !important;
    background-size: 100vh;
  }
  .menu {
    color: var(--v-accent-base);
  }

  .menu:hover {
    color: var(--v-secondary-base);
  }

  .navbar {
    gap: 14px;
  }
  .footerComment {
    font-size: 18px;
    color: var(--v-secondary-base);
  }
  .footerTitle {
    font-family: 'DM Serif Display';
    font-size: 40px;
    color: var(--v-accent-base);
  }
  .footerText {
    font-size: 16px;
    color: var(--v-accent-darken1);
  }
  .inputForms {
    background-color: var(--v-primary-lighten1);
    width: 100%;
    height: 40px;
    color: var(--v-accent-darken2);
    border: none;
  }
  .textBtn {
    color: var(--v-accent-base);
  }
  .footerLogoText {
    color: var(--v-accent-base);
  }
</style>