import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: {
        options: { customProperties: true },
        themes: {
            light: {
                primary: '#0C090A',
                secondary: '#d4af37',
                accent: '#FFFFFF',
                error: '#b71c1c',
                warning: '#ff5722',
                info: '#2196f3',
                success: '#4caf50'
            },
            dark: {
                primary: '#0C090A',
                secondary: '#d4af37',
                accent: '#FFFFFF',
                error: '#b71c1c',
                warning: '#ff5722',
                info: '#2196f3',
                success: '#4caf50'
            }
        }
    },
});
