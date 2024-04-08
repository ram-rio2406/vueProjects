import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

const localeMessages = {
    en: {
        message: {
            hello: 'hello World'
        }
    },
    es: {
        message: {
            hello: 'hallo worldeo'
        }
    }
};

const i18n = createI18n({
    locale: 'es', // set locale
    legacy: false,
    messages:  localeMessages, // set locale messages
  });
  
const app = createApp(App);
app.use(i18n);
app.mount('#app');